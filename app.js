const taskButton = document.getElementById('task-added-btn');

taskButton.addEventListener('click', function () {
  displayTodo();
});

const displayTodo = () => {
  const list = document.getElementById('list');
  const inputValue = document.getElementById('task-field').value;
  const lists = document.createElement('div');
  lists.classList = 'col-md-3 card m-2 p-2';
  lists.innerHTML = `${inputValue} ${today}`;
  list.appendChild(lists);
};
