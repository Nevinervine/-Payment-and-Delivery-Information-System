<?php

  $host = 'localhost';  // Хост, у нас все локально
    $user = 'u1043622_default';    // Имя созданного вами пользователя
    $pass = '_V1H5mKY'; // Установленный вами пароль пользователю
    $db_name = 'u1043622_default';   
  


    $link = mysqli_connect($host, $user, $pass, $db_name); // Соединяемся с базой
  $link->set_charset("utf8");

$dishes = $_POST['dishes'];
$name = $_POST['name'];
$phone = $_POST['phone'];
$address = $_POST['address'];
$paymentMethod = $_POST['paymentMethod'];
$sent = $_POST['sent'];
$status = $_POST['status'];


      
        $sql = mysqli_query($link, "INSERT INTO `zakaz` (`dishes`, `name`,`phone`,`address`, `paymentMethod`,`sent`, `status`) VALUES ('$dishes', '$name','$phone','$address', '$paymentMethod','$sent','$status')");
   $per=(mysqli_insert_id($link));


?>

