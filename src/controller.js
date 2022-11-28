//header footer body
//split up into indiv modules
import * as header from "./pages/header"
import * as home from "./pages/home"
import * as footer from "./pages/footer"
import * as menu from "./pages/menu"
import contact from "./pages/contact"
import about from "./pages/about"




export default function initializeWebsite() {

  const content = document.getElementById("content");
  content.appendChild(header.createHeader())
  content.appendChild(home.createHome())
  content.appendChild(footer.createFooter())
  content.appendChild(menu.createMenu())
}
 
    
