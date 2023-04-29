// require needed files (inquirer, fs)
const inquirer = require("inquirer");
const fs = require("fs");
const { Shape, Circle, Triangle, Square } = require("./lib/shapes.js");
// inquirer prompt for user input (logo text, text color, shape, shape color)
inquirer
  .prompt([
    {
      type: "input",
      name: "logoText",
      message: "Input up to 3 character of text for logo: ",
    },
    {
      type: "input",
      name: "textColor",
      message: "Input color name or hexidecimal value for the color of text: ",
    },
    {
      type: "list",
      name: "shape",
      message: "Select a shape for the logo: ",
      choices: ["Square", "Circle", "Triangle"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Input color name or hexidecimal value for the color of shape: ",
    },
  ])
  .then((answers) => {
    let shape;
    switch (answers.shape) {
      case "Square":
        shape = new Square(
          answers.logoText,
          answers.textColor,
          answers.shape,
          answers.shapeColor
        );
        break;
      case "Circle":
        shape = new Circle(
          answers.logoText,
          answers.textColor,
          answers.shape,
          answers.shapeColor
        );
        break;
      case "Triangle":
        shape = new Triangle(
          answers.logoText,
          answers.textColor,
          answers.shape,
          answers.shapeColor
        );
        break;
      default:
        console.log("Error: Invalid shape");
    }
    const svgString = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${shape.render()}</svg>`;
    fs.writeFile("./output/logo.svg", svgString, (err) => {
      if (err) throw err;
      else {
        console.log("Generated logo.svg");
      }
    });
  });
