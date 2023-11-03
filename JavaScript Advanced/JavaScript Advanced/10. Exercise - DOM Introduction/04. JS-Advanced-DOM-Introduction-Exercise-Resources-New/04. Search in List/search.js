function search() {
   const listItems = Array.from(document.querySelectorAll("#towns li"));
   const inputFieldEl = document.querySelector("#searchText")
   const resultEl = document.querySelector("#result");

   let counter = 0;

   listItems.forEach((el) => {
      if (el.textContent.includes(inputFieldEl.value)) {
         el.style.fontWeight = "bold";
         el.style.textDecoration = "underline";
         counter++;
      }
      else {
         el.style.fontWeight = "normal";
         el.style.textDecoration = "none";
      }
   });
   resultEl.textContent = `${counter} matches found`;
}