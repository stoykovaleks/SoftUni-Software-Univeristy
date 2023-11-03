function solve(){
  const inputText = document.getElementById("text").value;
  const convention = document.getElementById("naming-convention").value;
  const result = document.getElementById("result");

  if(convention !== "Camel Case" && convention !== "Pascal Case"){
    result.textContent = "Error!";
  }

  const inputAsWords = inputText.split(" ");

  inputAsWords.forEach((word, index) => {
    if(convention === "Camel Case"){
      word[index = word[0].toUpperCase() + word.slice(1)];
    }
    else {
      word[index] = word[0].toUpperCase() + word.slice(1);
    }
  });

  result.textContent = inputAsWords.join("")
}