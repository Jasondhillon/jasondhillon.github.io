<?php
		$to = 'jsndhillon@yahoo.com';
		$name = $_POST['name'];
		$email = $_POST['email'];
		$phone = $_POST['phone'];
		$subject = $_POST['subject'];
		$message = $_POST['message'];

		$body = $message . "\n" . "From " . $name . "\n" . "My email is " . $email . "\n" . $phone;
		$header = "From: $email";

		if($_POST['submit']){
			mail($to, $subject, $body, $header);
            header('Location: index.html');
		}

?>