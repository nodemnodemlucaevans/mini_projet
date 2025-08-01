// Charger les tâches
window.onload = () => {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(addTaskToList);
};

function addTask() {
  let input = document.getElementById("taskInput");
  let text = input.value.trim();
  if (text === "") return;

  addTaskToList(text);
  saveToLocalStorage(text);
  input.value = "";
}

function addTaskToList(text) {
  let li = document.createElement("li");
  li.innerHTML = `<span>${text}</span> <button onclick="removeTask(this)">X</button>`;
  document.getElementById("taskList").appendChild(li);
}

function removeTask(btn) {
  let li = btn.parentElement;
  let task = li.querySelector("span").textContent;
  li.remove();
  removeFromLocalStorage(task);
}

function saveToLocalStorage(task) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeFromLocalStorage(task) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter(t => t !== task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
