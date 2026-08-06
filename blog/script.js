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