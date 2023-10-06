function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let searchedField = document.getElementById('searchedField');
   let tableRow = Array.from(document.querySelectorAll('tbody, tr'));

   function onClick() {
      let searchText = searchedField.value;

      for (const row of tableRow) {
         let tableData = row.querySelectorAll('td');

         for (const td of tableData) {

            if (td.textContent.includes(searchText)) {
               row.classList.add('select');
               break;
            }
            else {
               row.classList.remove('select');
            }
         }
      }
   }
}