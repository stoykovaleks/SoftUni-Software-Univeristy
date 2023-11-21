function solution() {
    class Employee {
        constructor(name, age) {
            if (new.target === Employee) {
                throw new Error("Cannot instantiate abstract class");
            }
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
            this.currentTaskIndex = 0;
        }

        work() {
            if (this.currentTaskIndex === this.tasks.length) {
                this.currentTaskIndex = 0;
            }
            console.log(`${this.name} is ${this.tasks[this.currentTaskIndex++]}.`);
        }

        collectSalary() {
            console.log(`${this.name} received ${this.salary} this month.`);
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = ["working on a simple task.", "taking time off work."];
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = [
                "working on a complicated task.",
                "taking time off work.",
                "supervising junior workers.",
                "working on a complicated task.",
            ];
        }
    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.dividend = 0;
            this.tasks = [
                "scheduled a meeting.",
                "is preparing a quarterly report.",
            ];
        }

        collectSalary() {
            console.log(`${this.name} received ${this.salary + this.dividend} this month.`);
        }
    }

    return {
        Employee,
        Junior,
        Senior,
        Manager,
    };
}

// Example usage
const classes = solution();
const junior = new classes.Junior("Ivan", 25);

junior.work();
junior.work();

junior.salary = 5811;
junior.collectSalary();

const senior = new classes.Senior("Alex", 31);

senior.work();
senior.work();
senior.work();
senior.work();

senior.salary = 12050;
senior.collectSalary();

const manager = new classes.Manager("Tom", 55);

manager.salary = 15000;
manager.collectSalary();
manager.dividend = 2500;
manager.collectSalary();
