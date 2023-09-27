// (function () {
//     var slider = document.querySelector('.slider');
//     var sliderElements = slider.querySelectorAll('.background');
//     var sliderElementLastIndex = sliderElements.length - 1;
//     var timer;
//     var actualIndex = 0;

//     function step() {
//         clearTimeout(timer);
//         timer = setTimeout(function () {
//             if (actualIndex < sliderElementLastIndex) {
//                 actualIndex++;
//             } else {
//                 actualIndex = 0;
//             }
//             for (var i = 0; i < sliderElements.length; i++) {
//                 sliderElements[i].classList.remove('active');
//             }
//             sliderElements[actualIndex].classList.add('active');
//             step();
//         }, 6000);
//     }

//     clearTimeout(timer);
//     step();
// })();

// // When clicking the arrow, go to the next section
// var arrowIcons = document.querySelectorAll('.slider .arrow i');
// arrowIcons.forEach(function (icon) {
//     icon.addEventListener('click', function () {
//         var sections = document.querySelectorAll('section');
//         if (sections.length > 1) {
//             var nextSection = sections[1];
//             window.scrollTo({
//                 top: nextSection.offsetTop,
//                 behavior: 'smooth'
//             });
//         }
//     });
// });


(function () {
    var slider = document.querySelector('.slider');
    var sliderElements = slider.querySelectorAll('.background');
    var sliderElementLastIndex = sliderElements.length - 1;
    var timer;
    var actualIndex = 0;
    var isSliderPaused = false; // Add a flag to track if the slider is paused

    function step() {
        clearTimeout(timer);
        timer = setTimeout(function () {
            if (!isSliderPaused) { // Only advance if the slider is not paused
                if (actualIndex < sliderElementLastIndex) {
                    actualIndex++;
                } else {
                    actualIndex = 0;
                }
                for (var i = 0; i < sliderElements.length; i++) {
                    sliderElements[i].classList.remove('active');
                }
                sliderElements[actualIndex].classList.add('active');
            }
            step();
        }, 6000);
    }

    clearTimeout(timer);
    step();

    // Function to pause the slider
    function pauseSlider() {
        isSliderPaused = true;
    }

    // Function to resume the slider
    function resumeSlider() {
        isSliderPaused = false;
    }

    // Find all elements with class 'shop-filter'
    var shopFilters = document.querySelectorAll('.shop-filter');

    // Add event listeners to pause and resume the slider
    shopFilters.forEach(function (filter) {
        filter.addEventListener('mouseenter', pauseSlider);
        filter.addEventListener('mouseleave', resumeSlider);
    });
})();

// When clicking the arrow, go to the next section
var arrowIcons = document.querySelectorAll('.slider .arrow i');
arrowIcons.forEach(function (icon) {
    icon.addEventListener('click', function () {
        var sections = document.querySelectorAll('section');
        if (sections.length > 1) {
            var nextSection = sections[1];
            window.scrollTo({
                top: nextSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
