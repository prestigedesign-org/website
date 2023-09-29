



const images = document.querySelectorAll('.gallery-show img');
const popup = document.querySelector('.gallery-popup-portfolio');
const popupImage = document.querySelector('.gallery-popup-image-portfolio');
const closePopup = document.querySelector('.close-popup-portfolio');


const allImages = document.querySelectorAll('.gallery img');

const left = document.querySelector(`.fa-chevron-left`);
const right = document.querySelector(`.fa-chevron-right`);

let imageArraySrc = [];
let imageArrayindex = [];
let currentImage;
// counte the all project
const totalProject = document.querySelectorAll('.single-project');
let totalProjectNumber = 0;
totalProject.forEach(element => totalProjectNumber = parseInt(element.dataset.slider));





function slider(project, image) {
    imageArraySrc = [];
    imageArrayindex = [];
    allImages.forEach(element => {
        if (element.dataset.project === project) {
            imageArraySrc.push(element.getAttribute('src'));
            imageArrayindex.push(parseInt(element.dataset.image) - 1);
        }
    })
}


left.addEventListener('click', function () {

    let imageIndex = parseInt(popupImage.dataset.image) - 1;

    imageIndex = imageIndex - 1;

    if (imageIndex < 0) {
        imageIndex = imageArrayindex.length - 1;
    };
    popupImage.dataset.image = imageIndex + 1;

    console.log(imageIndex);

    popupImage.setAttribute('src', imageArraySrc[imageIndex]);
});


right.addEventListener('click', function () {

    let imageIndex = parseInt(popupImage.dataset.image) - 1;

    imageIndex = imageIndex + 1;

    if (imageIndex > imageArrayindex.length - 1) {
        imageIndex = 0;
    };
    popupImage.dataset.image = imageIndex + 1;

    // console.log(imageIndex);

    popupImage.setAttribute('src', imageArraySrc[imageIndex]);
});




images.forEach(element => {
    element.addEventListener('click', function (e) {
        popupImage.setAttribute('src', element.getAttribute('src'));

        popupImage.dataset.project = element.dataset.project;
        popupImage.dataset.image = element.dataset.image;

        slider(popupImage.dataset.project, popupImage.dataset.image);

        popup.style.transform = 'scale(1)';
        popup.style.transformOrigin = `${element.clientX}px ${element.clientY}px`;
    });
});

// for (let i = 0; i < images.length; i++) {
//     images[i].addEventListener('click', function (e) {


//         console.log(popupImage.dataset.project);
//         console.log(popupImage.dataset.image);
//         console.log(popupImage.getAttribute('src'));


//         popupImage.setAttribute('src', this.getAttribute('src'));
//         popupImage.dataset.project = e.target.dataset.project;
//         popupImage.dataset.image = e.target.dataset.image;

//         console.log(popupImage.dataset.project);
//         console.log(popupImage.dataset.image);
//         console.log(popupImage.getAttribute('src'));

//         popup.style.transform = 'scale(1)';
//         popup.style.transformOrigin = `${e.clientX}px ${e.clientY}px`;
//     })
// };

popupImage.addEventListener('click', function (e) {
    e.stopPropagation();
});

closePopup.addEventListener('click', function () {
    popupImage.style.transform = 'rotate(0)';
    popup.style.transform = 'scale(0)';

});

popupImage.addEventListener('mousemove', function (e) {
    rotateY = e.offsetX / 15 - this.width / 30;
    rotateX = -(e.offsetY / 15 - this.height / 30);
    popupImage.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) `;
});


