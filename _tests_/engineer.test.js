const Engineer = require('../lib/engineer');

describe('engineer', () => {
    
    describe('engineer object instantation', () => { //what does instantiation mean?
        it("create object with name, id, email, and github username", () => {
            const engineer = new Engineer("eddie", "0002", "eddie@gmail.com", "eddiegit")

            expect(engineer).toBeInstanceOf(Engineer);
            expect(engineer.name).toEqual('eddie');
            expect(engineer.id).toEqual("0002");
            expect(engineer.email).toEqual('eddie@gmail.com');
            expect(engineer.github).toEqual('eddiegit');
        });
    });

    describe('getName', () => {
        it('gets engineer name', () => {
            const engineer = new Engineer('eddie', "0002", "eddie@gmail.com", "eddiegit");

            expect(engineer.getName()).toEqual('eddie');
        });
    });

    describe('getId', () => {
        it('gets engineers Id', () => {
            const engineer = new Engineer('eddie', "0002", 'eddie@gmail.com', 'eddiegit');

            expect(engineer.getId()).toEqual('0002');
        })
    })

    describe('getEmail', () => {
        it('gets engineers email', () => {
            const engineer = new Engineer('eddie', "0002", 'eddie@gmail.com', 'eddiegit');

            expect(engineer.getEmail()).toEqual('eddie@gmail.com');
        })
    })

    describe('getGithub', () => {
        it('gets engineers github username', () => {
            const engineer = new Engineer('eddie', "0002", 'eddie@gmail.com', 'eddiegit');

            expect(engineer.getGithub()).toEqual('eddiegit'); //why do some functions not work?
        })
    })

    describe('getRole', () => {
        it("should return 'engineer'", () => {
            const engineer = new Engineer('eddie', "0002", 'eddie@gmail.com', 'eddiegit');

            expect(engineer.getRole()).toEqual('Engineer');
        })
    })
});