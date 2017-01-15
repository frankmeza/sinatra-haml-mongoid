$(document).ready(function() {
  functions = {
    clickMe: function() {
      $('#first_name').on('click', function() {
        $('#first_name').html('Prank');
      });
    }
  };
  functions.clickMe();
});

