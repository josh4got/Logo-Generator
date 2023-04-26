// Export Shape, Circle, Triangle, and Square classes
console.log(__dirname);

class Shape {
  constructor() {
    this.color = "black";
    this.textcolor = "black";
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    // Abstract method; subclasses must implement their own version of this method
    throw new Error("Subclass must implement abstract method");
  }
}
// Circle class
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  render() {
    return `<circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />`;
  }
}
// Triangle class
class Triangle extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }
  render() {
    return `<polygon points="150,50 100,150 200,150" fill="${this.color}" />`;
  }
}
// Square class
class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }
  render() {
    return `<rect x="100" y="50" width="${this.side}" height="${this.side}" fill="${this.color}" />`;
  }
}

module.exports = { Shape, Circle, Triangle, Square };
