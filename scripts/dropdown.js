// // DROP DOWN FEATURE
// const dropdown = document.querySelector(".dropdown")
// let mouseIn = false

// dropdown.addEventListener("mouseenter", () => {
//     mouseIn = true
//     dropdown.classList.add("drop")
// })

// dropdown.addEventListener("mouseleave", () => {
//     mouseIn = false
//     setTimeout(() => {
//         if (mouseIn == false) {
//             dropdown.classList.remove("drop")
//         }
//     }, 350)
// })

// MENU MOBILE DROPDOWN
const hamburger = document.querySelector(".hamburger") // select the hamburger
const closeIcon = document.querySelector(".close") // select the close icon
const menu = document.querySelector(".menu-mobile") // select the hamburger

// toggle classes when the mobile navigation icons are clicked
Array(hamburger, closeIcon).forEach(icon => {
    icon.addEventListener("click", function () {
        menu.classList.toggle("open") // add a class
    })
})

// SUBMENU DROPDOWN FEATURE 
const submenuTitle = document.querySelectorAll(".mobile-dropdown-menu-title")
const submenuBtn = document.querySelectorAll(".mobile-dropdown-menu-wrapper")

submenuBtn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        submenuTitle[index].classList.add("open");
    })

    // Closing the submenu
    const backToMenu = document.querySelectorAll(".back-to-menu-btn")

    backToMenu[index].addEventListener("click", () => {
        submenuTitle[index].classList.remove("open");
    })

})

