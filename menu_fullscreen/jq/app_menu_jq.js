$(function() {
	//when you click on the nav icon class or the nav overlay class, i want the nav_opened class to be opened.
	$(".nav-icon, .nav-overlay").click(function() {
//toggleClass:Add or remove one or more classes from each element in the set of matched elements, depending on either the class's presence or the value of the state argument.
		$("body").toggleClass("nav-opened")
	})
});