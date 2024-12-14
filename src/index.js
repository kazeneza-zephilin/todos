import "./styles.css";
import { loadHomePage } from "./home";
import { loadMenu } from "./menu";
import { loadAboutPage } from "./about";

loadHomePage() //initial home page rendering

//attaching click handle to the button
const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");

homeBtn.addEventListener("click", loadHomePage);
menuBtn.addEventListener("click", loadMenu);
aboutBtn.addEventListener("click", loadAboutPage);