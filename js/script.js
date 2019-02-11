$(document).ready(function() {

  // activate button
  $('input').click(function() {
     if($('input').is(':checked')) {
     $( '#submit').removeClass('cancel').addClass('activate').prop('disabled', false);
     }
  });

  // show and hide popup
  var popup       = $( '.form__block_popup' )
      popupHidden = $( '.form__block_close' )

  $( '.form__block_popup--icon i' ).click( function() {
    popup.slideUp( 'slow', function() {
      popupHidden.slideDown()
    });
  });

  $( '.form__block_close img' ).click( function() {
    popupHidden.slideUp( 'slow', function() {
      popup.slideDown()
    });
  });

  // shake animation on button
  setTimeout(function() {
    $('.form__block_button--send').addClass('form__block_button--shake');
  }, 3000);

});
