<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Создание формы обратной связи</title>
<meta http-equiv="Refresh" content="4; URL=https://workgroup.in.ua/moving.html">
<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>


<?php

// сохраняем в переменную данные полученные из поля c именем
$userservice = $_POST['service'];
$username = $_POST['customerName'];
$usertel = $_POST['telephone'];

// ФИЛЬТРЫ

// преобразует все символы, которые пользователь попытается добавить в форму
$userservice =htmlspecialchars($userservice);
$username =htmlspecialchars($username);
$usertel =htmlspecialchars($usertel);


// декодирует url, если пользователь попытается его добавить в форму.
$userservice = urldecode($userservice);
$username = urldecode($username);
$usertel = urldecode($usertel);

//удалим пробелы с начала и конца строки, если таковые имеются
$userservice = trim($userservice);
$username = trim($username);
$usertel = trim($usertel);



// echo $userservice;
// echo "<br>";
// echo $username, $usertel ;

if (mail(
	"workgroup8sender@workgroup.in.ua",
	"Заявка с сайта",
	" тип запроса:  ". $userservice .
	" | имя: ". $username ." | телефон: ".$usertel ,
	"From: workgroup8sender@workgroup.in.ua \r\n"))

 { reset; 	echo "<center><img src='../image/spasibo.png'></center>";}


else {echo "<center><img src='../image/ne-otprevleno.png'></center>";}


?>

</body>
</html>

