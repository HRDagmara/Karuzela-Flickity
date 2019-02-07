'use strict';
(function() {

	var elem = document.querySelector('.carousel');
	var flkty = new Flickity( elem, {
  		cellAlign: 'left',
  		contain: true
	});

	var previousButton = document.querySelector('.button--previous');

	previousButton.addEventListener( 'click', function() {
  		flkty.previous();
	});

	var progressBar = document.querySelector('.progress-bar');

	flkty.on( 'scroll', function( progress ) {
  		progress = Math.max( 0, Math.min( 1, progress ) );
  		progressBar.style.width = progress * 100 + '%';
	});

	var template = document.getElementById('template-list-shops').innerHTML;

	Mustache.parse(template);

	var generatedHello = Mustache.render(template,slides);

	window.initMap = function() {

		var uluru = {lat: 52.230817, lng: 21.002492};
		var map = new google.maps.Map(document.getElementById('#map'){
			zoom: 4,
			center: uluru
		});

		var marker = new google.maps.Marker({
			position: coords,
			map: map
		})

		for (var i=0; i<slides.lenght; i++) {
			slides[i].marker= marker;
			marker.addEventListener('click', function() {
				slides[i].previous();
			});
		}

		flkty.on( 'change', function( slides[i]) {
  			event.preventDefault();
  			map.panTo(slides[i].coords);
  			map.setZoom(10);
		})
	}
})();

	