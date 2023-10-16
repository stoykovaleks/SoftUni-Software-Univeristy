function search() {
   let searchedField = document.getElementById('searchText').value;
   let target = document.querySelectorAll('towns, li');
   let counter = 0;

   target.forEach(target => {
      if (target.textContent.includes(searchedField)) {
         target.style.fontWeight = 'bold';
         target.style.textDecoration = 'underline';
         counter++;

         return;
      }
      else {
         target.style.fontWeight = '';
         target.style.textDecoration = 'none';
      }
   });
   document.getElementById('result').textContent = `${counter} matches found.`;
}  
