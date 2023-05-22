function highJump(input){

    let expectedHigh = Number(input[0]);

    let barHight =0;
    let jumpsCounter=0;
    
    for (let index = expectedHigh; index >= expectedHigh; index++) {
        
        let hightJumped = Number(input[index]);

        barHight = expectedHigh - 30;

        if (hightJumped > barHight){
            barHight+=5;
            jumpsCounter++;
        }

    }
    console.log (jumpsCounter)
}

highJump(["231","205","212","213","228","229","230","235"])