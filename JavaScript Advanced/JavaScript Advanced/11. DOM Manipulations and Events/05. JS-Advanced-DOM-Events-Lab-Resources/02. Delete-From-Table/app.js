function deleteByEmail() {
    const email = document.getElementsByName("email")[0].value.trim();
    const emailCells = document.querySelectorAll("#customers, td:nth-child(2)");
    const result = document.getElementById("result");
    let res = false;

    for (const data of emailCells) {

        if (data.textContent === email) {
            data.parentElement.remove();
            res = true;
        }
    }

    if (res === true) {
        result.textContent = "Deleted."
    }
    else {
        result.textContent = "Not found."
    }
    email.value = "";
}