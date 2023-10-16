function calc() {
    let num1Input = document.getElementById('num1').value;
    let num2Input = document.getElementById('num2').value;
    let sumInput = document.getElementById('sum');

    let num1 = Number(num1Input); 
    let num2 = Number(num2Input);
    let sum = num1 + num2;

    sumInput.value = sum;
}
