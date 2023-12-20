const inquirer = require('inquirer');

const { Circle, Triangle, Square } = require('./lib/shapes');
const { SVGGenerator } = require('./lib/svgGenerator');

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

const main = () => {
    userPrompt()
    .then((input) => {
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

        writeFile(input.fileName, svgGenerator.generateSVG())
    })
    .then(() => console.log('Logo generated successfully and written to logo.svg'))
    .catch((e) => console.error(e));
}

main(); //initialize