window.onload = function () {
  const taskField = document.querySelector('#taskField');
  const addTaskBtn = document.querySelector('#addTaskBtn');
  const allTaskParent = document.querySelector('#allTask');

  taskField.addEventListener('keypress', function (event) {
    if (event.keyCode === 13) {
      createNewTask(allTaskParent, event.target.value);
      this.value = '';
    }
  });
};

function createNewTask(parent, task) {
  let col = create({ 'class ': 'col-sm-3' });
  let singleTask = create({ class: 'single-task' });
  singleTaskP = create('p');
  singleTaskP.innerHTML = task;
  singleTask.appendChild(singleTaskP);

  col.appendChild(singleTaskP);
  parent.appendChild(col);
}

window.create = function () {
  if (arguments.length === 0) {
    return document.createElement('div');
  }

  if (arguments.length === 1 && typeof arguments[0] != 'object') {
    return document.createElement(arguments[0]);
  }

  var tag = arguments[0];
  var attr = arguments[1] || arguments[0];

  if (arguments.length === 1 && typeof arguments[0] === 'object') {
    tag = 'div';
  }

  var element = document.createElement(tag);

  for (var i in attr) {
    element.setAttribute(i, attr[i]);
  }

  return element;
};
