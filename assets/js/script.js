/*============================ SHOW ASIDE MENU ============================*/
const showNavbarMenu = document.getElementById('navbar-tabs'),
    btnMenu = document.getElementById('navbar-btnMenu'),
    btnClose = document.getElementById('navbar-btnClose');

if (btnMenu) {
    btnMenu.addEventListener('click', () => {
        showNavbarMenu.classList.add('show-menu');
    });
}
if (btnClose) {
    btnClose.addEventListener('click', () => {
        showNavbarMenu.classList.remove('show-menu');
    });
}
/*============================ REMOVE ASIDE MENU ============================*/
const navbarLink = document.querySelectorAll('.tabs-link');

const linkAction = () => {
    showNavbarMenu.classList.remove('show-menu');
}
navbarLink.forEach(link => {
    link.addEventListener('click', linkAction);
});










