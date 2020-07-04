function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

var idis;
var id;

function send() {
  
    var dishes='';
    var cartData = JSON.parse(localStorage.getItem('cart'));
        for (var items in cartData)
        {
            dishes += cartData[items][0] + ":" + cartData[items][4] +";";
        }

    var name = '';
    var phone = '';
    var address = '';

    var rad = document.getElementsByName('radiob');
    for (var i = 0; i < rad.length; i++) {
        if (rad[i].checked) {
            if (i === 0) {
                 name =  document.getElementById('imp_name').value;
                 phone = document.getElementById('imp_phone').value;
                address = Street + House;
       
            }
            if (i == 1) {
                address = document.getElementById("select-dom").value;
               name = document.getElementById('imp_name_sam').value;
               phone = document.getElementById('imp_phone_sam').value;
            
            }
        }
    }

     

    var rad = document.getElementsByName('oplata');
    for (var i = 0; i < rad.length; i++) {
        if (rad[i].checked) {
            if (i === 0)
            {
                paymentMethod = "Картой";
            }
            if (i == 1)
            {
                paymentMethod = "Наличкой";
            }
        }
    }
    var sent = document.getElementById('oplata_cena_all').innerHTML;
    var status = "ne gotov";


    if (name !== '' & phone !== '') {


        var radadr = document.getElementsByName('radiob');
    for (var i = 0; i < rad.length; i++) {
        if (radadr[i].checked) {
            if (i === 0) {
                if (deleveryFlag !== undefined) {
                    if (deleveryFlag == 1) {

                        id = (uuidv4());
                        idis = id;
                        $.ajax({
                            method: 'POST', // Или укажите ваш метод
                            url: 'php/insertOrkart.php', // Укажите путь до PHP-скрипта
                            data: { // Опционально, если нужно передать параметры
                                id:id,
                                dishes: dishes,
                                name: name,
                                phone: phone,
                                address: address,
                                paymentMethod: paymentMethod,
                                sent: sent,
                                status: status,
                            }
                        });

                        return true;

                    } else {
                        alert("доставка не ведется");
                        return false
                    }
                } else {
                    alert("введите адрес");
                    return false;
                }
            }

            if (i == 1)
            {
                id = (uuidv4());
                idis = id;

                $.ajax({
                    method: 'POST', // Или укажите ваш метод
                    url: 'php/insertOrkart.php', // Укажите путь до PHP-скрипта
                    data: { // Опционально, если нужно передать параметры
                        id:id,
                        dishes: dishes,
                        name: name,
                        phone: phone,
                        address: address,
                        paymentMethod: paymentMethod,
                        sent: sent,
                        status: status,
                    }
                });
                return true;
            }
        }
    }


    }
    else {
        alert("введите данные");
        return false;
    }

}



function sending() {



    var dishes = '';
    var cartData = JSON.parse(localStorage.getItem('cart'));
    for (var items in cartData) {
        dishes += cartData[items][0] + ":" + cartData[items][4] + ";";
    }

    var name = '';
    var phone = '';
    var address = '';

    var rad = document.getElementsByName('radiob');
    for (var i = 0; i < rad.length; i++) {
        if (rad[i].checked) {
            if (i === 0) {
                name = document.getElementById('imp_name').value;
                phone = document.getElementById('imp_phone').value;
                address = Street + House;

            }
            if (i == 1) {
                address = document.getElementById("select-dom").value;
                name = document.getElementById('imp_name_sam').value;
                phone = document.getElementById('imp_phone_sam').value;

            }
        }
    }



    var rad = document.getElementsByName('oplata');
    for (var i = 0; i < rad.length; i++) {
        if (rad[i].checked) {
            if (i === 0) {
                paymentMethod = "Картой";
            }
            if (i == 1) {
                paymentMethod = "Наличкой";
            }
        }
    }
    var sent = document.getElementById('oplata_cena_all').innerHTML;
    var status = "ne gotov";


    $.ajax({
        method: 'POST', // Или укажите ваш метод
        url: 'php/insertOrder.php', // Укажите путь до PHP-скрипта
        data: { // Опционально, если нужно передать параметры
           
            dishes: dishes,
            name: name,
            phone: phone,
            address: address,
            paymentMethod: paymentMethod,
            sent: sent,
            status: status,
        }
    });


    window.location.href = 'per.php';

}