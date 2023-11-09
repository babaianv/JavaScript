
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("items");

addTaskBtn.addEventListener("click", () => {

  const list = document.createElement("li");
  const paragraph = document.createElement("p");
  const deleteBtn = document.createElement("button");
  const checkbox = document.createElement("input" );
  
  deleteBtn.textContent = "Delete";
  paragraph.textContent = taskInput.value;
  checkbox.type = "checkbox";
  deleteBtn.classList.add("button");
  checkbox.classList.add("checkbox");

  checkbox.addEventListener("change", () => {
    
    if(checkbox.checked) {
        paragraph.classList.add("text_modify");
    }else {
        paragraph.classList.remove("text_modify");
    }

  });


  deleteBtn.addEventListener("click", () => {
    list.remove();
});
  
  list.appendChild(paragraph);
  list.appendChild(checkbox);
  list.appendChild(deleteBtn);
  taskList.appendChild(list);


  taskInput.value = "";

});







