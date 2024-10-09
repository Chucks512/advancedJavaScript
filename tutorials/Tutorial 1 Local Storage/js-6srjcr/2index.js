// import './index.css';

const localTodosContainer = document.getElementById(
  'local-storage-todos-container'
);
const localInputEle = document.getElementById('local-storage-todo-input-ele');
const localAddTaskBtn = document.getElementById('local-storage-add-task-btn');

function localcreateTodoLiElements(localtodoArray) {
  return localtodoArray.map((i, index) => {
    const liElement = document.createElement('li');
    const localcheckboxEle = document.createElement('input');
    const labelEle = document.createElement('label');

    localcheckboxEle.setAttribute('type', 'checkbox');
    localcheckboxEle.setAttribute('id', `local-chbx-${index}`);
    labelEle.setAttribute('for', `local-chbx-${index}`);

    if (i.checked) {
      localcheckboxEle.checked = true;
      labelEle.classList.add('todo-task-done');
    }

    localcheckboxEle.addEventListener('click', (e) => {
      const todoArr = JSON.parse(localStorage.getItem('codesweetlyStore'));
      todoArr[e.target.getAttribute('id').split('-')[2]].checked =
        !todoArr[e.target.getAttribute('id').split('-')[2]].checked;
      localStorage.setItem('codesweetlyStore', JSON.stringify(todoArr));
      labelEle.classList.toggle('todo-task-done');
    });

    labelEle.textContent = i.text;
    liElement.append(localcheckboxEle, labelEle);
    return liElement;
  });
}

window.addEventListener(
  'load',
  (() => {
    const locallocalTodoArray =
      JSON.parse(localStorage.getItem('codesweetlyStore')) || [];
    const todoLiElements = localcreateTodoLiElements(locallocalTodoArray);
    localTodosContainer.replaceChildren(...todoLiElements);
    // Log the the local storage's zeroth index item's name to the console:
    console.log(localStorage.key(0));
  })()
);

localAddTaskBtn.addEventListener('click', () => {
  const currentlocalTodoArray =
    JSON.parse(localStorage.getItem('codesweetlyStore')) || [];
  const newlocalTodoArray = [
    ...currentlocalTodoArray,
    { checked: false, text: localInputEle.value },
  ];
  const todoLiElements = localcreateTodoLiElements(newlocalTodoArray);
  localStorage.setItem('codesweetlyStore', JSON.stringify(newlocalTodoArray));
  localTodosContainer.replaceChildren(...todoLiElements);
  localInputEle.value = '';
});







// import './index.css';

const sessionTodosContainer = document.getElementById(
  'session-storage-todos-container'
);
const sessionInputEle = document.getElementById(
  'session-storage-todo-input-ele'
);
const sessionAddTaskBtn = document.getElementById(
  'session-storage-add-task-btn'
);

function sessioncreateTodoLiElements(sessiontodoArray) {
  return sessiontodoArray.map((i, index) => {
    const liElement = document.createElement('li');
    const session = document.createElement('input');
    const labelEle = document.createElement('label');

    session.setAttribute('type', 'checkbox');
    session.setAttribute('id', `session-chbx-${index}`);
    labelEle.setAttribute('for', `session-chbx-${index}`);

    if (i.checked) {
      session.checked = true;
      labelEle.classList.add('todo-task-done');
    }

    session.addEventListener('click', (e) => {
      const todoArr = JSON.parse(sessionStorage.getItem('codesweetlyStore'));
      todoArr[e.target.getAttribute('id').split('-')[2]].checked =
        !todoArr[e.target.getAttribute('id').split('-')[2]].checked;
      sessionStorage.setItem('codesweetlyStore', JSON.stringify(todoArr));
      labelEle.classList.toggle('todo-task-done');
    });

    labelEle.textContent = i.text;
    liElement.append(session, labelEle);
    return liElement;
  });
}

window.addEventListener(
  'load',
  (() => {
    const sessionsessionTodoArray =
      JSON.parse(sessionStorage.getItem('codesweetlyStore')) || [];
    const todoLiElements = sessioncreateTodoLiElements(sessionsessionTodoArray);
    sessionTodosContainer.replaceChildren(...todoLiElements);
    // Log the total items in the browser's session storage to the console:
    console.log(sessionStorage.length);
  })()
);

sessionAddTaskBtn.addEventListener('click', () => {
  const currentsessionTodoArray =
    JSON.parse(sessionStorage.getItem('codesweetlyStore')) || [];
  const newsessionTodoArray = [
    ...currentsessionTodoArray,
    { checked: false, text: sessionInputEle.value },
  ];
  const todoLiElements = sessioncreateTodoLiElements(newsessionTodoArray);
  sessionStorage.setItem('codesweetlyStore', JSON.stringify(newsessionTodoArray));
  sessionTodosContainer.replaceChildren(...todoLiElements);
  sessionInputEle.value = '';
});
