const taskButton = document.getElementById('task-added-btn');

taskButton.addEventListener('click', function () {
  const inputValue = document.getElementById('task-field').value;
  displayTodo(inputValue);
});

const displayTodo = () => {
  const list = document.getElementById('list');
  const inputValue = document.getElementById('task-field').value;
  const lists = document.createElement('div');
  lists.innerHTML = `<div class="col-sm">${inputValue}</div>`;
  list.appendChild(lists);
};
