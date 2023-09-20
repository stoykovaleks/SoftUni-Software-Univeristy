function personalTitles (input){
    let age = Number (input[0]);
    let male = input[1];

    if (male == 'm' && age >= 16){
        console.log ("Mr.");
    }
    else if (male == 'm' && age < 16){
        console.log ("Master");
    }
    else if (male == 'f' && age >= 16){
        console.log ("Ms.");
    }
    else if (male == 'f' && age < 16){
        console.log ("Miss");
    }
}