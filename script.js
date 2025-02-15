const addBtn = document.querySelector(".add-btn");
const input = document.querySelector("#task-input");
const tasksContainer = document.querySelector(".tasks-continer");



addBtn.addEventListener("click", () => {
  let task = input.value;
  if (task.length > 0) {
  
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.classList.add("check");

    const taskName = document.createElement("span");
    taskName.innerText = task;
    taskName.classList.add("task");

    const deletBtn = document.createElement("button");
    deletBtn.innerText = "delet";
    deletBtn.classList.add("delete-btn");

    const tasks = document.createElement("li");
    tasks.classList.add("task-continer");
    tasks.appendChild(checkbox);
    tasks.appendChild(taskName);
    tasks.appendChild(deletBtn);

    console.log(tasks);

    const taskContainer = document.querySelector(".tasks-continer");
    taskContainer.appendChild(tasks);
  }

  input.value = "";
});

tasksContainer.addEventListener("click", function (el) {
   if(el.target.nodeName === "BUTTON") {
    const parent = el.target.parentNode;
    parent.remove();
   }
});