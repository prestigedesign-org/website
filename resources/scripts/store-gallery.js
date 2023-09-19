

// Function to handle gallery image click events
function handleGalleryClick(imageShow, galleryImages) {
    galleryImages.forEach(function (image, index) {
        image.addEventListener('click', function () {
            imageShow.setAttribute('src', this.getAttribute('src'));
        });
    });
}

const imageShowOne = document.querySelector('.single-products-one .single-product-image .gallery-show img');
const galleryImagesOne = document.querySelectorAll('.single-products-one .single-product-image .gallery img');

const imageShowTwo = document.querySelector('.single-products-two .single-product-image .gallery-show img');
const galleryImagesTwo = document.querySelectorAll('.single-products-two .single-product-image .gallery img');

const imageShowThree = document.querySelector('.single-products-three .single-product-image .gallery-show img');
const galleryImagesThree = document.querySelectorAll('.single-products-three .single-product-image .gallery img');

const imageShowFour = document.querySelector('.single-products-four .single-product-image .gallery-show img');
const galleryImagesFour = document.querySelectorAll('.single-products-four .single-product-image .gallery img');


// Call the function to set up click events for each product
handleGalleryClick(imageShowOne, galleryImagesOne);
handleGalleryClick(imageShowTwo, galleryImagesTwo);
handleGalleryClick(imageShowThree, galleryImagesThree);
handleGalleryClick(imageShowFour, galleryImagesFour);
