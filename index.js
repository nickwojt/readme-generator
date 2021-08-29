// TODO: Include packages needed for this application
const { error } = require("console");
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input

const questions = [
  {
    type: "input",
    message: "What is the name of your project",
    name: "project",
  },
  {
    type: "input",
    message: "Please provide a short description of your project",
    name: "description",
  },
  {
    type: "input",
    message: "What is your github username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your github profile link?",
    name: "link",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "list",
    message: "What type of license does your project use?",
    name: "license",
    choices: [
      "GNU GPLv3",
      "Mozilla Public License 2.0",
      "Apache License 2.0",
      "MIT License",
      "none",
    ],
  },
  {
    type: "input",
    message: "What commands should be run for dependencies?",
    name: "depend",
    default: "npm i",
  },
  {
    type: "input",
    message: "What commands should be run for tests?",
    name: "tests",
    default: "npm run test",
  },
  {
    type: "input",
    message: "What command should be used to start the program?",
    name: "usage",
    default: "node index.js",
  },
];

// TODO: Create a function to write README file
function writeToFile(data) {
  return fs.writeFile("README2.md", data, (err) => {
    err ? console.error(err) : console.log("Success, File was written!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    writeToFile(generateMarkdown(response));
  });
}

// Function call to initialize app
init();
