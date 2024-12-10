class Student {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    getPersonInfo() {
        return `
        Name: ${this.name}
        Age: ${this.age}
        Email: ${this.email}
        `;
    }
}

module.exports = Student;
