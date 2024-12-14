import pizzaImg from "../assets/img/pizzahd.png";
import flyingVegetable from "../assets/img/chilly.png"
import tomato from "../assets/img/tomato.png"

/**
 * load initial homepage conent
 */
export function loadHomePage(){
    //creating element of hero section
    const content = document.querySelector("#content");
    content.textContent = "" //clearing the content
    const heroSection = document.createElement("div");
    const leftHeroSectionDiv = document.createElement("div");
    const rightHeroSectionDiv = document.createElement("div");
    const headerText = document.createElement("h1");
    const subHeaderText = document.createElement("h3");
    const description = document.createElement("p");
    const checkMenuBtn = document.createElement("button");

    //writing content to the dom element & adding classes
    heroSection.classList.add("hero-section");
    leftHeroSectionDiv.classList.add("left-hero-section");
    rightHeroSectionDiv.classList.add("right-hero-section");
    headerText.textContent = "Savor the Taste of Authentic Pizza!";
    headerText.classList.add("header-text");
    subHeaderText.textContent = "Fresh Ingredients, Handcrafted with Love.";
    subHeaderText.classList.add("sub-header-text");
    description.textContent =
    "Handcrafted with the finest ingredients, loaded with gooey cheese, and baked to golden perfection. Order your slice of happiness now!";
    description.classList.add("description-text")
    checkMenuBtn.textContent = "view menu"
    checkMenuBtn.classList.add("cta-btn");

    //adding pizza image to righ hand side
    const image = document.createElement("img");
    image.src = pizzaImg;
    image.classList.add("pizza-img");
    rightHeroSectionDiv.appendChild(image);

    //adding flying tomatoes

    const flyingTomatoes = document.createElement("img");
    flyingTomatoes.src = flyingVegetable;
    flyingTomatoes.classList.add("flying-tomato");
    content.appendChild(flyingTomatoes)

    //adding tomato img
    const redTomato = document.createElement("img");
    redTomato.src = tomato;
    redTomato.classList.add("red-tomato");
    content.appendChild(redTomato)

    //attaching element to their corresponding DOM elt
    content.appendChild(heroSection);
    content.appendChild(checkMenuBtn)
    heroSection.appendChild(leftHeroSectionDiv);
    heroSection.appendChild(rightHeroSectionDiv);
    leftHeroSectionDiv.appendChild(headerText);
    leftHeroSectionDiv.appendChild(subHeaderText);
    leftHeroSectionDiv.appendChild(description);
}