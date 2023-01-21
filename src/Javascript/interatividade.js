const modal = document.querySelector('.modal');
const buttonAbrir = document.querySelector('.botao-trailer');
const buttonFechar = document.querySelector('.fechar-modal');
const frameSource = document.getElementById('video');
const linkDoVideo = document.querySelector('#video').src;

buttonAbrir.addEventListener('click', () => {
	frameSource.setAttribute('src', linkDoVideo);
	modal.classList.toggle('aberto');
});

buttonFechar.addEventListener('click', () => {
	frameSource.setAttribute('src', '');
	modal.classList.toggle('aberto');
});