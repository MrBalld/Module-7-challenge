import fs from 'fs/promises';
import inquirer from 'inquirer';
import generateMarkdown from './generateMarkdown.js';

let fileName = 'dist/README.md';
// TODONES: Create an array of questions for user input to be passed to inquirer
const questions = [ 
    {
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        name: 'description',
        message: 'What is the description of your project?'
    },
    {
        name: 'deployLink',
        message: 'Please provide a link to your deployed project'
    },
    {
        name: 'installationTable',
        message: 'What would you like to appear in the table of contents for installations?'
    },
    {
        name: 'usageTable',
        message: 'What would you like to appear in the table of contents for Usage?'
    },
    {
        name: 'creditsTable',
        message: 'What would you like to appear in the table of contents for Credits?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license is your project using?',
        choices: ['Apache license 2.0', 'GNU General Public license v3.0', 'MIT license', 'BSD 2-Clause \"Simplified\" license', 'BSD 3-Clause \"New\" or \"Revised\" license', 'Boost Software license 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU lesser General Public License v2.1', 'Mozilla public license 2.0', 'Unlicense']
    },
    {
        name: 'featuresTable',
        message: 'What would you like to appear in the table of contents for features?'
    },
    {
        name: 'contributeTable',
        message: 'What would you like to appear in the table of contents for How To Contribute?'
    },
    {
        name: 'testsTable',
        message: 'What would you like to appear in the table of contents for tests?'
    },
    {
        name: 'installationsMain',
        message: 'What would you like to appear in the main section for installations?'
    },
    {
        name: 'usageMain',
        message: 'What would you like to appear in the main section for Usage (must be in .md format)?'
    },
    {
        name: 'creditsMain',
        message: 'What would you like to appear in the main section for credits?'
    },
    {
        name: 'featuresMain',
        message: 'What would you like to appear in the main section for features'
    },
    {
        name: 'howToContributeMain',
        message: 'What would you like to appear in the main section for how to contribute?'
    },
    {
        name: 'testsMain',
        message: 'What would you like to appear in the main section for tests?'
    }
    ];

// TODONES: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log("Success!");
    })
}

// TODONES: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((ans) => {
            let readMEData = generateMarkdown(ans)
            writeToFile(fileName, readMEData);
            }
        )
}

// Function call to initialize app
init();
