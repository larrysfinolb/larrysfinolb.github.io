const menuBtn = document.querySelector('#menu_btn');
const nav = document.querySelector('#nav');

menuBtn.addEventListener('click', () => {
	nav.classList.toggle('header__nav--active');
});
