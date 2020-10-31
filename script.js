let easy = document.getElementById('easy');
let medium = document.getElementById('medium');
let difficult = document.getElementById('difficult');
let button = document.getElementById ('button');
let playingCard = document.getElementsByClassName('card');

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
		document.querySelector('.container-medium').classList.remove('disable');
		break;
		case start == document.getElementById('difficult'):
		document.querySelector('.container-difficult').classList.remove('disable');
		break;
		default:
		document.querySelector('.container-easy').classList.remove('disable');
	}
})

const cardOnClick = () => playingCard.classList.add('card__change');
playingCard.addEventListener('click', cardOnClick);
