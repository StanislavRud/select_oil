let progress = () => {
    let mainMenu = document.querySelectorAll('a.main_menu');
    let persent = document.querySelectorAll('.skill_per');
    if (pageYOffset > 20) {

        for (let i = 0; i < persent.length; i++) {
            persent[i].style.width = persent[i].getAttribute('per') + '%';
        }
        document.querySelector('header').style.backgroundColor = 'white';
        mainMenu.forEach(m => m.classList.add('black'));
        document.querySelector('nav').classList.add('min');


    } else {
        document.querySelector('nav').classList.remove('min');
        document.querySelector('header').style.backgroundColor = 'transparent';
        for (let i = 0; i < persent.length; i++) {
            persent[i].style.width = 0;
        }

        mainMenu.forEach(m => m.classList.remove('black') )
    }
}

window.addEventListener("scroll", progress);

let activeToggleMenu = document.querySelector('.menu-toggler');

let addClassActive = () => {
    activeToggleMenu.classList.toggle('active');
    document.querySelector('nav').classList.toggle('active');

}

let contactMe = () => {
    window.location.hash='#contact';
}

document.querySelector('button.contactMe').addEventListener('click', contactMe);

activeToggleMenu.addEventListener("click", addClassActive);

let closeMenu = ()=> {
    activeToggleMenu.classList.remove('active');

    document.querySelector('nav').classList.remove('active');


}

document.querySelectorAll('a.main_menu').forEach(n => n.addEventListener('click', closeMenu));

let openForm = () => {
    document.querySelector('.form').classList.add('active');
}

let closeForm = () => {
    document.querySelector('.form').classList.remove('active');
};

// setInterval(openForm, 7000)

document.querySelector('.contactMe').addEventListener('click', openForm);
document.querySelector('.close_form').addEventListener('click', closeForm);

