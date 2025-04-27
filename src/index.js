import './style.css';
import bannerImage from './asset/resource/banner-image.jpg';

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

const leftContainer = document.createElement("div");
leftContainer.classList.add("left-container");

const rightContainer = document.createElement("div");
rightContainer.classList.add("right-container");

const headline = document.createElement("h3");
headline.textContent = "Chill Out with the Creamiest Scoops in Town – Your Sweet Escape Awaits!";
headline.id = "headline";

const iceCreamBanner = new Image();
iceCreamBanner.src = bannerImage;
iceCreamBanner.id = "banner-image";

navHomeBtn.textContent = "Home";
navMenuBtn.textContent = "Menu";
navAboutBtn.textContent = "About";

nav.appendChild(navHomeBtn);
nav.appendChild(navMenuBtn);
nav.appendChild(navAboutBtn);

header.appendChild(logo);
header.appendChild(nav);
leftContainer.appendChild(headline);
rightContainer.appendChild(iceCreamBanner);
contentContainer.appendChild(leftContainer);
contentContainer.appendChild(rightContainer);
body.appendChild(header);
body.appendChild(contentContainer);