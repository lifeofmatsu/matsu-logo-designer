//define class for generating SVG files
class SVGGenerator {
    constructor(shape, text, textColor) {
        this.shape = shape;
        this.text = this.sanitize(text);
        this.textColor = textColor;
    }

    //escapes SVG-specific special characters
    sanitize(text) {
        return text.replace(/&/g, '&amp;')
                   .replace(/</g, '&lt;')
                   .replace(/>/g, '&gt;');
    }

    //returns full SVG tag
    generateSVG() {
        const fontSize = 30;
        const yPosition = 100 + fontSize / 2;
        
        /* begin SVG tag */
        const svgStart = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
        const fontFamily = `<defs><style type="text/css">@import url('https://fonts.googleapis.com/css2?family=Hedvig+Letters+Sans&family=IBM+Plex+Mono:wght@500&display=swap');</style></defs>`;
        const textStyle = this.text //text element populated only if user inputs response
            ? `<text x="150" y="${yPosition}" fill="${this.textColor}" text-anchor="middle" dominant-baseline="middle" font-size="${fontSize}" font-family="IBM Plex Mono">${this.text}</text>` 
            : ''; 
        const svgShape = this.shape.render();
        const svgEnd = '</svg>';
        /* end SVG tag */
        
        return `${svgStart}${fontFamily}${svgShape}${textStyle}${svgEnd}`;
    }
}

module.exports.SVGGenerator = SVGGenerator;


