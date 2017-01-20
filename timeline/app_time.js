"use strict";

/**a DOM element can be visible in the current viewport*******************/
//create a function whiwh can detect the viewport*/
function isVisibleInViewport(el) {
//offsetTop: 
    let top = el.offsetTop,
        left = el.offsetLeft,
        width = el.offsetWidth,
        height = el.offsetHeight;

    while (el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
    }

    return (
        top < (window.pageYOffset + window.innerHeight) &&
        left < (window.pageXOffset + window.innerWidth) &&
        (top + height) > window.pageYOffset &&
        (left + width) > window.pageXOffset
    );
}

}
