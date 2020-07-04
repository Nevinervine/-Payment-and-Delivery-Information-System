<?php


  $host = 'localhost';  // Хост, у нас все локально
    $user = 'u1043622_default';    // Имя созданного вами пользователя
    $pass = '_V1H5mKY'; // Установленный вами пароль пользователю
    $db_name = 'u1043622_default';   
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
   
      


  while ($resul = mysqli_fetch_array($sql)) {
 
  if($resul['dish_type']=='piza')
  {


  $x=($i % 4);


  if($x==0)
     {echo "<div class='content_line'>";}


  echo"<div class='dishes' id='{$resul['id']}'>";

  echo "<div class='dishes_name'> {$resul['name']} </div>";


                    echo"<div class='dishes_img'>";
                     echo "<img src='{$imgpath}".$resul['id'].".png'>";
                       echo "</div>";

                      echo "<div class='dishes_info'>{$resul['dopinf']}</div>";
                       echo "<div class='dishes_composition'>{$resul['sost']}</div>";

                        echo"<div class='dishes_bye'>";
                         echo  " <div class='dishes_price'>{$resul['cena']}</div>";
                              echo  "<div class='dishes_lala'> ₽</div>";
                            echo"<button class='dishes_basket' id='{$resul['id']}' >Купить</button>";
                       echo "</div>";

  echo  "</div>";  



        
  $i=$i+1;
   $x=($i % 4);
    if($x==0){
  echo  "</div>";} 
  }
  
   }

   if($x!=0){
  echo  "</div>";} 
   
?>
