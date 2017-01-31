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
            'sk':"Compétences",
            'pg':"Languages de programmation",
            'wd':"Webdesign",
            'dv':"Divers",
            "inf":'Infographie',
            'fs':"Veille stratégique",
            'legal': "Mentions légales"
        },
        'en': {
            'home': "Home",
            'cv': "Resume",
            'pj': "Works",
            'contact': "Contact",
            'sk':"Skills",
            'pg':"Programmation languages",
            'wd':"Webdesign",
            'dv':"Unclassified",
            "inf":'Infographic',
            'fs':"Strategic foresight",
            'legal': "Mentions"
        },
        'pt': {
            'home': "Início",
            'cv': "Currículo",
            'pj': "Portfolio",
            'sk':"Competências",
            'pg':"Linguagens de programação",
            'wd':"Webdesign",
            'dv':"Outros",
            'contact': "Contacto",
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
