const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle } = require('./library/shapes')

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
        fs.writeFile('logo.svg', JSON.stringify(answers, null, 2), (err) => {
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