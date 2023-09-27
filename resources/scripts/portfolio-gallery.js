

// Function to handle gallery image click events
function handleGalleryClick(imageShow, galleryImages) {
    galleryImages.forEach(function (image, index) {
        image.addEventListener('click', function () {
            imageShow.setAttribute('src', this.getAttribute('src'));
        });
    });
}

const imageShowOne = document.querySelector('.single-project-one .single-project-image .gallery-show img');
const galleryImagesOne = document.querySelectorAll('.single-project-one .single-project-image .gallery img');

const imageShowTwo = document.querySelector('.single-project-two .single-project-image .gallery-show img');
const galleryImagesTwo = document.querySelectorAll('.single-project-two .single-project-image .gallery img');

const imageShowThree = document.querySelector('.single-project-three .single-project-image .gallery-show img');
const galleryImagesThree = document.querySelectorAll('.single-project-three .single-project-image .gallery img');

const imageShowFour = document.querySelector('.single-project-four .single-project-image .gallery-show img');
const galleryImagesFour = document.querySelectorAll('.single-project-four .single-project-image .gallery img');

// Constants
const imageShowFive = document.querySelector('.single-project-five .single-project-image .gallery-show img');
const galleryImagesFive = document.querySelectorAll('.single-project-five .single-project-image .gallery img');

const imageShowSix = document.querySelector('.single-project-six .single-project-image .gallery-show img');
const galleryImagesSix = document.querySelectorAll('.single-project-six .single-project-image .gallery img');

const imageShowSeven = document.querySelector('.single-project-seven .single-project-image .gallery-show img');
const galleryImagesSeven = document.querySelectorAll('.single-project-seven .single-project-image .gallery img');

const imageShowEight = document.querySelector('.single-project-eight .single-project-image .gallery-show img');
const galleryImagesEight = document.querySelectorAll('.single-project-eight .single-project-image .gallery img');

const imageShowNine = document.querySelector('.single-project-nine .single-project-image .gallery-show img');
const galleryImagesNine = document.querySelectorAll('.single-project-nine .single-project-image .gallery img');

const imageShowTen = document.querySelector('.single-project-ten .single-project-image .gallery-show img');
const galleryImagesTen = document.querySelectorAll('.single-project-ten .single-project-image .gallery img');

const imageShowEleven = document.querySelector('.single-project-eleven .single-project-image .gallery-show img');
const galleryImagesEleven = document.querySelectorAll('.single-project-eleven .single-project-image .gallery img');

const imageShowTwelve = document.querySelector('.single-project-twelve .single-project-image .gallery-show img');
const galleryImagesTwelve = document.querySelectorAll('.single-project-twelve .single-project-image .gallery img');

// Call the function to set up click events for each project
handleGalleryClick(imageShowOne, galleryImagesOne);
handleGalleryClick(imageShowTwo, galleryImagesTwo);
handleGalleryClick(imageShowThree, galleryImagesThree);
handleGalleryClick(imageShowFour, galleryImagesFour);
handleGalleryClick(imageShowFive, galleryImagesFive);
handleGalleryClick(imageShowSix, galleryImagesSix);
handleGalleryClick(imageShowSeven, galleryImagesSeven);
handleGalleryClick(imageShowEight, galleryImagesEight);
handleGalleryClick(imageShowNine, galleryImagesNine);
handleGalleryClick(imageShowTen, galleryImagesTen);
handleGalleryClick(imageShowEleven, galleryImagesEleven);
handleGalleryClick(imageShowTwelve, galleryImagesTwelve);






// filter categories

const office = document.getElementById(`office`);
const residential = document.getElementById(`residential`);
const commercial = document.getElementById(`commercial`);


const officeCollection = document.querySelectorAll(`.office`);
const residentialCollection = document.querySelectorAll(`.residential`);
const commercialCollection = document.querySelectorAll(`.commercial`);


// officeCollection.forEach(function (e) {
//     e.style.display = 'none';
// })

residentialCollection.forEach(function (e) {
    e.style.display = 'none';
})

commercialCollection.forEach(function (e) {
    e.style.display = 'none';
})


office.addEventListener('click', function () {
    officeCollection.forEach(function (e) {
        e.style.display = 'flex';
    })

    residentialCollection.forEach(function (e) {
        e.style.display = 'none';
    })

    commercialCollection.forEach(function (e) {
        e.style.display = 'none';
    })
})

residential.addEventListener('click', function () {
    officeCollection.forEach(function (e) {
        e.style.display = 'none';
    })

    residentialCollection.forEach(function (e) {
        e.style.display = 'flex';
    })

    commercialCollection.forEach(function (e) {
        e.style.display = 'none';
    })
})

commercial.addEventListener('click', function () {
    officeCollection.forEach(function (e) {
        e.style.display = 'none';
    })

    residentialCollection.forEach(function (e) {
        e.style.display = 'none';
    })

    commercialCollection.forEach(function (e) {
        e.style.display = 'flex';
    })
})