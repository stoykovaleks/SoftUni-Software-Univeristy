function companyUsers(input){
    let companies = {};

    for (const data of input) {
        let [company, id] = data.split(" -> ");
        if(!companies.hasOwnProperty(company)){
            companies[company] = [];
        }
        companies[company].push(id);
    }
    let sorted = Object.entries(companies);
    sorted.sort();

    for (let [company, employees] of sorted) {
        console.log(company);
        for (let employee of employees) {
          console.log("--", employee);
        }
      }
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ])