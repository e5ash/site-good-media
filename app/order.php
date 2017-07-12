<?php
if (isset($_POST['name'])) {$name = $_POST['name'];}
if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
if (isset($_POST['email'])) {$email = $_POST['email'];}

$message;


if ($name) {
	$message .= "Имя: $name\n";
}

$message .= "Телефон: $phone\n";

if ($email) {
	$message .= "\nПочта: $email";
}

$to = "levic.vlad@mail.ru";
// $to = "e5ash.bro@gmail.com";
$headers = "Content-type: text/plain; charset = UTF-8";
$subject = "Новый заказ с сайта";
$send = mail($to, $subject, $message, $headers);
?>
