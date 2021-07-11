const loginForm = document.querySelector("#login-form"); // form받아옴
const loginInput = document.querySelector("#login-form input"); // input받아옴
const greeting = document.querySelector("#greeting"); // h1 받아옴

function painGreetings(userName) {
  // greeting보여주는 함수
  greeting.innerText = `Hello~! ${userName}`; // 보여지는 값
  greeting.classList.remove(HIDDEN_CLASSNAME); // greeting 숨김 해제
}

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

function onLoginSubmit(event) {
  event.preventDefault(); // 기본동작(새로고침 막아줌)
  const typedUserName = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME); // form 다시 숨김
  localStorage.setItem(USERNAME_KEY, typedUserName); // localStorage에 typedUserName이라는 value를 USERNAME_KEY라는 키값으로 넣음
  painGreetings(typedUserName); // greeting보여줌
}

const savedUserName = localStorage.getItem(USERNAME_KEY); // key값으로 검색해서 value가져옴
if (savedUserName === null) {
  // 입력 받기 전
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME); // form숨김
  loginForm.addEventListener("submit", onLoginSubmit); // 입력받으면 onLoginSubmit동작
} else {
  // 입력받은 후
  // show the greetings
  painGreetings(savedUserName); // greeting보여줌
}
