
$(document).ready(function() {
	/***********a var object with 2 other objects******************/
let translationArr = {
    'en' : {
		'name': "Name",
		'email': "Email",
		'about': "Subject",
		'sms': "Comments",
		'send': "Send",
        'legal': "Mentions",
        'contact': "Contact"
		
    },
    'fr' : {
		'name': "Votre nom",
		'email': "Votre email",
		'about': "A propos",
		'sms': "Votre message",
		'send': "Envoyer",
        'legal': "Mentions légales",
        'contact': "Contact"
    },
};
/**************loop lang elements to each item when element translate class is clicked***************/
$(function() {
    /*****create an event onclick******************/
    $('.translate').click(function() {
        /**********create a var*************/
        let languages = $(this).attr('id');
        /**********target the class lang for the change*************/
        $('.lang').each(function(index, element) {
          $(this).text(translationArr[languages][$(this).attr('key')]);

        });
    });
});

//when yout click to the toogle id the active class is created in toggle id * and in the overlay id is created the class open
$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });
 });