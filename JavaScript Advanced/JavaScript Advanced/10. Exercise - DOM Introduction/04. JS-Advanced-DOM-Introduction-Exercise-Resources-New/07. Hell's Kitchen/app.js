function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   const inputAreaEl = document.querySelector('#inputs>textarea');
   const bestRestaurantEl = document.querySelector('#bestRestaurant>p');
   const bestWorkersEl = document.querySelector('#outputs #workers p');


   function onClick() {
      let arr = JSON.parse(inputAreaEl.value);
      let restaurants = [];

      arr.forEach((line) => {
         const tokens = line.split(" - ");
         const name = tokens[0];
         const workerArr = tokens[1].split(", ");
         let workers = [];

         for (const worker of workerArr) {
            let workersToken = worker.split(" ");
            const salary = Number(workersToken[1]);
            worker.push({ name: workersToken[0], salary });
         }

         if (restaurants[name]) {
            workers.concat(restaurants[name].workers);
         }

         workers.sort((worker1, worker2) => worker2.salary - worker1.salary);
         let bestSalary = workers[0].salary;
         let avgSalary = workers.reduce((sum, worker) => sum + worker.salary, 0) / workers.length;
         restaurants[name] = {
            workers,
            avgSalary,
            bestSalary,
         };
      });
      let bestRestSalary = 0;
      let best = undefined;
      for (const name in restaurants) {
         if(restaurants[name].avgSalary > bestRestSalary){
            bestRestSalary = restaurants[name].avgSalary;
            best = {name, ...restaurants[name]}
         }
      }
      bestRestaurantEl.textContent = `Name: ${best.name} Average Salary: ${best.avgSalary.toFixed(2)} Best Salary: ${best.bestRestSalary.toFixed(2)}`
      let workersResult = [];
      best.workers.forEach((worker) => {
         workersResult.push(`Name: ${worker.name} With Salary: ${worker.salary}`);
      });
      bestWorkersEl.innerText = workersResult.join(" ")
   }
}