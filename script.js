// --- Scroll Effect Logic ---
const header = document.getElementById('main-header');
const roofPath = document.getElementById('roof');

// SVG Paths
const pitchedPath = "M 20 100 L 150 20 L 280 100";
const flatPath = "M 20 60 L 150 60 L 280 60";

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        // User has scrolled down
        header.classList.add('scrolled');
        roofPath.setAttribute('d', flatPath); // Flatten roof
    } else {
        // User is at top
        header.classList.remove('scrolled');
        roofPath.setAttribute('d', pitchedPath); // Pitch roof
    }
});

// --- Mobile Menu Logic ---
const hamburgerBtn = document.getElementById('hamburger-btn');
const navLinks = document.getElementById('nav-links');

function toggleMenu() {
    // Only toggle if window width is mobile size
    if (window.innerWidth <= 768) {
        navLinks.classList.toggle('mobile-menu-active');
    }
}

hamburgerBtn.addEventListener('click', toggleMenu);

/* --- Services Tab Logic --- */
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // 1. Remove 'active' class from all buttons
        tabButtons.forEach(btn => btn.classList.remove('active'));

        // 2. Add 'active' class to the clicked button
        button.classList.add('active');

        // 3. Hide all content panels
        tabContents.forEach(content => {
            content.classList.remove('active');
            content.style.display = 'none'; // Ensure it's hidden logic
        });

        // 4. Show the target content
        const targetId = button.getAttribute('data-target');
        const targetContent = document.getElementById(targetId);

        targetContent.style.display = 'flex'; // Reset display to flex
        // Small delay to allow the fade-in animation to trigger
        setTimeout(() => {
            targetContent.classList.add('active');
        }, 10);
    });
});

// Initialize: Ensure only the active tab is visible on load
document.addEventListener('DOMContentLoaded', () => {
    // Hide all non-active tabs
    tabContents.forEach(content => {
        if (!content.classList.contains('active')) {
            content.style.display = 'none';
        }
    });
});

// --- Image Carousel Logic ---
document.addEventListener('DOMContentLoaded', () => {

    // Find every carousel on the page
    const carousels = document.querySelectorAll('.image-carousel');

    carousels.forEach(carousel => {
        const images = carousel.querySelectorAll('.carousel-img');
        const prevBtn = carousel.querySelector('.prev');
        const nextBtn = carousel.querySelector('.next');
        let currentIndex = 0;
        let slideInterval;

        // Function to change the image
        function showSlide(index) {
            images[currentIndex].classList.remove('active');

            // Math to allow looping back to the start/end
            currentIndex = (index + images.length) % images.length;

            images[currentIndex].classList.add('active');
        }

        function nextSlide() { showSlide(currentIndex + 1); }
        function prevSlide() { showSlide(currentIndex - 1); }

        // Start the 3-second auto timer
        function startSlide() {
            slideInterval = setInterval(nextSlide, 3000); // 3000ms = 3 seconds
        }

        // Reset timer if the user manually clicks an arrow
        function resetTimer() {
            clearInterval(slideInterval);
            startSlide();
        }

        // Click events for the buttons
        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetTimer();
        });

        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetTimer();
        });

        // Kick off the auto-rotation
        startSlide();
    });
});

// --- Collapsible Projects Logic ---
document.addEventListener('DOMContentLoaded', () => {
    const projectToggles = document.querySelectorAll('.project-toggle');

    projectToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            // Toggle the active class (which turns the '+' to an 'x')
            toggle.classList.toggle('active');

            // Find the content div immediately below the button
            const content = toggle.nextElementSibling;

            // Toggle the display
            if (toggle.classList.contains('active')) {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    });
});

// --- FAQ Accordion Logic ---
document.addEventListener('DOMContentLoaded', () => {
    const faqs = document.querySelectorAll(".faq-question");

    faqs.forEach(faq => {
        faq.addEventListener("click", function () {
            this.classList.toggle("active");

            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });
});
