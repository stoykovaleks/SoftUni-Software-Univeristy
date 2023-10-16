function AddRemoveEl(commands) {
    let n = 1;
    let array = [];

    for (const command of commands) {
        if (command === 'add') {
            array.push(n);
            n++;
        }
        else if (command === 'remove') {
            array.pop();
            n++;
        }
    }
    if (array.length <= 0) {
        console.log("Empty");
    }
    else {
        for (const data of array) {
            console.log(data);
        }
    }
}
AddRemoveEl([
    'add',
    'add',
    'add',
    'add']
)