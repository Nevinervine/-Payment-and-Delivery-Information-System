document.addEventListener("DOMContentLoaded", function () {
    var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
    console.log(scrollbar);
    document.querySelector('[href="#openModal"]').addEventListener('click', function () {
        document.body.style.overflow = 'hidden';
        document.querySelector('#openModal').style.marginLeft = scrollbar;
    });
    document.querySelector('[href="#close"]').addEventListener('click', function () {
        document.body.style.overflow = 'visible';
        document.querySelector('#openModal').style.marginLeft = '0px';
    });
});


$(document).ready(function () {

    $('#continue').prop('disabled', true);
    $('#contine').prop('disabled', true);


    $('#agree').change(function () {


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
                    address = "ресторан";
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


        if (name !== '' & phone !== '') {


            var radadr = document.getElementsByName('radiob');
            for (var i = 0; i < rad.length; i++) {
                if (radadr[i].checked) {
                    if (i == 0) {
                        if (deleveryFlag !== undefined) {
                            if (deleveryFlag == 1) {

                                $('#continue').prop('disabled', function (i, val) {
                                    return !val;
                                })

                                $('#contine').prop('disabled', function (i, val) {
                                    return !val;
                                })


                            } else {
                                alert("доставка не ведется");

                                document.getElementById('agree').checked = false;
                                $('#continue').prop('disabled', true);
                                $('#contine').prop('disabled', true);
                          
                            }
                        } else {
                            alert("введите адрес");
                            document.getElementById('agree').checked = false;
                            $('#continue').prop('disabled', true);
                            $('#contine').prop('disabled', true);
                        }
                    }

                    if (i == 1) {
                  
                        $('#continue').prop('disabled', function (i, val) {
                            return !val;
                        })

                        $('#contine').prop('disabled', function (i, val) {
                            return !val;
                        })

                    }
                }
            }


        }
        else {
            alert("введите данные");
            document.getElementById('agree').checked = false;
            $('#continue').prop('disabled', true);
            $('#contine').prop('disabled', true);
        }

    });
})

$('.btn').click(function () {
    $(".block_with_text").fadeToggle(100);
}); 



function show() {
    document.getElementById('info_dost').style.display = 'block';
    document.getElementById('info_sam').style.display = 'none';
}


function hide() {
    document.getElementById('info_dost').style.display = 'none';
    document.getElementById('info_sam').style.display = 'block';
}








function Accept() {
    var pass = document.getElementById('pass').value;
    win = document.getElementById('pass-window');
    mask = document.getElementById('mask');
    if (pass == '0000') {
        win.style.display = 'none';
        mask.style.display = 'none';
    } else { alert('пароль не верный'); }
}




function order_active() {
    document.getElementById('active_order').style.display = 'block';
    document.getElementById('menu').style.display = 'none';
    document.getElementById('completed_order').style.display = 'none';
    document.getElementById('restaurant').style.display = 'none';
}



function order_finished() {
    document.getElementById('active_order').style.display = 'none';
    document.getElementById('menu').style.display = 'none';
    document.getElementById('completed_order').style.display = 'block';
    document.getElementById('restaurant').style.display = 'none';
}


function meny() {
    document.getElementById('active_order').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
    document.getElementById('completed_order').style.display = 'none';
    document.getElementById('restaurant').style.display = 'none';
}




function restroraunt() {
    document.getElementById('active_order').style.display = 'none';
    document.getElementById('menu').style.display = 'none';
    document.getElementById('completed_order').style.display = 'none';
    document.getElementById('restaurant').style.display = 'block';
}



function smol() {
    state = "smol";
    location.reload();
}


function  mosk() {
    state = "mosk";
    location.reload();
}

function novosib() {
    state = "novosib";
    location.reload();
}


$(document).ready(function () {
    $("#imp_phone").inputmask("+7(999)999-99-99")
});


$(document).ready(function () {
    $("#imp_phone_sam").inputmask("+7(999)999-99-99")
});




function show_susi() {
    document.getElementById('susi').style.display = 'block';
    document.getElementById('piza').style.display = 'none';
    document.getElementById('soop').style.display = 'none';
    document.getElementById('disert').style.display = 'none';

}




function show_piza() {
    document.getElementById('susi').style.display = 'none';
    document.getElementById('piza').style.display = 'block';
    document.getElementById('soop').style.display = 'none';
    document.getElementById('disert').style.display = 'none';

}


function show_soop() {
    document.getElementById('susi').style.display = 'none';
    document.getElementById('piza').style.display = 'none';
    document.getElementById('soop').style.display = 'block';
    document.getElementById('disert').style.display = 'none';
}


function show_disert() {
    document.getElementById('susi').style.display = 'none';
    document.getElementById('piza').style.display = 'none';
    document.getElementById('soop').style.display = 'none';
    document.getElementById('disert').style.display = 'block';
}




$(document).ready(function () {

    $('#radio-1').change(function () {

        document.getElementById('agree').checked = false;
        $('#continue').prop('disabled', true);
        $('#contine').prop('disabled', true);

    });
})

$('.btn').click(function () {
    $(".block_with_text").fadeToggle(100);
}); 



$(document).ready(function () {

    $('#radio-2').change(function () {
        $('#continue').prop('disabled', true);
        $('#contine').prop('disabled', true);

        document.getElementById('agree').checked = false;

    });
})

$('.btn').click(function () {
    $(".block_with_text").fadeToggle(100);
}); 






function oplata_kart() {

    document.getElementById('oplata_nal').style.display = 'none';
    document.getElementById('oplata_kart').style.display = 'block';
}



function oplata_nal() {


    document.getElementById('oplata_nal').style.display = 'block';
    document.getElementById('oplata_kart').style.display = 'none';
}

