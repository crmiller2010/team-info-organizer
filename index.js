const fs = require("fs");
const inquirer = require("inquirer");
const { endWith } = require("rxjs");

let team = [];

const addManager = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter manager's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter manager's ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter manager's email:",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Enter manager's office number:",
      },
    ])
    .then((answers) => {
      team.push({
        name: answers.name,
        id: answers.id,
        email: answers.email,
        role: "Manager",
        officeNumber: answers.officeNumber,
      });
      buildTeam();
    });
};

const addEngineer = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter engineer's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter engineer's ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter engineer's email:",
      },
      {
        type: "input",
        name: "github",
        message: "Enter engineer's GitHub username:",
      },
    ])
    .then((answers) => {
      team.push({
        name: answers.name,
        id: answers.id,
        email: answers.email,
        role: "Engineer",
        github: answers.github,
      });
      buildTeam();
    });
};

const addIntern = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter intern's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter intern's ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter intern's email:",
      },
      {
        type: "input",
        name: "school",
        message: "Enter intern's school:",
      },
    ])
    .then((answers) => {
      team.push({
        name: answers.name,
        id: answers.id,
        email: answers.email,
        role: "Intern",
        school: answers.school,
      });
      buildTeam();
    });
};

const buildTeam = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "member",
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern", "No more team members"],

        
      }])

      .then((answers) => {
        if (answers.member === "Engineer") {
          addEngineer();
        } else if (answers.member === "Intern") {
          addIntern();
        } else {
          createHTML();
        }
      });

    }
    addManager();

const createHTML = () => {
      
let html = `<!DOCTYPE html>
<html>
  <head>
    <title>Team Roster</title>
  </head>
  <body>
    <h1>Team Roster</h1>`;

for (const members of team) {
  html += `
    <h2>${members.name}</h2>
    <ul>
      <li>ID: ${members.id}</li>
      <li>Email: <a href="mailto:${members.email}">${members.email}</a></li>`;
  if (members.role=='Engineer') {
    html += `<li>GitHub: <a href="https://github.com/${members.github}" target="_blank">${members.github}</a></li>`;
  }
  if (members.role=='Intern') {
    html += `<li>School: ${members.school}</li>`;
  }
  html += `</ul>`;
}

html += `
  </body>
</html>`;

fs.writeFileSync("index.html", html);

      
    }