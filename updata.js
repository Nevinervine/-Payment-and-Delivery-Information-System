
function show() {

    $.ajax({
        url: "php/showOrderReady.php", // Путь к php скрипту который будет загружать заголовки
        cache: false,
        success: function (html) {
            $("#tabl_order_ready").html(html); // Блок куда будем выводить информацию
       
        }
    });


    $.ajax({
        url: "php/showOrder.php", // Путь к php скрипту который будет загружать заголовки
        cache: false,
        success: function (html) {
            $("#tabl_order").html(html); // Блок куда будем выводить информацию

        }
    });

}




$(document).ready(function () {
    show();
    setInterval(show, 5000); // Интервал обновления в миллисекундах

});













