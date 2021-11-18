// const Employee = require('./lib/employee');
// const Engineer = require('./lib/engineer');
// const Intern = require('./lib/intern');
// const Manager = require('./lib/manager');
const fs = require('fs');
const inquirer = require('inquirer');


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
     
    
]).then
