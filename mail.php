<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['msg'];

$to = "dherreradelacalle@gmail.com";
$subject = "Correo desde portafolio";
$txt = "Name = " . $name . "\r\n Email = " . $email . "\r\n Message = " . $message;
$headers = "From: noreply@yoursite.com" . "\r\n" . 
"CC: somedoyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//
header("Location: ./index.html");
?>