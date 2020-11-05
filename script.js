let easy = document.getElementById('easy');
let medium = document.getElementById('medium');
let difficult = document.getElementById('difficult');
let button = document.getElementById ('button');
let playingCard = document.querySelector('.cardholder');
let back = document.querySelector('.card__back')


easy.addEventListener ('click', () => {
	easy.classList.add('active');
	medium.classList.remove('active');
	difficult.classList.remove('active');
})

medium.addEventListener ('click', () => {
	medium.classList.add('active');
	easy.classList.remove('active');
	difficult.classList.remove('active');
})

difficult.addEventListener ('click', () => {
	difficult.classList.add('active');
	easy.classList.remove('active');
	medium.classList.remove('active');
})

button.addEventListener ('click', () => {
	document.querySelector('.container').classList.toggle('disable');
	let start = document.querySelector('.active');

	switch(true) {
		case start == document.getElementById('medium'):
		document.getElementById('container').classList.remove('container-easy', 'disable');
		document.getElementById('container').classList.add('container-medium');
		for (i = 0; i < 5; i++) {
			let clone = playingCard.cloneNode(true);
			document.getElementById('container').appendChild(clone);
		}
		break;
		case start == document.getElementById('difficult'):
		document.getElementById('container').classList.remove('container-easy', 'disable');
		document.getElementById('container').classList.add('container-difficult');
		for (i = 0; i < 9; i++) {
			let clone = playingCard.cloneNode(true);
			document.getElementById('container').appendChild(clone);
		}
		break;
		default:
		document.getElementById('container').classList.remove('disable');
		for (i = 0; i < 2; i++) {
			let clone = playingCard.cloneNode(true);
			document.getElementById('container').appendChild(clone);
		}
	}

	let cardsMassive = Array.from(document.getElementById('container').children);
	let randomCard = cardsMassive[Math.floor(Math.random()*cardsMassive.length)];
	randomCard.querySelector('.card__back').classList.add('card__back_win');
	randomCard.querySelector('.card__back').classList.remove('card__back');

	let cardItem = document.querySelectorAll('.card');
	cardItem.forEach(function(elem, i){
		let func = () => {
			elem.classList.add('card__change');
		}
		elem.addEventListener('click', func);
	})

})
