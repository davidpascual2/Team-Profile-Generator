const Employee = require('../lib/employee');
const employee = new Employee('david', '0001', 'david@gmail.com')
// describe('Employee', () => { // call back function. testing Employee object
//     describe('getName', () => { //testing initialization.(creation of employee obj)
//         it("should return name", () => { //second permater is a call back function
//             const empName = new Employee(); // create new employee obj
            
//             expect("string" in empName).toEqual(true); //what outcome should be
//         });
        
//         it("should return employee id"), () => {
//             const Id = new Employee(Id);
//             expect(" ")
//         }
//     })
// })

// test('can set name via constuctor argument', () => {
//     const name = "david"
//     const Emp = new Employee(name)

//     expect(Emp.name).toBe(name);
// })

describe("Employee", () => {

    describe('Employee object instantiation', () => {
        it('creates object with name, id, and email properties', () => {
            //const employee = new Employee('david', '0001', 'david@gmail.com')  //already in global

            expect(employee).toBeInstanceOf(Employee) //????????
            expect(employee.name).toEqual('david')
            expect(employee.id).toEqual('0001')
            expect(employee.email).toEqual('david@gmail.com')

        });
    });

    describe('getName', () => { //testing initialization.(creation of employee obj)
        it("should return name", () => { //second permater is a call back function
            // const employee = new Employee('david', '0001', 'david@gmail.com')  //already in global
                    
            expect(employee.getName()).toEqual("david"); //what outcome should be
        });
    });

    describe('getId', () => {
        it("should return employee Id", () => {
            // const employee = new Employee('david', '0001', 'david@gmail.com')  //already in global

            expect(employee.getId()).toEqual("0001");
        });
    });

    describe('getEmail', () => {
        it("should return employee email", () => {
            // const employee = new Employee('david', '0001', 'david@gmail.com')  //already in global

            expect(employee.getEmail()).toEqual("david@gmail.com")
        }); 
    });

    describe('getRole', () => {
        it("should return 'employee'", () => {
            // const employee = new Employee('david', '0001', 'david@gmail.com')  //already in global

            expect(employee.getRole()).toEqual("Employee")
        }); 
    });
});
