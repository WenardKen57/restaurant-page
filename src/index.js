import './style.css';

const body = document.querySelector("body");
const header = document.createElement("header");

const logo = document.createElement("h1");
logo.textContent = "Resto Ice";

const nav = document.createElement("nav");
const navHomeBtn = document.createElement("button");
const navMenuBtn = document.createElement("button");
const navAboutBtn = document.createElement("button");

const contentContainer = document.createElement("div");
contentContainer.setAttribute("id", "content");

navHomeBtn.textContent = "Home";
navMenuBtn.textContent = "Menu";
navAboutBtn.textContent = "About";

nav.appendChild(navHomeBtn);
nav.appendChild(navMenuBtn);
nav.appendChild(navAboutBtn);

header.appendChild(logo);
header.appendChild(nav);
body.appendChild(header);
body.appendChild(contentContainer);