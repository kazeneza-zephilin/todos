import botttomPizaa from "../assets/img/chilly.png";

export function loadMenu(){
    function renderMenu(){
        //rendering to UI
        const contentDiv = document.querySelector("#content");
        contentDiv.textContent = ""; //clearing content
        //loading floating bottom image
        const pizzaFloatImg = document.createElement("img");
        pizzaFloatImg.src = botttomPizaa;
        pizzaFloatImg.classList.add("bottom-pizza-img");
        contentDiv.appendChild(pizzaFloatImg);

        const menuItems = []
        
        function makeMenuItem(name, toppings, price){
            return {name, toppings, price}
        }
        
        function addToMenu(product){
            menuItems.push(product)
        }
        
        function displayMenu(){
            for (let item of menuItems){
                const toppings = item.toppings.join(", ");
                const menuDiv = document.createElement("div");
                menuDiv.classList.add("menu-div");
                const productName = document.createElement("p");
                productName.classList.add("product-name");
                const toppingWithPrice = document.createElement("p");
                toppingWithPrice.id = "topping-price"
                productName.textContent = item.name.toUpperCase();
                toppingWithPrice.textContent = `${toppings} 
                .................................................... $${item.price}`;
                menuDiv.appendChild(productName);
                menuDiv.appendChild(toppingWithPrice);
                contentDiv.appendChild(menuDiv);
            }
        }
        return {
            makeMenuItem,
            addToMenu,
            displayMenu,
        };
    };
    const menu = renderMenu(); //creating context manager
    
    //adding product
    const product1 = menu.makeMenuItem("margherita",
        ["tomato source", "mozaallela", "oregano"],
        8,
    );
    const product2 = menu.makeMenuItem("Quatro stagioni",
        ["tomato source", "mozaallela", "mushroom", "ham", "Olives", ],
        10,
    );
    const product3 = menu.makeMenuItem("diavola",
        ["tomato source", "mozaallela", "spicy salami", "chill paper",],
        9,
    );
    const product4 = menu.makeMenuItem("paramigiana",
        ["tomato source", "eggplants", "paramsana flakes", "chill paper",],
        9,
    );
    const product5 = menu.makeMenuItem("fruit de mare",
        ["tomato source", "sea food",],
        10,
    );
    menu.addToMenu(product1);
    menu.addToMenu(product2);
    menu.addToMenu(product3);
    menu.addToMenu(product4);
    menu.addToMenu(product5);
    
    menu.displayMenu();

    // adding under
}