// Tests for the shapes.js file
const { Shape, Circle, Triangle, Square } = require("../shapes.js");

// Tests for the shapes.js file
describe("Shapes", () => {
  // test for Circle class
  describe("Circle", () => {
    test("should render a circle with correct .SVG properties", () => {
      const circle = new Circle("Hello, World!", "red", "Circle", "blue");
      expect(circle.render()).toContain("<circle");
      expect(circle.render()).toContain('r="50"');
      expect(circle.render()).toContain('fill="blue"');
      expect(circle.render()).toContain("<text");
      expect(circle.render()).toContain("Hello, World!");
      expect(circle.render()).toContain('fill="red"');
    });
  });
  // class test for Square
  describe("Square", () => {
    test("should render a square with correct .SVG properties", () => {
      const square = new Square("Hello, World!", "red", "Square", "blue");
      expect(square.render()).toContain("<rect");
      expect(square.render()).toContain('width="100"');
      expect(square.render()).toContain('fill="blue"');
      expect(square.render()).toContain("<text");
      expect(square.render()).toContain("Hello, World!");
      expect(square.render()).toContain('fill="red"');
    });
  });
  // class test for Triangle
  describe("Triangle", () => {
    test("should render a triangle with correct .SVG properties", () => {
      const triangle = new Triangle("Hello, World!", "red", "Triangle", "blue");
      expect(triangle.render()).toContain("<polygon");
      expect(triangle.render()).toContain('points="150,50 100,150 200,150"');
      expect(triangle.render()).toContain('fill="blue"');
      expect(triangle.render()).toContain("<text");
      expect(triangle.render()).toContain("Hello, World!");
      expect(triangle.render()).toContain('fill="red"');
    });
  });
});
