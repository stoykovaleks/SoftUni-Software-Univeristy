async function students() {
    const url = `http://localhost:3030/jsonstore/collections/students`;

    const table = document.getElementById("results");

    const response = await fetch(url);
    const data = await response.json();

    Object.values(data).forEach(stud => {
        const firstName = stud.firstName;
        const lastName = stud.lastName;
        const facultyNum = stud.facultyNumber;
        const grade = Number(stud.grade);

        const tr = document.createElement("tr");

        const firstNameCell = tr.insertCell(0);
        firstNameCell.innerText = firstName;

        const lastNameCell = tr.insertCell(1);
        lastNameCell.innerText = lastName;

        const facultyNumCell = tr.insertCell(2);
        facultyNumCell.innerText = facultyNum;

        const gradeCell = tr.insertCell(3);
        gradeCell.innerText = grade;

        table.appendChild(tr);
    });

    const submitBtn = document.getElementById("submit");

    submitBtn.addEventListener("click", onClickSubmit);

    async function onClickSubmit(e) {
        e.preventDefault();

        const firstNameInput = document.getElementsByName("firstName")[0];
        const lastNameInput = document.getElementsByName("lastName")[0];
        const facultyNumberInput = document.getElementsByName("facultyNumber")[0];
        const gradeInput = document.getElementsByName("grade")[0];

        if (isNaN(facultyNumberInput.value) || isNaN(gradeInput.value)){
            alert("Wrong input data");
        }

        if(firstNameInput.value !== "" && lastNameInput.value !== "" && facultyNumberInput.value !== "" && gradeInput.value !== ""){

            const response = await fetch(url,{
                method: "POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify({
                    firstName : firstNameInput.value,
                    lastName : lastNameInput.value,
                    facultyNumber : parseInt(facultyNumberInput.value),
                    grade : parseFloat(gradeInput.value),
                })
            });
            const tr = document.createElement("tr");
            
            const firstNameCell = tr.insertCell(0);
            firstNameCell.innerText = firstNameInput.value;
            
            const lastNameCell = tr.insertCell(1);
            lastNameCell.innerText = lastNameInput.value;
            
            const facultyNumCell = tr.insertCell(2);
            facultyNumCell.innerText = facultyNumberInput.value;
            
            const gradeCell = tr.insertCell(3);
            gradeCell.innerText = gradeInput.value;
            
            table.appendChild(tr);
            
            //Clear input fields
            firstNameInput.value="";
            lastNameInput.value="";
            facultyNumberInput.value="";
            gradeInput.value="";
        }
    }
}

students()
