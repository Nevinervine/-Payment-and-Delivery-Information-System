var cena;
var d = document,
	itemBox = d.querySelectorAll('basket_item_line'), // блок каждого товара
	cartCont = d.getElementById('cart_content'); // блок вывода данных корзины
var obSent = '';
var cenakart;
// Функция кроссбраузерная установка обработчика событий
function addEvent(elem, type, handler) {
	if (elem.addEventListener) {
		elem.addEventListener(type, handler, false);
	} else {
		elem.attachEvent('on' + type, function () { handler.call(elem); });
	}
	return false;
}

// Получаем данные из LocalStorage
function getCartData() {
	return JSON.parse(localStorage.getItem('cart'));
}

// Записываем данные в LocalStorage
function setCartData(o) {
	localStorage.setItem('cart', JSON.stringify(o));
	return false;
}

// Добавляем товар в корзину
function addToCart(e) {

	var cartData = getCartData(), // получаем данные корзины или создаём новый объект, если данных еще нет

		parentBox = this.parentNode.parentNode, // родительский элемент кнопки &quot;Добавить в корзину&quot;

		itemId = this.getAttribute('id'); // стоимость товара
		cartData[itemId][4] += 1;


	// Обновляем данные в LocalStorage
	if (!setCartData(cartData)) {
		this.disabled = false; // разблокируем кнопку после обновления LS

		cartCont.innerHTML = 'Товар добавлен в корзину.';
		setTimeout(function () {
			cartCont.innerHTML = 'Продолжить покупки...';
		}, 1000);
	}
	return false;
}

// Устанавливаем обработчик события на каждую кнопку &quot;Добавить в корзину&quot;
for (var i = 0; i < itemBox.length; i++) {
	addEvent(itemBox[i].querySelector('.add'), 'click', addToCart);
}

// Открываем корзину со списком добавленных товаров

function openCart(e) {

	var cartData = getCartData(), // вытаскиваем все данные корзины
		sent = '',
		totalItems = '',
		totalCount = 0,
		totalSum = 0;
	obSum = 0;
	imgpath = "images/susi/";


	// если что-то в корзине уже есть, начинаем формировать данные для вывода
	if (cartData !== null) {
		for (var items in cartData) {
			cenakart = '';
			for (var i = 0; i < jArray.length; i++) {
				if (cartData[items][2] == jArray[i]) {

					totalItems += '<div class="basket_item_line">';



					totalItems += '<div class="basket_img">';

					totalItems += '<img src="' + imgpath + cartData[items][2] + '.png">';

					totalItems += '</div>';



					for (var i = 0; i < jArray.length; i++) {
						if (cartData[items][2] == jArray[i]) {

				        	totalItems += '<div class="basket_dish_name">' + jArray[i + 2]  + '</div>';
							totalItems += '<div class="basket_dish_price">' + jArray[i + 1] + ' ₽</div>';

						}
					}



					totalItems += '<span class="disincrease" id="' + items + '">-</span>';

					totalItems += '<input class="basket_dish_input" value="' + cartData[items][4] + '"readonly>';

					totalItems += '<span class="increase" id="' + items + '">+</span>';

					for (var i = 0; i < jArray.length; i++) {
						if (cartData[items][2] == jArray[i]) {

							obSum = jArray[i + 1] * cartData[items][4];


							totalSum += jArray[i + 1] * cartData[items][4];
						}
					}
			

			totalItems += '<div class="basket_dish_price_ob" id="sum' + items+'">' + obSum + '</div>';


			obSum = 0;

			totalCount += cartData[items][4];




			totalItems += '<td><span class="del_item" data-id="' + items + '">X</span></td>';
			totalItems += '</div>';
					
				}
			}
		}



		totalItems += '<tr><td><strong>Итого</strong></td><td><span id="total_sum">' + totalSum + '</span> ₽</td><td><span id="total_count">';

		cartCont.innerHTML = totalItems;

		sent = '';
		sent += '<div class="oplata_tovar">товары</div>';
		sent += '<div class="oplata_cena" id="totsum">' + totalSum + '</div>';
		d.getElementById('basket_oplata_tovar').innerHTML = sent;





		var A = document.getElementById('totsum').innerHTML;
		
	obSent = '';
		
		obSent += '<div class="oplata_tovar_all">Итого</div>';
		obSent += '<div class="oplata_cena_all" id="oplata_cena_all">' + A + '</div>';
		d.getElementById('basket_oplata_all').innerHTML = obSent;

		cenakart = totalSum;
	}

	else
	{ cartCont.innerHTML = 'тут пусто'}

	return false;

	

}

