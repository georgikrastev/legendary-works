// Change Theme
const body = document.querySelector('body');
const themeSwitch = document.querySelector('.theme-switch');

themeSwitch.addEventListener('click', () => {
	if (body.classList.contains('theme-dark')) {
		body.classList.remove('theme-dark');
		body.classList.add('theme-light');
	} else {
		body.classList.remove('theme-light');
		body.classList.add('theme-dark');
	}
});
