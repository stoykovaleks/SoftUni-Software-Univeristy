class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (!name || !salary || !position || !department || salary < 0) {
            throw new Error("Invalid input!");
        }

        if (!this.departments[department]) {
            this.departments[department] = [];
        }

        this.departments[department].push({ name, salary, position });

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let bestDepartment = "";
        let bestAverageSalary = 0;

        for (const department in this.departments) {
            const employees = this.departments[department];
            const totalSalary = employees.reduce((acc, emp) => acc + emp.salary, 0);
            const averageSalary = totalSalary / employees.length;

            if (averageSalary > bestAverageSalary) {
                bestAverageSalary = averageSalary;
                bestDepartment = department;
            }
        }

        const sortedEmployees = this.departments[bestDepartment].sort((a, b) => {
            return b.salary - a.salary || a.name.localeCompare(b.name);
        });

        let result = `Best Department is: ${bestDepartment}\n`;
        result += `Average salary: ${bestAverageSalary.toFixed(2)}\n`;

        for (const employee of sortedEmployees) {
            result += `${employee.name} ${employee.salary} ${employee.position}\n`;
        }

        return result.trim();
    }
}

// Example usage:
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
