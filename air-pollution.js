// Air Pollution Page Script

document.addEventListener('DOMContentLoaded', () => {
    // Any interactive behavior or content loading can be placed here
    console.log('Air Pollution Awareness page loaded successfully!');

    // Example: dynamically load more images or videos
    const photoGallery = document.querySelector('.photo-gallery');
    
    // Adding an example image dynamically (you can remove or modify this)
    const newImage = document.createElement('img');
    newImage.src = 'images/air-pollution3.jpg';
    newImage.alt = 'Additional Air Pollution Awareness Photo';
    photoGallery.appendChild(newImage);
});
