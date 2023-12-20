//import shape classes
const { Circle, Triangle, Square } = require('./shapes');

//define class for generating SVG files
class SVGGenerator {
    constructor(shape, text, textColor) {
        this.shape = shape;
        this.text = this.sanitize(text);
        this.textColor = textColor;
    }

    //escape SVG-specific special chars
    sanitize(text) {
        return text.replace(/&/g, '&amp;')
                   .replace(/</g, '&lt;')
                   .replace(/>/g, '&gt;');
    }

    generateSVG() {
        //adjust font size and coordinates per shape
        let fontSize, xCoord, yCoord;
        
        if (this.shape instanceof Circle) {
            fontSize = 80; 
            xCoord = 150; yCoord = 109;
        } else if (this.shape instanceof Triangle) {
            fontSize = 70; 
            xCoord = 150; yCoord = 155;
        } else { //instanceof Square
            fontSize = 80; 
            xCoord = 127; yCoord = 130;
        }
        
        /* begin SVG tag */
        const svgStart = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
        const fontFamily = `<defs><style type="text/css">@import url('https://fonts.googleapis.com/css2?family=Hedvig+Letters+Sans&amp;family=IBM+Plex+Mono:wght@500&amp;display=swap');</style></defs>`;
        const textStyle = this.text 
            ? `<text x="${xCoord}" y="${yCoord}" fill="${this.textColor}" text-anchor="middle" dominant-baseline="middle" font-size="${fontSize}" font-family="IBM Plex Mono">${this.text}</text>` 
            : ''; //text element populated only if user inputs response
        const svgShape = this.shape.render();
        const svgEnd = `</svg>`;
        /* end SVG tag */
        
        return `${svgStart}${fontFamily}${svgShape}${textStyle}${svgEnd}`;
    }
}

module.exports.SVGGenerator = SVGGenerator;


