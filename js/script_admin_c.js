window.onload = async function () {
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
	document.addEventListener('click', () => {
		if (document.getElementById('check_input').value == 'MickhOse Zitrop AdBSlMoFl<3') {
			localStorage.setItem('admin', true);
			location.href = 'http://127.0.0.1:5500/HTML/pulibr/admin/index.html'
		} else {
			alert('Пошёл нахуй!')
			location.href = 'http://127.0.0.1:5500/HTML/pulibr/'
		}
	}
	)
}