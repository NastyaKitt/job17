<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = trim($_POST['name']);
    $tel = trim($_POST['tel']);

    if (!empty($name) && !empty($tel)) {
        $to = "example@example.com"; 
        $subject = "Новая заявка на ремонт";
        $message = "Имя: $name\nТелефон: $tel";
        $headers = "From: noreply@example.com" . "\r\n".
                   "Reply-To: noreply@example.com" . "\r\n".
                   "X-Mailer: PHP/" . phpversion();

        if (mail($to, $subject, $message, $headers)) {
            echo "Спасибо за вашу заявку! Мы свяжемся с вами в ближайшее время.";
        } else {
            echo "Ошибка! Попробуйте снова.";
        }
    } else {
        echo "Пожалуйста, заполните все поля.";
    }
} else {
    echo "Некорректный запрос.";
}
?>