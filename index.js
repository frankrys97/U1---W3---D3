const taskInput = document.getElementById("input"); // Corrisponde al mio input

const addTaskBtn = document.getElementById("add"); // Corrisponde al bottone per l'aggiunta dell'input

const main = document.getElementById("main");

addTaskBtn.addEventListener("click", function (event) {
  event.preventDefault(); // L'ho inserito per evitare comportamenti del form di base

  const taskContainer = document.createElement("div"); // Corrisponde alla lista non ordinata in cui inserirò le tasks
  const taskText = taskInput.value;
  if (taskText === "") {
    alert("Devi inserire un task");
  } else {
    const taskElement = document.createElement("p");
    taskElement.classList.add("task");
    taskElement.innerHTML = `
        <span>${taskText}</span>
        <span>
            <button class="deleteBtn"><i class="fas fa-trash-alt"></i></button>
        </span>
    `;
    taskElement.addEventListener("click", function () {
      if (taskElement.style.textDecoration === "line-through") {
        taskElement.style.textDecoration = "none";
      } else {
        taskElement.style.textDecoration = "line-through";
      }
    });
    taskContainer.appendChild(taskElement);

    const deleteBtn = taskContainer.querySelector(".deleteBtn");
    deleteBtn.addEventListener("click", function () {
      taskContainer.remove();
    });

    main.appendChild(taskContainer);
  }

  taskInput.value = "";
});
