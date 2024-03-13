const taskInput = document.getElementById("input"); // Corrisponde al mio input

const addTaskBtn = document.getElementById("add"); // Corrisponde al bottone per l'aggiunta dell'input

const main = document.getElementById("main");

addTaskBtn.addEventListener("click", function (event) {
  event.preventDefault(); // L'ho inserito per evitare comportamenti del form di base

  const taskContainer = document.createElement("div"); // Corrisponde al div in cui inserirò le tasks
  const taskText = taskInput.value;
  if (taskText === "") {
    alert("Devi inserire un task");
  } else {
    const taskElement = document.createElement("p");
    taskElement.classList.add("task");
    taskElement.innerHTML = `
    <span class="task-text">${taskText}</span>
    <span class="completed-label">Completato</span>
    <span>
        <button class="deleteBtn"><i class="fas fa-trash-alt"></i></button>
    </span>
`;

const taskTextElement = taskElement.querySelector(".task-text");
const completedLabel = taskElement.querySelector(".completed-label");
completedLabel.style.fontWeight = "bold";
completedLabel.style.color = "green";
completedLabel.style.display = "none";

taskElement.addEventListener("click", function () {
  if (taskTextElement.classList.contains("completed")) { // Se in textElement è presente la classe completed
    // quindi la classe dello span con COMPLETATO all'interno, allora fai le seguenti operazioni:
    taskTextElement.classList.remove("completed"); // Rimuovi il completed
    taskTextElement.style.textDecoration = "none"; // Togli qualsiasi segno dal testo
    completedLabel.style.display = "none"; 
  } else { // Altrimenti fammi tutto questo
    taskTextElement.classList.add("completed"); // Aggiungilo
    taskTextElement.style.textDecoration = "line-through";
    completedLabel.style.display = "inline"
  }
});

const deleteBtn = taskElement.querySelector(".deleteBtn");
deleteBtn.addEventListener("click", function () {
  taskContainer.remove();
});

taskContainer.appendChild(taskElement);
main.appendChild(taskContainer);
  }

  taskInput.value = "";
});
