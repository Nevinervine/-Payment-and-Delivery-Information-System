
<?
  $host = 'localhost';  // ����, � ��� ��� ��������
    $user = 'u1043622_default';    // ��� ���������� ���� ������������
    $pass = '_V1H5mKY'; // ������������� ���� ������ ������������
    $db_name = 'u1043622_default';   
  


    $link = mysqli_connect($host, $user, $pass, $db_name); // ����������� � �����
  $link->set_charset("utf8");


  $sql = mysqli_query($link,'SELECT * FROM `temp` ORDER BY `id`');
  
  while ($result = mysqli_fetch_array($sql))
  {
  $hostname=$result['id'];
}


echo json_encode(array('hostname'=>$hostname));
?>