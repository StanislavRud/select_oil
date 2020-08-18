<?php


$name = $_POST['username'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$text = $_POST['comment'];
$token = '1349418244:AAGKcu7i0woLPejvSRuNDEFLjIgSTk6OWTU';
$chat_id = '-451662778';
$arr = array (
    'Имя пользователя: ' => $name,
    'Телефон: ' => $phone,
    'Email: ' => $email,
    'Текст: ' =>$text
);

foreach ($arr as $key => $value) {
    $txt .="<b>".$key."</b>".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");

if ($sendToTelegram) {
    header('location: thank.html');
} else {
    echo 'Что то пошло не так... обновите страничку и попробуйте снова';
}

?>