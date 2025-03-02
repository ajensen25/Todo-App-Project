const todoInput = document.querySelector('.todo-input');
const tasksList = document.querySelector('.tasks-list');
const clearAllButton = document.querySelector('.clear-all-button');

let tasksListHTML = '';

let tasks = JSON.parse(localStorage.getItem('todo-list')) || [];

// Adding todo input functionality
document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const inputValue = todoInput.value;
    if (!inputValue) {
      return
    }
    todoInput.value = '';
    createTask(inputValue);
    renderTaskList();
  }
});

// Function to create a task's HTML with an inputValue
function createTask(inputValue) {
  tasks.push(inputValue);
  localStorage.setItem('todo-list', JSON.stringify(tasks));
} 

// Function to render the tasksListHTML
function renderTaskList() {
  tasksListHTML = '';
  tasks.forEach((task) => {
    tasksListHTML += 
    `
      <div class="task">
        <div class="task-left">
          <input type="checkbox">
            <p>${task}</p>
        </div>
        <div class="task-right">
          <button>
            <i class="uil uil-ellipsis-h"></i>
          </button>
        </div>
      </div>
    `;
  });
  tasksList.innerHTML = tasksListHTML;
}




// Adding Clear All Tasks button functionality
clearAllButton.addEventListener('click', () => {
  tasks = [];
  localStorage.clear();
  renderTaskList();
})

// adding edit task functionality

renderTaskList();