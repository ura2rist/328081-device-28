function viewForm(e){
	e.preventDefault();
	let modal = document.querySelector('#modal-form');
	modal.classList.toggle('view-form');
}

function closeForm(e){
	e.preventDefault();
	let modal = document.querySelector('#modal-form');
	modal.classList.toggle('view-form');
}

document.getElementById('map').onclick = function(event){
	event.preventDefault();
	let map = document.querySelector('.map');
	map.classList.toggle('map-active');
}

document.querySelector('.map').onclick = function(event){
	event.preventDefault();
	let map = document.querySelector('.map');
	map.classList.toggle('map-active');
}