function employees(input) {

    let employeesObj = {};

    for (const name of input) {
        employeesObj[name] = name.length;
    }
    for (const name in employeesObj) {
       console.log(`Name: ${name} -- Personal Number: ${employeesObj[name]}`);
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])
console.log("--------");
employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
])