class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        // console.log(`name: ${this.name}`)
        return this.name;
    }

    getId() {
        // console.log(`id: ${this.id}`)
        return this.id;
    }

    getEmail() {
        // console.log(`email: ${this.email}`)
        return this.email;
    }

    getRole(){
        console.log("employee")
        return 'Employee';
    }
}

module.exports = Employee;
// const employee = new Employee();

// employee.getName()
// employee.getId()
// employee.getEmail()
// employee.getRole()