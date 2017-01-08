$(function() {
	//add the selector nav-icon
//when you click on the nav icon class, i want the nav_opened class to be opened.
	$(".nav-icon").click(function() {
//toggleClass:Add or remove one or more classes from each element in the set of matched elements, depending on either the class's presence or the value of the state argument.
		$(".header").toggleClass("nav-opened")
	})
});