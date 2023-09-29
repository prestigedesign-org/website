
function handleGalleryClick(imageShow, galleryImages) {
    galleryImages.forEach(function (image, index) {
        image.addEventListener('click', function () {
            imageShow.setAttribute('src', this.getAttribute('src'));

            // console.log(this.getAttribute('dataset-project'));
            // conslode.log(this.dataset.project);
            // console.log(this.dataset.image);
            imageShow.dataset.project = this.dataset.project;
            imageShow.dataset.image = this.dataset.image;
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

const imageShowThirteen = document.querySelector('.single-project-13 .single-project-image .gallery-show img');
const galleryImagesThirteen = document.querySelectorAll('.single-project-13 .single-project-image .gallery img');

const imageShowFourteen = document.querySelector('.single-project-14 .single-project-image .gallery-show img');
const galleryImagesFourteen = document.querySelectorAll('.single-project-14 .single-project-image .gallery img');

const imageShowFifteen = document.querySelector('.single-project-15 .single-project-image .gallery-show img');
const galleryImagesFifteen = document.querySelectorAll('.single-project-15 .single-project-image .gallery img');

const imageShowSixteen = document.querySelector('.single-project-16 .single-project-image .gallery-show img');
const galleryImagesSixteen = document.querySelectorAll('.single-project-16 .single-project-image .gallery img');

const imageShowSeventeen = document.querySelector('.single-project-17 .single-project-image .gallery-show img');
const galleryImagesSeventeen = document.querySelectorAll('.single-project-17 .single-project-image .gallery img');

const imageShowEighteen = document.querySelector('.single-project-18 .single-project-image .gallery-show img');
const galleryImagesEighteen = document.querySelectorAll('.single-project-18 .single-project-image .gallery img');

const imageShowNineteen = document.querySelector('.single-project-19 .single-project-image .gallery-show img');
const galleryImagesNineteen = document.querySelectorAll('.single-project-19 .single-project-image .gallery img');

const imageShowTwenty = document.querySelector('.single-project-20 .single-project-image .gallery-show img');
const galleryImagesTwenty = document.querySelectorAll('.single-project-20 .single-project-image .gallery img');

const imageShowTwentyOne = document.querySelector('.single-project-21 .single-project-image .gallery-show img');
const galleryImagesTwentyOne = document.querySelectorAll('.single-project-21 .single-project-image .gallery img');

const imageShowTwentyTwo = document.querySelector('.single-project-22 .single-project-image .gallery-show img');
const galleryImagesTwentyTwo = document.querySelectorAll('.single-project-22 .single-project-image .gallery img');


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
handleGalleryClick(imageShowThirteen, galleryImagesThirteen);
handleGalleryClick(imageShowFourteen, galleryImagesFourteen);
handleGalleryClick(imageShowFifteen, galleryImagesFifteen);
handleGalleryClick(imageShowSixteen, galleryImagesSixteen);
handleGalleryClick(imageShowSeventeen, galleryImagesSeventeen);
handleGalleryClick(imageShowEighteen, galleryImagesEighteen);
handleGalleryClick(imageShowNineteen, galleryImagesNineteen);
handleGalleryClick(imageShowTwenty, galleryImagesTwenty);
handleGalleryClick(imageShowTwentyOne, galleryImagesTwentyOne);
handleGalleryClick(imageShowTwentyTwo, galleryImagesTwentyTwo);









// filter categories /////////////////////////////////////////////////////

const office = document.getElementById(`furnishing`);
const residential = document.getElementById(`residential`);
const commercial = document.getElementById(`commercial`);

const commercialSub = document.getElementById(`filter-subcategory`);
const commercialShop = document.getElementById(`sub-shop`);
const commercialCenter = document.getElementById(`sub-center`);
const commercialOffice = document.getElementById(`sub-office`);

const officeCollection = document.querySelectorAll(`.furnishing`);
const residentialCollection = document.querySelectorAll(`.residential`);
const commercialCollection = document.querySelectorAll(`.commercial`);

const commercialCollectionShop = document.querySelectorAll(`.sub-shop`);
const commercialCollectionCenter = document.querySelectorAll(`.sub-center`);
const commercialCollectionOffice = document.querySelectorAll(`.sub-office`);




officeCollection.forEach(function (e) {
    e.style.display = 'none';
})

residentialCollection.forEach(function (e) {
    e.style.display = 'none';
})

// commercialCollection.forEach(function (e) {
//     e.style.display = 'none';
// })


office.addEventListener('click', function () {
    officeCollection.forEach(function (e) {
        e.style.display = 'flex';
    })

    residentialCollection.forEach(function (e) {
        e.style.display = 'none';
    })

    commercialCollection.forEach(function (e) {
        e.style.display = 'none';
        commercialSub.style.display = 'none';
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
        commercialSub.style.display = 'none';

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
        commercialSub.style.display = 'inline-flex';
    })
})


// sub filter commercial

commercialShop.addEventListener('click', function () {
    commercialCollectionShop.forEach(function (e) {
        e.style.display = `flex`;
    })

    commercialCollectionCenter.forEach(function (e) {
        e.style.display = 'none';
    })

    commercialCollectionOffice.forEach(function (e) {
        e.style.display = 'none';
    })
})
////////////
commercialCenter.addEventListener('click', function () {
    commercialCollectionShop.forEach(function (e) {
        e.style.display = 'none';
    })

    commercialCollectionCenter.forEach(function (e) {
        e.style.display = 'flex';
    })

    commercialCollectionOffice.forEach(function (e) {
        e.style.display = 'none';
    })
})
/////////////
commercialOffice.addEventListener('click', function () {
    commercialCollectionShop.forEach(function (e) {
        e.style.display = 'none';
    })

    commercialCollectionCenter.forEach(function (e) {
        e.style.display = 'none';
    })

    commercialCollectionOffice.forEach(function (e) {
        e.style.display = 'flex';
    })
})