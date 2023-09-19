const singleWorkOne = document.getElementById(`single-work-one`);
const singleWorkTwo = document.getElementById(`single-work-two`);
const singleWorkThree = document.getElementById(`single-work-three`);
const singleWorkImage = document.getElementById(`single-work-image`);

const singleWorkDescriptionOne = document.getElementById(`work-inner-one-description`);

const singleWorkDescriptionTwo = document.getElementById(`work-inner-two-description`);

const singleWorkDescriptionThree = document.getElementById(`work-inner-three-description`);


singleWorkOne.addEventListener('mouseover', function () {
    singleWorkImage.style.background = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(resources/images/gallery-project-1.jpeg) no-repeat center center`;
    singleWorkImage.style.backgroundSize = `cover`;

    singleWorkDescriptionTwo.style.display = `none`;
    singleWorkDescriptionThree.style.display = `none`;
    singleWorkDescriptionOne.style.display = `flex`;
})

singleWorkTwo.addEventListener('mouseover', function () {
    singleWorkImage.style.background = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(resources/images/gallery-project-2.jpeg) no-repeat center center`;
    singleWorkImage.style.backgroundSize = `cover`;
    singleWorkDescriptionOne.style.display = `none`;
    singleWorkDescriptionThree.style.display = `none`;
    singleWorkDescriptionTwo.style.display = `flex`;
})

singleWorkThree.addEventListener('mouseover', function () {
    singleWorkImage.style.background = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(resources/images/gallery-project-3.jpeg) no-repeat center center`;
    singleWorkImage.style.backgroundSize = `cover`;
    singleWorkDescriptionOne.style.display = `none`;
    singleWorkDescriptionTwo.style.display = `none`;
    singleWorkDescriptionThree.style.display = `flex`;
})
