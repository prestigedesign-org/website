



const images = document.querySelectorAll('.gallery-show img');
const popup = document.querySelector('.gallery-popup-store');
const popupImage = document.querySelector('.gallery-popup-image-store');
const closePopup = document.querySelector('.close-popup-store');


// www.navan.one
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function (e) {

        let imageSrc = this.getAttribute('src');
        popupImage.setAttribute('src', imageSrc);
        popup.style.transform = 'scale(1)';
        popup.style.transformOrigin = `${e.clientX}px ${e.clientY}px`;

    })
};
// www.navan.one
popupImage.addEventListener('click', function (e) {
    e.stopPropagation();
});

popup.addEventListener('click', function () {
    popupImage.style.transform = 'rotate(0)';
    popup.style.transform = 'scale(0)';

});

popupImage.addEventListener('mousemove', function (e) {
    rotateY = e.offsetX / 15 - this.width / 30;
    rotateX = -(e.offsetY / 15 - this.height / 30);
    popupImage.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) `;
});

