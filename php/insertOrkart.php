<?

  $host = 'localhost';  // ����, � ��� ��� ��������
    $user = 'u1043622_default';    // ��� ���������� ���� ������������
    $pass = '_V1H5mKY'; // ������������� ���� ������ ������������
    $db_name = 'u1043622_default';   
  


    $link = mysqli_connect($host, $user, $pass, $db_name); // ����������� � �����
  $link->set_charset("utf8");

  

$id = $_POST['id'];
$dishes = $_POST['dishes'];
$name = $_POST['name'];
$phone = $_POST['phone'];
$address = $_POST['address'];
$paymentMethod = $_POST['paymentMethod'];
$sent = $_POST['sent'];
$status = $_POST['status'];


   $sql = mysqli_query($link, "INSERT INTO `temp` (`ind`,`dishes`, `name`,`phone`,`address`, `paymentMethod`,`sent`, `status`) VALUES ('$id','$dishes', '$name','$phone','$address', '$paymentMethod','$sent','$status')");
   $per=(mysqli_insert_id($link));


 ?>