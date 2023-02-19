const hamburgerBtn = document.querySelector('.hamburger');
const menu = document.querySelector('.dep1');
hamburgerBtn.addEventListener('click', ()=>{
    menu.classList.toggle ('active');
})