var Street, House, DeliveryPrice,deleveryFlag;
DeliveryPrice = 0;
var state="smol";




function jsonjs()
{
    if (state == "smol") {
        json =
        {

            "type": "FeatureCollection",
            "metadata": {
                "name": "Без названия",
                "creator": "Yandex Map Constructor"
            },
            "features": [
                {
                    "type": "Feature",
                    "id": 0,
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [31.998360689685164, 54.80875702499532],
                                [32.009518679187096, 54.79814645093624],
                                [32.02101999144296, 54.798047273493204],
                                [32.02634149412851, 54.799039036924015],
                                [32.03921609740001, 54.79884068619331],
                                [32.0608454308961, 54.80042746466298],
                                [32.067540224597266, 54.79774973969254],
                                [32.073205050036705, 54.7994357353723],
                                [32.06977182249762, 54.80181584441444],
                                [32.06256204466559, 54.81093829154826],
                                [32.05123239378659, 54.81956305054456],
                                [32.039387758776876, 54.81639094044892],
                                [32.03286462645266, 54.81609354230301],
                                [32.0194750390504, 54.81510219924839],
                                [32.00574212889406, 54.811632306106624],
                                [31.998360689685164, 54.80875702499532]
                            ]
                        ]
                    },
                    "properties": {
                        "description": "150",
                        "fill": "#ed4543",
                        "fill-opacity": 0.6,
                        "stroke": "#ed4543",
                        "stroke-width": "5",
                        "stroke-opacity": 0.9,
                        "price": 3
                    }
                },
                {
                    "type": "Feature",
                    "id": 1,
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [32.03922146181798, 54.798676231776966],
                                [32.026609715029956, 54.79895806824802],
                                [32.02117555956578, 54.79793240479896],
                                [32.009561594531306, 54.7980472733806],
                                [31.98917680601812, 54.79169940859725],
                                [31.988661821887256, 54.78872350230376],
                                [31.998618181750533, 54.784953705152034],
                                [31.99432664732672, 54.77959601771063],
                                [31.999133165881396, 54.77066495431457],
                                [32.00308137755132, 54.768878503969944],
                                [32.011664446398974, 54.76778674530338],
                                [32.02325158934332, 54.77041684093882],
                                [32.026856478259326, 54.768779254395675],
                                [32.045395906970256, 54.768779254395675],
                                [32.05972963194582, 54.76922587549464],
                                [32.04936557631226, 54.77702233795796],
                                [32.053893145129415, 54.78579697987729],
                                [32.049472864672865, 54.79509663261909],
                                [32.04856091360779, 54.79719185776125],
                                [32.04777770857545, 54.79931176744487],
                                [32.03922146181798, 54.798676231776966]
                            ]
                        ]
                    },
                    "properties": {
                        "description": "120",
                        "fill": "#1e98ff",
                        "fill-opacity": 0.6,
                        "stroke": "#1e98ff",
                        "stroke-width": "5",
                        "stroke-opacity": 0.9,
                        "price": 120
                    }
                },
                {
                    "type": "Feature",
                    "id": 2,
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [32.07359566593925, 54.799272780455986],
                                [32.06752314472958, 54.79762396986891],
                                [32.06084980870052, 54.800338892689595],
                                [32.04795374775692, 54.79926038364098],
                                [32.05258860493465, 54.78894490586814],
                                [32.054305218704194, 54.785472756212556],
                                [32.04949870014951, 54.77703914592582],
                                [32.060656689651466, 54.768901518388816],
                                [32.071643017776424, 54.756592714587526],
                                [32.09155573750298, 54.76403800493755],
                                [32.10752024555961, 54.752819909074276],
                                [32.11370005512994, 54.75212488006491],
                                [32.12623133564752, 54.76294611510076],
                                [32.127089642532276, 54.77118418956628],
                                [32.11206927204887, 54.79281351984467],
                                [32.07359566593925, 54.799272780455986]
                            ]
                        ]
                    },
                    "properties": {
                        "description": "100",
                        "fill": "#56db40",
                        "fill-opacity": 0.6,
                        "stroke": "#56db40",
                        "stroke-width": "5",
                        "stroke-opacity": 0.9,
                        "price": 100
                    }
                }
            ]
        }



    }

    if (state == "mosk") {

        json = {
            "type": "FeatureCollection",
            "metadata": {
                "name": "Без названия",
                "creator": "Yandex Map Constructor"
            },
            "features": [
                {
                    "type": "Feature",
                    "id": 0,
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [37.670250999999766, 55.84538020802571],
                                [37.69291030175757, 55.860829964617736],
                                [37.70967971343801, 55.86930283046507],
                                [37.72375594634818, 55.88310280733626],
                                [37.70075332183633, 55.89371482267159],
                                [37.67637740630899, 55.89506523377633],
                                [37.64616500396524, 55.89718721301031],
                                [37.60256301421915, 55.90567396451213],
                                [37.587456813047275, 55.90933812169821],
                                [37.58642684478552, 55.86418690250715],
                                [37.58574019927773, 55.841591507851696],
                                [37.601189723203525, 55.83038548016993],
                                [37.603637946071316, 55.82174652122885],
                                [37.64168647825736, 55.82192514824969],
                                [37.670250999999766, 55.84538020802571]
                            ]
                        ]
                    },
                    "properties": {
                        "fill": "#ed4543",
                        "fill-opacity": 0.6,
                        "stroke": "#ed4543",
                        "stroke-width": "5",
                        "stroke-opacity": 0.9,
                        "price": 200,
                    }
                },
                {
                    "type": "Feature",
                    "id": 1,
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [37.58602507078165, 55.90936686002463],
                                [37.58156187498086, 55.91119880688302],
                                [37.542079758281645, 55.907631251249825],
                                [37.54662878477078, 55.86445700678338],
                                [37.560705017680924, 55.857892229466],
                                [37.570661377544226, 55.84147541181834],
                                [37.573407959575476, 55.83432709208491],
                                [37.58370764219264, 55.802626756240365],
                                [37.586454224223914, 55.79140945298847],
                                [37.60678524929606, 55.79293499094471],
                                [37.60026211697184, 55.83015088422241],
                                [37.584812593046074, 55.84116379871721],
                                [37.58602507078165, 55.90936686002463]
                            ]
                        ]
                    },
                    "properties": {
                        "fill": "#1e98ff",
                        "fill-opacity": 0.6,
                        "stroke": "#1e98ff",
                        "stroke-width": "5",
                        "stroke-opacity": 0.9,
                        "price": 150,
                    }
                },
                {
                    "type": "Feature",
                    "id": 2,
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [37.60343785244517, 55.820582189186595],
                                [37.609617662015474, 55.791578703608934],
                                [37.64892811733767, 55.79254583608025],
                                [37.694933366361106, 55.76777964973214],
                                [37.699739884915786, 55.782099528892175],
                                [37.74711842495485, 55.78016471884202],
                                [37.744371842923606, 55.80337607244152],
                                [37.83706898647829, 55.81381665009612],
                                [37.72720570522829, 55.88180485920918],
                                [37.70978207546746, 55.8677148464885],
                                [37.682058763089536, 55.85130219662079],
                                [37.643091630521205, 55.820002332098056],
                                [37.60343785244517, 55.820582189186595]
                            ]
                        ]
                    },
                    "properties": {
                        "fill": "#56db40",
                        "fill-opacity": 0.6,
                        "stroke": "#56db40",
                        "stroke-width": "5",
                        "stroke-opacity": 0.9,
                        "price": 170,
                    }
                }
            ]
        }
    }
}

