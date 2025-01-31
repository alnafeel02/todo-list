
const addButton = document.getElementById('add-btn');
const inputField = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

addButton.addEventListener('click', addTodo);
inputField.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    addTodo();
  }
});
function addTodo() {
  const todoText = inputField.value.trim();
  
  if (todoText === '') {
    return; 
  }


  const li = document.createElement('li');


  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

const taskText = document.createElement("span");
  taskText.textContent = todoText;

 
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.addEventListener('click', () => {
    li.remove();
  });

   checkbox.addEventListener("change", () => {
     if (checkbox.checked) {
       li.classList.add("completed");
     } else {
       li.classList.remove("completed");
     }
   });

  li.appendChild(checkbox);
  li.appendChild(taskText);
  li.appendChild(deleteBtn);
   todoList.appendChild(li);

  
  inputField.value = '';
}
