

const input = document.getElementById("taskInput");
const buttonAdd = document.getElementById("addTask");
const taskList = document.getElementById("taskList"); 

taskList.addEventListener('click', (e) => {
    
    if(e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();
    }
    if(e.target.checked) {
        e.target.previousElementSibling.style.textDecoration = 'line-through';
    }else{
        e.target.previousElementSibling.style.textDecoration = 'none';
    }
})

const addTask = () => {

    const task = input.value.trim();
    if(task) {
        const li = document.createElement("li");
        li.innerHTML = `
        <span>${task}</span><input type ='checkbox'><button>Delete</button>`;
        
        taskList.appendChild(li);
    };
    input.value = "";
}

buttonAdd.onclick = addTask;
