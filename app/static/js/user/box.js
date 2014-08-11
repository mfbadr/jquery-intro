/* global $, document */

(function(){
  'use strict';

  $(document).ready(function(){
    console.log('the doc is ready');
    $('#add-boxes').click(addBoxes);
  });

  function addBoxes(){
    var num = $('#box-num').val() * 1,
        $box,
        i,
        text,
        boxclass;
    console.log('Adding boxes', num);

    $('#boxes').empty();
    for(i = 0; i < num; i++){
      $box = $('<div>');
      if(i %2 ){
        boxclass = 'oddBox';
        text = Math.pow(i, 3);
      }else{ text = Math.pow(i, 2);
        boxclass = 'evenBox';
      }

      $box.text(text);
      $box.addClass(boxclass);
      $('#boxes').append($box);
    }
  }
})();
