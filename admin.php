<?php
  include_once('php/functions.php')
?>
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>диплом</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script type='text/javascript' src="https://rawgit.com/RobinHerbots/jquery.inputmask/3.x/dist/jquery.inputmask.bundle.js"></script>
    <script src="script.js"></script>
      <script src="sendingOrder.js"></script>
       <script src="updata.js"></script>
    <link rel="stylesheet" type="text/css" href="admin.css">

     <script src="php/showbd_admin.php"></script>

</head>


<body>

  <?php
    $host = 'localhost';  // Хост, у нас все локально
  $user = 'u1043622_default';    // Имя созданного вами пользователя
  $pass = '_V1H5mKY'; // Установленный вами пароль пользователю
  $db_name = 'u1043622_default';   // Имя базы данных
    $link = mysqli_connect($host, $user, $pass, $db_name); // Соединяемся с базой
    $link->set_charset("utf8");
  

   if (isset($_GET['check_id'])) { 
      
      $sql = mysqli_query($link, "UPDATE zakaz SET status='gotov' WHERE id={$_GET['check_id']}");
      
      }


      if (isset($_GET['return_id'])) { 
      
      $sql = mysqli_query($link, "UPDATE zakaz SET status='ne gotov' WHERE id={$_GET['return_id']}");
      
      }


    //Если переменная Name передана
    if (isset($_POST["name"])) {
      //Если это запрос на обновление, то обновляем
      if (isset($_GET['red_id'])) {
          $sql = mysqli_query($link, "UPDATE `magaz` SET `name` = '{$_POST['name']}',`cena` = '{$_POST['cena']}',`sost` = '{$_POST['sost']}',`dopinf` = '{$_POST['dopinf']}',`dish_type` = '{$_POST['dish_type']}' WHERE `ID`={$_GET['red_id']}");
 
     } else {
          //Иначе вставляем данные, подставляя их в запрос
        $sql = mysqli_query($link, "INSERT INTO `magaz` (`name`, `cena`,`sost`,`dopinf`,`dish_type`) VALUES ('{$_POST['name']}', '{$_POST['cena']}','{$_POST['sost']}','{$_POST['dopinf']}','{$_POST['dish_type']}')");
   $per=(mysqli_insert_id($link));
 
    }
    }


    if (isset($_GET['del_id'])) { //проверяем, есть ли переменная
      //удаляем строку из таблицы
      $sql = mysqli_query($link, "DELETE FROM `magaz` WHERE `ID` = {$_GET['del_id']}");




 

 $img = 'img/'.($_GET['del_id']).'.png';
  if(file_exists($img)) unlink($img); 
    if(file_exists($img) == FALSE);  

    }

    //Если передана переменная red_id, то надо обновлять данные. Для начала достанем их из БД
    if (isset($_GET['red_id'])) {
      $sql = mysqli_query($link, "SELECT `id`, `name`, `cena`,`sost`,`dopinf`,`dish_type` FROM `magaz` WHERE `ID`={$_GET['red_id']}");
      $product = mysqli_fetch_array($sql);
 
   $per=($_GET['red_id']);
    }


  ?>

    <div id="wrapper">
        

        <div class="header">
            
        </div>


        <div class="container">
            <div class="admin_bloc">

              <form id="ds_form">


                <div class="form_radio_btn_1">
                    <input id="radio-1" type="radio" name="radio" value="1"  onChange="order_active()">
                    <label for="radio-1">
                        Активные заказы
                    </label>
                </div>

                <div class="form_radio_btn_2">
                    <input id="radio-2" type="radio" name="radio" value="2" onChange="order_finished()">
                    <label for="radio-2">
                        Выполненные заказы
                    </label>
                </div>


                <div class="form_radio_btn_3">
                    <input id="radio-3" type="radio" name="radio" value="3" onChange="meny()">
                    <label for="radio-3">
                  Меню
                    </label>
                </div>



                <div class="form_radio_btn_4">
                    <input id="radio-4" type="radio" name="radio" value="4" onChange="restroraunt()">
                    <label for="radio-4">
                    Рестораны
                    </label>
                </div>
                
    </form>
    <script>
        let ds = document.forms[0];
        ds.onchange = () => {
            let json = JSON.stringify(Array.from(new FormData(ds)));
            localStorage.setItem(ds.id, json);
        };
        document.addEventListener("DOMContentLoaded", () => {
            let values = JSON.parse(localStorage.getItem(ds.id));
            for (let i = 0; i < values.length; ++i) {
                let el = ds[values[i][0]];
                if (el.type === "checkbox")
                    el.setAttribute("checked", "");
                else
                    el.value = values[i][1];
                     if(values[i][1]==1)
                   order_active();
                     if(values[i][1]==2)
                   order_finished();
                    if(values[i][1]==3)
                    meny();
                     if(values[i][1]==4)
                    restroraunt();
            }
        });
    </script>

            </div>
            <div class="admin_content">

                <div id="active_order">
                    <div class="tabl_order" id="tabl_order">
                    </div>
                </div>




                <div id="completed_order" style="display:none">
                
                  <div class="tabl_order" id="tabl_order_ready">


                    </div>
                </div>


                <div id="menu" class="admin_meny" style="display:none">
                    <div class="tabl">
                        <div class="strok">
                            <div class="admin_bd">id товара</div>
                            <div class="admin_bd">название</div>
                            <div class="admin_bd">картинка</div>
                            <div class="admin_bd">состав</div>
                            <div class="admin_bd">доп инфо</div>
                            <div class="admin_bd">цена</div>
                                 <div class="admin_bd">тип блюда</div>
                            <div class="admin_bd">редактирование</div>
                        </div>
             <? include_once "php/showbd_admin.php"; ?>
                    </div>

                        <div class="admin_red">
         
                         


   <!---->
    <form action="" method="post" enctype="multipart/form-data">
    <table>
      <tr>
        <td>Наименование:</td>
        <td><input type="text" name="name" value="<?= isset($_GET['red_id']) ? $product['name'] : ''; ?>"></td>
      </tr>
      <tr>
        <td>Цена:</td>
        <td><input type="text" name="cena" size="3" value="<?= isset($_GET['red_id']) ? $product['cena'] : ''; ?>"> руб.</td>
      </tr>
      <tr>
        <td>состав</td>
        <td><input type="text" name="sost" value="<?= isset($_GET['red_id']) ? $product['sost'] : ''; ?>"></td>
      </tr> 
      <tr>
        <td>дополнительная инфа</td>
        <td><input type="text" name="dopinf" value="<?= isset($_GET['red_id']) ? $product['dopinf'] : ''; ?>"></td>
      </tr>


       <tr>
        <td>тип блюда</td>
        <td><input type="text" name="dish_type" value="<?= isset($_GET['red_id']) ? $product['dish_type'] : ''; ?>"></td>
      </tr>


          <tr>
        <input type="file" name="file">
      </tr>

      <tr>
        <td colspan="2"><input type="submit" value="OK"></td>
      </tr>
    </table>
  </form>
   <p><a href="?add=new">Добавить новый товар</a></p>
     <?php
    // если была произведена отправка формы
    if(isset($_FILES['file'])) {
      // проверяем, можно ли загружать изображение
      $check = can_upload($_FILES['file']);
    
      if($check === true){
        // загружаем изображение на сервер

        make_upload($_FILES['file']);


        echo "<strong>Файл успешно загружен!</strong>";
      }
      else{
        // выводим сообщение об ошибке
        echo "<strong>$check</strong>";  
      }

    }
    ?>

   <!---->

                        </div>
                </div>

                <div id="restaurant" style="display:none"></div>

            </div>
        </div>



<!--
       <div id="pass-window">
             <p><h3>введите пароль</h3></p>
             <p><input id="pass" type="text"></p>
             <p id="button"><input type="button" value="войти" onClick="Accept();"></p>
         </div> -->
     </div>
   <!-- <div id="mask"></div> -->

</body>
</html>