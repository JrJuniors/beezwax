<?php
/*
Dominic Lutz
Joshua Peoples
12/6/2019
Professor Kinuthia
ISYS 288 - 001

PHP document to email the developers if the user has feedback. This isn't used currently because Github does not
support the usage of PHP
*/

$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];

if(IsInjected($visitor_email))
{
    echo "Bad email value!";
    exit;
}

$email_from = 'beez.beezwax@gmail.com';
$email_subject = "New Beezwax Feedback!";
$email_body = "You have received a new message from $name.\n".
    "Here is the message:\n $message".
    
$to = "beez.beezwax@gmail.com";
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";

//send the email
mail($to,$email_subject,$email_body,$headers);

//done, redirect to ThankYou page.
header('Location: Aboutus.html');


// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}
   
?> 