ymaps.ready(init);
function init() {


    if (state == "smol")
    {

        myMap = new ymaps.Map('map', {
            center: [32.04120698577308, 54.78541172197484],
            zoom: 13,
            //            controls: ['button1','button2','geolocationControl', 'searchControl']
            controls: ['geolocationControl', 'searchControl']
        }),
            deliveryPoint = new ymaps.GeoObject({
                geometry: { type: 'Point' },
                properties: { iconCaption: 'Адрес' }
            }, {
                preset: 'islands#blackDotIconWithCaption',
                draggable: true,
                iconCaptionMaxWidth: '215'
            }),
            searchControl = myMap.controls.get('searchControl');
    }

    if (state == "mosk")
    {

        myMap = new ymaps.Map('map', {
            center: [37.67012046315918, 55.849068057865345],
            zoom: 11,
            //            controls: ['button1','button2','geolocationControl', 'searchControl']
            controls: ['geolocationControl', 'searchControl']
        }),
            deliveryPoint = new ymaps.GeoObject({
                geometry: { type: 'Point' },
                properties: { iconCaption: 'Адрес' }
            }, {
                preset: 'islands#blackDotIconWithCaption',
                draggable: true,
                iconCaptionMaxWidth: '215'
            }),
            searchControl = myMap.controls.get('searchControl');

    }


                searchControl.options.set({ noPlacemark: true, placeholderContent: 'Введите адрес доставки' });
                myMap.geoObjects.add(deliveryPoint);
    b_cancel = false;
    //controls




                function onZonesLoad(json) {
                    // Добавляем зоны на карту.
                    var deliveryZones = ymaps.geoQuery(json).addToMap(myMap);
    // Задаём цвет и контент балунов полигонов.
                    deliveryZones.each(function (obj) {
                        var color = obj.properties.get('fill');
    var colorOp = obj.properties.get('fill-opacity');
                        obj.options.set({
        'fillColor': color, 'fillOpacity': colorOp,
    'strokeColor': obj.properties.get('stroke'), 'strokeOpacity': obj.properties.get('stroke-opacity')
});
obj.properties.set('balloonContentHeader', obj.properties.get('price') + ' р.')
});
// Проверим попадание результата поиска в одну из зон доставки.
                    searchControl.events.add('resultshow', function (e) {
        highlightResult(searchControl.getResultsArray()[e.get('index')]);
});
// Проверим попадание метки геолокации в одну из зон доставки.
                    myMap.controls.get('geolocationControl').events.add('locationchange', function (e) {
        highlightResult(e.get('geoObjects').get(0));
});

// При перемещении метки сбрасываем подпись, содержимое балуна и перекрашиваем метку.
                    deliveryPoint.events.add('dragstart', function () {
        deliveryPoint.properties.set({ iconCaption: '', balloonContent: '' });
    deliveryPoint.options.set('iconColor', 'black');
});
// По окончании перемещения метки вызываем функцию выделения зоны доставки.
                    deliveryPoint.events.add('dragend', function () {
        b_endDrag(deliveryPoint);
});
                    function highlightResult(obj) {
                        if (b_cancel) {
        b_cancel = false; return;
}

// Сохраняем координаты переданного объекта.
var coords = obj.geometry.getCoordinates(),
    // Находим полигон, в который входят переданные координаты.
    polygon = deliveryZones.searchContaining(coords).get(0);


                        if (polygon) {
        // Уменьшаем прозрачность всех полигонов, кроме того, в который входят переданные координаты.
        deliveryZones.setOptions('fillOpacity', 0.4);
    polygon.options.set('fillOpacity', 0.8);
    // Перемещаем метку с подписью в переданные координаты и перекрашиваем её в цвет полигона.
    deliveryPoint.geometry.setCoordinates(coords);
    deliveryPoint.options.set('iconColor', polygon.options.get('fillColor'));
    // Задаем подпись для метки.
                            if (typeof (obj.getThoroughfare) === 'function') {
        setData(obj);

                            } else {
        // Если вы не хотите, чтобы при каждом перемещении метки отправлялся запрос к геокодеру,
        // закомментируйте код ниже.
        ymaps.geocode(coords, { results: 1 }).then(function (res) {
            var obj = res.geoObjects.get(0);
            setData(obj);
        });
}


                        } else {
        // Если переданные координаты не попадают в полигон, то задаём стандартную прозрачность полигонов.
        deliveryZones.setOptions('fillOpacity', 0.4);
    // Перемещаем метку по переданным координатам.
    deliveryPoint.geometry.setCoordinates(coords);
    // Задаём контент балуна и метки.
                            deliveryPoint.properties.set({
        iconCaption: 'Нет доставки',
    balloonContent: 'К сожалению доставка по этому адресу не осуществляется',
    balloonContentHeader: ''
});
                      
                            deleveryFlag = 0;

// Перекрашиваем метку в чёрный цвет.
deliveryPoint.options.set('iconColor', 'black');
}


                        function setData(obj) {

                            cenakart = '';

                            var address = [obj.getThoroughfare(), obj.getPremiseNumber(), obj.getPremise()].join(' ');

                            deleveryFlag = 1;
                            Street = obj.getThoroughfare();
                            House = obj.getPremiseNumber();

                            if (address.trim() === '') {
                                address = obj.getAddressLine();
                            }
                            deliveryPoint.properties.set({
                                iconCaption: 'Заказ от: ' + polygon.properties.get('price') + ' р.',
                                balloonContent: address,
                                balloonContentHeader: '<b>Доставка при заказе от: ' + polygon.properties.get('price') + ' р.</b>'
                            });

                            DeliveryPrice = polygon.properties.get('price');

                            var A = document.getElementById('totsum').innerHTML;
                            var deliverySent = '';
                            deliverySent += '<div class="oplata_tovar">доставка</div>';
                            if (parseInt(A) < 1500) {
                                deliverySent += ' <div class="oplata_cena" id="oplata_cena">' + DeliveryPrice + '</div>';
                            } else
                            {
                                deliverySent += ' <div class="oplata_cena" id="oplata_cena">' + 0 + '</div>';
                            }
                            d.getElementById('basket_oplata_dostavka').innerHTML = deliverySent;
                            var shet;

                            if (parseInt(A) < 1500) {
                                shet = parseInt(A) + parseInt(DeliveryPrice);
                            } else
                            {
                                shet = parseInt(A);
                            }
                            var obSent = '';

                            obSent += '<div class="oplata_tovar_all">Итого</div>';
                            obSent += '<div class="oplata_cena_all" id="oplata_cena_all">' + shet + '</div>';
                            d.getElementById('basket_oplata_all').innerHTML = obSent;

                            cenakart = shet;
                            deliveryPoint.properties.set({
        iconCaption: [obj.getLocalities(), obj.getThoroughfare(), obj.getPremiseNumber(), obj.getPremise()].join(' ')
});
console.log(deliveryPoint.properties.get('iconCaption'));
b_cancel = true;
searchControl.search(deliveryPoint.properties.get('iconCaption'));
}
}
                    function b_endDrag(obj) {
        highlightResult(obj);
}
}


    onZonesLoad(json);




//
           

             
                   
}




