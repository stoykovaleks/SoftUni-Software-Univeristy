function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   const inputData = document.querySelector('#inputs textarea').value;
   restName = document.querySelector('#bestRestaurant p');
   const workerListRef = document.querySelector('#workers p');

   function onClick() {
      let info = JSON.parse(inputData.value);
      let result = {};
      for (const restorant of info) {
         let [restorantName, workersStr] = restorant.split(" - ");
         let workers = workersStr.split(", ");

         if (!info.hasOwnProperty(restorantName)) {
            result[restorantName] = {
               averageSalary: averageSallary(workers),
               bestSalary: averageSallary(),
               workers: workers,
            }
         }
         else {
            result[restorantName].workers = concatWorkers(result[restorantName].workers, workers);
            result[restorantName].averageSalary = averageSallary(result[restorantName].workers);
            result[restorantName].bestSalary = bestSalary(result[restorantName].workers);
         }
      }
      let sortRest = Object.entries(result).sort((a, b) => a[1].averageSalary - b[1].averageSalary)
      let bestRest = `Name: ${restorantName} Average Salary: ${bestSalary[1].averageSalary.toFixed(2)} Best Salary: ${bestSalary}`;
      let workerAsText = '';
      bestRest[1].workers.sort(sortWorkers).forEach(e => workerAsText += e);

   }

   function sortWorkers(workerA, workerB){
      let [nameA, salaryA] = workerA.split(" ");
      let [nameB,salaryB]=  workerB.split(" ");
      salaryA = Number(salaryA);
      salaryB = Number(salaryB);
      return salaryB - salaryA;
   }

   function concatWorkers(oldWorkers, newWorkers) {

      return oldWorkers.concat(newWorkers);
   }

   function calcBestSallary(workers) {
      let bestSalary = 0;
      workers.forEach(worker => {
         let [name, salary] = worker.split(" ");
         if (salary > bestSalary) {
            bestSalary = salary;
            return;
         }
      })
      return 0;
   }

   function averageSallary(workers) {
      let sum = 0;
      workers.forEach(worker => {
         let [name, salary] = worker.split(" ");
         sum += Number(salary);
      });
      return sum / workers.length;
   }
}