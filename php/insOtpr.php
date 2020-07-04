
<?
  $host = 'localhost';  // Хост, у нас все локально
    $user = 'u1043622_default';    // Имя созданного вами пользователя
    $pass = '_V1H5mKY'; // Установленный вами пароль пользователю
    $db_name = 'u1043622_default';   
  


    $link = mysqli_connect($host, $user, $pass, $db_name); // Соединяемся с базой
  $link->set_charset("utf8");


  $sql = mysqli_query($link,'SELECT * FROM `temp` ORDER BY `id`');
  
  while ($result = mysqli_fetch_array($sql))
  {
  $hostname=$result['id'];
}


echo json_encode(array('hostname'=>$hostname));
?>