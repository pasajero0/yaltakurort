<?php
if (!empty($_POST['name']) and !empty($_POST['email']) and !empty($_POST['phone'])){

	$theme = 'хостел "Ялтакурорт"';
	$name = $_POST['name'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$message = $_POST['message'];


	$to = "leomalinovsky@gmail.com";
	$letter = 'Сообщение с сайта <br/><br/>
	Имя: '.htmlspecialchars($name).'<br/>
	Телефон: '.htmlspecialchars($phone).'<br/>
	Email: '.htmlspecialchars($email).'<br/><br/>
	'.htmlspecialchars($message);
	$headers = "content-type: text/html; charset=utf-8\r\n";	
	$headers .= "From:".htmlspecialchars($email);
	
	mail($to, $theme , $letter, $headers);
 	echo "SUCCESS!";
} else {
	echo "ERROR!";
}
?>