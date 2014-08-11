/* global $, document */

console.log('Its dangerous to go alone, take this!');

(function(){
  'use strict';
  $(document).ready(initialize);

  function initialize(){
    console.log('the dom is now ready!');

    $('h2').css('font-size', '50px');

    $('h2').fadeOut(2000);
    $('#a, #b, #c').addClass('happy');
    $('div+ul li').addClass('sad');

    $('#red').click(makeRed);
    $('#yellow').click(makeYellow);
    $('#color').click(makeColor);
    $('#fadeIn').click(fadeIn);
    $('#fadeOut').click(fadeOut);
  }

  function makeRed(){
    $('body').css('background-color', 'red');
    // alert('You clicked the red button');
  }
  function makeYellow(){
    $('body').css('background-color', 'yellow');
    // alert('You clicked the red button');
  }

  function makeColor(){
    var color = $('#color-value').val();
    $('body').css('background-color', color);
    // alert('You clicked the red button');
  }

  function fadeIn(){
    var fadeTime = $('#fadeTime').val() * 1;
    $('footer').fadeIn(fadeTime);
  }

  function fadeOut(){
    var fadeTime = $('#fadeTime').val() * 1;
    $('footer').fadeOut(fadeTime);
  }
  console.log('the dom is NOT ready');
})();


