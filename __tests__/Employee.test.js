const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

const Employerr = require("../lib/Employee");

describe('Employee', () => {
    describe("init", () => {
        (it("should create an object", () => {
            const employee = new Employee("Adam", 1, "rewop360@gmail.com");
            expect(employee.getName() === "Adam");
            expect(employee.getId() === 1);
            expect(employee.getEmail() === "rewop360@gmail.com")
        }))
    })
});