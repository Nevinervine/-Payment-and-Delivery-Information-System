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
   
      


  while ($result = mysqli_fetch_array($sql)) {
 
  $x=($i % 4);


  if($x==0)
     {echo "<div class='content_line'>";}


  echo"<div class='dishes' id='{$result['id']}'>";

  echo "<div class='dishes_name'> {$result['name']} </div>";


                    echo"<div class='dishes_img'>";
                     echo "<img src='{$imgpath}".$result['id'].".png'>";
                       echo "</div>";

                      echo "<div class='dishes_info'>{$result['dopinf']}</div>";
                       echo "<div class='dishes_composition'>{$result['sost']}</div>";

                        echo"<div class='dishes_bye'>";
                         echo  " <div class='dishes_price'>{$result['cena']}</div>";
                              echo  "<div class='dishes_lala'> ₽</div>";
                            echo"<button class='dishes_basket' id='{$result['id']}' >купить</button>";
                       echo "</div>";

  echo  "</div>";  



        
  $i=$i+1;
   $x=($i % 4);
    if($x==0){
  echo  "</div>";} 
  }

   if($x!=0){
  echo  "</div>";} 

?>
