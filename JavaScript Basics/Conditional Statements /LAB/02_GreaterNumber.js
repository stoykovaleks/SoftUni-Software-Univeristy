function greaterNumber (input)
{
    let firstNum = Number (input[0]);
    let secNum = Number (input[1]);

    if (firstNum > secNum)
    {
        console.log(firstNum);
    }
    else
    {
        console.log(secNum);
    }
}

greaterNumber(['5,6'])