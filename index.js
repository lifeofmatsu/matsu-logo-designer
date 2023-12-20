//import packages
const inquirer = require('inquirer');
const { writeFile, readdir } = require('fs').promises;
const path = require('path');

//import classes
const { Circle, Triangle, Square } = require('./develop/lib/shapes');
const { SVGGenerator } = require('./develop/lib/svgGenerator');

//global concatenation of current dir path w/ svg-files dir
const svgFileDir = path.join('./develop/assets', 'svg-files');

//user prompts for SVG specifications
const userPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'displayText',
            message: 'Enter up to three characters for the logo:'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter a text color (keyword or hex):'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['Circle', 'Triangle', 'Square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter a color for the shape (keyword or hex):'
        },
        {
            type: 'input',
            name: 'fileName',
            message: 'Enter a file name for your logo:'
        }
    ]);

};

/*
Function called when user does not enter a file name, or if the filename is blank (whitespace).
Each generated SVG file is named in ascending order - 'logo1.svg', 'logo2.svg', etc.
*/
const setFileName = async () => {
    try {
        const files = await readdir(svgFileDir);
        const logoNumbers = files
            .filter(file => file.startsWith('logo') && file.endsWith('.svg')) //filters filenames that start w/ 'logo' and end w/ '.svg'
            .map(file => parseInt(file.match(/logo(\d+)\.svg/)?.[1] || 0)) //looks for a number in each filename and extracts it for use in sorting
            .sort((a, b) => a - b); //sorts numbers in ascending order

        const nextNumber = logoNumbers.length > 0 ? logoNumbers[logoNumbers.length - 1] + 1 : 1; //determines filename for next SVG file to be created
        return path.join(svgFileDir, `logo${nextNumber}.svg`);
    } catch (err) {
        console.error(err);
        return path.join(svgFileDir, 'logo1.svg'); //in case of an error, defaults to 'logo1.svg' in the examples folder
    }
};

//initialize application
const main = async () => {
    try {
        const input = await userPrompt();
        //construct shape object from user input
        let svgShape;
        switch (input.shape) {
            case 'Circle':
                svgShape = new Circle(input.shapeColor);
                break;
            case 'Triangle':
                svgShape = new Triangle(input.shapeColor);
                break;
            case 'Square':
                svgShape = new Square(input.shapeColor);
                break;
        }
        
        let fileName = input.fileName.trim(); //check if user provided a file name or if their file name was only white space
        if (!fileName) {
            fileName = await setFileName();
        } else {
            //ensures the file name is appended with '.svg' file extension
            if (!fileName.endsWith('.svg')) {
                fileName += '.svg';
            }
            fileName = path.join(svgFileDir, fileName);
        }

        const displayText = JSON.stringify(input.displayText)
            .toUpperCase() //force uppercase due to hardcoded text positions
            .replace(/"/g, ''); //remove quotes
        const svgGenerator = new SVGGenerator(svgShape, displayText, input.textColor);
        
        await writeFile(fileName, svgGenerator.generateSVG());
        console.log(`Logo generated successfully and written to ${fileName}`);
    } catch (err) {
        console.error(err);
    }
};

main(); //init