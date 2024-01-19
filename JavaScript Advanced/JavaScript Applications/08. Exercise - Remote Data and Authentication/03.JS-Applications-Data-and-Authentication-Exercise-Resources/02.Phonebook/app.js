
function attachEvents() {
    let url = `http://localhost:3030/jsonstore/phonebook`;

    const ul = document.getElementById("phonebook");
    const loadBtn = document.getElementById("btnLoad");
    const createBtn = document.getElementById('btnCreate');
    const personInputfield = document.getElementById("person");
    const phoneInputField = document.getElementById("phone");

    loadBtn.addEventListener("click", onLoadClick);
    createBtn.addEventListener("click", onClickCreate);

    async function onLoadClick() {
        const response = await fetch(url);
        const data = await response.json();

        Object.values(data).forEach(item => {
            const { person, phone, _id } = item;
            let li = document.createElement("li", `${person}: ${phone}`, ul);
            li.setAttribute("id", _id);
            const deleteBtn = createElement("button", "Delete", li)
            deleteBtn.setAttribute("id", "deleteBtn");
            deleteBtn.addEventListener("click", onClickDelete);
        });
    }

    async function onClickDelete(e) {
        const id = e.target.parentNode.id;
        e.target.parentNode.remove();

        const deleteResponse = await fetch(`${url}/${id}`,{
            method: "DELETE",
        });
    }

    async function clickCreatePerson() {
        if (person.value !== "" && phone.value !== "") {
            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ person: person.value, phone: phone.value })
            })
            ul.innerHTML = "";
            loadBtn.click();

            person.value = "";
            phone.value = "";
        }
    }

    function onClickCreate(type, text, appender) {
        const resultEl = document.createElement(type);

        resultEl.textContent = text;
        appender.appendChild(resultEl);

        return resultEl;
    }
}

attachEvents();