const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    "Title of the project", 
    "Resume your project in a short sentence",
    "Description of the project",
    "Installation instructions",
    "Usage information",
    "License type",
    "Contribution guidelines",
    "Testing instructions",
    "Enter your GitHub Username",
    "Enter your Email address"
];

// array of licenses for user
const licenses = [
    "Apache License 2.0",
    "MIT", 
    "GNU General Public License v3.0", 
    "Creative Commons Zero 1.0 Universal"
]

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, (err) => err ? console.error(err) : console.log('Readme created!'))
}


// function to initialize program
const init = () => {
    inquirer
    .prompt([
        {            
            type: 'input',
            message: questions[0],
            name: 'title'
        },
        {            
            type: 'input',
            message: questions[1],
            name: 'shortInfo'
        },
        {            
            type: 'input',
            message: questions[2],
            name: 'description'
        },
        {            
            type: 'input',
            message: questions[3],
            name: 'installation',
        },
        {            
            type: 'input',
            message: questions[4],
            name: 'usage',
        },
        {            
            type: 'checkbox',
            message: questions[5],
            name: 'license',
            choices: [...licenses],
        },
        {            
            type: 'input',
            message: questions[6],
            name: 'contribution',
        },
        {            
            type: 'input',
            message: questions[7],
            name: 'test',          
        },
        {
            type: 'input',
            message: questions[8],
            name: 'github',
            
        },
        {
            type: 'input',
            message: questions[8],
            name: 'email',            
        },
        
    ])
    .then((response) => writeToFile("README_out.md", generateMarkdown(response)))
    .catch((err) => console.error(err));
}

// function call to initialize program
init();

