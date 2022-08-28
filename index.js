const inquirer = require('inquirer');
const fs = require('fs');

const employees = []

//import classes
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

const startHTML = require('./src/startHTML');

const ManQuestions = [

    {
        type: 'input',
        message: "Enter team manager name",
        name: "manName"
    },
    {
        type: 'input',
        message: "Enter team manager employee ID",
        name: "manId"
    },
    {
        type: 'input',
        message: "enter team manager Email",
        name: "manEmail"
    },
    {
        type: 'input',
        message: "enter team manager office number",
        name: "manOffice"
    },
    
]

const engQuestions = [
        {
            type: 'input',
            message: "Enter engineer name",
            name: "engName"
        },
        {
            type: 'input',
            message: "Enter engineer employee ID",
            name: "engId"
        },
        {
            type: 'input',
            message: "enter engineer Email",
            name: "engEmail"
        },
        {
            type: 'input',
            message: "enter engineer github username",
            name: "github"
        },
        
]

const intQuestions = [

        {
            type: 'input',
            message: "Enter intern name",
            name: "intName"
        },
        {
            type: 'input',
            message: "Enter intern employee ID",
            name: "intId"
        },
        {
            type: 'input',
            message: "enter intern Email",
            name: "intEmail"
        },
        {
            type: 'input',
            message: "enter intern School",
            name: "intSchool"
        },
        
]

const questions = [
    {
        type: "list",
        name: "addMember",
        message: "Add team member?",
        choices: [
            'Engineer',
            'Intern',
            'finish Building Team'
        ]
    },

]

function intern() {
    inquirer.prompt(intQuestions)
    .then(response => {
        let newIntern =  new Intern(response.intName, response.intId, response.intEmail, response.intSchool)
        employees.push(newIntern)
        menu();

    })
}

function engineer() {
    inquirer.prompt(engQuestions)
        .then(response => {
            let newEngineer =  new Engineer(response.engName, response.engId, response.engEmail, response.github)
            employees.push(newEngineer)
            menu();
    })
}

function manager() {
    inquirer.prompt(ManQuestions)
        .then(response => {
            //create manager
            let newManager =  new Manager(response.manName, response.manId, response.manEmail, response.manOffice)
            employees.push(newManager)
            menu();
        })
}
function menu() {
    inquirer.prompt(questions).then(response => {
        console.log('if statment')
        if(response.addMember === 'Engineer') {
            return engineer();
        } if(response.addMember === 'Intern') {
            return intern();
        } if(response.addMember === 'finish Building Team') {

            return writeToFile(employees);
        }
    }) .catch(err => {console.log(err)})
}
function writeToFile(data) {
    fs.writeFileSync('./dist/index.html', startHTML(data), (err) => {
        err ? console.error(err) : console.log('File Updated!')
    })
};

init = () => {
    manager()
};

//function to call to initialize app
init();