const partnerCarousel = document.querySelector(".partner-contents");
const partnerLogos = document.querySelectorAll(".partner-logo");
const partnerLogoWidth = partnerLogos[0].offsetWidth + 20; // Adjust the step size (logo width + margin-right)
const scrollSpeed = partnerLogoWidth; // Set the scroll speed equal to the width of one logo

function scrollCarousel() {

    partnerCarousel.scrollLeft += partnerLogoWidth;

    if (partnerCarousel.scrollLeft >= partnerCarousel.scrollWidth - partnerCarousel.clientWidth) {
        // When the end is reached, reset the scroll position to the beginning
        partnerCarousel.scrollLeft = 0;

    }
    setTimeout(scrollCarousel, 1500); // Adjust the interval as needed for the desired speed
}
// Start the scrolling animation
setTimeout(scrollCarousel, 1500); // Delay the start of scrolling

