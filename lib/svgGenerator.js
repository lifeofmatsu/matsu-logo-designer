//define class for generating SVG files
class SVGGenerator {
    constructor(shape, text, textColor) {
        this.shape = shape;
        this.text = text;
        this.textColor = textColor;
    }

    generateSVG() {
        const svgStart = '<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
        const svgEnd = '</svg>';
        const textSVG = this.text ? `<text x="150" y="150" fill="${this.textColor}" text-anchor="middle" font-size="30">${this.text}</text>` : ''; //text element created only if provided
        const shapeSVG = this.shape.render();

        return `${svgStart}${shapeSVG}${textSVG}${svgEnd}`; //final SVG string
    }
}

module.exports.SVGGenerator = SVGGenerator;

