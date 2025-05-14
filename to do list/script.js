// Add a task
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  const taskList = document.getElementById('taskList');
  const li = document.createElement('li');

  const span = document.createElement('span');
  span.textContent = taskText;

  const actions = document.createElement('div');
  actions.className = 'actions';

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.className = 'edit-btn';
  editBtn.onclick = function () {
    editTask(span);
  };

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete-btn';
  deleteBtn.onclick = function () {
    li.classList.add('fade-out');
    setTimeout(() => {
      li.remove();
    }, 500); // wait for animation
  };

  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(actions);

  taskList.appendChild(li);
  taskInput.value = '';
}

// Edit task
function editTask(spanElement) {
  const newTask = prompt('Edit your task:', spanElement.textContent);
  if (newTask !== null) {
    spanElement.textContent = newTask.trim();
  }
}

