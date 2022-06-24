function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    menu.appendChild(
        createMenuItem(
            "Amala Ibadan",
            "Amala, Gbegiri, Ewedu, Shaki, Fuku, Ishan"
        )
    );
    menu.appendChild(
        createMenuItem(
            "Amala Ilorin",
            "Amala, Gbegiri, Ewedu, Shaki, Wara, ponmon"
        )
    );
    menu.appendChild(
        createMenuItem(
            "Iyan Ijesha",
            "Pounded yam, Efo riro,  Shaki, Round-about, Edo"
        )
    );
    menu.appendChild(createMenuItem(
        "Iyan Ekiti",
        "Pounded yam, Ewedu, Shaki, Fuku, Ishan"
    )
    );
    menu.appendChild(
        createMenuItem(
            "Ofada",
            "Ofada rice, Ofada sauce, Boiled Egg"
        )
    );
    menu.appendChild(createMenuItem(
        "Jollof Rice",
        "Jollof Rice, Plantain, Moinmoin, Chicken"
    )
    );

    return menu;
}

function createMenuItem(name, description) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const foodName = document.createElement("h2");
    foodName.textContent = name;

    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;

    const foodImage = document.createElement("img");
    foodImage.src = `images/foods/${name.toLowerCase()}.png`;
    foodImage.alt = '${name}';

    menuItem.appendChild(foodImage);
    menuItem.append(foodName);
    menuItem.appendChild(foodDescription);

    return menuItem;

}

function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
}

export default loadMenu;