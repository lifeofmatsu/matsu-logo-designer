const inquirer = require('inquirer');

const { Circle, Triangle, Square } = require('./lib/shapes');
const { SVGGenerator } = require('./lib/svgGenerator');

//user prompts for SVG specifications
const userPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'text',
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
Function called when user does not enter a file name, or if the file name is blank (whitespace).
Each generated SVG file is named in ascending order - 'logo1.svg', 'logo2.svg', etc.
*/
const getNextFileName = async () => {
    try {
        const files = await readdir(examplesDir);
        const logoNumbers = files
            .filter(file => file.startsWith('logo') && file.endsWith('.svg')) //filters filenames that start w/ 'logo' and end w/ '.svg'
            .map(file => parseInt(file.match(/logo(\d+)\.svg/)?.[1] || 0)) //looks for a number in each filename and extracts it for use in sorting
            .sort((a, b) => a - b); //sorts numbers in ascending order

        const nextNumber = logoNumbers.length > 0 ? logoNumbers[logoNumbers.length - 1] + 1 : 1;
        return path.join(examplesDir, `logo${nextNumber}.svg`);
    } catch (err) {
        console.error(err);
        return path.join(examplesDir, 'logo1.svg'); //in case of an error, defaults to 'logo1.svg' in the examples folder
    }
};

const main = async () => {
    try {
        const input = await userPrompt();
        //construct shape object from user input
        let shape;
        switch (input.shape) {
            case 'Circle':
                shape = new Circle(input.shapeColor);
                break;
            case 'Triangle':
                shape = new Triangle(input.shapeColor);
                break;
            case 'Square':
                shape = new Square(input.shapeColor);
                break;
        }

        const svgGenerator = new SVGGenerator(shape, input.text, input.textColor);
        
        let fileName = input.fileName.trim(); //check if user provided a file name or if their file name was only white space

        if (!fileName) {
            fileName = await getNextFileName();
        } else {
            //ensures the file name is appended with '.svg' file extension
            if (!fileName.endsWith('.svg')) {
                fileName += '.svg';
            }
            fileName = path.join(examplesDir, fileName);
        }

        await writeFile(fileName, svgGenerator.generateSVG());
        console.log(`Logo generated successfully and written to ${fileName}`);
    } catch (err) {
        console.error(err);
    }
};

main(); //initialize