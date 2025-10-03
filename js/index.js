// Initialize the AOS animations
AOS.init({
    offset: 120, // triggers 120px before element enters view
    duration: 1000,
    once: false, // allow animation every time it scrolls into view
    mirror: false // disable animation on scroll up
});


/* Animation of the hero image */
// Array of the images to create the animation
const frames = [
    './assets/img/pixel-avatar/pixel-avatar1.png',
    './assets/img/pixel-avatar/pixel-avatar2.png',
    './assets/img/pixel-avatar/pixel-avatar3.png',
    './assets/img/pixel-avatar/pixel-avatar4.png',
    './assets/img/pixel-avatar/pixel-avatar5.png',
    './assets/img/pixel-avatar/pixel-avatar6.png',
    './assets/img/pixel-avatar/pixel-avatar7.png',
    './assets/img/pixel-avatar/pixel-avatar8.png',
    './assets/img/pixel-avatar/pixel-avatar9.png'
];

// Empty array to preload the images to prevent animation lag
const preloadFrames = [];

// Preload the animations to an empty array 
frames.forEach(src => {
    const img = new Image();
    img.src = src;
    preloadFrames.push(img)
});

// Link the js variable to the html element
const avatar = document.getElementById('avatar')
let currentFrame = 0;

// Iterated through frames to create the animation
function animation() {
    // Repeat blink every time the event listener is triggered
    const blink = setInterval(() => {
        avatar.src = frames[currentFrame];
        currentFrame++;

        // Return to the initial image after the iteration ends
        if(currentFrame >= frames.length) {
            clearInterval(blink)
            currentFrame = 0;
            avatar.src = frames[0];  
        }
    }, 100); // Time in milliseconds 
}

// Trigger the animation when the mouse pointer is over the image
['mouseenter', 'click'].forEach(event => {
    avatar.addEventListener(event, animation);
})
