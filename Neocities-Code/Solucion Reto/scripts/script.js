let popUpButtons = document.querySelectorAll(".pop-up-button");
let popUpMenu = document.querySelectorAll(".pop-up-menu");
let openedWindow;
let mobileMenuIcon = document.querySelector("#mobile-menu-icon");
let mobileMenu = document.querySelector("#header-menu");


document.addEventListener("click", ()=> {
    if(event.target != document.querySelector(".pop-up-show") &&
    event.target != popUpButtons[0] &&
     event.target != popUpButtons[1] &&
      event.target != popUpButtons[2]) {
        openedWindow.classList.remove("pop-up-show");
        openedWindow.previousElementSibling.classList.remove("arrow-rotation");
   }

})

popUpButtons.forEach((elem, index) => {
    elem.addEventListener('click', (elemObj)=> {
        
        if(openedWindow && openedWindow != event.target.nextElementSibling) {
            openedWindow.classList.remove("pop-up-show");
            openedWindow.previousElementSibling.classList.remove("arrow-rotation");
        } 
        popUpMenu[index].classList.toggle("pop-up-show");
        popUpButtons[index].classList.toggle("arrow-rotation");
        openedWindow = popUpMenu[index];
        
    })
})

mobileMenuIcon.addEventListener("click", ()=> {
    mobileMenu.classList.toggle("menu-mobile-on")
})

