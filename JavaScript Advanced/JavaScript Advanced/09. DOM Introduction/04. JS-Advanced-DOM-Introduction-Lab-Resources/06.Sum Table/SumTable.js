function sumTable() {
    let table = document.querySelectorAll('table, tr');
    let total = 0;

    for (let index = 0; index < table.length; index++) {
        let article = table[index].children;
        let cost = article[article.length - 1].textContent;
        total += Number(cost);
    }
    document.getElementById('sum').textContent = total;
}