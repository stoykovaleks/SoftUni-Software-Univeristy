function partyTime(input){
    let vip = [];
    let regular = [];

    let command = input.shift();

    while(command !== "PARTY"){
        let firstSymb = command[0];

        if(firstSymb >= 0 || firstSymb < 10){
            firstSymb = isNaN;
        }
        if(firstSymb === isNaN){
            vip.push(command);
        }
        else{
            regular.push(command);
        }
        command = input.shift();
    }
    let guestsCount = vip.concat(regular);

    for (const guest of input) {
        if(guestsCount.includes(guest)){
            guestsCount.splice(guestsCount.indexOf(guest),1);
        }
    }

    console.log(guestsCount.length);
    guestsCount.forEach(guest => console.log(guest));
}

partyTime([
'7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
])