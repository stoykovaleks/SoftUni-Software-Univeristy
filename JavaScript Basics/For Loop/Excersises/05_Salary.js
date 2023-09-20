function salary(input) {

    let countOpenedTabs = Number(input.shift());
    let salary = Number(input.shift());

    for (let i = 0; i <= countOpenedTabs; i++) {

        let tab = String(input[i]);

        if (tab == "Facebook") {
            salary -= 150
        }

        if (tab == "Instagram") {
            salary -= 100
        }

        if (tab == "Reddit") {
            salary -= 50
        }


        if (salary <= 0) {
            console.log(`You have lost your salary.`)
            break;
        }
    }
    if (salary > 0){
        console.log (salary);
    }
}

salary (["3","500","Github.com","Stackoverflow.com","softuni.bg"])

