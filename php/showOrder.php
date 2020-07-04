<?php

  $host = 'localhost';  // Хост, у нас все локально
  $user = 'u1043622_default';    // Имя созданного вами пользователя
  $pass = '_V1H5mKY'; // Установленный вами пароль пользователю
  $db_name = 'u1043622_default';   // Имя базы данных
  $imgpath="images/susi/"; //каталог изображений
  $i=4;
  $link = mysqli_connect($host, $user, $pass, $db_name); // Соединяемся с базой
  $link->set_charset("utf8");
  
  $sql = mysqli_query($link, 'SELECT * FROM `zakaz`');
  while ($result = mysqli_fetch_array($sql))
  {

 if($result['status']=="ne gotov")
   {
  echo"<div class='strok'>";
  echo "<div class='admin_bd'> {$result['id']} </div>";
  $date = $result['dishes'];// разграничителями могут быть slash, dot или hyphen
  $strToShow = str_replace(";", "<br/>", $date);
  echo "<div class='admin_bd'> {$strToShow} </div>";  
  echo "<div class='admin_bd'> {$result['name']} </div>";        
 echo "<div class='admin_bd'>{$result['phone']}</div>";
 echo "<div class='admin_bd'>{$result['address']}</div>";
 echo "<div class='admin_bd'>{$result['paymentMethod']}</div>";
 echo "<div class='admin_bd'>{$result['sent']}</div>";



 echo "<div class='admin_bd'><a href='?check_id={$result['id']}'>Готово</a></div>";


echo  "</div>";}
  }

?>
