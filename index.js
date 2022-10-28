function changeTheme() {
  let body = document.querySelector("body");
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
  }
}
let themeButton = document.querySelector(".theme-button");
themeButton.addEventListener("click", changeTheme);
function reading() {
  let name = prompt("What is your First Name?");
  let email = prompt("Enter your email Address!");
  alert(" Thanks! We'll be in Touch soon with more details by email!");
}
let teach = document.querySelector(".learn");
teach.addEventListener("click", reading);
