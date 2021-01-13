const menuBtn = document.querySelector('.menu-btn');

//querySelector doesn't work in this case, but why?
const hamburger = document.getElementsByClassName("menu-btn__burger")[0];

const nav = document.querySelector('.nav');
const menuNav = document.getElementsByClassName('menu-nav')[0];
const navItems = document.querySelectorAll('.menu-nav__item');

let showMenu = false;
menuBtn.addEventListener('click', toogleMenu);

function toogleMenu(){
    if(!showMenu){
        hamburger.classList.add("open");
        nav.classList.add("open");
        menuNav.classList.add('open');
        navItems.forEach(item => {
            item.classList.add('open');
        });

        showMenu = true;
    } else {
        hamburger.classList.remove("open");
        nav.classList.remove("open");
        menuNav.classList.remove('open');
        navItems.forEach(item => {
            item.classList.remove('open');
        });
        showMenu = false;
    }

}