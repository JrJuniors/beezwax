<?php

	$name = $_POST['name'];
	$visitor_email = $_POST['email'];
	$message = $_POST['message'];

    $email_from = 'beez.beezwax@gmail.com';

    $email_subject = "New Beezwax Email";

    $email_body = "You have received a new message from $name.\n".
                  "Here is the message:\n $message".
				  
	$to = "beez.beezwax@gmail.com";
	
	$headers = "From: $email_from \r\n";

	$headers .= "Reply-To: $visitor_email \r\n";

	mail($to,$email_subject,$email_body,$headers);
?>