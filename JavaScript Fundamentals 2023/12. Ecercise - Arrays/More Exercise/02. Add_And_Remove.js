function addAndRemove (array){
    let num = 1;
    let nums = [];

    for (let index = 0; index < array.length; index++) {
        if (array[index] === "add"){
            nums.push(num);
        }
        else if(array[index] === "remove"){
            nums.pop();
        }
        num++;
    }
    if (nums <= 0){
        console.log("Empty");
    }
    else{
        console.log(nums.join(" "));
    }
}

addAndRemove(['add', 'add', 'add', 'add'])