
function show() {

    $.ajax({
        url: "php/showOrderReady.php", // ���� � php ������� ������� ����� ��������� ���������
        cache: false,
        success: function (html) {
            $("#tabl_order_ready").html(html); // ���� ���� ����� �������� ����������
       
        }
    });


    $.ajax({
        url: "php/showOrder.php", // ���� � php ������� ������� ����� ��������� ���������
        cache: false,
        success: function (html) {
            $("#tabl_order").html(html); // ���� ���� ����� �������� ����������

        }
    });

}




$(document).ready(function () {
    show();
    setInterval(show, 5000); // �������� ���������� � �������������

});













