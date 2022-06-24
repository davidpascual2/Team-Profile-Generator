const Manager = require('../lib/manager');

describe('manager', () => {
    
    describe('manager object instantation', () => { //what does instantiation mean?
        it("create object with name, id, email, and office number", () => {
            const manager = new Manager("jim", "0004", "jim@gmail.com", "102")

            expect(manager).toBeInstanceOf(Manager);
            expect(manager.name).toEqual('jim');
            expect(manager.id).toEqual("0004");
            expect(manager.email).toEqual('jim@gmail.com');
            expect(manager.officeNumber).toEqual('102');
        });
    });

    describe('getName', () => {
        it('gets manager name', () => {
            const manager = new Manager("jim", "0004", "jim@gmail.com", "102")

            expect(manager.getName()).toEqual('jim');
        });
    });

    describe('getId', () => {
        it('gets managers Id', () => {
            const manager = new Manager("jim", "0004", "jim@gmail.com", "102")

            expect(manager.getId()).toEqual('0004');
        })
    })

    describe('getEmail', () => {
        it('gets managers email', () => {
            const manager = new Manager("jim", "0004", "jim@gmail.com", "102")

            expect(manager.getEmail()).toEqual('jim@gmail.com');
        })
    })

    describe('getOffice', () => {
        it('gets managers office number', () => {
            const manager = new Manager("jim", "0004", "jim@gmail.com", "102")

            expect(manager.getOffice()).toEqual('102');
        })
    })

    describe('getRole', () => {
        it("should return 'manager'", () => {
            const manager = new Manager("jim", "0004", "jim@gmail.com", "102")

            expect(manager.getRole()).toEqual('Manager');
        });
    });
});