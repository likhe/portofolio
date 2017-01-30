"use strict";
/***********a var object with 2 other objects******************/
let translationArr = {
    'en' : {
        'cv': "Resume",
        'job':"Web integrator",
        'pj': "Works",
        'legal': "Mentions",
        'contact': "Contact"
    },
    'fr' : {
        'cv': "Curriculum Vitae",
        'pj': "Portfolio",
        'job': "Intégratrice web",
        'legal': "Mentions",
        'contact': "Contact"
    },
    'pt' : {
      'cv': "Curricolo",
      'pj': "Portfolio",
      'job': "Integradora de web",
      'legal': "Mençoes legais",
      'contact': "Contacto"
    }
};
/**************loop lang elements to each item when element translate class is clicked***************/
$(function() {
    /*****create an event onclick******************/
    $('.translate').click(function() {
        /**********create a var*************/
        var languages = $(this).attr('id');
        /**********target the class lang for the change*************/
        $('.lang').each(function(index, element) {
          $(this).text(translationArr[languages][$(this).attr('key')]);

        });
    });
});
