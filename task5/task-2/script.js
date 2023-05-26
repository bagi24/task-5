//task -2
const body = document.querySelector("body");
const divCon = document.createElement("div");
const h2 = document.createElement("h2");
const ancor = document.createElement("a");

divCon.setAttribute("id", "card");
h2.textContent = " Gandalf";
ancor.textContent = "Go to Profile";
ancor.href = "#";

body.append(divCon);

divCon.append(h2, ancor);