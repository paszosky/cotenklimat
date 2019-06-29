// hamburger menu
const navBtn = document.querySelector('.navigation__btn-js');
// console.log(navBtn);

navBtn.addEventListener('click', () => {
    const navigation = document.querySelector('.navigation__list--js');
    navigation.classList.toggle('navigation__list--visible');
    if (navigation.classList.contains('navigation__list--visible')) {
        navBtn.innerHTML = "X";
    } else {
        navBtn.innerHTML = "☰";
    }
});

