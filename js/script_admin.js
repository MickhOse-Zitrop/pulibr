window.onload = async function () {
	if (localStorage.getItem('admin') === 'true') {
		window.scrollTo(0, 0);
		if (innerWidth <= 768) {
			document.querySelector('.footer__author').classList.add('mobile');
			document.getElementById('author').innerHTML = 'Made with <br> &#x2661; <br> by MickhOse Zitrop';
		}
		setTimeout(() => {
			document.querySelector('.preloader').classList.add('hidden');
		}, 500);
		setTimeout(() => {
			document.querySelector('.preloader__text').classList.remove('invisible');
		}, 1000)
		setTimeout(() => {
			document.querySelector('.preloader__text').classList.add('hidden')
		}, 2500);

		document.querySelector('.exit').addEventListener('click', () => {
			localStorage.setItem('admin', false);
			location.href = 'http://127.0.0.1:5500/HTML/pulibr/';
		})
	} else {
		location.href = 'http://127.0.0.1:5500/HTML/pulibr/admin/check.html'
	}
}