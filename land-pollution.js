// Land Pollution Page Script

document.addEventListener('DOMContentLoaded', () => {
    // Any interactive behavior or content loading can be placed here
    console.log('Land Pollution Awareness page loaded successfully!');

    // Example: dynamically load more images or videos
    const photoGallery = document.querySelector('.photo-gallery');
    
    // Adding an example image dynamically (you can remove or modify this)
    const newImage = document.createElement('img');
    newImage.src = 'images/land-pollution3.jpg';
    newImage.alt = 'Additional Land Pollution Awareness Photo';
    photoGallery.appendChild(newImage);
});
