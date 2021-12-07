// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const fileRoot = './output/';

// TODO: Create an array of questions for user input
const questions = [
    'Title: What is the title of your project?',
    'Description: What is about your project?',
    'Installation: What are the steps required to install your project?',
    'Usage: How to use it? Provide instructions and examples for use.',
    'Contributing: How can other developers contribute the project?',
    'Tests: Please write tests for your application. Then provide examples on how to run them.',
    'License: Is this project under any licenses?',
    'Contact Info: What is your GitHub username?',
    'Contact Info: What is your email address?'
];


const checkNotEmpty = input => {
    if (input) {
        return true;
    } else {
        console.log('\nPlease do not skip this question!');
        return false;
    }
}

const promptContent = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: questions[0],
            validate: checkNotEmpty
        },
        {
            type: 'editor',
            name: 'description',
            message: questions[1],
            validate: checkNotEmpty
        },
        {
            type: 'editor',
            name: 'installation',
            message: questions[2],
            validate: checkNotEmpty
        },
        {
            type: 'editor',
            name: 'usage',
            message: questions[3],
            validate: checkNotEmpty
        },
        {
            type: 'editor',
            name: 'contributing',
            message: questions[4],
            validate: checkNotEmpty
        },
        {
            type: 'editor',
            name: 'tests',
            message: questions[5],
            validate: checkNotEmpty
        },
        {
            type: 'list',
            name: 'license',
            message: questions[6],
            choices: ['', 'MIT License',  'Mozilla Public License 2.0', 'Apache License 2.0', 'Boost Software License 1.0', 'The Unlicense', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3']
        },
        {
            type: 'input',
            name: 'username',
            message: questions[7],
            validate: checkNotEmpty
        },
        {
            type: 'input',
            name: 'email',
            message: questions[8],
            validate: checkNotEmpty
        }
        ]);
}


function promptFileName(fileContent) {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'fileName',
            message: "Enter a filename if you don't want to name it as <README.md>:",
            default: 'README.md'
        }
    ]).then(fileNameData => {
        return writeToFile(fileNameData.fileName, fileContent);
    });
}

function setupFile(data) {
    const name = data[0]['fileName'];
    const content = data[1]
    return writeToFile(name, content);
}


// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    return new Promise((resolve, reject) => {
        fs.writeFile(fileRoot + fileName, data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created in <' + fileRoot + '> folder!'
            });
        });
    });
}


// TODO: Create a function to initialize app
function init() {
    promptContent()
        .then(generateMarkdown)
        .then(promptFileName)
        .catch(err => {
            console.log(err);
        });
}

// Function call to initialize app
init();
