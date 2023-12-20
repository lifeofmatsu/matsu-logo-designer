const { Circle, Triangle, Square } = require('./shapes');

describe('Shape tests', () => {
    //tests circle color rendering
    describe('Circle', () => {
        test('renders correctly with default color', () => {
            const circle = new Circle();
            expect(circle.render()).toBe('<circle cx="150" cy="100" r="80" fill="black" />');
        });

        test('renders correctly with set color', () => {
            const circle = new Circle();
            circle.setColor("red");
            expect(circle.render()).toBe('<circle cx="150" cy="100" r="80" fill="red" />');
        });
    });

    //tests triangle color rendering
    describe('Triangle', () => {
        test('renders correctly with default color', () => {
            const triangle = new Triangle();
            expect(triangle.render()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="black" />');
        });

        test('renders correctly with set color', () => {
            const triangle = new Triangle();
            triangle.setColor("blue");
            expect(triangle.render()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });
    });

    //tests square color rendering
    describe('Square', () => {
        test('renders correctly with default color', () => {
            const square = new Square();
            expect(square.render()).toBe('<rect x="50" y="50" width="150" height="150" fill="black" />');
        });

        test('renders correctly with set color', () => {
            const square = new Square();
            square.setColor("green");
            expect(square.render()).toBe('<rect x="50" y="50" width="150" height="150" fill="green" />');
        });
    });
});
