document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.querySelector("#add");
    addButton.addEventListener("click", addTask);

    function addTask() {
        const taskName = document.querySelector("#task").value;
        const description = document.querySelector("#description").value;

        if (taskName.trim() === "" || description.trim() === "") {
            return;
        }

        const article = document.createElement("article");
        article.innerHTML = `
        <h3>${taskName}</h3>
        <p>${description}</p>
        <button class="start">Start</button>
        <button class="delete">Delete</button>
      `;

        const openTasks = document.querySelector(".open-tasks");
        openTasks.appendChild(article);

        document.querySelector("#task").value = "";
        document.querySelector("#description").value = "";

        const startButtons = document.querySelectorAll(".start");
        startButtons.forEach((button) => {
            button.addEventListener("click", startTask);
        });

        const deleteButtons = document.querySelectorAll(".delete");
        deleteButtons.forEach((button) => {
            button.addEventListener("click", deleteTask);
        });
    }

    function startTask(event) {
        const task = event.target.parentElement;
        const inProgressTasks = document.querySelector(".in-progress-tasks");
        inProgressTasks.appendChild(task);
        event.target.remove();
    }

    function deleteTask(event) {
        event.target.parentElement.remove();
    }

    function finishTask(event) {
        event.target.parentElement.remove();
    }
});
