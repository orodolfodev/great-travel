
// ===== Muda a cor da navbar quando estiver sobre a div "booking" =====

window.addEventListener('scroll', alterarCorNavbar);

function alterarCorNavbar() {
    const navbar = document.querySelector('nav');
    const booking = document.querySelector('.booking');
    const bookingRect = booking.getBoundingClientRect();

    if (bookingRect.top < 50) {
        navbar.classList.add('navbar-solida');

    } else {
        navbar.classList.remove('navbar-solida');
    }
}