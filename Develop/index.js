const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

const generateMarkdown = require('./utils/generateMarkdown.js');
const api = require('./utils/api.js');

// array of questions for user input
const questions = ["What is the title of your project? (required)",
"What is your GitHub username? (required)",
"What is the name of your GitHub repo? (require)",
"Please provide a description of this project. (required)",
'Provide a link to your project. (required)',
"Please describe how to use this project with instructions and examples. (required)",
"If applicable, how do you install this application?",
"If applicable, how can others contribute?",
"If applicable, provide examples of tests and examples on how to run them.",
"Choose a license for your project.",
];


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            throw err;
        }
        console.log('README successfully saved!')
    })
};

// function to initialize app
function init() {
    const [projectTitle, username, repo, description, usage, installation, contributes, tests, license
    ] = questions;

    return inquirer.prompt([{   
        type: 'input',
        message: projectTitle,
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
        message: username,
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
        message: repo,
        name: 'repo',
        default: 'readme-generator',
        validate: repoInput => {
            if (repoInput) {
                return true;
            } else {
                console.log('A valid GitHub repo is requred');
                return false;
            }
        }

    },
    {
        type: 'input',
        mesage: description,
        name: 'description',
        default: 'Project Description',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a project description!');
                return false;
            }
        }
    },
    {
        type: 'link',
        name: 'link',
        message: link,
        validate: linkInput => {
            if(linkInput){
                return true;
            } else{
                console.log("Please provide a link to your project.");
                return false;
            }
        }
    },
    {
        type: 'input',
        message: installation,
        name: 'installation'
    },
    {
        type: 'input',
        message: usage,
        name: 'usage'
    },
    {
        type: 'input',
        message: contributes,
        name: 'contributes'
    },
    {
        type: 'input',
        message: tests,
        name: 'tests'
    },
    {
        name: 'list',
        message: license,
        name: 'license',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']
    }
])
    .then(data => generateMarkdown(data))
    .then(pageLayout => writeToFile("README.md", pageLayout))
        
};
    
// Function call to initialize app
init();
