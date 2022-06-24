const Intern = require('../lib/intern');

describe('intern', () => {

    describe('object instantiation', () => {
        it('gets object name, id, email, and school', () => {

        const intern = new Intern("steve", '0003', 'steve@gmail.com', 'University of Washington');
        expect(intern).toBeInstanceOf(Intern)
        expect(intern.name).toEqual('steve');
        expect(intern.id).toEqual('0003');
        expect(intern.email).toEqual('steve@gmail.com');
        expect(intern.school).toEqual('University of Washington')

        });
    });

    describe('getName', () => {
        it('should return interns name', () => {
            const intern = new Intern("steve", '0003', 'steve@gmail.com', 'University of Washington');

            expect(intern.getName()).toEqual("steve")
        });
    });

    describe('getId', () => {
        it('should return interns employee Id', () => {
            const intern = new Intern("steve", '0003', 'steve@gmail.com', 'University of Washington');

            expect(intern.getId()).toEqual("0003")
        });
    });

    describe('getEmail', () => {
        it('should return interns email', () => {
            const intern = new Intern("steve", '0003', 'steve@gmail.com', 'University of Washington');

            expect(intern.getEmail()).toEqual("steve@gmail.com")
        });
    });

    describe('getSchool', () => {
        it('should return interns School', () => {
            const intern = new Intern("steve", '0003', 'steve@gmail.com', 'University of Washington');

            expect(intern.getSchool()).toEqual("University of Washington");
        });
    });

    describe('getRole', () => {
        it("should return 'intern'", () => {
            const intern = new Intern("steve", '0003', 'steve@gmail.com', 'University of Washington');

            expect(intern.getRole()).toEqual("Intern");
        });
    });

    
});