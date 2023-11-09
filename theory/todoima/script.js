const addTaskBtn = document.getElementById("add_task");
const descInput = document.getElementById("description");
const todosItems = document.getElementById("items");
const title = document.getElementById("title");
const inputBlock = document.getElementById("form");

let tasks = [];
let todoItemElems = [];

addTaskBtn.disabled = true;

!localStorage.tasks
  ? (tasks = [])
  : (tasks = JSON.parse(localStorage.getItem("tasks")));

function Task(text) {
  this.name = text;
  this.value = false;
}

const filterTasks = () => {
  tasks.sort((a, b) => (a.value > b.value ? 1 : -1));
};

filterTasks();

const getMaxOrder = () => {
  const currentOrders = Array.from(todosItems.children).map(
    (e) => +e.style.order
  );
  const currentMaxOrder = Math.max.apply(null, currentOrders);
  return currentMaxOrder + 1;
};

const onCheck = (event) => {
  const checkbox = event.currentTarget;
  const parent = checkbox.closest("li");
  const elementIndex = findElementIndex(parent);
  const value = event.target.checked;

  const order = value ? getMaxOrder() : 0;
  parent.style.order = order.toString();

  tasks[elementIndex].value = value;
  tasks[elementIndex].order = order;
  updateLocaleStorage();
};

const deleteTask = (event) => {
  const deleteButton = event.currentTarget;
  const parent = deleteButton.closest("li");
  const elementIndex = findElementIndex(parent);
  deleteButton.removeEventListener("click", deleteTask);
  const checkbox = parent.querySelector("input");
  checkbox.removeEventListener("change", onCheck);
  tasks.splice(elementIndex, 1);
  updateLocaleStorage();
  isEmpty();
  parent.remove();
};

const createTemplate = (name, value = false) => {
  const wrapper = document.createElement("li");
  wrapper.classList.add("item");
  const text = document.createElement("p");
  text.innerText = name;
  wrapper.appendChild(text);

  const containerButton = document.createElement("div");
  containerButton.classList.add("buttons");
  wrapper.appendChild(containerButton);

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("btn_delete");
  deleteButton.innerText = "delete";
  deleteButton.addEventListener("click", deleteTask);
  containerButton.appendChild(deleteButton);

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("btn_complete");
  checkbox.checked = value;
  checkbox.addEventListener("change", onCheck);
  containerButton.appendChild(checkbox);

  return wrapper;
};

const findElementIndex = (element) =>
  Array.from(document.querySelector("#items").children).indexOf(element);

const addToList = () => {
  todosItems.innerHTML = "";
  if (tasks.length > 0) {
    const list = document.querySelector("#items");
    tasks.forEach(({ name, value }) =>
      list.appendChild(createTemplate(name, value))
    );
    todoItemElems = document.querySelectorAll(".item");
  }
};

addToList();

const updateLocaleStorage = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

function isEmpty() {
  if (!localStorage.tasks || localStorage.tasks === "[]") {
    title.classList.add("hideTitle");
  } else {
    title.classList.remove("hideTitle");
  }
}

isEmpty();

const insertTask = ({ name, value = false }) =>
  todosItems.insertAdjacentElement("beforeend", createTemplate(name, value));

inputBlock.addEventListener("submit", (event) => {
  tasks.push(new Task(descInput.value));
  event.preventDefault();
  const name = descInput.value;
  updateLocaleStorage();
  insertTask({ name });
  descInput.value = "";
  addTaskBtn.disabled = true;
  isEmpty();
});

descInput.addEventListener("input", () => {
  if (descInput.value === " ") {
    descInput.value = "";
  }
  if (descInput.value === "") {
    addTaskBtn.disabled = true;
  } else {
    addTaskBtn.disabled = false;
  }
});