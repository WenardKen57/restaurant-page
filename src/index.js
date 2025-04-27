import './style.css';

const body = document.querySelector("body");
const header = document.createElement("header");

const nav = document.createElement("nav");
const navHomeBtn = document.createElement("button");
const navMenuBtn = document.createElement("button");
const navAboutBtn = document.createElement("button");

navHomeBtn.textContent = "Home";
navMenuBtn.textContent = "Menu";
navAboutBtn.textContent = "About";

nav.appendChild(navHomeBtn);
nav.appendChild(navMenuBtn);
nav.appendChild(navAboutBtn);

header.appendChild(nav);
body.appendChild(header);