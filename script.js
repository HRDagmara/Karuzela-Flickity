var elem = document.querySelector('.carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.carousel', {
  // options
});

var flkty = new Flickity('.carousel');

var previousButton = document.querySelector('.button--previous');
previousButton.addEventListener( 'click', function() {
  flkty.previous();
});

var previousWrappedButton = document.querySelector('.button--previous-wrapped');
previousWrappedButton.addEventListener( 'click', function() {
  flkty.previous( true );
});

var flkty = new Flickity('.carousel');

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});

