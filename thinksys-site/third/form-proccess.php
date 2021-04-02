<?php 
if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['subject'])){

    $to = "singh.prabhat@thinksys.com";
    // $from = $_POST['email']; 
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $department = $_POST['department'];

    $message = $name . " " . $email . " subject:" .$subject .  $department . "\n\n" . $_POST['message'];
  
    $header = "From:" . $to;
    mail($to,$subject,$message,$header);
    echo "Mail Sent. Thank you " . $name . ", we will contact you shortly.";
  }
?>