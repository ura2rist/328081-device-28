document.getElementById('view-form').addEventListener('click', function(event){
	formToggle(event);
});

document.getElementById('close-form').addEventListener('click', function(event){
	formToggle(event);
});

document.getElementById('map').addEventListener('click', function(event){
	mapToggle(event);
});

document.getElementById('map-close').addEventListener('click', function(event){
	mapToggle(event);
});

function mapToggle(e){
	e.preventDefault();
	let map = document.querySelector('.map');
	map.classList.toggle('map-active');
}

function formToggle(e){
	e.preventDefault();
	let modal = document.querySelector('#modal-form');
	modal.classList.toggle('view-form');
}