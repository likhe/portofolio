"use strict";
/***********a var object with 2 other objects******************/
let translationArr = {
    'fr': {
        'cv': "Curriculum Vitae",
        'pj': "Portfolio",
        'introduce': "Presentation",
        'exp': "Experiences",
        'timeline': "Parcours",
        'legal': "Mentions",
        'contact': "Contact"
    },
    'en': {
        'cv': "Resume",
        'pj': "Works",
        'introduce': "About me",
        'exp': "Skills",
        'timeline': "Timeline",
        'legal': "Mentions",
        'contact': "Contact"
    },
    'pt': {
        'cv': "Curricolo",
        'pj': "Portfolio",
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
