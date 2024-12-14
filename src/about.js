export function loadAboutPage() {
    const content = document.querySelector("#content");
    content.textContent = "" //clearing the conent
    const aboutUs = document.createElement("h2");
    const description = document.createElement("p");

    aboutUs.classList.add("about-us-title");
    aboutUs.textContent = "About us";
    description.classList.add("about-description");
    description.textContent =
        "Welcome to Pizza Haven, where every slice is crafted with love and fresh ingredients! From our handmade dough to bold toppings, we serve up delicious pizzas for every occasion. Pair your favorite pie with savory sides and desserts for a meal you’ll crave again and again. Stop by today – happiness is just a slice away!";
    content.appendChild(aboutUs);
    content.appendChild(description);
}
