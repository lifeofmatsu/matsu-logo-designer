const { SVGGenerator } = require('./svgGenerator');
const { Circle, Triangle, Square } = require('./shapes');

describe('SVGGenerator tests', () => {
    //tests display text for circle
    describe('Circle', () => {
        test('generates SVG with text', () => {
            const circle = new Circle('red');
            const svgGenerator = new SVGGenerator(circle, "ABC", "blue");

            const expectedSVG = '<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">'
                + `<defs><style type="text/css">@import url('https://fonts.googleapis.com/css2?family=Hedvig+Letters+Sans&amp;family=IBM+Plex+Mono:wght@500&amp;display=swap');</style></defs>`
                + `<circle cx="150" cy="100" r="80" fill="red" />`
                + `<text x="150" y="109" fill="blue" text-anchor="middle" dominant-baseline="middle" font-size="80" font-family="IBM Plex Mono">ABC</text>`
                + `</svg>`;
            
            expect(svgGenerator.generateSVG()).toBe(expectedSVG);
        });
    });

    //tests  display text for triangle
    describe('Triangle', () => {
        test('generates SVG with text', () => {
            const triangle = new Triangle('green');
            const svgGenerator = new SVGGenerator(triangle, "DEF", "yellow");
    
            const expectedSVG = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">`
                + `<defs><style type="text/css">@import url('https://fonts.googleapis.com/css2?family=Hedvig+Letters+Sans&amp;family=IBM+Plex+Mono:wght@500&amp;display=swap');</style></defs>`
                + `<polygon points="150, 18 244, 182 56, 182" fill="green" />`
                + `<text x="150" y="155" fill="yellow" text-anchor="middle" dominant-baseline="middle" font-size="70" font-family="IBM Plex Mono">DEF</text>`
                + `</svg>`;
            
            expect(svgGenerator.generateSVG()).toBe(expectedSVG);
        });
    });

    //tests  display text for square
    describe('Square', () => {
        test('generates SVG with text', () => {
            const square = new Square('blue');
            const svgGenerator = new SVGGenerator(square, "GHI", "red");
    
            const expectedSVG = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">`
                + `<defs><style type="text/css">@import url('https://fonts.googleapis.com/css2?family=Hedvig+Letters+Sans&amp;family=IBM+Plex+Mono:wght@500&amp;display=swap');</style></defs>`
                + `<rect x="50" y="50" width="150" height="150" fill="blue" />`
                + `<text x="125" y="130" fill="red" text-anchor="middle" dominant-baseline="middle" font-size="80" font-family="IBM Plex Mono">GHI</text>`
                + `</svg>`;
            
            expect(svgGenerator.generateSVG()).toBe(expectedSVG);
        });
    });
});
