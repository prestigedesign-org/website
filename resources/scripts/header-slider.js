(function () {
    var slider = document.querySelector('.slider');
    var sliderElements = slider.querySelectorAll('.background');
    var sliderElementLastIndex = sliderElements.length - 1;
    var timer;
    var actualIndex = 0;

    function step() {
        clearTimeout(timer);
        timer = setTimeout(function () {
            if (actualIndex < sliderElementLastIndex) {
                actualIndex++;
            } else {
                actualIndex = 0;
            }
            for (var i = 0; i < sliderElements.length; i++) {
                sliderElements[i].classList.remove('active');
            }
            sliderElements[actualIndex].classList.add('active');
            step();
        }, 4000);
    }

    clearTimeout(timer);
    step();
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
