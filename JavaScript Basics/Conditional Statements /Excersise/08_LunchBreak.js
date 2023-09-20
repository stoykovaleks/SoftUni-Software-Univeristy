function lunchBreak(input){
    let serialName = input[0];
    let episodeLenght = Number (input[1]);
    let breakTime = Number (input[2]);

    let lucnkTime = breakTime * (1 / 8);
    let restTime = breakTime * (1 / 4);
    let leftTime = breakTime - lucnkTime - restTime;

    if (leftTime <= episodeLenght){
        console.log(`You don't have enough time to watch ${serialName}, you need ${Math.ceil(episodeLenght - leftTime)} more minutes."`)
    }
    else{
        console.log(`You have enough time to watch ${serialName} and left with ${Math.ceil(leftTime - episodeLenght)} minutes free time."`)

    }
}

lunchBreak(["Teen Wolf","48","60"])

