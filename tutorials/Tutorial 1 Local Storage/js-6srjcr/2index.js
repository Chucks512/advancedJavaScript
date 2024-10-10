// import './index.css';

const localTodosContainer = document.getElementById('local-storage-todos-container');//local section div
const localInputEle = document.getElementById('local-storage-todo-input-ele');//text inputbox
const localAddTaskBtn = document.getElementById('local-storage-add-task-btn');//add button

function localcreateTodoLiElements(localtodoArray) {//takes in array, makes item elements
  return localtodoArray.map((i, index) => {//map = send one by one and run code
    const liElement = document.createElement('li');//item element creation
    const localcheckboxEle = document.createElement('input');// input(checkbox later) creation
    const labelEle = document.createElement('label');//text element

    localcheckboxEle.setAttribute('type', 'checkbox');//specify checkbox
    localcheckboxEle.setAttribute('id', `local-chbx-${index}`);//set id to text + id concatenation
    labelEle.setAttribute('for', `local-chbx-${index}`);//set id to text + id concatenation

    if (i.checked) {//verifies if checked
      localcheckboxEle.checked = true;//applies the same to frontend
      labelEle.classList.add('todo-task-done');//add to done-list
    }

    localcheckboxEle.addEventListener('click', (e) => {//add event listener
      const todoArr = JSON.parse(localStorage.getItem('codesweetlyStore'));//get local storage item json to String
      todoArr[e.target.getAttribute('id').split('-')[2]].checked =
        !todoArr[e.target.getAttribute('id').split('-')[2]].checked;//sets the checked property
      localStorage.setItem('codesweetlyStore', JSON.stringify(todoArr));//set backend to todoArr
      labelEle.classList.toggle('todo-task-done');//check the done checkbox
    });

    labelEle.textContent = i.text;//set text to component
    liElement.append(localcheckboxEle, labelEle);//send to front end
    return liElement;//return to whoever called
  });
}

window.addEventListener(
  'load',//add event listener on load
  (() => {
    const locallocalTodoArray =
      JSON.parse(localStorage.getItem('codesweetlyStore')) || [];//set all local storage items to array
    const todoLiElements = localcreateTodoLiElements(locallocalTodoArray);//create item elements for each
    localTodosContainer.replaceChildren(...todoLiElements);//replace front end items with backend items
    // Log the the local storage's zeroth index item's name to the console:
    console.log(localStorage.key(0));
  })()
);

localAddTaskBtn.addEventListener('click', () => {//listener to button
  const currentlocalTodoArray =
    JSON.parse(localStorage.getItem('codesweetlyStore')) || [];//set all local storage items to array
  const newlocalTodoArray = [
    ...currentlocalTodoArray,//append from already existing items
    { checked: false, text: localInputEle.value },// add new item with unchecked box
  ];
  const todoLiElements = localcreateTodoLiElements(newlocalTodoArray);//create item
  localStorage.setItem('codesweetlyStore', JSON.stringify(newlocalTodoArray));//set it to backend local storage
  localTodosContainer.replaceChildren(...todoLiElements);//replace frontend component children
  localInputEle.value = '';//reset input value to nothing
});




//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// import './index.css';

const sessionTodosContainer = document.getElementById('session-storage-todos-container');//local section div
const sessionInputEle = document.getElementById('session-storage-todo-input-ele');//text inputbox
const sessionAddTaskBtn = document.getElementById('session-storage-add-task-btn');//add button

function sessioncreateTodoLiElements(sessiontodoArray) {//takes in array, makes item elements
  return sessiontodoArray.map((i, index) => {//map = send one by one and run code
    const liElement = document.createElement('li');//item element creation
    const session = document.createElement('input');// input(checkbox later) creation
    const labelEle = document.createElement('label');//text element

    session.setAttribute('type', 'checkbox');//specify checkbox
    session.setAttribute('id', `session-chbx-${index}`);//set id to text + id concatenation
    labelEle.setAttribute('for', `session-chbx-${index}`);//set id to text + id concatenation

    if (i.checked) {//verifies if checked
      session.checked = true;//applies the same to frontend
      labelEle.classList.add('todo-task-done');//add to done-list
    }

    session.addEventListener('click', (e) => {//add event listener
      const todoArr = JSON.parse(sessionStorage.getItem('codesweetlyStore'));//get local storage item json to String
      todoArr[e.target.getAttribute('id').split('-')[2]].checked =
        !todoArr[e.target.getAttribute('id').split('-')[2]].checked;//sets the checked property
      sessionStorage.setItem('codesweetlyStore', JSON.stringify(todoArr));//set backend to todoArr
      labelEle.classList.toggle('todo-task-done');//check the done checkbox
    });

    labelEle.textContent = i.text;//set text to component
    liElement.append(session, labelEle);//send to front end
    return liElement;//return to whoever called
  });
}

window.addEventListener(
  'load',//add event listener on load
  (() => {
    const sessionsessionTodoArray =
      JSON.parse(sessionStorage.getItem('codesweetlyStore')) || [];//set all local storage items to array
    const todoLiElements = sessioncreateTodoLiElements(sessionsessionTodoArray);//create item elements for each
    sessionTodosContainer.replaceChildren(...todoLiElements);//replace front end items with backend items
    // Log the total items in the browser's session storage to the console:
    console.log(sessionStorage.length);
  })()
);

sessionAddTaskBtn.addEventListener('click', () => {//listener to button
  const currentsessionTodoArray =
    JSON.parse(sessionStorage.getItem('codesweetlyStore')) || [];//set all local storage items to array
  const newsessionTodoArray = [
    ...currentsessionTodoArray,//append from already existing items
    { checked: false, text: sessionInputEle.value },// add new item with unchecked box
  ];
  const todoLiElements = sessioncreateTodoLiElements(newsessionTodoArray);//create item
  sessionStorage.setItem('codesweetlyStore', JSON.stringify(newsessionTodoArray));//set it to backend local storage
  sessionTodosContainer.replaceChildren(...todoLiElements);//replace frontend component children
  sessionInputEle.value = '';//reset input value to nothing
});
