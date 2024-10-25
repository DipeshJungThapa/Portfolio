document.getElementById('hamburger').addEventListener('click', function() {
    const navLinks = document.querySelector('nav ul');
    navLinks.classList.toggle('active'); // Toggle the 'active' class
});


// Function to bounce the logos around
function bounceElement(element) {
    // Random initial speeds
    let speedX = (Math.random() * 2) + 1; // Horizontal speed
    let speedY = (Math.random() * 2) + 1; // Vertical speed
    let posX = Math.random() * (window.innerWidth - element.clientWidth);
    let posY = Math.random() * (window.innerHeight - element.clientHeight);

    // Update element position continuously
    function move() {
        posX += speedX;
        posY += speedY;

        // Check for boundary collision and reverse direction
        if (posX + element.clientWidth >= window.innerWidth || posX <= 0) {
            speedX = -speedX; // Reverse horizontal direction
        }
        if (posY + element.clientHeight >= window.innerHeight || posY <= 0) {
            speedY = -speedY; // Reverse vertical direction
        }

        // Apply new position
        element.style.left = posX + 'px';
        element.style.top = posY + 'px';

        // Call move function repeatedly for animation
        requestAnimationFrame(move);
    }

    // Start the movement
    move();
}

// Apply bouncing behavior to all logos
const logos = document.querySelectorAll('.logos img');
logos.forEach((logo) => bounceElement(logo));


const hamburger = document.getElementById('hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active'); // Toggle the active class
});

const toggleBgButton = document.getElementById('toggleBgButton');

toggleBgButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
