"use strict";
$(document).ready(function() {
    $('#toggle').click(function() {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
    });
    /***********a var object with 2 other objects******************/
    let translationArr = {
        'fr': {
            'home': "Accueil",
            'cv': "Présentation",
            'pj': "Portfolio",
            'contact': "Contact",
            "inf":'Infographie',
            'fs':"Veille stratégique",
            'legal': "Mentions légales"
        },
        'en': {
            'home': "Home",
            'cv': "Resume",
            'pj': "Works",
            'contact': "Contact",
            "inf":'Infographic',
            'fs':"Strategic foresight",
            'legal': "Mentions"
        },
        'pt': {
            'home': "Início",
            'cv': "Currículo",
            'pj': "Portfolio",
            'contact': "Contato",
            "inf":'Infografia',
            'fs':"Prospecção estratégica",
            'legal': "Menções legais"
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
});
