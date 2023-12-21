const hamburgerIcon = document.getElementById('hamburger-icon');
const closeIcon = document.getElementById('close-icon');
const introSection = document.querySelector('.intro-section');
const introMain = document.getElementById('main');
const mobileQuery = window.matchMedia('(max-width: 700px)');
const desktopQuery = window.matchMedia('(min-width: 710px)');
const mobileNav = document.getElementById('mobile-nav');

hamburgerIcon.onclick = () => {
    if(mobileQuery.matches) {
        mobileNav.style.display = 'flex';
        closeIcon.style.display = 'block';
        hamburgerIcon.style.display = 'none';
        introSection.style.display = 'none';
        introMain.style.display = 'none';    
    }
}

closeIcon.onclick = () => {
    if(mobileQuery.matches) {
        mobileNav.style.display = 'none';
        hamburgerIcon.style.display = 'block';
        closeIcon.style.display = 'none';
        introSection.style.display = 'flex';
        introMain.style.display = 'block';
    }
}