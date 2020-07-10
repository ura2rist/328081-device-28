let form = document.querySelector('#popup-form');

document.getElementById('view-form').addEventListener('click', function(event){
	formToggle(event);
});

document.getElementById('close-form').addEventListener('click', function(event){
	closeForm(event);
	formToggle(event);
});

function closeForm(e){
	e.preventDefault();
	let modal = document.querySelector('.wrap-modal');
	modal.classList.remove('.error-form');
}

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

if (form){
	form.addEventListener('invalid', checkForm, true)
	function checkForm(evt) {
		let target = evt.target;
		// target.setCustomValidity(' ');
		target.classList.add('error-form');
		console.log('невалидно');
		target.addEventListener("input", function(evt) {
			target.classList.remove('error-form');
		})
	}
}
