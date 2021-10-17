const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
    {   
        type: 'input',
        message: "What is the title of your project? (required)",
        name:'projectTitle',
        default: 'Project Title',
        validate: projectTitleInput => {
            if (projectTitleInput) {
                return true;
            } else {
                console.log('Please enter your project title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: "What is your GitHub username? (required)",
        name: 'username',
        default: 'AjiaHoliday',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log('A valid GitHub username is required!');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: "What is the name of your GitHub repo? (require)",
        name: 'repo',
        
    },
    "Please provide a description of this project. (required)",
    "If applicable, how do you install this application?",
    "Please describe how to use this project with instructions and examples. (required)",
    "If applicable, how can others contribute?",
    "If applicable, provide examples of tests and examples on how to run them.",
    "Choose a license for your project.",
]);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
