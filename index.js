const inquirer = require('inquirer');
const fs = require('fs');
const employee = require('./lib/employee');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const manager = require('./lib/manager');



const ManQuestions = [

    {
        type: 'input',
        message: "Enter team manager name",
        name: "name"
    },
    {
        type: 'input',
        message: "Enter team manager employee ID",
        name: "ID"
    },
    {
        type: 'input',
        message: "enter team manager Email",
        name: "email"
    },
    {
        type: 'input',
        message: "enter team manager office number",
        name: "office"
    },
    {
        type: "checkbox",
        name: "addMember",
        message: "Add team member?",
        choices: [
            'Engineer',
            'Intern',
            'finish Building Team'
        ]
    },
]
//add if stamtnet if user picks engineer or intern?
// if(engineer === true) {
const engQuestions = [
        {
            type: 'input',
            message: "Enter engineer name",
            name: "engName"
        },
        {
            type: 'input',
            message: "Enter engineer employee ID",
            name: "engID"
        },
        {
            type: 'input',
            message: "enter engineer Email",
            name: "engEmail"
        },
        {
            type: 'input',
            message: "enter engineer office number",
            name: "engOffice"
        },
        {
            type: "checkbox",
            name: "addMember",
            message: "Add team member?",
            choices: [
                'Engineer',
                'Intern',
                'finish Building Team'
            ]
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
            name: "intID"
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
        {
            type: "checkbox",
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

}

function engineer() {

}

function manager() {

}

function writeToFile(data) {
    fs.writeFile('./index.html', generate(data), (err) => {
        err ? console.error(err) : console.log('File Updated')
    })
};

init = () => {
    inquirer.prompt(questions)
        .then(data => {
            writeToFile(data)
        });
};

//function to call to initialize app
init();