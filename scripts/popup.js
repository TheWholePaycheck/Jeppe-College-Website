const shown = localStorage.getItem("shown")
const popupElem = document.querySelector(".popup-wrapper") 
const closePopupBtn = document.querySelector(".close-popup-btn")
// if shown is null the popup hasn't been shown
if(shown == null) {
    // show the popup in 3 seconds
    setTimeout(() => {
        popupElem.classList.remove("close");    
    }, 3000)

    // localStorage.setItem("shown", true)
}

// close the pop
closePopupBtn.addEventListener("click", () => {
    popupElem.classList.add("close");
})