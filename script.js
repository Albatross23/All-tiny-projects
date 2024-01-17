document.addEventListener('DOMContentLoaded', function () {
    // Select all elements with the class "project-image"
    const projectImages = document.querySelectorAll('.project-image');

    // Add click event listener to each image
    projectImages.forEach(function (image) {
        image.addEventListener('click', function () {
            // Toggle a class to trigger the transition
            image.classList.toggle('enlarged');
        });
    });
});
