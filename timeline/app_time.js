
/**a DOM element can be visible in the current viewport*******************/

/*By default, the timeline elements (divs) should be hidden.
They should appear when their parent (list item) enters the viewport.
The first task is relatively straightforward. The second one, though,
is a bit more complicated. We need to detect if the target elements (list items)*/

//1. create a function test whether an element is visible in the current viewport or not.
function isElementInViewport(el) {
    let rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
    //2. TRhe list is visible When the page loads & As we scroll down
    let items = document.querySelectorAll(".timeline li");

    // code for the isElementInViewport function

    function callbackFunc() {
        for (let i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
                items[i].classList.add("in-view");
            }
        }
    }

    window.addEventListener("load", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
