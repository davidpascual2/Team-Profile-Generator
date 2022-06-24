
const managerCard = (manager) => {
    console.log(manager)
    return `
    <div class="card col-md-12 col-md-5 col-lg-2">
        <div class="cardheader">
            <h4>${manager.getName()}</h4>
            <h3>${manager.getRole()}</h3>
        </div>
        <div class="cardbody">
            <ul>
                <li>ID: ${manager.getId()}</li>
                <li>Email: ${manager.getEmail()}</li>
                <li>Office Number: ${manager.getOffice()}</li>
            </ul>
        </div>
    </div>`
}

const engineerCard = (engineer) => {
    return `
    <div class="card col-md-12 col-md-5 col-lg-2">
        <div class="cardheader">
            <h4>${engineer.getName()}</h4>
            <h3>${engineer.getRole()}</h3>
        </div>
        <div class="cardbody">
            <ul>
                <li>ID: ${engineer.getId()}</li>
                <li>Email: ${engineer.getEmail()}</li>
                <li>Github: ${engineer.getGithub()}</li>
            </ul>
        </div>
    </div>`
}

const internCard = (intern) => {
    return `
    <div class="card col-md-12 col-md-5 col-lg-2">
        <div class="cardheader">
            <h4>${intern.getName()}</h4>
            <h3>${intern.getRole()}</h3>
        </div>
        <div class="cardbody">
            <ul>
                <li>ID: ${intern.getId()}</li>
                <li>Email: ${intern.getEmail()}</li>
                <li>School: ${intern.getSchool()}</li>
            </ul>
        </div>
    </div>`
}

module.exports = {managerCard, engineerCard, internCard}; //name of functions?