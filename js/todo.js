const toDoForm = document.querySelector("form#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("ul#todo-list");

function deleteTodo(e) {
  const li = e.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDoItem) => toDoItem.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const btn = document.createElement("button");
  btn.innerText = "✔";
  btn.addEventListener("click", deleteTodo);

  li.appendChild(span);
  li.appendChild(btn);
  toDoList.appendChild(li);
}

function handleToDoSubmit(e) {
  e.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

let toDos = [];
const TODOS_KEY = "toDos";

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //string으로 변경
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos); //array로 변경
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

function sexyFilter(item) {
  return item.id !== 3;
}

[1, 2, 3, 4].filter(sexyFilter);
