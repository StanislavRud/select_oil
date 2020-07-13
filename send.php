<?php
$username = $_POST['username'];
$email = $_POST['email'];
$fio = htmlspecialchars($fio);
$email = htmlspecialchars($email);
$username = urldecode($username);
$email = urldecode($email);
$username = trim($username);
$email = trim($email);
//echo $fio;
//echo "<br>";
//echo $email;
if (mail("s.rud@factor.ua", "Заявка с сайта", "ФИО:".$username.". E-mail: ".$email ,"From: stanislavrud1990@gmail.com \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}?>