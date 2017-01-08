<?php
//create variables
	$name = $_GET['name'];
	$subject = $_GET['subject'];
	$message = $_GET['message'];
	$email = $_GET['email'];

	echo $name;
	echo $subject;
	echo $message;	
	echo $email;
	
	mail();
?>