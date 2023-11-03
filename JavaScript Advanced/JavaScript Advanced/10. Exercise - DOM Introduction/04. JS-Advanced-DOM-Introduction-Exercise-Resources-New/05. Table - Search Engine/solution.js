function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const inputFieldEl = document.getElementById("searchField");
   debugger
   function onClick() {
      Array.from(document.querySelectorAll("tbody, tr")).forEach((row) => {

         if (row.textContent.toLowerCase().includes(inputFieldEl.value.toLowerCase())) {
            row.classList.add("select");
         }
         else {
            row.classList.remove("select");
         }
      });
      inputFieldEl.value = "";
   }
}