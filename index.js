const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    "Title of the project", 
    "Description of the project",
    "Installation instructions",
    "Usage information",
    "Contribution guidelines",
    "Test instructions"
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
            name: 'description'
        },
        // {            
        //     type: 'input',
        //     message: questions[2],
        //     name: 'usage',
        // },
        // {            
        //     type: 'input',
        //     message: questions[3],
        //     name: 'contribution',
        // },
        // {            
        //     type: 'input',
        //     message: questions[4],
        //     name: 'projectTitle',
        // },
        // {            
        //     type: 'input',
        //     message: questions[5],
        //     name: 'Test',
        // },
        // {            
        //     type: 'checkbox',
        //     message: questions[5],
        //     name: 'licenses',
        //     choices: [...licenses],

        // },
        // {
        //     type: 'input',
        //     message: 'Enter your GitHub Username',
        //     name: 'github',
            
        // },
        // {
        //     type: 'input',
        //     message: 'Enter your Email address',
        //     name: 'email',            
        // },
        
    ])
    .then((response) => writeToFile("README.md", generateMarkdown(response)))
    .catch((err) => console.error(err));
}

// function call to initialize program
init();

