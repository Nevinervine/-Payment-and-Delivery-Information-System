 <?
$secret_key = 'ILxcXS+YUm7gwTDLUKmBDF3C'; // секретное слово, которое мы получили в в настройках http-уведомлений на сайте яндекс ƒенег.
$sha1 = sha1( $_POST['notification_type'] . '&'. $_POST['operation_id']. '&' . $_POST['amount'] . '&643&' . $_POST['datetime'] . '&'. $_POST['sender'] . '&' . $_POST['codepro'] . '&' . $secret_key. '&' . $_POST['label'] );
 
if ($sha1 != $_POST['sha1_hash'] ) {

} else {

  $host = 'localhost';  // ’ост, у нас все локально
    $user = 'u1043622_default';    // »м€ созданного вами пользовател€
    $pass = '_V1H5mKY'; // ”становленный вами пароль пользователю
    $db_name = 'u1043622_default';   
  
    $link = mysqli_connect($host, $user, $pass, $db_name); // —оедин€емс€ с базой
  $link->set_charset("utf8");



 $label= $_POST['label'];
$dishe = $_POST['operation_id'];
$nam = $_POST['withdraw_amount'];

   $sql = mysqli_query($link, "INSERT INTO `orders` (`operation_id`, `amount`,label) VALUES ('$dishe', '$nam','$label')");
   $per=(mysqli_insert_id($link));
      
       

      

  $sql = mysqli_query($link, 'SELECT * FROM `temp`');
   
  while ($result = mysqli_fetch_array($sql))
  {
  if($result['ind']== $label)
  {


  if($nam==$result['sent'])

$dishes = $result['dishes'];
$name =$result['name'];
$phone = $result['phone'];
$address = $result['address'];
$paymentMethod = $result['paymentMethod'];
$sent = $result['sent'];
$status = $result['status'];
$id=$result['id'];

   $sql = mysqli_query($link, "INSERT INTO `zakaz` (`dishes`, `name`,`phone`,`address`, `paymentMethod`,`sent`, `status`) VALUES ('$dishes', '$name','$phone','$address', '$paymentMethod','$sent','$status')");
 
    $sql = mysqli_query($link,"DELETE FROM `temp` WHERE `id`=$id");

  }
  }
}

?>