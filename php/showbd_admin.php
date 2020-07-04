<?php


  $host = 'localhost';  // Хост, у нас все локально
  $user = 'u1043622_default';    // Имя созданного вами пользователя
  $pass = '_V1H5mKY'; // Установленный вами пароль пользователю
  $db_name = 'u1043622_default';   // Имя базы данных
  $imgpath="images/susi/"; //каталог изображений
  $i=4;
  $link = mysqli_connect($host, $user, $pass, $db_name); // Соединяемся с базой

   $link->set_charset("utf8");
  

  // Ругаемся, если соединение установить не удалось
  if (!$link) {
    echo 'Не могу соединиться с БД. Код ошибки: ' . mysqli_connect_errno() . ', ошибка: ' . mysqli_connect_error();
    exit;
  }


  $sql = mysqli_query($link, 'SELECT * FROM `magaz`');
   
      


  while ($result = mysqli_fetch_array($sql))
  {
  echo"<div class='strok'>";
  echo "<div class='admin_bd'> {$result['id']} </div>";
  echo "<div class='admin_bd'> {$result['name']} </div>";        
 echo "<div class='admin_bd_zn_png'>";
 echo "<img src='{$imgpath}".$result['id'].".png'>";
 echo  "</div>";
 echo "<div class='admin_bd'>{$result['sost']}</div>";
 echo "<div class='admin_bd'>{$result['dopinf']}</div>";
 echo  " <div class='admin_bd'>{$result['cena']} ₽</div>";
  echo  " <div class='admin_bd'>{$result['dish_type']}</div>";
 echo "<div class='admin_bd'><a href='?del_id={$result['id']}'>Удалить</a></br><a href='?red_id={$result['id']}'>Изменить</a></div>";             
echo  "</div>";
  }

?>
