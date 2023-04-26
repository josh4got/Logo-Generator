// Tests for the shapes.js file
const { Shape, Circle, Triangle, Square } = require("../shapes.js");

console.log(Shape, Circle, Triangle, Square);
// Tests for the shapes.js file
// class test for Circle
describe("Shapes", () => {
  describe("Circle", () => {
    it("should create a circle with a radius of 80 color should match the setColor", () => {
      const shape = new Circle(80);
      shape.setColor("red");
      expect(shape.render()).toBe(
        '<circle cx="150" cy="100" r="80" fill="red" />'
      );
    });
  });
});
// class test for Square
describe("Shapes", () => {
  describe("Square", () => {
    it("should create a square with a side length of 100 and a color of blue", () => {
      const shape = new Square(100);
      shape.setColor("blue");
      expect(shape.render()).toBe(
        '<rect x="100" y="50" width="100" height="100" fill="blue" />'
      );
    });
  });
});
// class test for Triangle
describe("Shapes", () => {
  describe("Triangle", () => {
    it("should create a triangle with a side length of 100 and a color of green", () => {
      const shape = new Triangle(100);
      shape.setColor("green");
      expect(shape.render()).toBe(
        '<polygon points="150,50 100,150 200,150" fill="green" />'
      );
    });
  });
});
