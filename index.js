const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Triangle, Square} = require('./library/shapes')




function showQuestions() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'shape',
            message: "Choose a shape for your logo:",
            choices: ['circle', 'triangle', 'square']
        },

        {
            type: 'input',
            name: 'shapeColor',
            message: "What is the color of the shape?",
        },
    
        {
          type: 'input',
          name: 'text',
          message: "Input your three letter character set:"
        },
    
        {
          type: 'input',
          name: 'textColor',
          message: "What color will the text be?"
        }    ])
    .then(answers => {
        let shape;
        switch (answers.shape) {
            case 'circle':
                shape = new Circle(answers.text, answers.textColor, answers.shapeColor);
                break;
            case 'triangle':
                shape =  new Triangle(answers.text, answers.textColor, answers.shapeColor);
                break;
            case 'square':
                shape = new Square(answers.text, answers.textColor, answers.shapeColor);
                break;
            default:
                console.error('Invalid shape');
                return;
        }
        

        const svgCode = `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${shape.toSVG()}
            ${shape.printText()}
        </svg>`;

        fs.writeFile('logo.svg', svgCode, (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log('Generated logo.svg');
            }
        });
    })
    .catch(err => {
        console.error(err);
    });
}

showQuestions();