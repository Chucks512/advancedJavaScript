//import './index.css';


const localTodoTasksArray = [];
const localTodosContainer = document.getElementById('local-storage-todos-container');//list
const localInputEle = document.getElementById('local-storage-todo-input-ele');//inputbox
const localAddTaskBtn = document.getElementById('local-storage-add-task-btn');//button
// local storage above, session storage below---------------------------------------
const sessionTodoTasksArray = [];
const sessionTodosContainer = document.getElementById('session-storage-todos-container');//list
const sessionInputEle = document.getElementById('session-storage-todo-input-ele');//inputbox
const sessionAddTaskBtn = document.getElementById('session-storage-add-task-btn');//button



//function is below below-----------------------------------------------------------------
function createTodoLiElements(todoArray, sectionType) {
  // Return an array of <li> elements
  // Example:
  // [
  //   <li>
  //     <input type="checkbox" id="local-chbx-0" />
  //     <label for="local-chbx-0">Dance</label>
  //   </li>,
  //   <li>
  //     <input type="checkbox" id="local-chbx-1" />
  //     <label for="local-chbx-1">Sing</label>
  //   </li>
  // ]
  return todoArray.map((i, index) => {
    // Create 3 elements:
    const liElement = document.createElement('li');
    const checkboxEle = document.createElement('input');
    const labelEle = document.createElement('label');

    // Add 2 attributes to the <input> element:
    checkboxEle.setAttribute('type', 'checkbox');
    checkboxEle.setAttribute('id', `${sectionType}-chbx-${index}`);

    // Add 1 attribute to the <label> element:
    labelEle.setAttribute('for', `${sectionType}-chbx-${index}`);//for = which form is parent

    // Add a click event to the <input> element:
    checkboxEle.addEventListener('click', (e) => {
      todoArray[e.target.getAttribute('id').split('-')[2]].checked =
        !todoArray[e.target.getAttribute('id').split('-')[2]].checked;
      labelEle.classList.toggle('todo-task-done');
    });

    labelEle.textContent = i.text; // Add text to the <label> element
    liElement.append(checkboxEle, labelEle); // Put <input> and <label> inside the <li>
    return liElement;
  });
}




//logic is below below-----------------------------------------------------------------
// Add a click event to the Local section's button:
localAddTaskBtn.addEventListener('click', () => {
  const newTodoInfo = { checked: false, text: localInputEle.value };
  localTodoTasksArray.push(newTodoInfo);

  const todoLiElements = createTodoLiElements(localTodoTasksArray, 'local');//main function fired
  localTodosContainer.replaceChildren(...todoLiElements);
  localInputEle.value = '';
});
// local storage above, session storage below---------------------------------------
// Add a click event to the Session section's button:
sessionAddTaskBtn.addEventListener('click', () => {
  const newTodoInfo = { checked: false, text: sessionInputEle.value };
  sessionTodoTasksArray.push(newTodoInfo);

  const todoLiElements = createTodoLiElements(sessionTodoTasksArray, 'session');//main function fired
  /*
  test both storages first
  get initial upload if list is existent - use onload(), try using it in js this time... body/document.onload()...
  use chbx event listener to change whats in storage
  per new item, reload from storage
  */
  sessionTodosContainer.replaceChildren(...todoLiElements);
  sessionInputEle.value = '';
});
/*
//input box, to storage, to frontEnd
//onload first







// Store myBio object inside the browser's session storage object:
sessionStorage.setItem("myBio", { name: "Oluwatobi" });
// Log the session storage object to the console:
console.log(sessionStorage);
// The invocation above will return:
{myBio: "[object Object]", length: 1}
//___________________________________________________________
//---------------------------------------------------------||
// Store myBio object inside the browser's session storage object:
sessionStorage.setItem("myBio", JSON.stringify({ name: "Oluwatobi" }));
// Log the session storage object to the console:
console.log(sessionStorage);
// The invocation above will return:
{myBio: '{"name":"Oluwatobi"}', length: 1}

//notations
sessionStorage.bestColor = "Green";
sessionStorage["bestColor"] = "Green";
sessionStorage.setItem("bestColor", "Green");

//functions applied
webStorageObject.setItem(key, value); //whatever storage you want
webStorageObject.key(index);
webStorageObject.getItem(key);
webStorageObject.length;
webStorageObject.removeItem(key);
webStorageObject.clear();

//functions named
setItem()
key()
getItem()
length
removeItem()
clear()
*/