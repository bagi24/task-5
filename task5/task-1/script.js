//task -1

const body = document.querySelector("body");
const btnEl = document.createElement("button");
const divEl = document.createElement("div");

btnEl.setAttribute("id", "btn");
divEl.setAttribute("id", "div");

divEl.textContent = "Holla baby ";
btnEl.innerText = " Click me";

body.append(divEl, btnEl);

const handleClick = (e) => {
  e.preventDefault();
  divEl.remove();
};

btnEl.addEventListener("click", handleClick);