// функция для нахождения необходимого ближайшего родительского элемента
function closest(el, sel) {
	if (el !== null)
		return el.matches(sel) ? el : (el.querySelector(sel) || closest(el.parentNode, sel));
}


/* Открыть корзину */


$(document).ready(openCart);

/* Удаление из корзины */
addEvent(d.body, 'click', function (e) {
	if (e.target.className === 'del_item') {
		var itemId = e.target.getAttribute('data-id'),
			cartData = getCartData();
		if (cartData.hasOwnProperty(itemId)) {
			var tr = closest(e.target, 'div');
			tr.parentNode.removeChild(tr); /* Удаляем строку товара из таблицы */
			// пересчитываем общую сумму и цену
			var totalSumOutput = d.getElementById('total_sum'),
				totalCountOutput = d.getElementById('total_count');
			var totalSumOutputtwo = d.getElementById('totsum');
			cenakart = '';
			for (var i = 0; i < jArray.length; i++) {
				if (itemId == jArray[i]) {

					totalSumOutputtwo.textContent = +totalSumOutputtwo.textContent - jArray[i + 1] * cartData[itemId][4];
					totalSumOutput.textContent = +totalSumOutput.textContent - jArray[i + 1] * cartData[itemId][4];

				

				}
			}


			


			var A = document.getElementById('totsum').innerHTML;
			var shet;
			if (parseInt(A) < 1500) {
				shet = parseInt(A) + parseInt(DeliveryPrice);
				var deliverySent = '';
				deliverySent += '<div class="oplata_tovar">доставка</div>';
				deliverySent += ' <div class="oplata_cena" id="oplata_cena">' + DeliveryPrice + '</div>';
				d.getElementById('basket_oplata_dostavka').innerHTML = deliverySent;


			} else {
				shet = parseInt(A);

				var deliverySent = '';
				if (deleveryFlag != undefined) {
					deliverySent += '<div class="oplata_tovar">доставка</div>';
					deliverySent += ' <div class="oplata_cena" id="oplata_cena">' + 0 + '</div>';
					d.getElementById('basket_oplata_dostavka').innerHTML = deliverySent;

				}

			}

			 obSent = '';

			obSent += '<div class="oplata_tovar_all">Итого</div>';
			obSent += '<div class="oplata_cena_all" id="oplata_cena_all">' + shet + '</div>';
			d.getElementById('basket_oplata_all').innerHTML = obSent;


			delete cartData[itemId]; // удаляем товар из объекта
			setCartData(cartData); // перезаписываем измененные данные в localStorage

			cenakart = shet;
		}
	}
}, false);



document.addEventListener('click', function (e) {
	if (e.target.classList.contains("increase")) {
		++e.target.parentElement.querySelector("input").value;
		var itemId = e.target.getAttribute('id'),
			cartData = getCartData();
		cenakart = '';
		var totalSumOutput = d.getElementById('total_sum');
		var totalSumOutputtwo = d.getElementById('totsum');

		var data = 'sum' + itemId;
		var SumOutput = d.getElementById(data);


		for (var i = 0; i < jArray.length; i++) {
			if (itemId == jArray[i]) {

				totalSumOutput.textContent = +totalSumOutput.textContent + jArray[i+1] * 1;

				totalSumOutputtwo.textContent = +totalSumOutputtwo.textContent + jArray[i+1] * 1;

				SumOutput.textContent = +SumOutput.textContent + jArray[i+1] * 1;
			}
		}



		var A = document.getElementById('totsum').innerHTML;
		var shet;
		if (parseInt(A) < 1500) {
			shet = parseInt(A) + parseInt(DeliveryPrice);


			var deliverySent = '';

			if (deleveryFlag != undefined) {
				deliverySent += '<div class="oplata_tovar">доставка</div>';
				deliverySent += ' <div class="oplata_cena" id="oplata_cena">' + DeliveryPrice + '</div>';
				d.getElementById('basket_oplata_dostavka').innerHTML = deliverySent;

			}

		} else {
			shet = parseInt(A);
			if (deleveryFlag != undefined) {
				var deliverySent = '';
				deliverySent += '<div class="oplata_tovar">доставка</div>';
				deliverySent += ' <div class="oplata_cena" id="oplata_cena">' + 0 + '</div>';
				d.getElementById('basket_oplata_dostavka').innerHTML = deliverySent;
			}

		}
	obSent = '';

		obSent += '<div class="oplata_tovar_all">Итого</div>';
		obSent += '<div class="oplata_cena_all" id="oplata_cena_all">' + shet + '</div>';
		d.getElementById('basket_oplata_all').innerHTML = obSent;
		cenakart = shet;

		cartData[itemId][4] += 1; // добовляем товар
		setCartData(cartData); // перезаписываем измененные данные в localStorage


	}
})


