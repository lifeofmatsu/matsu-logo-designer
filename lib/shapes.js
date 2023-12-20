//define base class for Shapes
class Shape {
    constructor(color = 'black') {
        this.color = color;
    }

    setColor(color) {
        this.color = color;
    }
}

//define Circle class, inherits from Shape
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

//define Triangle class, inherits from Shape
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

//define Square class, inherits from Shape
class Square extends Shape {
    render() {
        return `<rect x="50" y="50" width="100" height="100" fill="${this.color}" />`;
    }
}

module.exports = { Circle, Triangle, Square };
