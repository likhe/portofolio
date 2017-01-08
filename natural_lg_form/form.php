<?php
//create variables
	$detination = "khelifi.linda.paca@gmail.com";
	$name = $_GET['name'];
	$email = $_GET['email'];
	$subject = $_GET['subject'];
	$message = $_GET['message'];
//concat
	$concat = "Nom: " . $name . "\nMail: " . $email . "\nSujet: " . $subject . "\nMessage: " . $message;

//post several variables
	echo $name;
	echo $subject;
	echo $message;	
	echo $email;
//send the mail
	mail($destionation);
	header("Location:home.html");
//On https://www.youtube.com/watch?v=QY02rtJwWNo
?>