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
            't': "Parcours",
            'tn':"Foussana | Tunisie",
            'ie':"Dublin | Irlande",
            'pt':"Lisbonne | Portugal",
            'tFirst': "Médiatrice numérique | Echanges Phocéens",
            'tSecond': "Developpeur web | Formation Simplonmars",
            'tThird': "Vendeuse | Artisans du Monde",
            'tForth': "Agente d'accueil | UEFA",
            'tFifth': "Master Tourisme Langues et Patrimoine | Aix-Marseille Université",
            'tSixth': "Assistante logistique | Benetton",
            'tSeventh': "Bibliothécaire | Aix-Marseille Université",
            'tEighth': "Assistante de français | Ecole et Collège de Amarante",
            'tNinth':"Assistante de Direction | Schindler Ireland",
            'tTenth':"Programme Erasmus | Universidade Católica Portuguesa ",
            'tEleventh': "Langues Etrangères Appliquées spécialité affaires et commerce | Aix-Marseille Université",
           'legal': "Mentions légales"
        },
        'en': {
            'home': "Home",
            'cv': "Resume",
            'pj': "Works",
            't': "Timeline",
            'tn':"Foussana | Tunisia",
            'ie':"Dublin | Ireland",
            'pt':"Lisbon | Portugal",
            'contact': "Contact",
            'legal': "Mentions"
        },
        'pt': {
            'home': "Início",
            'cv': "Currículo",
            'pj': "Portfolio",
            't': "Histórico",
        //    'tFirst': "",
            'tn':"Foussana | Tunísia",
            'ie':"Dublin | Irlândia",
            'pt':"Lisboa | Portugal",
            'contact': "Contato",
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
