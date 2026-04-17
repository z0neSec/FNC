document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-links a");
    const currentUrl = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentUrl || (currentUrl === "" && link.getAttribute("href") === "index.html")) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});
document.querySelectorAll(".footer a").forEach(link => {
    link.addEventListener("click", () => {
        console.log(`Navigating to: ${link.innerText}`);
    });
})

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
    const menuButton = document.querySelector('.menu-button');
    menuButton.textContent = navLinks.classList.contains('active') ? '×' : '☰';
    
}
function goBack() {
    window.history.back();
}

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".animate");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1 });

    elements.forEach((el) => observer.observe(el));
});



document.addEventListener("DOMContentLoaded", function () {
    const dogPark = document.querySelectorAll(".puppy-park");

    function checkVisibility() {
        dogPark.forEach((park) => {
            const cats = park.querySelectorAll(".kitty-box");

            cats.forEach((cat, index) => {
                const rect = cat.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                if (rect.top < windowHeight - 100) { // Trigger 100px before entering
                    setTimeout(() => {
                        cat.classList.add("meow");
                    }, index * 300); // Delay each cat by 300ms
                }
            });
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Run on load in case elements are already visible
});


// Function to animate the cards when in viewport
function revealCards() {
    let cards = document.querySelectorAll(".service-card");

    let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "perspective(600px) rotateY(0deg)";
            }
        });
    }, { threshold: 0.2 });

    cards.forEach((card) => observer.observe(card));
}

// Call the function
revealCards();

document.addEventListener("DOMContentLoaded", function () {
    const fadeItems = document.querySelectorAll(".appear-effect");

    const watchScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("showing");
            }
        });
    }, { threshold: 0.2 });

    fadeItems.forEach(item => watchScroll.observe(item));
});


// Add click event listener to gallery images
const galleryItems = document.querySelectorAll('.gallery-item');
const introImg = document.getElementById('intro-img');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        // Replace the intro image with the clicked gallery image
        introImg.src = item.src;
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const zoomObserver = new IntersectionObserver((entries, zoomObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          zoomObserver.unobserve(entry.target);
        }
      });
    }, {
    });

    const zoomElements = document.querySelectorAll('[data-zoom="true"]');
    zoomElements.forEach(element => zoomObserver.observe(element));
  });




