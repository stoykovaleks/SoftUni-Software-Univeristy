function daysInaMonth(month, year){
    let date = new Date(year, month -1, 1);
    date.setMonth(date.getMonth() + 1);
    date.setDate(date.getDate() - 1);

    return date.getDate();
}

daysInaMonth(1, 2012)