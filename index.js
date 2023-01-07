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
            name: 'name',
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
            choices: ['pee', 'poo'],
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
        const filename = `${data.name.toLowerCase().split(' ').join('')}.md`;
        fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) => err ? console.log(err) : console.log('Success!'));
    })