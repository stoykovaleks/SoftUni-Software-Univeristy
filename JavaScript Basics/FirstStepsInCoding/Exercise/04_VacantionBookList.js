function vacantionBookList(input){
    let pagesCount = Number (input[0]);
    let pages = Number (input[1]);
    let daysCount = Number (input[2]);

    let totalReadTime = pagesCount / pages;
    let neededHoursPerDay = totalReadTime / daysCount;
    console.log(neededHoursPerDay);
}

vacantionBookList(["212 ","20 ","2 "]);