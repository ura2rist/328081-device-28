let form = document.querySelector('#popup-form');

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

form.addEventListener('submit', function(event){
	let name = document.querySelector('[name=name-user]'),
		mail = document.querySelector('[name=mail-user]'),
		text = document.querySelector('[name=form-text]');
	if(!name.value || !mail.value){
		event.preventDefault();
		name.classList.add('error-form');
		mail.classList.add('error-form');
	}
	name.classList.remove('error-form');
	mail.classList.remove('error-form');
});