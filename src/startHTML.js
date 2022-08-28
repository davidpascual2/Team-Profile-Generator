const { managerCard, engineerCard, internCard } = require('./template')
// const templates = require('./template')
// templates.managerCard()


const startHTML = (data) => {
    let managerHTML = ""
    let engineerHTML = ""
    let internHTML = ""
    
    for( i=0; i < data.length; i++) {
        if(data[i].getRole() === 'Manager') {
            managerHTML = managerCard(data[i])
        }
        if(data[i].getRole() === 'Engineer') {
            engineerHTML = engineerHTML + engineerCard(data[i]) //multiple engineer
        }
        if(data[i].getRole() === 'Intern') {
            internHTML = internHTML + internCard(data[i])
        }
      
    }
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"/>
    </head>
    <body>
        <header>
            <h1 class="text-center p-3 mb-2 bg-primary text-white">My Team</h1>
        </header>
        <main>
            <div class="d-flex justify-content-evenly align-items-center">
                ${managerHTML}
                ${engineerHTML || ""} 
                ${internHTML || ""}
            </div>
        </main>
    </body>
    </html>`
}

module.exports = startHTML;