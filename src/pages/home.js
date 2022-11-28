import { createPara } from "../helperservices";

function loadHome() {

}

function createHome() {
    const home = document.createElement("main");
    home.classList.add("home-el");
    // main.setAttribute("id", "main");
    return home;
  }

function homeContent() {
let homeEl = document.getElementsByClassName("home-el")
homeEl.appendChild(createPara("butts"))
}



export{ createHome, loadHome}