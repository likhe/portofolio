//appel du DOC html
$(document).ready(function() {
    // define all variables we need after
    var $slide = $('#slide'), // target id slide
        $img = $('#slide img'), // target img inside the id slide
        indexImg = $img.length - 1, // define the index of the last element
        i = 0, // countdown to 0
        $currentImg = $img.eq(i); /* target the current index i in position 0
        eq(index/position) is in Js translation the queryselector
        */
    $img.css('display', 'none'); // on cache les images
    $currentImg.css('display', 'block'); // on affiche seulement l'image courante

})
