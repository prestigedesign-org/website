function showNotification(message, duration) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';

    setTimeout(function () {
        notification.style.display = 'none';
    }, duration);
}

const formWrapper = document.getElementById(`contact-form-wrapper`);
const modalClose = document.getElementById(`modal-form-close`);
const orderNow = document.querySelectorAll(`.order-now`);

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    // You can perform any additional actions here before submitting to Google Forms

    // Submit the form to Google Forms programmatically using JavaScript
    const form = e.target;
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();

    xhr.open('POST', form.action, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    // // Display the success message
    // const successMessage = document.getElementById('success-message');
    // successMessage.style.display = 'block';
    showNotification('Message Successfully Sent!', 2000);

    // // Clear the form fields
    form.reset();

    // // Hide the success message after 2 seconds
    // setTimeout(function () {
    //     successMessage.style.display = 'none';
    // }, 5000);



    // alert(`message sent!`);

    // xhr.onreadystatechange = function () {
    //     if (xhr.readyState === XMLHttpRequest.DONE) {
    //         if (xhr.status === 200) {
    //             // Form submission was successful

    //         } else {
    //             // Form submission failed
    //             // You can add your own error handling code here
    //             console.error('Form submission failed');
    //         }
    //     }
    // };

    // Convert the form data to URL-encoded format
    const encodedData = new URLSearchParams(formData).toString();

    // Send the POST request
    xhr.send(encodedData);
    formWrapper.style.display = 'none';
    body.style.overflow = 'auto';
});


modalClose.addEventListener('click', function () {
    formWrapper.style.display = 'none';
    body.style.overflow = 'auto';
})



orderNow.forEach(function (e) {
    e.addEventListener('click', function () {
        formWrapper.style.display = 'flex';
        body.style.overflow = 'hidden';

    })
})