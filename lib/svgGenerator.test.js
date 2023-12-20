const { SVGGenerator } = require('./svgGenerator');
const { Circle, Triangle, Square } = require('./shapes');

describe('SVGGenerator tests', () => {
    //tests text insertion for circle
    describe('Circle', () => {
        test('generates SVG with text', () => {
            const circle = new Circle('red');
            const svgGenerator = new SVGGenerator(circle, "ABC", "blue");

            const expectedSVG = '<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">'
                + `
            <defs>
                <style type="text/css">
                @import url('https://fonts.googleapis.com/css2?family=Hedvig+Letters+Sans&family=IBM+Plex+Mono:wght@500&display=swap');
                </style>
            </defs>
            `
                + '<circle cx="150" cy="100" r="80" fill="red" />'
                + '<text x="150" y="115" fill="blue" text-anchor="middle" dominant-baseline="middle" font-size="30">ABC</text>'
                + '</svg>';
            
            expect(svgGenerator.generateSVG()).toBe(expectedSVG);
        });
    });

    //tests text insertion for triangle
    describe('Triangle', () => {
        test('generates SVG with text', () => {
            const triangle = new Triangle('green');
            const svgGenerator = new SVGGenerator(triangle, "DEF", "yellow");
    
            const expectedSVG = '<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">'
                + `
            <defs>
                <style type="text/css">
                @import url('https://fonts.googleapis.com/css2?family=Hedvig+Letters+Sans&family=IBM+Plex+Mono:wght@500&display=swap');
                </style>
            </defs>
            `
                + '<polygon points="150, 18 244, 182 56, 182" fill="green" />'
                + '<text x="150" y="115" fill="yellow" text-anchor="middle" dominant-baseline="middle" font-size="30">DEF</text>'
                + '</svg>';
            
            expect(svgGenerator.generateSVG()).toBe(expectedSVG);
        });
    });

    //tests text insertion for square
    describe('Square', () => {
        test('generates SVG with text', () => {
            const square = new Square('blue');
            const svgGenerator = new SVGGenerator(square, "GHI", "red");
    
            const expectedSVG = '<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">'
                + `
            <defs>
                <style type="text/css">
                @import url('https://fonts.googleapis.com/css2?family=Hedvig+Letters+Sans&family=IBM+Plex+Mono:wght@500&display=swap');
                </style>
            </defs>
            `
                + '<rect x="50" y="50" width="100" height="100" fill="blue" />'
                + '<text x="150" y="115" fill="red" text-anchor="middle" dominant-baseline="middle" font-size="30">GHI</text>'
                + '</svg>';
            
            expect(svgGenerator.generateSVG()).toBe(expectedSVG);
        });
    });
});
