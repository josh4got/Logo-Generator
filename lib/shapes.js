// shape class constructor
class Shape {
  constructor(text, textColor, shape, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shape = shape;
    this.shapeColor = shapeColor;
  }
}
// Circle class constructor
class Circle extends Shape {
  constructor(text, textColor, shape, shapeColor) {
    super(text, textColor, shape, shapeColor);
  }
  render() {
    return `<g>
    <circle cx="150" cy="100" r="50" fill="${this.shapeColor}" />
    <text x="150" y="100" fill="${this.textColor}" text-anchor="middle" alignment-baseline="central">${this.text}</text>
  </g>`;
  }
}

// Triangle class constructor
class Triangle extends Shape {
  constructor(text, textColor, shape, shapeColor) {
    super(text, textColor, shape, shapeColor);
  }
  render() {
    return `<g>
    <polygon points="150,50 100,150 200,150" fill="${this.shapeColor}" />
    <text x="150" y="100" fill="${this.textColor}" text-anchor="middle" alignment-baseline="central">${this.text}</text>
  </g>`;
  }
}
// Square class constructor
class Square extends Shape {
  constructor(text, textColor, shape, shapeColor) {
    super(text, textColor, shape, shapeColor);
  }
  render() {
    return `<g>
    <rect x="100" y="50" width="100" height="100" fill="${this.shapeColor}" />
    <text x="150" y="100" fill="${this.textColor}" text-anchor="middle" alignment-baseline="central">${this.text}</text>
  </g>`;
  }
}

// export Shape, Circle, Triangle, Square
module.exports = { Shape, Circle, Triangle, Square };
