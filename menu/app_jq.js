
$(document).ready(function() {
//when yout click to the toogle id the active class is created in toggle id * and in the overlay id is created the class open
$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });
 });