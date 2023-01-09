// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = ['Project title', 'Description', 'Installation instructions', 'Usage information', 'Liscense', 'Contributing', 'Test instructions', 'Github username', 'Email address'];

const mitBadge= '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
const apacheBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
const gnuBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
// Prompt user for questions
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
            choices: ['MIT License', 'Apache Liscense 2.0', 'GNU General Public License'],
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
        // Send data collected to WriteToFile to write the README file
        const fileName = `${data.title.toLowerCase().split(' ').join('')}.md`;
        var badge;
        if (data.liscense = 'MIT License'){badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';}
        else if (data.liscense = 'Apache Liscense 2.0'){badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';}
        else if (data.liscense = 'GNU General Public License'){badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';}
        else {badge = ''};
        writeToFile(fileName, data, badge);
    })

// TODO: Create a function to write README file
function writeToFile(fileName, data, badge) 
{
// Write project README
fs.writeFile(fileName, 
`# ${data.title}

${badge}

## Description
${data.description}

## Table Of Contents

[Usage Information](#Usage-Information)

[Installation Instructions](#Installation-Instructions)

[Contributers](#Contributers)

[Test Instructions](#Test-Instructions)

[Questions](#Questions)

## Installation Instructions
${data.installation}

## Usage Information
${data.usage}

## License
${data.liscense}

## Contributers
${data.contributers}

## Test Instructions
${data.test}

## Questions
<a href="https://www.github.com/${data.github}" target="_blank">GitHub</a>

You can message me at ${data.email} if you have additional questions.

`, (err) => err ? console.log(err) : console.log('Success!'))};