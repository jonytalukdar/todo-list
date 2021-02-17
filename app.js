const taskButton = document.getElementById('task-added-btn');

taskButton.addEventListener('click', function () {
  displayTodo();
  inputValue = '';
});

const displayTodo = () => {
  const list = document.getElementById('list');
  const inputValue = document.getElementById('task-field').value;
  const lists = document.createElement('div');
  lists.classList = 'col-md-3 card m-2 p-2 bg-primary text-white fs-5';
  lists.innerHTML = `${inputValue}`;
  list.appendChild(lists);
};

const list = document.getElementById('list');
list.addEventListener('click', function (e) {
  e.target.remove();
});

const save = localStorage.setItem('firstName', 'hello');
