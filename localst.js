
var d = document,
	itemBox = d.querySelectorAll('.dishes'), // ���� ������� ������
	cartCont = d.getElementById('cart_content'); // ���� ������ ������ �������

// ������� ��������������� ��������� ����������� �������
function addEvent(elem, type, handler) {
	if (elem.addEventListener) {
		elem.addEventListener(type, handler, false);
	} else {
		elem.attachEvent('on' + type, function () { handler.call(elem); });
	}
	return false;
}

// �������� ������ �� LocalStorage
function getCartData() {
	return JSON.parse(localStorage.getItem('cart'));
}

// ���������� ������ � LocalStorage
function setCartData(o) {
	localStorage.setItem('cart', JSON.stringify(o));
	return false;
}

// ��������� ����� � �������
function addToCart(e) {

	this.disabled = true; // ��������� ������ �� ����� �������� � ��������
	var cartData = getCartData() || {}, // �������� ������ ������� ��� ������ ����� ������, ���� ������ ��� ���

		parentBox = this.parentNode.parentNode, // ������������ ������� ������ &quot;�������� � �������&quot;

		itemId = this.getAttribute('id'), // ID ������
		itemTitle = parentBox.querySelector('.dishes_name').innerHTML, // �������� ������
		itemPrice = parentBox.querySelector('.dishes_price').innerHTML; // ��������� ������
    	itemInfo = parentBox.querySelector('.dishes_info').innerHTML; // �������
	    itemComposition = parentBox.querySelector('.dishes_composition').innerHTML; // ������




	if (cartData.hasOwnProperty(itemId)) { // ���� ����� ����� ��� � �������, �� ��������� +1 � ��� ����������
		cartData[itemId][4] += 1;
	} else { // ���� ������ � ������� ��� ���, �� ��������� � ������
		cartData[itemId] = [itemTitle, itemPrice, itemId, itemComposition, 1];
	}
	// ��������� ������ � LocalStorage
	if (!setCartData(cartData)) {
		this.disabled = false; // ������������ ������ ����� ���������� LS


	}
	return false;
}

// ������������� ���������� ������� �� ������ ������ &quot;�������� � �������&quot;
for (var i = 0; i < itemBox.length; i++) {
	addEvent(itemBox[i].querySelector('.dishes_basket'), 'click', addToCart);
}

// ��������� ������� �� ������� ����������� �������

function openCart(e) {

	var cartData = getCartData(), // ����������� ��� ������ �������
		totalItems = '',
		totalCount = 0,
		totalSum = 0;
	obSum = 0;
	// ���� ���-�� � ������� ��� ����, �������� ����������� ������ ��� ������
	if (cartData !== null) {
		for (var items in cartData) {

			totalItems += '<div class="basket_item_line">';


			totalItems += '<div class="basket_dish_name">' + cartData[items][0] + '</div>';
			totalItems += '<div class="basket_dish_price">' + cartData[items][1] + '</div>';

			totalItems += '<td>' + cartData[items][4] + '</td>';

			obSum = cartData[items][1] * cartData[items][4];

			totalItems += '<div class="basket_dish_price_ob">' + obSum + '</div>';

			obSum = 0;

			totalSum += cartData[items][1] * cartData[items][4];
			totalCount += cartData[items][4];
			totalItems += '<td><span class="del_item" data-id="' + items + '">X</span></td>';
			totalItems += '</div>';


		}


		totalItems += '<tr><td><strong>�����</strong></td><td><span id="total_sum">' + totalSum + '</span> $</td><td><span id="total_count">' + totalCount + '</span> ��.</td><td></td></tr>';

		cartCont.innerHTML = totalItems;
	}
	return false;
}
// ������� ��� ���������� ������������ ���������� ������������� ��������
// ������� ��� ���������� ������������ ���������� ������������� ��������
function closest(el, sel) {
	if (el !== null)
		return el.matches(sel) ? el : (el.querySelector(sel) || closest(el.parentNode, sel));
}
/* ������� ������� */
addEvent(d.getElementById('checkout'), 'click', openCart);
/* �������� �� ������� */
addEvent(d.body, 'click', function (e) {
	if (e.target.className === 'del_item') {
		var itemId = e.target.getAttribute('data-id'),
			cartData = getCartData();
		if (cartData.hasOwnProperty(itemId)) {
			var tr = closest(e.target, 'div');
			tr.parentNode.removeChild(tr); /* ������� ������ ������ �� ������� */
			// ������������� ����� ����� � ����
			var totalSumOutput = d.getElementById('total_sum'),
				totalCountOutput = d.getElementById('total_count');
			totalSumOutput.textContent = +totalSumOutput.textContent - cartData[itemId][1] * cartData[itemId][4];
			totalCountOutput.textContent = +totalCountOutput.textContent - cartData[itemId][4];
			delete cartData[itemId]; // ������� ����� �� �������
			setCartData(cartData); // �������������� ���������� ������ � localStorage
		}
	}
}, false);
/* �������� ������� */
addEvent(d.getElementById('clear_cart'), 'click', function (e) {
	localStorage.removeItem('cart');

});



