const socialIcon = document.getElementById('socialIcon');
const socialSidebar = document.getElementById('socialSidebar');

socialIcon.addEventListener('click', () => {
    socialSidebar.classList.toggle('move__social');
    socialIcon.classList.toggle('move__social__icon')
})