document.addEventListener('click', function (e) {
	if (e.target.classList.contains("disincrease")) {
		--e.target.parentElement.querySelector("input").value;
		cenakart = '';
		var itemId = e.target.getAttribute('id'),
			cartData = getCartData();
		var totalSumOutput = d.getElementById('total_sum');
		var totalSumOutputtwo = d.getElementById('totsum');
		var data = 'sum' + itemId;
		var SumOutput = d.getElementById(data);


		for (var i = 0; i < jArray.length; i++) {
			if (itemId == jArray[i]) {
				totalSumOutput.textContent = +totalSumOutput.textContent - jArray[i+1] * 1;

				totalSumOutputtwo.textContent = +totalSumOutputtwo.textContent - jArray[i+1] * 1;

				SumOutput.textContent = +SumOutput.textContent - jArray[i+1] * 1;


			}
		}



		var A = document.getElementById('totsum').innerHTML;

		var shet;
		if (parseInt(A) < 1500) {
			shet = parseInt(A) + parseInt(DeliveryPrice);

			var deliverySent = '';
			if (deleveryFlag != undefined) {
				deliverySent += '<div class="oplata_tovar">доставка</div>';
				deliverySent += ' <div class="oplata_cena" id="oplata_cena">' + DeliveryPrice + '</div>';
				d.getElementById('basket_oplata_dostavka').innerHTML = deliverySent;

			}

		} else {
			shet = parseInt(A);

			if (deleveryFlag != undefined) {
				var deliverySent = '';
				deliverySent += '<div class="oplata_tovar">доставка</div>';
				deliverySent += ' <div class="oplata_cena" id="oplata_cena">' + 0 + '</div>';
				d.getElementById('basket_oplata_dostavka').innerHTML = deliverySent;
			}

		}

		obSent = '';

		obSent += '<div class="oplata_tovar_all">Итого</div>';
		obSent += '<div class="oplata_cena_all" id="oplata_cena_all">' + shet + '</div>';
		d.getElementById('basket_oplata_all').innerHTML = obSent;
		cenakart = shet;
		cartData[itemId][4] -= 1; // добовляем товар
		setCartData(cartData); // перезаписываем измененные данные в localStorage

		if (cartData[itemId][4] == 0 || d.getElementById('sum') < 0) {
			var tr = closest(e.target, 'div');
			tr.parentNode.removeChild(tr); /* Удаляем строку товара из таблицы */
			// пересчитываем общую сумму и цену
			var totalSumOutput = d.getElementById('total_sum'),
				totalCountOutput = d.getElementById('total_count');


			for (var i = 0; i < jArray.length; i++) {
				if (itemId == jArray[i]) {
					totalSumOutput.textContent = +totalSumOutput.textContent - jArray[i+1] * cartData[itemId][4];
				}
			}
			delete cartData[itemId]; // удаляем товар из объекта
			setCartData(cartData); // перезаписываем измененные данные в localStorage
		}


	}
})

var dan;







function inser() {


	if (send())
	{

		var date = new Date();
	   date.setUTCHours(14);

		alert(date);


		document.getElementById('idpok').value = idis;

		document.getElementById('Summa').value = Number(cenakart);

	}
}