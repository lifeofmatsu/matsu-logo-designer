const { SVGGenerator } = require('./svgGenerator');
const { Circle, Triangle, Square } = require('./shapes');

describe('SVGGenerator tests', () => {
    //tests text insertion for circle
    describe('Circle', () => {
        test('generates SVG with text', () => {
            const circle = new Circle('red');
            const svgGenerator = new SVGGenerator(circle, "ABC", "blue");
    
            const expectedSVG = '<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">'
                + '<circle cx="150" cy="100" r="80" fill="red" />'
                + '<text x="150" y="150" fill="blue" text-anchor="middle" font-size="30">ABC</text>'
                + '</svg>';
            
            expect(svgGenerator.generateSVG()).toBe(expectedSVG);
        });
    });

    //tests text insertion for triangle
    describe('Triangle', () => {
        test('generates SVG with text', () => {
            const triangle = new Triangle('red');
            const svgGenerator = new SVGGenerator(triangle, "ABC", "blue");
    
            const expectedSVG = '<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">'
                + '<circle cx="150" cy="100" r="80" fill="red" />'
                + '<text x="150" y="150" fill="blue" text-anchor="middle" font-size="30">ABC</text>'
                + '</svg>';
            
            expect(svgGenerator.generateSVG()).toBe(expectedSVG);
        });
    });

    //tests text insertion for square
    describe('Square', () => {
        test('generates SVG with text', () => {
            const square = new Square('red');
            const svgGenerator = new SVGGenerator(square, "ABC", "blue");
    
            const expectedSVG = '<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">'
                + '<circle cx="150" cy="100" r="80" fill="red" />'
                + '<text x="150" y="150" fill="blue" text-anchor="middle" font-size="30">ABC</text>'
                + '</svg>';
            
            expect(svgGenerator.generateSVG()).toBe(expectedSVG);
        });
    });
});
