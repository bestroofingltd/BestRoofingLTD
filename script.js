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