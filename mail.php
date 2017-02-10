<?php
		$to = 'jsndhillon@yahoo.com';
		$name = $_POST['name'];
		$email = $_POST['email'];
		$phone = $_POST['phone'];
		$subject = $_POST['subject'];
		$people = $_POST['people'];
		$message = $_POST['message'];

		$body = "Hi, my name is " . $name .  ",\n" . "We have " . $people . " people coming with us.\n\n" . $message . "\n\n" . "My email is " . $email . "\n" . $phone;

			mail($to, $subject, $body);
			echo "Thank you! I'll contact you shortly!";


?>