function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");

    
    if (menu.classList.contains('open')) {
        menu.style.height = `${menu.scrollHeight}px`;
    } else {
        menu.style.height = '0';
    }
}
