//


function loadHeader() {

}


function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header-el");
    header.setAttribute("id", "header-el");

    //buttons
    const btnHome = document.createElement("button")
    btnHome.textContent = "home"
    btnHome.classList.add("btn-nav")
    header.appendChild(btnHome) 

    const btnMenu = document.createElement("button")
    btnMenu.textContent = "Menu"
    btnMenu.classList.add("btn-nav")
    header.appendChild(btnMenu) 

    const btnContact = document.createElement("button")
    btnContact.textContent = "Contact"
    btnContact.classList.add("btn-nav")
    header.appendChild(btnContact)

    return header;
}


export {loadHeader, createHeader}