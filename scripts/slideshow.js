// get all the images as array
const images = document.querySelectorAll(".slideshow-image");
let currentImageShown = images.length - 1; // index of the image being currently shown

// every three seconds, show next slideshow image
setInterval(() => {
    // if the image shown is the last one
    if (currentImageShown <= 0) {
        currentImageShown = images.length - 1 // reset to the first slider
    }

    images[currentImageShown].classList.toggle("fade") // fade current image to show the next one
    currentImageShown -= 1;  // update current image shown
}, 3000)