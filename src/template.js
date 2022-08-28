
const managerCard = (manager) => {
    console.log(manager)
    return `
    <div class="card col-md-12 col-md-5 col-lg-2 shadow bg-body rounded">
        <div class="cardheader">
            <h4 card-title p-3 mb0 bg-info>${manager.getName()}</h4>
            <h3 card-title p-3 mb0 bg-info>${manager.getRole()}</h3>
        </div>
        <div class="cardbody">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office Number: ${manager.getOffice()}</li>
            </ul>
        </div>
    </div>`
}

const engineerCard = (engineer) => {
    console.log(engineer)
    return `
    <div class="card col-md-12 col-md-5 col-lg-2 shadow bg-body rounded">
        <div class="cardheader">
            <h4 card-title p-3 mb0 bg-info>${engineer.getName()}</h4>
            <h3 card-title p-3 mb0 bg-info>${engineer.getRole()}</h3>
        </div>
        <div class="cardbody">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item">Github: ${engineer.getGithub()}</li>
            </ul>
        </div>
    </div>`
}

const internCard = (intern) => {
    console.log(intern)
    return `
    <div class="card col-md-12 col-md-5 col-lg-2 shadow bg-body rounded">
        <div class="cardheader">
            <h4 card-title p-3 mb0 bg-info>${intern.getName()}</h4>
            <h3 card-title p-3 mb0 bg-info>${intern.getRole()}</h3>
        </div>
        <div class="cardbody">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${intern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
        </div>
    </div>`
}

module.exports = {managerCard, engineerCard, internCard}; //name of functions?