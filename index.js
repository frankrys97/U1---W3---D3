const taskInput = document.getElementById("input"); // Corrisponde al mio input

const addTaskBtn = document.getElementById("add"); // Corrisponde al bottone per l'aggiunta dell'input

const main = document.getElementById("main");

addTaskBtn.addEventListener("click", function (event) {
  event.preventDefault(); // L'ho inserito per evitare comportamenti del form di base

  const taskList = document.createElement("ul"); // Corrisponde alla lista non ordinata in cui inserirò le tasks
  const taskText = taskInput.value;
  if (taskText === "") {
    alert("Devi inserire un task");
  } else {
    const taskElement = document.createElement("li");
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
    taskList.appendChild(taskElement);

    const deleteBtn = taskList.querySelector(".deleteBtn");
    deleteBtn.addEventListener("click", function () {
      taskList.remove();
    });

    main.appendChild(taskList);
  }

  taskInput.value = "";
});
