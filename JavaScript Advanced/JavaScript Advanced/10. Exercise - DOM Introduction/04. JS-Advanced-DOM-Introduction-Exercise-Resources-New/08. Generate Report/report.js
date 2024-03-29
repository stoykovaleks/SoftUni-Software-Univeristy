function generateReport() {
    const outputEl = document.querySelector("#output");
    const result = [];
    const checks = Array.from(document.querySelectorAll("thead tr th input"));
    const trs = Array.from(document.querySelectorAll("tbody tr"));

    trs.forEach(row => {
        const curr = {};
        Array.from(row.querySelectorAll("td")).forEach((x, i) => {
            if(checks[i].checked){
                curr[checks[i].name] = x.textContent;
            }
        });
        result.push(curr)
    })

    outputEl.value = JSON.stringify(result);
}