const generateFile = require("./readMeFile");
const emailValidator = require('email-validator');
const inquirer = require('inquirer');
const fs = require('fs');



function Start() {
    inquirer.prompt(Questionaire).then(generateFile)
        .then(writeInFile)
};

const writeInFile = (data) => {
    fs.writeFile("./MyReadme.md", data, (err, done) => {
        if (err) {
            console.log("There is an error")
            return
        }
        console.log("ReadMe created successfully!!");
    });
}






const Questionaire = [{
        type: 'input',
        name: 'title',
        message: 'What is  title of your project?',
        validate: (input) => {
            if (input) {
                return true
            } else { return 'Please enter  project title.' }
        },
    },

    {
        type: 'input',
        name: 'description',
        message: 'Please give description of your project.',
        validate: (input) => {
            if (input) {
                return true
            } else { return 'Please enter description of your project.' }
        },
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter  the usage information',
        validate: (input) => {
            if (input) {
                return true
            } else { return 'Please enter the usage information.' }
        },
    },
    {
        type: 'input',
        name: 'install',
        message: 'Enter instructions to install',
        default: "N/A"
    },

    {
        type: 'input',
        name: 'contribution',
        message: 'Please enter contribution guidelines',
        validate: (input) => {
            if (input) {
                return true
            } else { return 'Please enter contribution guidelines.' }
        },
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project',
        choices: ["MIT", "Apache2.0", "ISC"],
        validate: (input) => {
            if (input) {
                return true
            } else { return 'Please pick a license.' }
        },
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please enter test instructions (if required)',
        default: "N/A"
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email.',
        validate: (input) => {
            if (emailValidator.validate(input)) {
                return true
            } else { return 'Please provide a valid email' }
        },
    },

    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username',
        validate: (input) => {
            if (input) {
                return true
            } else { return 'Please enter  username.' }
        },
    },

];


Start();