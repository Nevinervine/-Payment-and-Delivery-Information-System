<!DOCTYPE html>

<html>

<head>
    <meta charset="UTF-8.">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>диплом</title>
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Open+Sans:400,400italic,600,600italic,700,700italic|Playfair+Display:400,700&subset=latin,cyrillic">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script type='text/javascript' src="https://rawgit.com/RobinHerbots/jquery.inputmask/3.x/dist/jquery.inputmask.bundle.js"></script>
    <script src="script.js"></script>

    
   
    <link rel="stylesheet" type="text/css" href="style.css">
   
</head>

<body>


    <div class="header">

        <div class="header_container">
            <div class="box">
        
                <div class="header_knopki">
                    <a class="header_town" href="http://diplomsfmei.website/basket.php#openModal">Выберете ваш город</a>
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

            </div>
        </div>
    </div>

  

    <div class="content">
        <div class="content_ad">

        </div>

        <div class="content_menu">
          <form>
            <div class="content_dishes">
          
                        <div class="content_dishes_text">
                    <input id="radio-1" type="radio" name="dish" value="1"  onChange="show_susi()">
                    <label for="radio-1">
                       суши
                    </label>
                </div>

                <div class="content_dishes_text">
                    <input id="radio-2" type="radio" name="dish" value="2" onChange="show_piza()">
                    <label for="radio-2">
                      пицца
                    </label>
                </div>
                
                        <div class="content_dishes_text">
                    <input id="radio-3" type="radio" name="dish" value="3"  onChange="show_soop()">
                    <label for="radio-3">
                     супы
                    </label>
                </div>

                <div class="content_dishes_text">
                    <input id="radio-4" type="radio" name="dish" value="4" onChange="show_disert()">
                    <label for="radio-4">
                      десерты
                    </label>
                </div>
             

            </div>

                   </form>

                
<script type="text/javascript">
   
    
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
                      show_susi();
               
                     if(values[i][1]==2)
                     show_piza();
        
                    if(values[i][1]==3)
                      show_soop();

                     if(values[i][1]==4)
                     show_disert();
            }
                     
        });

    </script>

            <div class="content_box">
            
                   <div id="susi">
                     <? include_once "php/showbdSusi.php"; ?>
        
                    </div>

                    
            
                <div id="piza" style="display:none">
                             <? include_once "php/showbdPiza.php"; ?>
                    </div>
                    
            
           <div id="soop" style="display:none">
           <? include_once "php/showbdSoop.php"; ?>
                    </div>
                    
            
                <div id="disert" style="display:none">
                     <? include_once "php/showbdDisert.php"; ?>
                    </div>
          


            </div>
            
        

  


        </div>
    </div>

          <div class="futter">
            <div class="futter_decoration"></div>
            <div class="futter_container">
                <div class="futter_info">
                    <div class="futter_info_nazv">Катя-Суши-Диплом</div>
                
                </div>

                <div class="foter_social_network">
                    <div class="foter_social_network_line">
                         <a href="https://vk.com/id125270866" class="futter_soc">
                        <img src="\images\social\vk.png" class="logo-img" alt="">
                    </a>

                  <!-- 
                  
                        <a href="" class="futter_soc">
                        <img src="C:\Users\Rodger\Desktop\диплом\Новая папка\images\social\inst.png" alt="">
                    </a>
                  
                  <a href="" class="futter_soc">
                        <img src="C:\Users\Rodger\Desktop\диплом\Новая папка\images\social\twiter.png" class="logo-img" alt="">
                    </a>
                  
                    <a href="" class="futter_soc">
                        <img src="C:\Users\Rodger\Desktop\диплом\Новая папка\images\social\youtube.png" class="logo-img" alt="">
                    </a>  -->
                    </div>

                    <a href="mailto:Koshka.titova@yandex.ru" class="futter_mail">
                        Koshka.titova@yandex.ru
                    </a>

                </div>

            </div>


            <div class="autor">
                сделанно студенткой 4 курса филиала <br>ФГБОУ ВО
                «НАЦИОНАЛЬНЫЙ ИССЛЕДОВАТЕЛЬСКИЙ УНИВЕРСИТЕТ «МЭИ»<br>
                Титовой Екатериной Игоревной
            </div>

  
	<script src="localst.js"></script>

</body>
</html>



