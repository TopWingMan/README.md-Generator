// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { stringify } = require('querystring');

// TODO: Create an array of questions for user input
const questions = ['Project titile', 'Description', 'Installation instructions', 'Usage information', 'Liscense', 'Contributing', 'Test instructions', 'Github username', 'Email address'];

inquirer
    .prompt
    ([
        {
            type: 'input',
            name: 'title',
            message: questions[0],
        },
        {
            type: 'input',
            name: 'description',
            message: questions[1],
        },
        {
            type: 'input',
            name: 'installation',
            message: questions[2],
        },
        {
            type: 'input',
            name: 'usage',
            message: questions[3],
        },
        {
            type: 'checkbox',
            name: 'liscense',
            message: questions[4],
            choices: ['MIT License', 'poo'],
        },
        {
            type: 'input',
            name: 'contributers',
            message: questions[5],
        },
        {
            type: 'input',
            name: 'test',
            message: questions[6],
        },
        {
            type: 'input',
            name: 'github',
            message: questions[7],
        },
        {
            type: 'input',
            name: 'email',
            message: questions[8],
        },
    ])
    .then((data) =>
    {
        // TODO: Create a function to write README file
        const fileName = `${data.title.toLowerCase().split(' ').join('')}.md`;
        writeToFile(fileName, data);
    })

// TODO: Create a function to write README file
function writeToFile(fileName, data) 
{
// Write project README
fs.writeFile(fileName, 
`# ${data.title}

## Description
${data.description}

## Table Of Contents
[Usage Information]($Usage-Information)
[Installation Instructions]($Installation-Instructions)
[Contributers]($Contributers)
[Test Instructions]($Test-Instructions)
[Questions]($Questions)

## Installation Instructions

## Usage Information
${data.usage}

## Contributers
${data.contributers}

## Test Instructions
${data.test}

## Questions
${data.github}
${data.email}

`, (err) => err ? console.log(err) : console.log('Success!'));

// If we have a liscense write one
if (data.liscense)
{
    WriteLiscense(data.liscense);
}
}

function WriteLiscense(liscense)
{

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
