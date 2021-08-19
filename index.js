// TODO: Include packages needed for this application
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
    message: "What is your github username?",
    name: "github",
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
    choices: ["mit", "lit"],
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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    fs.writeFile("readme.md", JSON.stringify(data), (err) => {
      err ? console.log(err) : console.log("File was written");
    });
  });
}

// Function call to initialize app
init();
