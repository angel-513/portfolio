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

/*============================ BLUR TO NAVBAR ============================*/
const blurNavbar = () => {
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header');
}
window.addEventListener('scroll', blurNavbar);

/*============================ EMAIL JS ============================*/
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault();

    /*I use EmailJS plataform to the contact section, url: https://www.emailjs.com/*/
    emailjs.sendForm('service_plsud1v', 'template_him90lf', '#contact-form', '1lhqChfgC-So0tw5p') //Function parameters: serviceID, templateID, formID, publicKey
    .then(() => {
        contactMessage.textContent = 'Message sent successfully ✅'
    
        //To remove message
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        //To clear inputs fields
        contactForm.reset();
    }, () => {
        contactMessage.textContent = 'Message not sent (service error) ❌'
    })
}

contactForm.addEventListener('submit', sendEmail);

/*============================ SHOW SCROLL UP BUTTON ============================*/
const scrollUp = () => {
    const scrollUpButton = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUpButton.classList.add('show-scroll') : scrollUpButton.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);



