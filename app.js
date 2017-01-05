//1. appel du DOC html
$(document).ready(function() {
    // 2. define all variables we need after
    var $slide = $('.slide'), // target id slide
        $img = $('.slide img'), // target img inside the id slide
        indexImg = $img.length - 1, // define the index of the last element
        i = 0, // countdown to 0
        $currentImg = $img.eq(i);
    /* target the current index i in position 0
    eq(index/position) is in Js translation the queryselector()*/
    //3. hide all img except the current img - manipulate the css
    $img.css('display', 'none'); // hide img
    $currentImg.css('display', 'inline-block'); // post only the current img
    //4. manage the page change from an image to the next img
    //4.1manipulate the html - add the prev and next direction
    $slide.append('<div class="controls"> <span class="prev">&#65513;</span> <span class="next">&#xffeb;</span> </div>');
    //4.2 call the class span next
    // next img
    $('.next').click(function() {
        i++; //add countdown
        $img.css('display', 'none'); // hide img
        $currentImg = $img.eq(i); // define new img
        $currentImg.css('display', 'inline-block'); // then post it
    });
     // previous img
    $('.prev').click(function() {
        i--; // return the countdown
        $img.css('display', 'none');//hide img
        $currentImg = $img.eq(i);//define new img
        $currentImg.css('display', 'inline-block'); //then post it
    });
})
// NB: arrows work but when there is no img left continue to send blank
//5. Limit the img display only with
$('.next').click(function(){ // next img

    i++; //add countdown
//if i is inferior or equal to indexImg...
    if( i <= indexImg ){
        $img.css('display', 'none'); // hide me img
        $currentImg = $img.eq(i); // define the new img
        $currentImg.css('display', 'inline-block'); // post-it
    }
//...else
    else{
        i = indexImg;
    }

});

$('.prev').click(function(){ // previous img

    i--; // remove countdown then do same thing as next

    if( i >= 0 ){
        $img.css('display', 'none');
        $currentImg = $img.eq(i);
        $currentImg.css('display', 'inline-block');
    }
    else{
        i = 0;
    }

});
