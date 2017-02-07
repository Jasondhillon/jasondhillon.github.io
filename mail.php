<?php
		$to = 'jsndhillon@yahoo.com';
		$name = $_POST['name'];
		$email = $_POST['email'];
		$phone = $_POST['phone'];
		$subject = $_POST['subject'];
		$people = $_POST['people'];
		$message = $_POST['message'];

		$body = "Hi my name is " . $name .  "\n" . "We have " . $people . "coming with us.\n\n" . $message . "\n" . "My email is " . $email . "\n" . $phone;
		$header = "From: $email";

		if($_POST['submit']){
			mail($to, $subject, $body, $header);
            header('Location: index.html');
		}

?>