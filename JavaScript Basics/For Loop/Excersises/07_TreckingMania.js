function treckMania (input){

    let groupsCount = Number (input.shift());

    let musala = 0;
    let monblan = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;
    let totalPeoples = 0;

    for (let i = 0; i < groupsCount; i++) {
       let peoplesInGroup = Number(input[i]);
        
       totalPeoples += peoplesInGroup;

       if (peoplesInGroup <= 5){
        musala += peoplesInGroup;
       }
       else if (peoplesInGroup <= 12){
        monblan += peoplesInGroup;
       }
       else if (peoplesInGroup <= 25){
        kilimanjaro += peoplesInGroup;
       }
       else if (peoplesInGroup <= 40){
        k2 += peoplesInGroup;
       }
       else if (peoplesInGroup > 40){
        everest += peoplesInGroup;
       }

    }
    console.log ((musala / totalPeoples * 100).toFixed(2)+"%")
    console.log ((monblan / totalPeoples * 100).toFixed(2)+"%")
    console.log ((kilimanjaro / totalPeoples * 100).toFixed(2)+"%")
    console.log ((k2 / totalPeoples * 100).toFixed(2)+"%")
    console.log ((everest / totalPeoples * 100).toFixed(2)+"%")
}

treckMania (["10","10","5","1","100","12","26","17","37","40","78"])

