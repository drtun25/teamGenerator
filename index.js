const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');

function buildTeam() {

inquirer.prompt([
    //manager questions
    {
       message: "What is the team manager's name?",
       type: 'input',
       name: 'managerName',
    },
    {
       message: "What is the team manager's id?",
       type: 'input',
       name: 'managerID',
    },
    {
        message: "What is the project email address?",
        type: 'input',
        name: 'managerEmail',
    },
    {
        message: "What is the team manager's office number?",
        type: 'input',
        name: 'managerOfficeNumber',
    },
    //employee questions
    {
        message: "Which employee would you like to add?",
        choices: [
            'Engineer',
            'Intern',
            "I don't want to add anymore team members"
        ],
        type: 'list',
        name: 'employeeType',
    },
     
  
     //Engineer questions
    {
        message: "What is the engineer's name?",
        type: 'input',
        name: 'engineerName',
    },
    {
        message: "What is the engineer's id?",
        type: 'input',
        name: 'engineerId',
    },
    {
         message: "What is the engineer's email?",
         type: 'input',
         name: 'engineerEmail',
    },
    {
         message: "What is the engineer's github username?",
         type: 'input',
         name: 'githubUserName',
    },
     
     //intern questions
    {
        message: "What is the intern's name?",
        type: 'input',
        name: 'internName',
    },
    {
        message: "What is the intern's id?",
        type: 'input',
        name: 'internId',
    },
    {
         message: "What is the intern's email?",
         type: 'input',
         name: 'internEmail',
    },
    {
         message: "What is the intern's school name?",
         type: 'input',
         name: 'internSchool',
    }, 
     
    
]).then ((response) =>{
    fs.writeFile('team.html', `
    
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    <div>
        <div>
            <h1>My Team</h1>
        </div>
    </div>

    <div class="card-employee">
        <div>
            <h2>${Manager.getName()}</h2>
            <h3>${Manager.getRole()}</h3>
        </div>
        <div>
            <ul>
                <li>${Manager.getId()}</li>
                <li>${Manager.getEmail()}</li>
                <li>${Manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>

    <div class="card-employee">
        <div>
            <h2>${Engineer.getName()}</h2>
            <h3>${Engineer.getRole()}</h3>
        </div>
        <div>
            <ul>
                <li>${Engineer.getId()}</li>
                <li>${Engineer.getEmail()}</li>
                <li>${Engineer.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>

    <div class="card-employee">
        <div>
            <h2>${Intern.getName()}</h2>
            <h3>${Intern.getRole()}</h3>
        </div>
        <div>
            <ul>
                <li>${Intern.getId()}</li>
                <li>${Intern.getEmail()}</li>
                <li>${Intern.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
</body>
</html>
    

    `, function(err) {
        if (err) {
            return console.log(err);
        }
    })
})

}

buildTeam();