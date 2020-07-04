
<!DOCTYPE html>

<html>



<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>диплом</title>
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Open+Sans:400,400italic,600,600italic,700,700italic|Playfair+Display:400,700&subset=latin,cyrillic">
  
  
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script type='text/javascript' src="https://rawgit.com/RobinHerbots/jquery.inputmask/3.x/dist/jquery.inputmask.bundle.js"></script>
    <script src="script.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css">
    <link rel="stylesheet" type="text/css" href="bascet.css">
    <script src="showBasket.js"></script>
    <script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;coordorder=longlat&amp;apikey=c75829c5-26ce-4035-81fe-673c1f559778" type="text/javascript"></script>
    <script type="text/javascript" src="https://yandex.st/jquery/2.2.3/jquery.js"></script>
    <script src="map.js" type="text/javascript"></script>
    <script src="sendingOrder.js"></script>


    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.inputmask/3.1.62/jquery.inputmask.bundle.js"></script>

  
</head>

<body>

<?
  $host = 'localhost';  // Хост, у нас все локально
  $user = 'u1043622_default';    // Имя созданного вами пользователя
  $pass = '_V1H5mKY'; // Установленный вами пароль пользователю
  $db_name = 'u1043622_default';   // Имя базы данных
  $i=4;
  $link = mysqli_connect($host, $user, $pass, $db_name); // Соединяемся с базой

   $link->set_charset("utf8");


  $sql = mysqli_query($link, 'SELECT * FROM `magaz`');

$arr = array();

  while ($result = mysqli_fetch_array($sql))
  {

array_push($arr, $result['id']);
array_push($arr, $result['cena']);
array_push($arr, $result['name']);

}  



?>


<script type="text/javascript">




var jArray= <?php echo json_encode($arr); ?>;
var dlin= <?php echo json_encode($a); ?>;
jsonjs();  
oplana_norm();

