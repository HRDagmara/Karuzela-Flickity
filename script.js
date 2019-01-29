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

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});

var template = document.getElementById('template-list-shops').innerHTML;

Mustache.parse(template);

var generatedHello = Mustache.render(template,slides);

}()
