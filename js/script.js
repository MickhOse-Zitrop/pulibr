if (window.innerWidth >= 1024) {
	window.onload = async function () {
		window.scrollTo(0, 0);
		if (innerWidth <= 768) {
			document.querySelector('.footer__author').classList.add('mobile');
			document.getElementById('author').innerHTML = 'Made with <br> &#x2661; <br> by MickhOse Zitrop';
		}
		if (localStorage.getItem('header') === 'hidden' && localStorage.getItem('left_header') === 'show') {
			document.getElementById('header').classList.add('hidden');
			document.getElementById('left_header').classList.add('show');
		}
		if (localStorage.getItem('header_all') === 'hidden_all' && localStorage.getItem('left_header_all') === 'show_all' && localStorage.getItem('header__hidding') === 'fa-eye' && localStorage.getItem('header__position') === 'hidden') {
			document.getElementById('header').classList.add('hidden_all');
			document.getElementById('left_header').classList.add('show_all');
			document.getElementById('eye').classList.add('fa-eye');
			document.getElementById('eye').classList.remove('fa-eye-slash');
			document.querySelector('.header__position').classList.toggle('hidden')
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
	}

	document.querySelector('.header__position').addEventListener('click', function () {
		document.getElementById('header').classList.toggle('hidden');
		document.getElementById('left_header').classList.toggle('show');
		localStorage.setItem('header', document.getElementById('header').classList.contains('hidden') ? 'hidden' : '');
		localStorage.setItem('left_header', document.getElementById('left_header').classList.contains('show') ? 'show' : '');
	})
	document.querySelector('.header__hidding').addEventListener('click', function () {
		if (document.getElementById('eye').classList.contains('fa-eye-slash')) {
			document.getElementById('eye').classList.add('fa-eye');
			document.getElementById('eye').classList.remove('fa-eye-slash');
			localStorage.setItem('header__hidding', 'fa-eye')
		} else {
			document.getElementById('eye').classList.add('fa-eye-slash');
			document.getElementById('eye').classList.remove('fa-eye');
			localStorage.setItem('header__hidding', 'fa-eye-slash')
		}
		document.getElementById('header').classList.toggle('hidden_all');
		document.getElementById('left_header').classList.toggle('show_all');
		document.querySelector('.header__position').classList.toggle('hidden');
		localStorage.setItem('header_all', document.getElementById('header').classList.contains('hidden_all') ? 'hidden_all' : '');
		localStorage.setItem('left_header_all', document.getElementById('left_header').classList.contains('show_all') ? 'show_all' : '');
		localStorage.setItem('header__position', document.querySelector('.header__position').classList.contains('hidden') ? 'hidden' : '');
	})

	bull = false;
	document.querySelector('.search__button').addEventListener('click', function () {
		if (bull === true) {
			document.querySelector('.search__input').classList.toggle('visible');
			document.querySelector('.search__button_input').classList.toggle('visible');
			setTimeout(() => {
				document.querySelector('.search__input').classList.toggle('hidden');
				document.querySelector('.search__button_input').classList.toggle('hidden');
			}, 100);
			bull = false;

			let list = document.querySelectorAll('.page_container')


			list.forEach(elem => {
				elem.classList.remove('underline')
			})

		} else {
			document.querySelector('.search__input').classList.toggle('hidden');
			document.querySelector('.search__button_input').classList.toggle('hidden');
			setTimeout(() => {
				document.querySelector('.search__input').classList.toggle('visible');
				document.querySelector('.search__button_input').classList.toggle('visible');
			}, 100);
			bull = true;

			let input = document.querySelector('.search__input');

			input.oninput = function () {
				let value = this.value.toLowerCase().trim();
				let list = document.querySelectorAll('.page_container')

				if (value) {
					list.forEach(elem => {
						if (elem.innerText.toLowerCase().search(value) == -1) {
							elem.classList.remove('underline')
						}
					})
				} else {
					list.forEach(elem => {
						elem.classList.add('underline')
						document.querySelector('.search__button_input').addEventListener('click', function () {
							// pass
						})
					})
				}
			}
		}
	})

	var images = document.querySelectorAll('.image_short');

	images.forEach.call(document.querySelectorAll('.image_short'), function (e) {
		e.addEventListener('click', function () {
			var i = this.src;
			var g = this.id
			document.querySelector('.image__desk').classList.toggle('invisible');
			setTimeout(() => {
				document.querySelector('.image__desk').classList.toggle('show')
			}, 100);
			document.querySelector('#photo').src = i;
			document.querySelector('.image__desk_button_link').addEventListener('click', function () {
				navigator.clipboard.writeText(i);
				this.classList.add('active');
				setTimeout(() => {
					this.classList.remove('active')
				}, 100);
				document.querySelector('.alert_link').classList.add('active')
				setTimeout(() => {
					document.querySelector('.alert_link').classList.remove('active')
				}, 2000);
			});
			document.querySelector('.image__desk_button_open').addEventListener('click', function () {
				this.classList.add('active');
				setTimeout(() => {
					this.classList.remove('active')
				}, 100);
				window.location.href = 'http://127.0.0.1:5501/HTML/pulibr/map-cards/page_' + g + '.html'
			});
			document.querySelector('#download_button').href = i;
			document.querySelector('#download_button').addEventListener('click', function () {
				this.classList.add('active');
				this.classList.remove('active')
			})
		})
	})


	if (document.querySelector('.image_desk_back') !== null) {
		document.querySelector('.image_desk_back').addEventListener('click', () => {
			document.querySelector('.image__desk').classList.toggle('show');
			setTimeout(() => {
				document.querySelector('.image__desk').classList.toggle('invisible');
			}, 100);
		})
	}

	// Секретная функция
	function secret() {
		window.location.href = 'http://127.0.0.1:5500/HTML/pulibr/admin/index.html'
	}

	// Преобразуем массив из лево-право в коды клавиш
	function transform(input) {
		let map = {
			'a': 65,
			'd': 68,
			'b': 66,
			's': 83,
			'l': 76,
			'm': 77,
			'o': 79,
			'f': 70,
			'l': 76,
			',': 188,
			'3': 51
		},
			newArr = [];

		input.forEach(name => {
			name = name.toLowerCase();

			if (name in map)
				newArr.push(map[name]);
		});

		if (input.length !== newArr.length)
			throw new Error(`Допускаются только следующие значения: "${Object.keys(map).join`", "`}"!`);
		else
			return newArr;
	}

	/**
	 * Отслеживает комбинации
	 *
	 * @param {Array}    comb Массив последовательности значений: лево, право, верх, низ, пробел
	 * @param {Function} fn   Секретная функция, будет вызвана при вводе последовательности
	 * @param {Boolean}  perm Более одного раза слушать? По умолчанию - нет
	 */
	function konami(comb, fn, perm = false) {
		let keys = transform(comb), // Создаём массив ключей
			pointer = 0, // Указатель на текущий ключ
			check = e => {
				// Если введённый код равен ожидаемой клавише
				if (e.keyCode === keys[pointer]) {
					// То проверяем достигли мы конца или нет
					if (keys.length === ++pointer) {
						if (!perm)
							document.removeEventListener('keydown', check);
						pointer = 0;
						fn();
					}
				} else {
					// Если ввели что-то другое - сбрасываем указатель на начало
					pointer = 0;
				}
			};

		document.addEventListener('keydown', check);
	}

	konami(['a', 'd', 'b', 's', 'l', 'm', 'o', 'f', 'l', ',', '3'], secret);
} else {
	window.onload = async function () {
		document.getElementById('header').classList.add('hidden');
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
	}
	bull = false;
	document.querySelector('.search__button').addEventListener('click', function () {
		if (bull === true) {
			document.querySelector('.search__input').classList.toggle('visible');
			document.querySelector('.search__button_input').classList.toggle('visible');
			setTimeout(() => {
				document.querySelector('.search__input').classList.toggle('hidden');
				document.querySelector('.search__button_input').classList.toggle('hidden');
			}, 100);
			bull = false;

			let list = document.querySelectorAll('.page_container')


			list.forEach(elem => {
				elem.classList.remove('underline')
			})

		} else {
			document.querySelector('.search__input').classList.toggle('hidden');
			document.querySelector('.search__button_input').classList.toggle('hidden');
			setTimeout(() => {
				document.querySelector('.search__input').classList.toggle('visible');
				document.querySelector('.search__button_input').classList.toggle('visible');
			}, 100);
			bull = true;

			let input = document.querySelector('.search__input');

			input.oninput = function () {
				let value = this.value.toLowerCase().trim();
				let list = document.querySelectorAll('.page_container')

				if (value) {
					list.forEach(elem => {
						if (elem.innerText.toLowerCase().search(value) == -1) {
							elem.classList.remove('underline')
						}
					})
				} else {
					list.forEach(elem => {
						elem.classList.add('underline')
						document.querySelector('.search__button_input').addEventListener('click', function () {
							// pass
						})
					})
				}
			}
		}
	})

	var images = document.querySelectorAll('.image_short');

	images.forEach.call(document.querySelectorAll('.image_short'), function (e) {
		e.addEventListener('click', function () {
			var i = this.src;
			var g = this.id
			document.querySelector('.image__desk').classList.toggle('invisible');
			setTimeout(() => {
				document.querySelector('.image__desk').classList.toggle('show')
			}, 100);
			document.querySelector('#photo').src = i;
			document.querySelector('.image__desk_button_link').addEventListener('click', function () {
				navigator.clipboard.writeText(i);
				this.classList.add('active');
				setTimeout(() => {
					this.classList.remove('active')
				}, 100);
				document.querySelector('.alert_link').classList.add('active')
				setTimeout(() => {
					document.querySelector('.alert_link').classList.remove('active')
				}, 2000);
			});
			document.querySelector('.image__desk_button_open').addEventListener('click', function () {
				this.classList.add('active');
				setTimeout(() => {
					this.classList.remove('active')
				}, 100);
				window.location.href = 'http://127.0.0.1:5501/HTML/pulibr/map-cards/page_' + g + '.html'
			});
			document.querySelector('.image__desk_button_open_mobile').addEventListener('click', function () {
				setTimeout(() => {
					this.classList.remove('active')
				}, 100);
				window.location.href = 'http://127.0.0.1:5501/HTML/pulibr/map-cards/page_' + g + '.html'
			});
			document.querySelector('#download_button').href = i;
			document.querySelector('#download_button').addEventListener('click', function () {
				this.classList.add('active');
				this.classList.remove('active')
			})
		})
	})

	if (document.querySelector('.image_desk_back') !== null) {
		document.querySelector('.image_desk_back').addEventListener('click', () => {
			document.querySelector('.image__desk').classList.toggle('show');
			setTimeout(() => {
				document.querySelector('.image__desk').classList.toggle('invisible');
			}, 100);
		})
	}

	document.querySelector('.header__menu_block').addEventListener('click', function () {
		if (document.getElementById('header').classList.contains('hidden')) {
			document.querySelector('.header__menu').innerHTML = '<i class="fa-solid fa-xmark"></i>'
		} else {
			document.querySelector('.header__menu').innerHTML = '<i class="fa-solid fa-bars"></i>'
		}
		document.getElementById('header').classList.toggle('hidden');
	})
}