</script>



    <div class="header">

        <div class="header_container">
            <div class="box">
              
                <div class="header_knopki">
                    <a class="header_town" href="#openModal">Выберете ваш город</a>
                    <a class="header_knop" href="index.php">Меню</a>
                    <a class="header_knop" href="#openAkci">Акции</a>
                    <a class="header_knop" href="#openOnas">О нас</a>
                </div>
                <a class="button7" href="basket.php">Корзина</a>
            </div>
            <div>

                 <div id="openAkci" class="modal">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h3 class="modal-title">Наши акции</h3>
                                <a href="#close" title="Close" class="close">×</a>
                            </div>

                            <div class="modal-body">
                               При покупике более чем на 1500 рублей-доставка бесплатно
                            </div>
                        </div>
                    </div>
                </div>


                   <div id="openOnas" class="modal">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h3 class="modal-title">О нас</h3>
                                <a href="#close" title="Close" class="close">×</a>
                            </div>

                            <div class="modal-body">
                               Это проэкт создан Титовой Екатериной Игоревной студенткой 4 курса в демонстрационных целях.

                            </div>
                        </div>
                    </div>
                </div>

                <div id="openModal" class="modal">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h3 class="modal-title">Выбирите ваш город</h3>
                                <a href="#close" title="Close" class="close">×</a>
                            </div>
                            <div class="modal-body">
                                
                                <form id="ds_state">
               
               <div >
                      <input id="st_radio-1" type="radio" name="radio" value="1" onChange="smol()">
                    <label for="radio-3">
                     Смоленск
                    </label>
                </div>
                                       
               <div >
                   <input id="st_radio-2" type="radio" name="radio" value="2" onChange="mosk()">
                    <label for="radio-3">
                    Москва
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
                                            if (values[i][1] == 1) {
                                                state = "smol";
                                           totalItem = '';
                                           totalItem += '<select class="select-dom">';
	                                       totalItem += '<option>Королевка д51</option>';
	                                       totalItem += ' <option>Площадь победы д2</option>';
	                                       totalItem += '<option>Энергетический проезд дом 6</option>';
	                                       totalItem += '<option>Кловская 63б</option>';
                                           totalItem += '</select>';
		                                   d.getElementById('select-dom').innerHTML = totalItem;
                                                jsonjs();
                                                  }
                                            if (values[i][1] == 2) {
                                                state = "mosk";
                                                   totalItem = '';
                                           totalItem += '<select class="select-dom">';
	                                       totalItem += '<option>Красная площадь</option>';
	                                       totalItem += ' <option>мкад</option>';
                                           totalItem += '</select>';
		                                   d.getElementById('select-dom').innerHTML = totalItem;
                                                jsonjs();
                                            }
                                            if (values[i][1] == 3)
                                                state = "novosib";
                                            jsonjs();
                                        }
                                    });
                                </script>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <div class="content">
        <div class="content_box">

            <div class="basket_title">Корзина</div>
       

            <div class="basket_decoration"></div>

            <div class="flex-container">
                <div class="section">
                  
                    <div id="cart_content" class="basket_item">

                    
                    </div>

                    <div class="basket_delivery_text"><h4>Cпособ получения</h4></div>
                    <div class="basket_delivery">

                        <div class="form_radio_btn_1">
                            <input id="radio-1" type="radio" name="radiob" value="1" checked onChange="show()">
                            <label for="radio-1">
                                <h4>Доставка курьером</h4>

                                заказ по выбранному адресу
                            </label>
                        </div>

                        <div class="form_radio_btn_2">
                            <input id="radio-2" type="radio" name="radiob" value="2" onChange="hide()">
                            <label for="radio-2">
                                <h4>Самовывоз</h4>
                                можно забрать из ресторана
                            </label>
                        </div>

                    </div>


                    <div id="info_dost" class="dostavka">
                        <div class="basket_delivery_text"><h4>Данные получателя</h4></div>
                        <div class="dostavka_input">
                            <input class="imp_name" id="imp_name" placeholder="Имя"  minlength="3" required>
                            <input class="imp_phone" id="imp_phone" placeholder="телефон"  minlength="8" required>
                        </div>

                        <div class="basket_delivery_text"><h4>Адрес</h4></div>

                        <div id="map"></div>


                   
                      


                    </div>


                    <div id="info_sam" class="dostavka" style="display:none">
                        <div class="basket_delivery_text"><h4>Данные получателя</h4></div>
                        <div class="dostavka_input">
                            <input class="imp_name" id="imp_name_sam" placeholder="Имя">
                            <input class="imp_phone" id="imp_phone_sam" placeholder="телефон">
                        </div>


   

                        <div class="basket_delivery_text"><h4>Адрес самовывоза</h4></div>


                        <div class="basket_dish_kol" id="select-dom">
                         
                        </div>

                    </div>



                </div>

                <div class="aside">
                    <div class="basket_title">Cпособо оплаты</div>

                    <div class="basket_oplata">
                        <div class="form_radio_btn_3">
                            <input id="radio-3" type="radio" name="oplata" value="3" checked  onChange="oplata_kart()">
                            <label for="radio-3">Картой онлайн</label>
                        </div>

                        <div class="form_radio_btn_4">
                            <input id="radio-4" type="radio" name="oplata" value="4" onChange="oplata_nal()">
                            <label for="radio-4">наличными</label>
                        </div>
                    </div>


                    <div class="basket_oplata_tovar" id="basket_oplata_tovar">
               <!---->
                    </div>


                    <div class="basket_oplata_dostavka" id="basket_oplata_dostavka">
                      
                    </div>

                    <div class="basket_oplata_all" id="basket_oplata_all">
                    

                    </div>

                    <div class="basket_oplata_check">
                        <input class="basket_oplata_check_ch" type="checkbox" name="checkme" id="agree">
                        <div class="basket_oplata_check_text">я согласен с пользовательским соглашением и политикой конфиденциальности и даю согласие на обработку моих персональных данных</div>
                    </div>

                    <div class="knopp">
                     
                     <div id="oplata_nal"  style="display:none">
                   
                        <input class="basket_oplata_button" type="submit" id="continue" value="Оплатить наличкой" onclick="sending();">
                        
                    </div>
         

 <form method="POST" action="https://money.yandex.ru/quickpay/confirm.xml">
 
                     <div id="oplata_kart">
                   
                      <input class="basket_oplata_button" type="submit" id="contine"  value="Оплатить Картой" onclick="inser();">
                    </div>

