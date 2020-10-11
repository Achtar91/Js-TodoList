//Selectors
const todoInput = document.querySelector(".todoInput");
const todoBtn = document.querySelector(".todoBtn");
const todoCont = document.querySelector(".todo-container");
const todoList = document.querySelector(".todoList");
const todoFilter = document.querySelector(".todo-select");
//eventsLisner
todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', delcheck);
todoFilter.addEventListener('click',filterOption);
//Functions
function addTodo(event) {   
   //prevent page from refresh
   event.preventDefault();
   //todo Div
   const todoDiv = document.createElement("div");
   todoDiv.classList.add("todoDiv");
   //Add new element
   const newElement = document.createElement("li");
   newElement.classList.add("newElement");
   newElement.innerText = todoInput.value;
   todoDiv.appendChild(newElement);
   //Check Button
   const checkBtn = document.createElement("button") ;
   checkBtn.classList.add("checkBtn");
   checkBtn.innerHTML = '<i class="fas fa-check"></i>';
   todoDiv.appendChild(checkBtn);
   //Trash Button
   const trashBtn = document.createElement("button");
   trashBtn.classList.add("trashBtn");
   trashBtn.innerHTML  = '<i class="fas fa-trash"></i>';
   todoDiv.appendChild(trashBtn);
   //add TodoDiv to Todolist
   todoList.appendChild(todoDiv);
   //clear input
   todoInput.value = " ";
}


function delcheck(e) {
    const item =  e.target;
    console.log(item);
    //delete item;
    if(item.classList[0] === "trashBtn") {
        const trash = item.parentElement;
        trash.classList.add("fall");
        trash.addEventListener("transitionend", function() {
            trash.remove();
        });
        
    }

    if(item.classList[0] === "checkBtn") {
        const check = item.parentElement;
        check.classList.toggle("checked");

    }

}


function filterOption(e) {
    const nodes = todoList.childNodes;
    nodes.forEach(function(todo) {
        switch(e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "checked":
                if(todo.classList.contains("checked")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "unchecked" :
                if(!todo.classList.contains("checked")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display =  "none";
                }
                break;
        }

    });


}