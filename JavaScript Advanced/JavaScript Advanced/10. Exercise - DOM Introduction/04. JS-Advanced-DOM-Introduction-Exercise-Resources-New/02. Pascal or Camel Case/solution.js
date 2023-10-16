function solve() {
  let text = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;

  let result = '';
  switch (convention) {
    case "Camel Case":
      let convertedWord = text.toLowerCase().split(" ");
      result += convertedWord.shift();
      convertedWord.forEach(element => {
      result += element[0].toUpperCase() + element.substring(1);
      });
      break;

    case "Pascal Case":
      text.toLowerCase()
      .split(" ")
      .forEach(element => 
      result += element[0].toUpperCase() + element.substring(1), {

      });
      break;
      
    // default:
    //   return 'Error';
  }
  document.getElementById('result').textContent = result;
}