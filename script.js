let taskList = [];

function addTask() {
  const name = document.getElementById("taskName").value;
  const priority = document.getElementById("priority").value;

  if (name.trim() === "") return alert("Please enter task!");

  taskList.push({ name, priority: parseInt(priority) });
  taskList.sort((a, b) => a.priority - b.priority);

  document.getElementById("taskName").value = "";
  displayTasks();
}

function displayTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  taskList.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = getPriorityClass(task.priority);
    li.innerText = task.name;

    li.onclick = () => {
      taskList.splice(index, 1);
      displayTasks();
    };

    list.appendChild(li);
  });
}

function getPriorityClass(priority) {
  if (priority === 1) return "high";
  if (priority === 2) return "medium";
  return "low";
}