<!--Номер кошелька в системе Яндекс Денег-->
    <input type="hidden" name="receiver" value="4100115065199733">
<!--Название платежа, я не нашел, где этот параметр используется, поэтому просто указал адрес своего сайта (длина 50 символов)-->
<input type="hidden" name="formcomment" value="diplomsfmei.website">
 
<!--Этот параметр передаёт ID плагина, для того, чтобы скрипту было понятно, что потом отсылать пользователю (длина 64 символа)-->
<input type="hidden" id="idpok" name="label" value="16078">
 
<!--Тип формы, может принимать значения shop (универсальное), donate (благотворительная), small (кнопка)-->
<input type="hidden" name="quickpay-form" value="shop">
 
<!--Назначение платежа, это покупатель видит на сайте Яндекс Денег при вводе платежного пароля (длина 150 символов)-->
<input type="hidden" name="targets" value="Покупка товаров на сайте Kote-суши">
 
<!--Сумма платежа, валюта - рубли по умолчанию-->
<input type="hidden" id="Summa" name="sum" value="2" data-type="number">
 
<!--Должен ли Яндекс запрашивать ФИО покупателя-->
<input type="hidden" name="need-fio" value="false">
 
<!--Должен ли Яндекс запрашивать email покупателя-->
<input type="hidden" name="need-email" value="false">
 
<!--Должен ли Яндекс запрашивать телефон покупателя-->
<input type="hidden" name="need-phone" value="false">
 
<!--Должен ли Яндекс запрашивать адрес покупателя-->
<input type="hidden" name="need-address" value="false">
<input type="hidden"  name="paymentType" value="AC">


 
<!--Куда перенаправлять пользователя после успешной оплаты платежа-->
<input type="hidden" name="successURL" value="http://diplomsfmei.website/per.php">


</form>
                    </div>



                </div>
            </div>

        </div>
    </div>






    <div class="futter">
        <div class="futter_decoration"></div>
        <div class="futter_container">
            <div class="futter_info">
                <div class="futter_info_nazv">Коте-Суши</div>
                <div class="futter_info_doc">Правовая информация</div>
                <div class="futter_info_menu">Rалорийность и состав</div>
                <div class="futter_info_hh">Вакансии</div>
            </div>

            <div class="foter_social_network">
                <div class="foter_social_network_line">
                    <a href="https://1plus1.video" class="futter_soc">
                        <img src="C:\Users\Rodger\Desktop\диплом\Новая папка\images\social\inst.png" alt="">
                    </a>

                    <a href="https://1plus1.video" class="futter_soc">
                        <img src="C:\Users\Rodger\Desktop\диплом\Новая папка\images\social\vk.png" class="logo-img" alt="">
                    </a>

                    <a href="https://1plus1.video" class="futter_soc">
                        <img src="C:\Users\Rodger\Desktop\диплом\Новая папка\images\social\twiter.png" class="logo-img" alt="">
                    </a>

                    <a href="https://1plus1.video" class="futter_soc">
                        <img src="C:\Users\Rodger\Desktop\диплом\Новая папка\images\social\youtube.png" class="logo-img" alt="">
                    </a>
                </div>

                <a href="mailto:nevinervine@mail.ru" class="futter_mail">
                    nevinervine@mail.ru
                </a>

            </div>

        </div>


        <div class="autor">
            сделанно студенткой 4 курса филиала <br>ФГБОУ ВО
            «НАЦИОНАЛЬНЫЙ ИССЛЕДОВАТЕЛЬСКИЙ УНИВЕРСИТЕТ «МЭИ»<br>
            Титовой Екатериной Игоревной
        </div>



    </div>



    <script src="showBasket.js"></script>

</body>
</html>