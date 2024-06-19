//style 


            //стиль границы здания
            var footprintStyle = {
	            color: 'black',
                weight: 3,
	            fillColor: 'white',
	            fillOpacity: 1,
            };

            //стиль маловажных штук
            var fixtureStyle = {
                color: 'black',
                weight: 3,
                opacity: 0.1,
                fillOpacity: 0,
            };

            //стиль магазинов
            var magazinesStyle = {
                color: 'black',
                opacity: 0,
                //weight: 3,
                fillColor: 'white',
                fillOpacity: 0.2,
            };

            //стиль внутренних стен
            var wallStyle = {
                //color: '#ff00ff', - фуксия
                //color: '#afeeee',
                color: 'black',
                fillColor: 'none',
                weight: 2,
                fillOpacity: 1,
                opacity: 0.75
            };

            var brownStyle = {
                color: 'black',
                fillColor: '#8FBC8F',
                weight: 2,
                fillOpacity: 0.5,
                opacity: 0.1
            };


            var highlightBlue = {
                color: '#87CEEB',
                opacity: -0.1,
                fillColor: '#87CEEB',
                fillOpacity: 0.7,
                weight: 1,
            };
            var highlightOrange = {
                color: '#ffe5b4 ',
                opacity: 0,
                fillColor: '#ffe5b4 ',
                fillOpacity: 0.7,
                weight: 2,
            };
            var highlightPurple = {
                color: '#DDA0DD ',
                opacity: 0,
                fillColor: '#DDA0DD ',
                fillOpacity: 0.7,
                weight: 2,
            };
            var highlightGreen = {
                color: '#00FF7F ',
                opacity: 0,
                fillColor: '#00FF7F ',
                fillOpacity: 0.7,
                weight: 2,
            };
            var highlightPink = {
                color: '#FF69B4 ',
                opacity: 0,
                fillColor: '#FF69B4 ',
                fillOpacity: 0.7,
                weight: 2,
            }
            //------------------------------------------------------------------------- 1 этаж ---------------------------------------------------------

        var L1fixtures = L.polyline(
            [
                [[133, 116.75],  //lift
                [133, 95],
                [122, 95],
                [122, 119.5]],
                [[75, 51], // где кофе
                [75, 80],
                [120, 80],
                [120, 61],
                [46.1, 61]],
                [[75, 68],[120, 68]], //эскалатор рабочий
                [[75, 72], [120, 72]],

                [[78, 61], [78, 68]], [[81, 61], [81, 68]], [[84, 61], [84, 68]], [[87, 61], [87, 68]], [[90, 61], [90, 68]], [[93, 61], [93, 68]], [[96, 61], [96, 68]], [[99, 61], [99, 68]],
                [[102, 61], [102, 68]],[[105, 61], [105, 68]],[[108, 61], [108, 68]],[[111, 61], [111, 68]],[[114, 61], [114, 68]],[[117, 61], [117, 68]],[[120, 61], [120, 68]], //левые ступеньки
                
                [[78, 72], [78, 80]], [[81, 72], [81, 80]], [[84, 72], [84, 80]], [[87, 72], [87, 80]], [[90, 72], [90, 80]], [[93, 72], [93, 80]], [[96, 72], [96, 80]], [[99, 72], [99, 80]],
                [[102, 72], [102, 80]],[[105, 72], [105, 80]],[[108, 72], [108, 80]],[[111, 72], [111, 80]],[[114, 72], [114, 80]],[[117, 72], [117, 80]],[[120, 72], [120, 80]], //правые ступеньки

                [[46, 81],[18, 82],[18, 96.5]],
                [[-72, -68],[-100, -68],[-100, -80],[-72, -80]],
                [[160, 100],[160,76],[200, 76],[200, 100]],
                [[150, 96], [150, 101]]
            ], fixtureStyle
        );

        // Стены
        var L1walls = L.polyline([
            [[160, 76],[160, 59],[151, 59],[151, -29],[195, -29],[195, -5],[151, -5],[195, -5],[195, -3],[225, -3]],
            [[228, 30],[151, 30]],
            [[228, 50],[151, 50]],
            [[225,-42],[213, -42],[213, -58]],
            [[45, 94],[46, 81],[46, 51]],
            [[213, -42],[211, -42],[211, -34],[198, -34],[198, -42],[213, -42]],
            [[191, -58],[191, -36],[198, -36]],
            [[171, -58],[171, -38],[191, -38]],
            [[155, -58],[155, -44],[171, -44]],
            [[155, -44],[130, -44],[109, -43],[109, -58]],
            [[109, -43],[75, -42],[75, -58]],
            [[75, -42],[51, -42],[51, -58]],
            [[130, -44],[130, 51],[0, 51],[0, 98.5]],
            [[0, 76],[-15, 76],[-15, 100]],  // нижняя часть
            [[-15, 76], [-60, 76],[-60, 104.5]],
            [[-60, 76],[-60, 60],[-124, 60],[-124, 111]],
            [[-60, 60],[-60, -38],[-52, -38],[-52, -49],[-50, -49],[-50, -58]],
            [[-10, -58],[-10, -48],[-31, -48],[-31, -38],[-60, -38]],
            [[-60, -38],[-72, -38],[-72, -58]],
            [[-72, -58],[-104, -58],[-104, -68],[-100, -68]],
            [[-72, -80]],
            [[-100, -80],[-112, -80],[-112, -68],[-113, -68],[-113, 0],[-145, 0],[-146, 95]],
            [[-145.6, 55],[-203, 55]],
            [[-145, 0],[-168, 0],[-175, -10],[-198, -10]],
            [[-175, -10],[-175, -18],[-198, -18]],
            [[-175, -10],[-175, -60],[-206.75, -58]],
            [[-175, -60],[-145, -67],[-145, -85],[-167, -86],[-167, -117.5]],
            [[-145, -67],[-112, -68]],
            [[145, 100], [155, 91.5],[155, 97],[145, 105.5],[145, 100]],
            [[-124, 100], [-131, 100], [-131, 106], [-124, 106]]
        ],wallStyle
        );
        
        // Границы здания
        var L1footprint = L.polygon([
                [-215,  -120],
                [-120,  -115],
                [-120, -110],
                [-72, -110],
                [-72,-58],
                [225, -58],
                [225, 2],
                [228, 2],
                [228, 100],
                [160, 100],
                [140, 115],
                [120, 120],
                [90, 125],
                [65, 123],
                [50, 119],
                [38, 115],
                [45, 94],
                [-125, 111],
                [-145, 112],
                [-146, 95],
                [-160, 91],
                [-170, 89],
                [-180, 82],
                [-190, 74],
                [-200, 60],
                [-210, 45],
                [-215, 30],
                [-218, 21],
                [-220, -8],
                [-198, -10],
                [-198, -18],
                [-200, -18],
                [-208, -65],
                [-209, -65]
            ],footprintStyle
            //тут мы добавляем контент в сайдбар на 1 этаже
            ).on('click', function (){
                sidebar.show()
                sidebar.setContent('<div class="title">ТЦ "Антей"</div>' + '<img id="sidebarImage" src="img/first_floor.png">'+ '<div class="text">Контакты: <a href="tel: +73433795855" class="phone-number"> +7 (343) 379-58-55</a>'  + '<div class="text"> Адрес: ул. Малышева, 53 <br> <a href ="http://www.tc-antey.ru/">Сайт компании</a> <br> Режим работы: <div class="timing">ПН-ВС:10:00-20:00');
        });

        

        //---------------------------------------------------------------------Коричневые области-------------------------------------------------
        var L1_BrownArea1 = L.polygon([
            [46, 51],[0, 51],[0, 98.5],[18, 96.5],[18, 82],[46, 81],
        ], brownStyle
        );
        var L1_BrownArea2 = L.polygon([
            [109, -43], [109, -58], [75, -58], [75, -42],
        ], brownStyle
        );
        var L1_BrownArea3 = L.polygon([
            [-15, 76], [-60, 76], [-60, 104.5], [-15, 100],
        ], brownStyle
        ); 
        var L1_BrownArea4 = L.polygon([
            [-60, 60], [-124, 60], [-124, 111], [-60, 104.5],
        ], brownStyle);
        var L1_BrownArea5 = L.polygon([
            [-113, 0], [-113, -68], [-145, -67], [-175, -60], [-175, -10], [-168, 0],
        ], brownStyle);
        var L1_BrownArea6 = L.polygon([
            [-72, -58], [-104, -58], [-104, -68], [-72, -68],
        ], brownStyle);
        var L1_BrownArea7 = L.polygon([
            [-72, -58], [-72, -38], [-52, -38], [-52, -49], [-50, -49], [-50, -58],
        ], brownStyle);
        var L1_BrownArea8 = L.polygon([
            [-52, -38], [-31, -38], [-31, -48], [-10, -48], [-10, -58], [-50, -58], [-50, -49], [-52, -49],
        ], brownStyle);
        var L1_BrownArea9 = L.polygon([
            [213, -58], [213, -42], [198, -42], [198, -36], [191, -36], [191, -58],
        ], brownStyle);
        var L1_BrownArea10 = L.polygon([
            [-72, -80], [-112, -80], [-112, -68], [-113, -68], [-145, -67],[-145, -85],[-167, -86],[-167, -117.5],[-120,  -115],[-120, -110],[-72, -110],
        ], brownStyle);
            
        //------------------------------------------------------------------ 1 этаж магазины -------------------------------------------------------------
            //мини кофейня
            var L1_miniCoffee = L.polygon([
                [46.1, 61],[75, 61],[75, 51.25],[46.1, 51.25],
            ],magazinesStyle
            ).bindTooltip('<div class=centered-text>Kafedra<br>Coffee</div><img id="icon" src="img/coffee.png">', {permanent: true, direction:"center", className: 'tooltipclass'}).openTooltip().on('click', function() {
                sidebar.show()
                sidebar.setContent('<div class="title">Kafedra Coffee</div> </div> <div class="under-title">Кофейня </div>'  + '<img id="sidebarImage" src="img/coffee.jpg">'  + '<div class="text"> Адрес: ул. Малышева, 53 <br> Режим работы: <div class="timing">ПН-ВС:10:00-20:00');
            });

            var L1_bauerKeratin = L.polygon([
                [171, -58],[155, -58],[155, -44],[171, -44]
            ], magazinesStyle
            ).bindTooltip('<div class=centered-text>Bauer.<br>Keratin</div><img id="icon" src="img/haircut.png">', {permanent: true, direction:"center", className: 'tooltipclass'}).openTooltip().on('click', function() {
                sidebar.show()
                sidebar.setContent('<div class="title">Bauer. Keratin</div> </div> <div class="under-title">Парикмахерская </div>' + '<div class="text">Контакты: <a href="tel: +79220255966" class="phone-number"> +7 (922) 025-59-66</a> <br> Адрес: ул. Малышева, 53 <br> Режим работы: <div class="timing">Ежедневно с 10:00-20:00');
            });
            // магазин цветов
            var L1_flowersMag = L.polygon([
                [151, -5],
                [151, -29],
                [195, -29],
                [195, -5]
            ], magazinesStyle
            ).bindTooltip('<div class=centered-text> Студия <br> флористики</div><img id="icon" src="img/flower.png">', {permanent: true, direction:"center", className: 'tooltipclass'}).openTooltip().on('click', function() {
                sidebar.show()
                sidebar.setContent('<div class="title">Студия флористики Светланы Савельевой</div> </div> <div class="under-title">Магазин цветов</div>'  + '<img id="sidebarImage" src="img/flower1.jpg">'  + '<div class="text">Контакты: <a href="tel: +73433795887" class="phone-number">+7 (343) 379-58-87</a> <br> Адрес: ул. Малышева, 53 <br> <a href ="http://ssavelieva.ru/">Сайт компании</a> <br> Режим работы: <div class="timing">Ежедневно с 10:00-21:00');
            });

            // аптека
            var L1_apteka = L.polygon([
                [151, 30],
                [228 ,30],
                [228, 2],
                [225, 2],
                [225, -3],
                [195, -3],
                [195, -5],
                [151, -5],
            ], magazinesStyle
            ).bindTooltip('Эрис<img id="icon" src="img/apteka.png">', {permanent: true, direction:"center", className: 'tooltipclass'}).openTooltip().on('click', function() {
                sidebar.show()
                sidebar.setContent('<div class="title">Эрис</div> </div> <div class="under-title">Аптека</div>'  + '<img id="sidebarImage" src="img/apteka.jpg">'  + '<div class="text">Контакты: <a href="tel: +73433784390" class="phone-number">+7 (343) 378-43-90</a> <br> Адрес: ул. Малышева, 53 <br> Режим работы: <div class="timing">ПН-ПТ:09:00-21:00<br>СБ-ВС:10:00-20:00');
            });

            // табачка
            var L1_tabak = L.polygon([
                [228, 50],
                [228, 30],
                [151, 30],
                [151, 50]
            ], magazinesStyle
            ).bindTooltip('Табак а<img id="icon" src="img/circle.png">', {permanent: true, direction:"center", className: 'tooltipclass'}).openTooltip().on('click', function() {
                sidebar.show()
                sidebar.setContent('<div class="title">Табак а</div> </div> <div class="under-title">Магазин табака, вэйп шоп </div>'  + '<img id="sidebarImage" src="img/tabak.jpg">'  + '<div class="text">Адрес: ул. Малышева, 53 <br> Режим работы: <div class="timing">ПН-ПТ:10:00-20:00<br>СБ:10:00-21:00<br>ВС:10:00-20:00');
            });

            // Сэ муа
            var L1_SeMua = L.polygon([
                [160, 76],
                [160, 59],
                [151, 59],
                [151, 50],
                [228, 50],
                [228, 100],
                [200, 100],
                [200, 76],
                [160,76]
            ], magazinesStyle
            ).bindTooltip('Сэ муа<img id="icon" src="img/eda.png">', {permanent: true, direction: "center", className: 'tooltipclass'}).openTooltip().on('click', function(){
                sidebar.show()
                sidebar.setContent('<div class="title">Сэ Муа</div> </div> <div class="under-title">Магазин белья и купальников </div>'  + '<img id="sidebarImage" src="img/semua.jpg">'  + '<div class="text">Контакты: <a href="tel: +73433822398" class="phone-number"> +7 (343) 382-23-98</a> <br> Адрес: ул. Малышева, 53 <br> <a href ="http://semua.ru/">Сайт компании</a> <br> Режим работы: <div class="timing">ПН-ВС:10:00-20:00');
            });

            // УБРиР
            var L1_Ubrir = L.polygon([
                [-215,  -120],
                [-167, -117.5],
                [-167, -86],
                [-145, -85],
                [-145, -67],
                [-175, -60],
                [-206.75, -58],
                [-208, -65],
                [-209, -65]
            ], magazinesStyle
            ).bindTooltip('УБРиР<img id="icon" src="img/bank.png">', {permanent: true, direction:"center", className: 'tooltipclass'}).openTooltip().on('click', function(){
                sidebar.show()
                sidebar.setContent('<div class="title">Уральский банк реконструкции и развития</div> </div> <div class="under-title">Банк</div>'  + '<img id="sidebarImage" src="img/ubrir.jpg">'  + '<div class="text">Контакты: <a href="tel:88001000200" class="phone-number"> 8 (800) 100-02-00</a> <br> Адрес: ул. Малышева, 53 <br> <a href ="https://ubrr.ru/">Сайт компании</a> <br> Режим работы: <div class="timing">ПН-ПТ:09:00-19:00<br>СБ-ВС:Выходной');
            });

            //спортзал 1 этаж
            var L1_flexSport = L.polygon([
                [-203, 55],
                [-145.6, 55],
                [-145, 0],
                [-168, 0],
                [-175, -10],
                [-198, -10],
                [-220, -8],
                [-218, 21],
                [-215, 30],
                [-210, 45],
            ], magazinesStyle
            ).bindTooltip("The Flex<img id='icon' src='img/gym.png'>", {permanent: true, direction: "center", className: 'tooltipclass'}).openTooltip().on('click', function(){
                sidebar.show()
                sidebar.setContent('<div class="title"> The Flex </div> </div> <div class="under-title">Фитнес-клуб, массажный салон</div>'  + '<img id="sidebarImage" src="img/flex.jpg">'  + '<div class="text">Контакты: <a href="tel:+79221479457" class="phone-number">+7 (922) 147-94-57</a> <br> Адрес: ул. Малышева, 53 <br> <a href ="https://ekb.theflex.ru/">Сайт компании</a> <br> Режим работы: <div class="timing">ПН-ВС:08:00-22:00');
            });


            //Красное и белое
            var L1_krasnoeBeloe = L.polygon([
                [-203, 55],
                [-145.6, 55],
                [-146, 95],
                [-160, 91],
                [-170, 89],
                [-180, 82],
                [-190, 74],
                [-200, 60]
            ], magazinesStyle
            ).bindTooltip("Красное&Белое<img id='icon' src='img/eda.png'>", {permanent: true, direction: "center", className: 'tooltipclass'}).openTooltip().on('click', function(){
                sidebar.show()
                sidebar.setContent('<div class="title">Красное&Белое</div> </div> <div class="under-title">Алкогольные напитки, магазин продуктов</div>'  + '<img id="sidebarImage" src="img/KrasnoeBeloe.jpg">'  + '<div class="text">Контакты: <a href="tel:88001000804" class="phone-number">8 (800) 100-08-04</a> <br> Адрес: ул. Малышева, 53 <br> <a href ="https://krasnoeibeloe.ru/">Сайт компании</a> <br> Режим работы: <div class="timing">ПН-ВС:09:00-22:05');
            });

            // Перекресток
            var L1_perekrestok = L.polygon([
                [-60, 76],
                [0, 76],
                [0, 51],
                [130, 51],
                [130, -44],
                [109, -43],
                [75, -42],
                [51, -42],
                [51, -58],
                [-10, -58],
                [-10, -48],
                [-31, -48],
                [-31, -38],
                [-60, -38],
            ],magazinesStyle
            ).bindTooltip('Перекрёсток<img id="icon" src="img/eda.png">', {permanent: true, direction: "center", className: 'tooltipclass'}).openTooltip().on('click', function(){
                sidebar.show()
                sidebar.setContent('<div class="title"> Перекресток </div> </div> <div class="under-title">Супермаркет</div>'  + '<img id="sidebarImage" src="img/perekrestok.jpg">'  + '<div class="text">Контакты: <a href="tel:+78002009555" class="phone-number">8 (800) 200-95-55</a> <br> Адрес: ул. Малышева, 53 <br> <a href ="https://ekb.perekrestok.ru/?utm_campaign=Perek_MAPS%2723&utm_content=MAPS&utm_medium=Display&utm_source=Yandex&utm_term=globus">Сайт компании</a> <br> Режим работы: <div class="timing">ПН-ВС:09:00-23:00');
            });


            //---------------------------------------------------------------- 2 этаж -----------------------------------------------------------------
            
            //границы здания
            var L2footprint = L.polygon([
                [-215, -120],
                [-120, -115],
                [-120, -110],
                [-72, -110],
                [-72,-58],
                [225, -58],
                [225, 2],
                [228, 2],
                [228, 100],
                [160, 100],
                [140, 115],
                [120, 120],
                [90, 125],
                [65, 123],
                [50, 119],
                [38, 115],
                [45, 94],
                [-125, 111],
                [-145, 112],
                [-146, 95],
                [-160, 91],
                [-170, 89],
                [-180, 82],
                [-190, 74],
                [-200, 60],
                [-210, 45],
                [-215, 30],
                [-218, 21],
                [-220, -8],
                [-198, -10],
                [-198, -15],
                [-200, -15],
                [-208, -65],
                [-209, -65]
            ],footprintStyle
            // контент на втором этаже
            ).on('click', function (){
                sidebar.show()
                sidebar.setContent('<div class="title">ТЦ "Антей"</div>' + '<img id="sidebarImage" src="img/first_floor.png">'+ '<div class="text">Контакты: <a href="tel: +73433795855" class="phone-number"> +7 (343) 379-58-55</a>'  + '<div class="text"> Адрес: ул. Малышева, 53 <br> <a href ="http://www.tc-antey.ru/">Сайт компании</a> <br> Режим работы: <div class="timing">ПН-ВС:10:00-20:00');
            });

            // Стены
            var L2walls = L.polyline([
                [[-146, 95],[-146, 2],[-198,2],[-198,-10],[-128,-10],[-128,2],[-146,2]],
                [[-198,-15],[-195,-19],[-128,-19],[-128,-68],[-209,-68]],
                [[-148,-19],[-148,-68]],
                [[-179,-19],[-179,-68]],
                [[-188,-68],[-188,-90],[-211.5,-90], [-178, -90]],
                [[-200,-119],[-200,-105],[-175,-105],[-175,-118]],
                [[-178,-105],[-178,-78],[-128,-78],[-128,-95],[-117,-95],[-117,-110]],
                [[-117,-95],[-117,-80],[-72,-80]],
                [[-112,-80],[-112,-66]],
                [[-72,-66],[-120,-66],[-120,-58],[-72,-58]],
                [[-146,95],[-143,95],[-143,92],[-120,92],[-120,37],[-146,37]],
                [[-137,37],[-137,82],[-146,82]],
                [[-125,92],[-125,111]],
                [[-120,45],[-120,-43],[0,-43],[0,-28],[11,-28],[11,72],[45,72],[45,94]],
                [[-60,104.5],[-60,79],[-19,79],[-19,100]],
                [[45,72],[45,35],[11,35]],
                [[28,72],[28,35]],
                [[45,60],[62,60],[62,87]],
                [[45,94],[72,84],[125,84],[125,118.7]],
                [[72,84],[72,60],[125,60],[125,84]],
                [[125,94],[132,94],[132,117]],
                [[62,55],[62,25],[137,25],[137,55],[62,55]],
                [[117,25],[117,55]],[[100,25],[100,55]],[[80,25],[80,55]],
                [[125,55],[125,57.5],[100,57.5],[100,55]],
                [[160,100],[160,80],[197,80],[197,100]],
                [[160,80],[158,80],[158,50],[228,50]],
                [[158,50],[158,25],[228,25]],
                [[198,50],[198,25]],
                [[4,-58],[4,-35],[55,-35],[55,-58]],
                [[55,-40],[87,-40],[87,-58]],
                [[20,-28],[50,-28],[50,8],[20,8],[20,-28]],
                [[50,-28],[60,-28],[60,-33],[87,-33],[87,8],[50,8]],
                [[87,-33],[120,-33],[120,8],[87,8]],
                [[120,-33],[148,-33],[148,8],[120,8]],
                [[95,-33],[95,-49],[150,-49]],[[123,-33],[123,-49]],
                [[150,-58],[150,-40],[193,-40],[193,-58]],[[193,-42],[225,-42]],[[193,-40],[193,-32]],
                [[158,-32],[210,-32],[210,8],[158,8],[158,-32]],[[187,-32],[187,8]],
                [[148,-33],[148,-40],[150,-40]],
                [[210,-30],[210,-42]],[[210,-20],[225,-20]],
                [[140,115],[137,110],[160,93]],
                [[-170, -10],[-170, 2]]
                ], wallStyle
            );
            

            //---------------------------------------------------------------Коричневые области---------------------------------------------------------
            var L2_BrownArea1 = L.polygon([
                [228, 50], [198, 50], [198, 25], [228, 25]
            ], brownStyle);
            var L2_BrownArea2 = L.polygon([
                [158, 50], [158, 25], [198, 25], [198, 50]
            ], brownStyle);
            var L2_BrownArea3 = L.polygon([
                [123,-33],[123,-49],[150, -49],[150, -40],[148, -40],[148, -33]
            ], brownStyle);
            var L2_BrownArea4 = L.polygon([
                [123, -33],[123, -49],[95, -49],[95, -33]
            ], brownStyle);
            var L2_BrownArea5 = L.polygon([
                [28,72],[28,35],[45, 35],[45, 72]
            ], brownStyle);
            var L2_BrownArea6 = L.polygon([
                [-60,104.5],[-60,79],[-19,79],[-19,100]
            ], brownStyle);
            var L2_BrownArea7 = L.polygon([
                [-137,82],[-137,37],[-120,37],[-120,92],[-143,92],[-143,95],[-146,95],[-146, 82]
            ], brownStyle);
            var L2_BrownArea8 = L.polygon([
                [-170, -10],[-170,2],[-198, 2],[-198, -10]
            ], brownStyle);
            var L2_BrownArea9 = L.polygon([
                [-170, -10],[-170, 2],[-128, 2], [-128, -10]
            ], brownStyle);
            var L2_BrownArea10 = L.polygon([
                [-200,-119],[-200,-105],[-175,-105],[-175,-118]
            ], brownStyle);
            var L2_BrownArea11 = L.polygon([
                [-72,-66],[-120,-66],[-120,-58],[-72,-58]
            ], brownStyle);
            var L2_BrownArea12 = L.polygon([
                [-117, -110],[-117,-80],[-72,-80],[-72, -110],
            ], brownStyle);
            var L2_BrownArea13 = L.polygon([
                [55,-58],[55,-40],[87,-40],[87,-58]
            ], brownStyle);

            //-----------------------------------------------------------------------------------------------------------------------------------------

            // Картины
            var L2_paintings = L.polygon([
            [140,115],[137,110],[160,93],[160,100]
            ], magazinesStyle
            ).bindTooltip('<div class="centered-text">Картины<img id="icon" src="img/eda.png">', {permanent: true, direction: "center", className: 'tooltipclass'}).openTooltip().on('click', function(){
                sidebar.show()
                sidebar.setContent('<div class="title">Картины</div> </div> <div class="under-title">Художественный салон</div>' + '<div class="text">Адрес: ул. Малышева, 53');
            });

            //selfClick
            var L2_selfClick = L.polygon([
                [4,-58],[4,-35],[55,-35],[55,-58]
            ], magazinesStyle
            ).bindTooltip('<div class="centered-text">Self-<br>Click<img id="icon" src="img/camera.png">', {permanent: true, direction: "center", className: 'tooltipclass'}).openTooltip().on('click', function(){
                sidebar.show()
                sidebar.setContent('<div class="title">Selfclick</div> </div> <div class="under-title">Фотостудия, аренда фотостудий</div>'  + '<img id="sidebarImage" src="img/selfclick.jpg">'  + '<div class="text">Контакты: <a href="tel: +79951301277" class="phone-number">+7 (995) 130-12-77</a> <br> Адрес: ул. Малышева, 53 <br> Режим работы: <div class="timing">ПН-ВС 10:00-22:00');
            });
            
            
            // Швейная мастерская
            var L2_shveynaya = L.polygon([
                [158,80],[158,50],[228,50],[228, 100],[197, 100],[197, 80]
            ], magazinesStyle
            ).bindTooltip('<div class="centered-text">Швейная<br>мастерская<br>Александры<img id="icon" src="img/tShirt.png">', {permanent: true, direction: "top", className: 'tooltipclass'}).openTooltip().on('click', function(){
                sidebar.show()
                sidebar.setContent('<div class="title">Швейная мастерская Александры</div> </div> <div class="under-title">Ателье по пошиву одежды</div>'  + '<img id="sidebarImage" src="img/masterAlex.jpg">'  + '<div class="text">Контакты: <a href="tel: +79122140845" class="phone-number">+7 (912) 214-08-45</a> <br> Адрес: ул. Малышева, 53 <br> Режим работы: <div class="timing">ПН-ПТ 11:00-19:00');
            });


            //BCK
            var L2_vsk = L.polygon([
                [187, -32], [210, -32], [210, 8], [187, 8]
            ], magazinesStyle
            ).bindTooltip('<div class="centered-text">BCK<img id="icon" src="img/bag.png">', {permanent: true, direction: "center", className: 'tooltipclass'}).openTooltip().on('click', function(){
                sidebar.show()
                sidebar.setContent('<div class="title">Ленинское страховое агентство</div> </div> <div class="under-title">Страховая компания</div>'  + '<img id="sidebarImage" src="img/vsk.jpg">'  + '<div class="text">Адрес: ул. Малышева, 53 <br> Режим работы: <div class="timing">ПН-ПТ 09:00-18:00');
            });


            //normajBaker
            var L2_normajBaker = L.polygon([
                [158,8],[158,-32],[187,-32],[187,8]
            ], magazinesStyle
            ).bindTooltip('<div class="centered-text">Norma J.<br>baker<img id="icon" src="img/tShirt.png">', {permanent: true, direction: "center", className: 'tooltipclass'}).openTooltip().on('click', function(){
                sidebar.show()
                sidebar.setContent('<div class="title">Norma J. baker</div> </div> <div class="under-title">Магазин обуви</div>'  + '<img id="sidebarImage" src="img/normaj.jpg">'  + '<div class="text">Контакты:<br> <a href="tel: +79630474600" class="phone-number">+7 (963) 047-46-00</a> <br><a href="tel: +79530006854" class="phone-number">+7 (953) 000-68-54</a> <br><a href="tel: +79221596296" class="phone-number">+7 (922) 159-62-96</a> <br> Адрес: ул. Малышева, 53<br> <a href ="http://norma-j-baker.ru/">Сайт компании</a> <br>  Режим работы: <div class="timing">ПН-ВС: 10:00 – 22:00');
            });
            
            // Расчеши
            var L2_rascheshi = L.polygon([
                [80, 55],[80,25],[62,25],[62,55],
            ], magazinesStyle
            ).bindTooltip('<div class="centered-text">Расчеши<img id="icon" src="img/haircut.png">', {permanent: true, direction: "center", className: 'tooltipclass'}).openTooltip().on('click', function(){
                sidebar.show()
                sidebar.setContent('<div class="title">Расчеши</div> </div> <div class="under-title">Парикмахерская</div>'  + '<img id="sidebarImage" src="img/rasceshi.jpg">'  + '<div class="text">Контакты: <a href="tel: +79676399521" class="phone-number">+7 (967) 639-95-21</a> <br> Адрес: ул. Малышева, 53 <br>  Режим работы: <div class="timing">ПН-ВС: 10:00 – 22:00');
            });



            // Ferrante
            var L2_ferrante = L.polygon([
                [100, 55],[100, 25],[80, 25], [80, 55],
            ], magazinesStyle
            ).bindTooltip('<div class="centered-text">Ferrante<img id="icon" src="img/tShirt.png">', {permanent: true, direction: "center", className: 'tooltipclass'}).openTooltip().on('click', function(){
                sidebar.show()
                sidebar.setContent('<div class="title">Ferrante</div> </div> <div class="under-title">Магазин одежды</div>'  + '<img id="sidebarImage" src="img/ferrante.jpg">'  + '<div class="text">Контакты: <a href="tel: +79506445034" class="phone-number">+7 (950) 644-50-34</a> <br> Адрес: ул. Малышева, 53 <br> <a href ="https://www.ferrante.it/ru/">Сайт компании</a> <br> Режим работы: <div class="timing">ПН-ВС: 10:00 – 21:00');
            });
            
            // N&Vi
            var L2_nAndVi = L.polygon([
                [117,25],[117,55],[100, 55],[100, 25],
            ], magazinesStyle
            ).bindTooltip('<div class="centered-text">N&Vi<img id="icon" src="img/lotos.png">', {permanent: true, direction: "center", className: 'tooltipclass'}).openTooltip().on('click', function(){
                sidebar.show()
                sidebar.setContent('<div class="title">N&Vi</div> </div> <div class="under-title">Салон красоты</div>' + '<div class="text">Адрес: ул. Малышева, 53');
            });
            
            
            
            // sunmar
            var L2_sunmar = L.polygon([
                [137,25],[137,55],[117,55],[117,25],
            ], magazinesStyle
            ).bindTooltip('<div class="centered-text">Sunmar<img id="icon" src="img/palm.png">', {permanent: true, direction: "center", className: 'tooltipclass'}).openTooltip().on('click', function(){
                sidebar.show()
                sidebar.setContent('<div class="title">Sunmar</div> </div> <div class="under-title">Турагентство</div>'  + '<img id="sidebarImage" src="img/sunmar.jpg">'  + '<div class="text">Контакты:<br> <a href="tel: +73432077409" class="phone-number">+7 (343) 207-74-09</a> <br><a href="tel: +79122474907" class="phone-number">+7 (912) 247-49-07</a><br> Адрес: ул. Малышева, 53 <br> <a href ="https://www.sunmar.ru/">Сайт компании</a> <br> Режим работы: <div class="timing">ПН-ПТ 10:00 – 20:00<br>СБ-ВС 11:00 – 19:00');
            });
            
            
            // Byblos
            var L2_byblos = L.polygon([
                [120,-33],[148,-33],[148,8],[120,8],
            ], magazinesStyle
            ).bindTooltip('<div class="centered-text">Byblos<img id="icon" src="img/tShirt.png">', {permanent: true, direction: "center", className: 'tooltipclass'}).openTooltip().on('click', function(){
                sidebar.show()
                sidebar.setContent('<div class="title">Byblos</div> </div> <div class="under-title">Магазин одежды, магазин детской одежды</div>'  + '<img id="sidebarImage" src="img/byblos.jpg">'  + '<div class="text"> Адрес: ул. Малышева, 53 <br> <a href =" https://byblosbrand.com">Сайт компании</a> <br> Режим работы: <div class="timing">ПН-СБ: 10:00-21:00<br> ВС: 10:00-20:00');
            });
            
            
            //Atlant Armor
            var L2_atlantArmor = L.polygon([
                [87,-33],[87,8],[120,8],[120,-33],
            ], magazinesStyle
            ).bindTooltip('<div class="centered-text">AtlantArmorUral<img id="icon" src="img/tShirt.png">', {permanent: true, direction: "center", className: 'tooltipclass'}).openTooltip().on('click', function(){
                sidebar.show()
                sidebar.setContent('<div class="title">AtlantArmourUral</div> </div> <div class="under-title">Военная экипировка, снаряжение</div>'  + '<img id="sidebarImage" src="img/atlantarmor.jpg">'  + '<div class="text">Контакты: <a href="tel: +79958578470" class="phone-number">+7 (995) 857-84-70</a> <br> Адрес: ул. Малышева, 53 <br> <a href =" https://atlant-armour.ru">Сайт компании</a> <br> Режим работы: <div class="timing">ПН-ВС 11:00-20:00');
            });
            
            
            // Арена
            var L2_arena = L.polygon([
                [50,-28],[60,-28],[60,-33],[87,-33],[87,8],[50,8],
            ], magazinesStyle
            ).bindTooltip('Арена<img id="icon" src="img/eda.png">', {permanent: true, direction: "center", className: 'tooltipclass'}).openTooltip().on('click', function(){
                sidebar.show()
                sidebar.setContent('<div class="title">Arena</div> </div> <div class="under-title">Спортивная одежда и обувь, спортивный магазин</div>'  + '<img id="sidebarImage" src="img/arena.jpg">'  + '<div class="text">Контакты: <a href="tel: +79221318731" class="phone-number">+7 (922) 131-87-31</a> <br> Адрес: ул. Малышева, 53 <br> <a href =" https://www.arenarussia.ru">Сайт компании</a> <br> Режим работы: <div class="timing">ПН-СБ 10:00-21:00<br> ВС 10:00-20:00');
            });
            
            
            // Planka
            var L2_planka = L.polygon([
                [20,-28],[50,-28],[50,8],[20,8]
            ], magazinesStyle
            ).bindTooltip('Planka<img id="icon" src="img/tShirt.png">', {permanent: true, direction: "center", className: 'tooltipclass'}).openTooltip().on('click', function(){
                sidebar.show()
                sidebar.setContent('<div class="title">Planka</div> </div> <div class="under-title">Магазин одежды, спортивный магазин</div>'  + '<img id="sidebarImage" src="img/planka.jpg">'  + '<div class="text">Контакты: <a href="tel: +79126444463" class="phone-number">+7 (912) 644-44-63</a> <br> Адрес: ул. Малышева, 53 <br> Режим работы: <div class="timing">ПН-ВС 10:00-21:00');
            });
            
            
            // Центр экспертизы
            var L2_centrExcpertize = L.polygon([
                [-211.5,-90],[-178, -90],[-178,-105],[-200,-105],[-200,-119],[-215,-120]
            ], magazinesStyle
            ).bindTooltip('<div class="centered-text">Уральский<br>центр<br>экспертизы<br>услуг<img id="icon" src="img/bag.png">', {permanent: true, direction: "bottom", className: 'tooltipclass'}).openTooltip().on('click', function(){
                sidebar.show()
                sidebar.setContent('<div class="title">Уральский центр экспертизы услуг</div> </div> <div class="under-title">Сертификация продукции и услуг</div>'  + '<img id="sidebarImage" src="img/centeruslug.jpg">'  + '<div class="text">Контакты:<br> <a href="tel: +73433795760" class="phone-number">+7 (343) 379-57-60</a> <br> <a href="tel: +73433795763" class="phone-number">+7 (343) 379-57-63</a><br>Адрес: ул. Малышева, 53 <br> <a href =" https://ucey.ru">Сайт компании</a> <br> Режим работы: <div class="timing">ПН-ПТ 10:00-18:00');
            });


            // Zaточка 1
            var L2_zatochka1 = L.polygon([
            [-211.5,-90],[-188,-90],[-188,-68],[-209, -68],
            ], magazinesStyle
            ).bindTooltip('Zаточка№1<img id="icon" src="img/circle.png">', {permanent: true, direction:"center", className: 'tooltipclass'}).openTooltip().on('click', function() {
                sidebar.show()
                sidebar.setContent('<div class="title">Zаточка № 1</div> </div> <div class="under-title">Металлоремонт</div>'  + '<img id="sidebarImage" src="img/zatochka.jpg">'  + '<div class="text">Контакты: <a href="tel:  +79939930915" class="phone-number"> +7 (993) 993-09-15</a> <br> Адрес: ул. Малышева, 53 <br> <a href =" https://zatochka1.ru">Сайт компании</a> <br> Режим работы: <div class="timing">ПН-ПТ 10:00-18:00');
            });


            // Антей ногти
            var L2_antey = L.polygon([
                [-175,-117.9],[-175,-105],[-178,-105],[-178,-78],[-128,-78],[-128,-95],[-117,-95],[-117,-110],[-120, -110],[-120,-115],
            ], magazinesStyle
            ).bindTooltip('<div class=centered-text>Антей ноготочки<img id="icon" src="img/manicure.png">', {permanent: true, direction: "center", className: 'tooltipclass'}).openTooltip().on('click', function(){
                sidebar.show()
                sidebar.setContent('<div class="title">Антей</div> </div> <div class="under-title">Ногтевая студия, парикмахерская, салон красоты</div>'  + '<img id="sidebarImage" src="img/anteynogti.jpg">'  + '<div class="text">Контакты: <a href="tel:+73432131566" class="phone-number">+7 (343) 213-15-66</a> <br> Адрес: ул. Малышева, 53 <br> Режим работы: <div class="timing">ПН-ВС 10:00-20:00');
            });
            
            //aaa66ru
            var L2_aaa66 = L.polygon([
                [-148,-19],[-148,-68],[-128, -68], [-128, -19]
            ], magazinesStyle
            ).bindTooltip('<div class=centered-text>aaa66.ru<img id="icon" src="img/bag.png">', {permanent: true, direction: "center", className: 'tooltipclass'}).openTooltip().on('click', function(){
                sidebar.show()
                sidebar.setContent('<div class="title">Aaa66.ru</div> </div> <div class="under-title">Офис организации</div>' + '<div class="text">Адрес: ул. Малышева, 53');
            });
            
            // Триал спорт
            var L2_trialSport = L.polygon([
                [-125,92],[-125,111],[-60,104.5],[-60,79],[-19,79],[-19,100],[45,94],[45,72],[11,72],[11,-28],[0,-28],[0,-43],[-120,-43],[-120, 92],
            ], magazinesStyle
            ).bindTooltip('Триал-Спорт<img id="icon" src="img/eda.png">', {permanent: true, direction: "center", className: 'tooltipclass'}).openTooltip().on('click', function(){
                sidebar.show()
                sidebar.setContent('<div class="title">Триал-Спорт</div> </div> <div class="under-title">Веломагазин</div>'  + '<img id="sidebarImage" src="img/trialsport.jpg">'  + '<div class="text">Контакты: <a href="tel:+73432698722" class="phone-number">+7 (343) 269-87-22</a> <br> Адрес: ул. Малышева, 53 <br> <a href =" https://trial-sport.ru/">Сайт компании</a> <br> Режим работы: <div class="timing">ПН-СБ: 10:00-21:00<br>ВС: 10:00-20:00');
            });

            // Paul Mitchell
            var L2_paulMitchell = L.polygon([
                [-146, 95],[-160, 91],[-170, 89],[-180, 82],[-190, 74],[-200, 60],[-210, 45],[-215, 30],[-218, 21],[-220, -8],[-198, -10],[-198,2],[-146, 2],[-146, 95]
            ], magazinesStyle
            ).bindTooltip('Paul Mitchell<img id="icon" src="img/circle.png">', {permanent: true, direction:"center", className: 'tooltipclass'}).openTooltip().on('click', function() {
                sidebar.show()
                sidebar.setContent('<div class="title">Paul Mitchell</div> </div> <div class="under-title">Оборудование и материалы для салонов красоты</div>'  + '<img id="sidebarImage" src="img/paulM.jpg">'  + '<div class="text">Контакты: <a href="tel:+79018580228" class="phone-number">+7 (901) 858-02-28</a> <br> Адрес: ул. Малышева, 53 <br> <a href =" https://paulmitchell.ru/">Сайт компании</a> <br> Режим работы: <div class="timing">ПН-ПТ: 11:00 - 18:00');
            });

            // Hairtalk Extensions
            var L2_hairtalkExtensions = L.polygon([
                [-137,37],[-137,82],[-146,82],[-146, 37],
            ], magazinesStyle
            ).bindTooltip('<div class=centered-text>Hairtalk Extensions<img id="icon" src="img/eda.png">', {permanent: true, direction: "center", className: 'tooltipclass'}).openTooltip().on('click', function(){
                sidebar.show()
                sidebar.setContent('<div class="title">Hairtalk Extensions</div> </div> <div class="under-title">Парики, накладные пряди</div>'  + '<img id="sidebarImage" src="img/hairtalk.jpg">'  + '<div class="text">Контакты: <a href="tel:+79120371947" class="phone-number">+7 (912) 037-19-47</a> <br> Адрес: ул. Малышева, 53 <br> Режим работы: <div class="timing">ПН-ВС: 12:00 - 23:00');
            });

            // Т-спорт
            var L2_Tsport = L.polygon([
                [11,72],[28,72],[28,35],[11, 35]
            ], magazinesStyle
            ).bindTooltip('Т-спорт<img id="icon" src="img/eda.png">', {permanent: true, direction: "center", className: 'tooltipclass'}).openTooltip().on('click', function(){
                sidebar.show()
                sidebar.setContent('<div class="title">Т-Спорт</div> </div> <div class="under-title">Спортивный инвентарь и оборудование</div>'  + '<img id="sidebarImage" src="img/tSport.jpg">'  + '<div class="text">Контакты: <a href="tel: +73432890143" class="phone-number"> +7 (343) 289-01-43</a> <br> Адрес: ул. Малышева, 53 <br> <a href ="https://www.t-sport66.ru/">Сайт компании</a> <br> Режим работы: <div class="timing">ПН-СБ: 10:00-21:00<br> ВС: 10:00-20:00');
            });

            // 4-mobile
            var L2_4mobile = L.polygon([
                [45,60],[62,60],[62,87.5],[45,94]
            ], magazinesStyle
            ).bindTooltip('<div class=centered-text>4Mobile<img id="icon" src="img/phone.png">', {permanent: true, direction: "center", className: 'tooltipclass'}).openTooltip().on('click', function(){
                sidebar.show()
                sidebar.setContent('<div class="title">4mobile</div> </div> <div class="under-title">Ремонт телефонов, товары для мобильных телефонов</div>'  + '<img id="sidebarImage" src="img/4mobile.jpg">'  + '<div class="text">Контакты:<br> <a href="tel:+79221816110" class="phone-number">+7 (922) 181-61-10</a> <br> <a href="tel:+79193600735" class="phone-number">+7 (919) 360-07-35</a> <br> Адрес: ул. Малышева, 53<br> <a href ="http://fourmobile.ru/">Сайт компании</a> <br> Режим работы: <div class="timing">ПН-ВС: 12:00 - 23:00');
            });

            // Beauty and Style
            var L2_beautyAndStyle = L.polygon([
                [-179,-19],[-179,-68],[-148,-68],[-148,-19]
            ], magazinesStyle
            ).bindTooltip('<div class=centered-text>Beauty&Style<img id="icon" src="img/lotos.png">', {permanent: true, direction: "center", className: 'tooltipclass'}).openTooltip().on('click', function(){
                sidebar.show()
                sidebar.setContent('<div class="title">Beauty & Style</div> </div> <div class="under-title">Салон красоты</div>'  + '<img id="sidebarImage" src="img/beautyandstyle.jpg">'  + '<div class="text">Адрес: ул. Малышева, 53 <br> Режим работы: <div class="timing">ПН-ВС 10:00-21:00');
            });
            //-----------------------------------------------------------------------------------------------------------------------------------------
		


            //---------------------------------------------------------------- 3 этаж -----------------------------------------------------------------
            
            var L3walls = L.polyline([
                    [[-208, -65],[-181, -65],[-181, -17], [-198, -15]],
                    [[-59,104.5],[-59,76],[-5,76],[-5,99]],
                    [[45,94],[80,76],[126,76],[126,118.3]],
                    [[80,76],[80,50],[126,50],[126,76]],
                    [[126,90],[132,90],[132,117]],
                    [[45,94],[43,38],[130,38],[160,76],[160,100]],
                    [[160,76],[198,76],[198,100]],
                    [[225,-19],[210,-19],[210,-30],[200,-30],[200,-43],[225,-43]],
                    [[200,-43],[197,-43],[197,-58]],
                    [[200,-30],[100,-30],[100,-20],[30,-20],[30,-42],[-101,-42],[-101,-110]],
                    [[-72,-68],[-101,-68]],
                    [[-72,-80],[-101,-80]],
                ], wallStyle
            );


            //границы здания
            var L3footprint = L.polygon([
                [-215,  -120],
                [-120,  -115],
                [-120, -110],
                [-72, -110],
                [-72,-58],
                [225, -58],
                [225, 2],
                [228, 2],
                [228, 100],
                [160, 100],
                [140, 115],
                [120, 120],
                [90, 125],
                [65, 123],
                [50, 119],
                [38, 115],
                [45, 94],
                [-125, 111],
                [-145, 112], //добавить тут крылечко (2 и 3 этажи)
                [-146, 95],
                [-160, 91],
                [-170, 89],
                [-180, 82],
                [-190, 74],
                [-200, 60],
                [-210, 45],
                [-215, 30],
                [-218, 21],
                [-220, -8],
                [-198, -10],
                [-198, -15],
                [-200, -15],
                [-208, -65],
                [-209, -65]
            ],footprintStyle
            // контент на втором этаже
            ).on('click', function (){
                sidebar.show()
                sidebar.setContent('<div class="title">ТЦ "Антей"</div>' + '<img id="sidebarImage" src="img/first_floor.png">'+ '<div class="text">Контакты: <a href="tel: +73433795855" class="phone-number"> +7 (343) 379-58-55</a>'  + '<div class="text"> Адрес: ул. Малышева, 53 <br> <a href ="http://www.tc-antey.ru/">Сайт компании</a> <br> Режим работы: <div class="timing">ПН-ВС:10:00-20:00');
            });

            // Эконом маркет
            var L3_EconomMag = L.polygon([
                [-59,104.5],[-59,76],[-5,76],[-5,99],[45,94],[43,38],[130,38],[160,76],[198,76],[198,100],[228, 100], [228, 2], [225, 2], [225,-19],[210,-19],[210,-30],
                [100,-30],[100,-20],[30,-20],[30,-42],[-101,-42],[-101,-110],[-120, -110],[-120, -115], [-215,  -120], [-209, -65],[-181, -65],[-181, -17], [-198, -15],
                [-198, -10], [-220, -8], [-218, 21], [-215, 30], [-210, 45], [-200, 60], [-190, 74], [-180, 82], [-170, 89], [-160, 91], [-146, 95], [-145, 112], [-125, 111]
            ], magazinesStyle
            ).bindTooltip("<b>Эконом маркет</b><img id='icon' src='img/eda.png'>", {permanent: true, direction: "center", className: 'tooltipclass'}).openTooltip().on('click', function(){
                sidebar.show()
                sidebar.setContent('<div class="title">Экономаркет</div> </div> <div class="under-title">Магазин одежды, Магазин обуви, Автоаксессуары</div>'  + '<img id="sidebarImage" src="img/econom.jpg">'  + '<div class="text"> Адрес: ул. Малышева, 53 <br> <a href =" https://ekaterinburg.econommarkets.ru/catalog/">Сайт компании</a> <br> Режим работы: <div class="timing">Ежедневно с 10:00-21:00');
            });

            var L3_BrownArea1 = L.polygon([
                [-59,104.5],[-59,76],[-5,76],[-5,99]
            ],brownStyle);
            var L3_BrownArea2 = L.polygon([
                [-72,-68],[-101,-68],[-101,-42],[30,-42],[30,-20],[100,-20],[100,-30],[200,-30],[200,-43],[197,-43],[197,-58],[-72,-58]
            ], brownStyle);
            var L3_BrownArea3 = L.polygon([
                [-72, -110],[-72,-80],[-101,-80],[-101, -110]
            ], brownStyle);

            //-----------------------------------------------------------------------------------------------------------------------------------------

            //------------------------------------------------------------- 4 этаж --------------------------------------------------------------------
            
            var L4walls = L.polyline([
                    [[-200,-10],[-140,-10],[-140,25],[-99,52],[-59,52],[-59,104.5]],
                    [[-146,95],[-143,95],[-143,90],[-124,92],[-124,111]],
                    [[-174,-10],[-174,-58],[-207,-58]],
                    [[-174,-58],[-140,-58],[-140,-20],[-174,-20]],
                    [[-174,-58],[-174,-80],[-159,-80],[-159,-89],[-128,-89],[-128,-115.3]],
                    [[-159,-80],[-140,-80],[-140,-67],[-174,-67]], [[-150,-80],[-150,-67]], [[-140,-80],[-140,-89]],
                    [[-128,-98],[-110,-98]],
                    [[-110,-110],[-110,-80],[-72,-80]],
                    [[-72,-58],[-115,-58],[-115,-42],[-2,-42],[-2,-25],[60,-25],[60,-30],[123,-30],[123,-45],[151,-45],[151,-58]],
                    [[-58,75],[-20,75],[-20,100.5]], [[-20,75],[-20,58]],
                    [[-50,75],[-50,58],[68,58],[73,65],[73,85]], [[17,58],[17,97]], [[50,58],[50,92.5]],
                    [[45,94],[85,81],[122,81],[122,119.5]],
                    [[85,81],[85,67],[122,67],[122,81]], [[122,92],[131,92],[131,117]],
                    [[160,100],[160,80],[197,80],[197,100]],
                    [[160,80],[159,80],[159,60],[155,60],[155,55],[160,40],[228,40]],
                    [[194,-58],[194,-40],[225,-40]], [[215,-40],[215,-19],[225,-19]],
                    [[200,-40],[200,-28],[215,-28]], [[207,-28],[207,-17],[211,-11],[217,-11],[217,-19]],
                    [[194,-40],[194,-38],[190,-38],[190,-21],[202,-21],[202,-28]],
                    [[202,-21],[202,0],[200,0],[200,30],[180,30],[180,-12],[190,-12],[190,-21]], [[180,18],[200,18]], [[200,0],[180,0]],
                    [[205,40],[205,35],[210,32],[205,29],[205,0],[211,-5],[222,-5],[225,-2]],
                    [[210,32],[228,32]], [[205,22],[228,22]], [[205,11],[228,11]], [[217,-5],[217,11]],
                    [[180,30],[170,30],[170,20],[180,20]], [[170,25],[131,25]],
                    [[131,25],[131,60],[83,60],[83,40],[-32,40],[-32,20],[127,20],[131,25]],
                    [[118,20],[118,60]], [[50,20],[50,40]], [[15,20],[15,40]], [[2,20],[2,40]], [[-10,20],[-10,40]], [[-20,20],[-20,40]],
                    [[-32,40],[-99,40],[-99,-42]],
                    [[-99,40],[-128,22],[-128,-13],[-99,-13]],
                    [[-99, -58],[-99,-80]]
                ], wallStyle
            );
            var L4footprint = L.polygon([
                [-215,  -120],
                [-120,  -115],
                [-120, -110],
                [-72, -110],
                [-72,-58],
                [225, -58],
                [225, 2],
                [228, 2],
                [228, 100],
                [160, 100],
                [140, 115],
                [120, 120],
                [90, 125],
                [65, 123],
                [50, 119],
                [38, 115],
                [45, 94],
                [-125, 111],
                [-145, 112], //добавить тут крылечко (2 и 3 этажи)
                [-146, 95],
                [-160, 91],
                [-170, 89],
                [-180, 82],
                [-190, 74],
                [-200, 60],
                [-210, 45],
                [-215, 30],
                [-218, 21],
                [-220, -8],
                [-198, -10],
                [-198, -15],
                [-200, -15],
                [-208, -65],
                [-209, -65]
            ],footprintStyle
            // контент на втором этаже
            ).on('click', function (){
                sidebar.show()
                sidebar.setContent('<div class="title">ТЦ "Антей"</div>' + '<img id="sidebarImage" src="img/first_floor.png">'+ '<div class="text">Контакты: <a href="tel: +73433795855" class="phone-number"> +7 (343) 379-58-55</a>'  + '<div class="text"> Адрес: ул. Малышева, 53 <br> <a href ="http://www.tc-antey.ru/">Сайт компании</a> <br> Режим работы: <div class="timing">ПН-ВС:10:00-20:00');
            });

            var L4_BrownArea1 = L.polygon([
                [210,32],[205,29],[205,22],[228,22],[228,32]
            ], brownStyle);
            var L4_BrownArea2 = L.polygon([
                [217,-5],[217,11],[205,11],[205,0],[211,-5],[222,-5]
            ], brownStyle);
            var L4_BrownArea3 = L.polygon([
                [207,-28],[207,-17],[211,-11],[217,-11],[217,-19],[215, -19],[215, -28]
            ], brownStyle);
            var L4_BrownArea4 = L.polygon([
                [194,-38],[190,-38],[190,-21],[202, -21],[202, -28],[200, -28],[200, -40],[194, -40]
            ], brownStyle);
            var L4_BrownArea5 = L.polygon([
                [180,18],[200,18],[200,30],[180, 30]
            ], brownStyle);
            var L4_BrownArea6 = L.polygon([
                [118,20],[118,60],[131,60],[131,25],[127,20]
            ], brownStyle);
            var L4_BrownArea7 = L.polygon([
                [50,40],[50,20],[15,20],[15,40]
            ], brownStyle);
            var L4_BrownArea8 = L.polygon([
                [50,58],[50,92.5],[45,94],[17,97],[17,58],
            ], brownStyle);
            var L4_BrownArea9 = L.polygon([
                [-20,58],[-50,58],[-50,75],[-20, 75]
            ], brownStyle);
            var L4_BrownArea10 = L.polygon([
                [-20, 75],[-20,100.5],[-59,104.5],[-59, 75]
            ], brownStyle);
            var L4_BrownArea11 = L.polygon([
                [-99,40],[-128,22],[-128,-13],[-99,-13]
            ], brownStyle);
            var L4_BrownArea12 = L.polygon([
                [-150,-80],[-150,-67],[-140, -67],[-140,-80]
            ], brownStyle);
            var L4_BrownArea13 = L.polygon([
                [-72, -110],[-110,-110],[-110,-80],[-72,-80]
            ], brownStyle);
            var L4_BrownArea14 = L.polygon([
                [-215,  -120],[-128,-115.3],[-128,-89],[-159,-89],[-159,-80],[-174,-80],[-174,-58],[-207,-58],[-208, -65],[-209, -65]
            ], brownStyle);
            var L4_BrownArea15 = L.polygon([
                [-99, -42],[-2,-42],[-2,-25],[60,-25],[60,-30],[123,-30],[123,-45],[151,-45],[151,-58],[-115,-58],[-115,-42]
            ], brownStyle);
            
            var L4_FitnessArt = L.polygon([
                [194,-58],[194,-38],[190,-38],[190,-21],[190,-12],[180,-12],[180,20],[170,20],[170, 25],[131,25],[127,20],[-32,20],[-32, 40],[-99, 40],[-99, -42],[-2,-42],
                [-2,-25],[60,-25],[60,-30],[123,-30],[123,-45],[151,-45],[151,-58]
            ], magazinesStyle
            ).bindTooltip('<b><div class=centered-text>Fitness<br>Art</b><img id="icon" src="img/gym.png">', {permanent: true, direction: "center", className: 'tooltipclass'}).openTooltip().on('click', function(){
                sidebar.show()
                sidebar.setContent('<div class="title">Fitness Art</div> </div> <div class="under-title">Фитнес-клуб, спортивный, тренажёрный зал</div>'  + '<img id="sidebarImage" src="img/fitnessart.jpg">'  + '<div class="text">Контакты: <a href="tel:+73433616116" class="phone-number">+7 (343) 361-61-16</a> <br> Адрес: ул. Малышева, 53 <br> <a href =" https://fitness-art.ru/">Сайт компании</a> <br> Режим работы: <div class="timing">ПН-ПТ: 07:00 - 23:00<br>СБ-ВС: 08:00-22:00');
            });
            var L4_UralYoga = L.polygon([
                [118,20],[118,60],[83,60],[83,40],[50,40],[50,20]
            ], magazinesStyle
            ).bindTooltip('<div class=centered-text>Уральский<br>центр<br>Айенгар<br>йоги<img id="icon" src="img/gym.png">', {permanent: true, direction: "center", className: 'tooltipclass'}).openTooltip().on('click', function(){
                sidebar.show()
                sidebar.setContent('<div class="title">Уральский центр Айенгар йоги</div> </div> <div class="under-title">Студия йогиспортивный инвентарь и оборудование</div>'  + '<img id="sidebarImage" src="img/joga.jpg">'  + '<div class="text">Контакты: <a href="tel:+79826614041" class="phone-number">+7 (982) 661-40-41</a> <br> Адрес: ул. Малышева, 53 <br> <a href =" http://yoga-ekb.ru/">Сайт компании</a> <br> Режим работы: <div class="timing">ПН-ПТ: 07:00 - 22:00<br>СБ-ВС: 10:00-18:00');
            });
            var L4_KangooJumps = L.polygon([
                [160,80],[159,80],[159,60],[155,60],[155,55],[160,40],[228,40],[228, 100],[197, 100],[197,80]
            ], magazinesStyle
            ).bindTooltip('<div class=centered-text>Kangoo<br>Jumps<img id="icon" src="img/gym.png">', {permanent: true, direction: "center", className: 'tooltipclass'}).openTooltip().on('click', function(){
                sidebar.show()
                sidebar.setContent('<div class="title">Kangoo Jumps</div> </div> <div class="under-title">Фитнес-клуб</div>'  + '<img id="sidebarImage" src="img/kangoo.jpg">'  + '<div class="text">Контакты: <a href="tel:+79965954308" class="phone-number">+7 (996) 595-43-08</a> <br> Адрес: ул. Малышева, 53 <br> <a href =" https://vk.com/kangoojumpsekb">Сайт компании</a> <br> Режим работы: <div class="timing">ПН, СР, ПТ: 20:00 - 21:00<br>ВТ, ЧТ, СБ, ВС: Выходной');
            });
            var L4_NiasCenter1 = L.polygon([
                [-146, 95],[-160, 91],[-170, 89],[-180, 82],[-190, 74],[-200, 60],[-210, 45],[-215, 30],[-218, 21],[-220, -8],[-198, -10],[-140,-10],[-140,25],[-99,52],
                [-59,52],[-59,104.5],[-124, 111],[-124,92],[-143,90],[-143,95],
            ], magazinesStyle
            ).bindTooltip('<div class=centered-text>Ниас-<br>центр<img id="icon" src="img/circle.png">', {permanent: true, direction: "center", className: 'tooltipclass'}).openTooltip().on('click', function(){
                sidebar.show()
                sidebar.setContent('<div class="title">Ниас-центр</div> </div> <div class="under-title">Изыскательские работыпроектная организация</div>'  + '<img id="sidebarImage" src="img/nias.jpg">'  + '<div class="text">Контакты: <a href="tel:+79221003065" class="phone-number">+7 (922) 100-30-65</a> <br> Адрес: ул. Малышева, 53 <br> <a href =" http://www.nias-centre.ru/">Сайт компании</a> <br> Режим работы: <div class="timing">ПН-ПТ: 09:00 - 18:00<br>СБ-ВС: Выходной');
            });
            var L4_NiasCenter2 = L.polygon([
                [-174,-58],[-140,-58],[-140,-20],[-174,-20]
            ], magazinesStyle
            ).bindTooltip('<div class=centered-text>Ниас-<br>центр<img id="icon" src="img/circle.png">', {permanent: true, direction: "center", className: 'tooltipclass'}).openTooltip().on('click', function(){
                sidebar.show()
                sidebar.setContent('<div class="title">Ниас-центр</div> </div> <div class="under-title">Изыскательские работыпроектная организация</div>'  + '<img id="sidebarImage" src="img/nias.jpg">'  + '<div class="text">Контакты: <a href="tel:+79221003065" class="phone-number">+7 (922) 100-30-65</a> <br> Адрес: ул. Малышева, 53 <br> <a href =" http://www.nias-centre.ru/">Сайт компании</a> <br> Режим работы: <div class="timing">ПН-ПТ: 09:00 - 18:00<br>СБ-ВС: Выходной');
            });
            var L4_integro = L.polygon([
                [-128,-98],[-110,-98],[-110,-110],[-120, -110],[-120,  -115],[-128,-115.3]
            ], magazinesStyle
            ).bindTooltip('<div class=centered-text>Integro<img id="icon" src="img/bag.png">', {permanent: true, direction: "center", className: 'tooltipclass'}).openTooltip().on('click', function(){
                sidebar.show()
                sidebar.setContent('<div class="title">Integro</div> </div> <div class="under-title">Бизнес-консалтинг</div>'  + '<img id="sidebarImage" src="img/integro.jpg">'  + '<div class="text">Адрес: ул. Малышева, 53 <br> Режим работы: <div class="timing">ПН-ПТ: 09:00 - 18:00<br>СБ-ВС: Выходной');
            });
            var L4_Kit = L.polygon([
                [-20,100.5],[-20,58],[17,58],[17,97],
            ], magazinesStyle
            ).bindTooltip('<div class=centered-text>Кит<img id="icon" src="img/bag.png">', {permanent: true, direction: "center", className: 'tooltipclass'}).openTooltip().on('click', function(){
                sidebar.show()
                sidebar.setContent('<div class="title">Кит</div> </div> <div class="under-title">Агентство недвижимостиипотечное агентство</div>'  + '<img id="sidebarImage" src="img/kit.jpg">'  + '<div class="text">Контакты: <a href="tel:+79222011770" class="phone-number">+7 (922) 201-17-70</a> <br> Адрес: ул. Малышева, 53 <br> Режим работы: <div class="timing">ПН-ПТ: 10:00 - 18:00<br>СБ-ВС: Выходной');
            });
            var L4_firstWill = L.polygon([
                [-20,20],[-20,40],[-32, 40],[-32, 20]
            ], magazinesStyle
            ).bindTooltip('<div class=centered-text>FirstWill<img id="icon" src="img/lotos.png">', {permanent: true, direction: "center", className: 'tooltipclass'}).openTooltip().on('click', function(){
                sidebar.show()
                sidebar.setContent('<div class="title">Firstwill</div> </div> <div class="under-title">Салон красоты</div>' + '<div class="text">Адрес: ул. Малышева, 53 <br>');
            });
            var L4_Manicure = L.polygon([
                [-20, 20],[-20, 40],[-10, 40],[-10, 20]
            ], magazinesStyle
            ).bindTooltip('<div class=centered-text>Your<br>Manicure<img id="icon" src="img/manicure.png">', {permanent: true, direction: "center", className: 'tooltipclass'}).openTooltip().on('click', function(){
                sidebar.show()
                sidebar.setContent('<div class="title">Your Manicure</div> </div> <div class="under-title">Ногтевая студия</div>'  + '<img id="sidebarImage" src="img/yourmanicure.jpg">'  + '<div class="text">Контакты: <a href="tel:+79827012519" class="phone-number">+7 (982) 701-25-19</a> <br> Адрес: ул. Малышева, 53 <br> <a href =" https://dikidi.net/1040088?p=0.pi">Сайт компании</a> <br> Режим работы: <div class="timing">ПН-СБ: 12:00 - 20:00<br>ВС: Выходной');
            });
            var L4_Evgenia = L.polygon([
                [-10, 40],[-10, 20],[2, 20], [2,40]
            ], magazinesStyle
            ).bindTooltip('<div class=centered-text>Евгения<img id="icon" src="img/tShirt.png">', {permanent: true, direction: "center", className: 'tooltipclass'}).openTooltip().on('click', function(){
                sidebar.show()
                sidebar.setContent('<div class="title">Евгения</div> </div> <div class="under-title">Меховое ателье, ремонт одежды, ателье по пошиву</div>'  + '<img id="sidebarImage" src="img/evgenia.jpg">'  + '<div class="text">Контакты: <a href="tel:+79090079579" class="phone-number">+7 (909) 007-95-79</a> <br> Адрес: ул. Малышева, 53 <br> <a href =" https://wa.me/89090079579">Сайт компании</a> <br> Режим работы: <div class="timing">ВТ-СБ: 10:00 - 19:00<br>ВС-ПН: Выходной');
            });
            var L4_Francesca = L.polygon([
                [2, 20],[2, 40],[15, 40],[15,20]
            ], magazinesStyle
            ).bindTooltip('<div class=centered-text>Francesca<img id="icon" src="img/bag.png">', {permanent: true, direction: "center", className: 'tooltipclass'});
            var L4_VernayaBeauty = L.polygon([
                [50,58],[50,92.5],[73,85],[73,65],[68,58]
            ], magazinesStyle
            ).bindTooltip('<div class=centered-text>Vernaya<br>Beauty<br>Studio<img id="icon" src="img/lotos.png">', {permanent: true, direction: "center", className: 'tooltipclass'}).openTooltip().on('click', function(){
                sidebar.show()
                sidebar.setContent('<div class="title">Vernaya Beauty Studio</div> </div> <div class="under-title">Салон красоты, салон бровей и ресниц</div>'  + '<img id="sidebarImage" src="img/vernaya.jpg">'  + '<div class="text">Контакты: <a href="tel:+79292137181" class="phone-number">+7 (929) 213-71-81</a> <br> Адрес: ул. Малышева, 53 <br> <a href =" https://vk.link/vernaya_beauty_ekb">Сайт компании</a> <br> Режим работы: <div class="timing">ПН-ВС: 10:00 - 21:00');
            });
            var L4_resnicy = L.polygon([
                [210,32],[228,32],[228,40],[205,40],[205,35]
            ], magazinesStyle
            ).bindTooltip('<div class=centered-text>Наращивание<br>ресниц<img id="icon" src="img/lotos.png">', {permanent: true, direction: "center", className: 'tooltipclass'}).openTooltip().on('click', function(){
                sidebar.show()
                sidebar.setContent('<div class="title">Наращивание ресниц</div> </div> <div class="under-title">Салон бровей и ресниц</div>'  + '<img id="sidebarImage" src="img/resnicy.jpg">'  + '<div class="text">Контакты: <a href="tel:+79226022204" class="phone-number">+7 (922) 602-22-04</a> <br> Адрес: ул. Малышева, 53 <br> <a href =" https://dikidi.net/830668">Сайт компании</a> <br> Режим работы: <div class="timing">ПН-ВС: 09:00 - 20:00');
            });
            var L4_LizaSlim = L.polygon([
                [205,22],[228,22],[228,11],[205,11]
            ], magazinesStyle
            ).bindTooltip('<div class=centered-text>Liza. Slim<img id="icon" src="img/lotos.png">', {permanent: true, direction: "center", className: 'tooltipclass'}).openTooltip().on('click', function(){
                sidebar.show()
                sidebar.setContent('<div class="title">Liza. Slim</div> </div> <div class="under-title">Салон красоты</div>' + '<div class="text"> Адрес: ул. Малышева, 53');
            });
            var L4_Zagar = L.polygon([
                [217,-5],[217,11],[228,11],[228,2],[225,2],[225,-2],[222, -5]
            ], magazinesStyle
            ).bindTooltip('<div class=centered-text>Zagar<img id="icon" src="img/lotos.png">', {permanent: true, direction: "center", className: 'tooltipclass'}).openTooltip().on('click', function(){
                sidebar.show()
                sidebar.setContent('<div class="title">Zagar</div> </div> <div class="under-title">Солярий</div>'+ '<div class="text">Адрес: ул. Малышева, 53');
            });
            var L4_Aquanika = L.polygon([
                [200,0],[180,0],[180,18],[200,18]
            ], magazinesStyle
            ).bindTooltip('<div class=centered-text>Aquanika<img id="icon" src="img/lotos.png">', {permanent: true, direction: "center", className: 'tooltipclass'}).openTooltip().on('click', function(){
                sidebar.show()
                sidebar.setContent('<div class="title">Aquanika</div> </div> <div class="under-title">Массажный салон</div>'  + '<img id="sidebarImage" src="img/aquanika.jpg">'  + '<div class="text">Контакты: <a href="tel:+79126593102" class="phone-number">+7 (912) 659-31-02</a> <br> Адрес: ул. Малышева, 53 <br> Режим работы: <div class="timing">ПН-ВС: 08:30 - 21:00');
            });
            var L4_spaKabinet = L.polygon([
                [200, 0],[180,0],[180,-12],[190,-12],[190,-21],[202,-21],[202, 0]
            ], magazinesStyle
            ).bindTooltip('<div class=centered-text>SPA-<br>кабинет<img id="icon" src="img/lotos.png">', {permanent: true, direction: "top", className: 'tooltipclass'}).openTooltip().on('click', function(){
                sidebar.show()
                sidebar.setContent('<div class="title">SPA-кабинет</div> </div> <div class="under-title">Спа-салон</div>' + '<div class="text">Адрес: ул. Малышева, 53');
            });
            var L4_domFitnesa = L.polygon([
                [180,30],[170,30],[170,20],[180,20]
            ], magazinesStyle
            ).bindTooltip('<div class=centered-text>Дом<br>Фитнеса<img id="icon" src="img/apteka.png">', {permanent: true, direction: "center", className: 'tooltipclass'}).openTooltip().on('click', function(){
                sidebar.show()
                sidebar.setContent('<div class="title">Дом фитнеса</div> </div> <div class="under-title">Фитопродукция, БАДы, спортивное питание</div>'  + '<img id="sidebarImage" src="img/aquanika.jpg">'  + '<div class="text">Контакты: <a href="tel:+73433823851" class="phone-number">+7 (343) 382-38-51</a> <br> Адрес: ул. Малышева, 53 <br> <a href =" http://domfitnesa.ru/">Сайт компании</a> <br> Режим работы: <div class="timing">ПН-ПТ: 07:00 - 00:00<br>СБ-ВС: 08:00-22:00');
            });

            //-----------------------------------------------------------------------------------------------------------------------------------------
            //#region --------------------------------------------Группы маркеров----------------------------------------------------------------------
            const L1_cashMachine = L.layerGroup();
            const L1_escapes = L.layerGroup();
            const L1_toilets = L.layerGroup();
            const L1_stairs = L.layerGroup();
            const L1_lifts = L.layerGroup();
            const L2_stairs = L.layerGroup();
            const L2_lifts = L.layerGroup();
            const L2_escapes = L.layerGroup();
            const L3_escapes = L.layerGroup();
            const L3_stairs = L.layerGroup();
            const L3_lifts = L.layerGroup();
            const L4_stairs = L.layerGroup();
            const L4_lifts = L.layerGroup();
            const L4_escapes = L.layerGroup();
            const L4_toilets = L.layerGroup();
            const L_entry = L.layerGroup();
            //#endregion
            //------------------------------------------------------------------------------------------------------------------------------------------
            var L1 = L.layerGroup([L1footprint, L1fixtures, L1walls, L1_Ubrir, L1_flexSport, L1_krasnoeBeloe, L1_perekrestok,
                L1_miniCoffee, L1_SeMua, L1_tabak, L1_apteka, L1_flowersMag, L1_BrownArea1, L1_BrownArea2, L1_BrownArea3,
                L1_BrownArea4, L1_BrownArea5, L1_BrownArea6, L1_BrownArea7, L1_BrownArea8, L1_BrownArea9, L1_BrownArea10,
                L1_bauerKeratin]);

            var L1highlightsBlue = L.layerGroup([ L1_krasnoeBeloe, L1_perekrestok, L1_SeMua, L1_flowersMag]);
            var L1highlightsPurple = L.layerGroup([L1_tabak, L1_bauerKeratin, L1_flexSport, L1_Ubrir]);
            var L1highlightsGreen = L.layerGroup([L1_apteka]);
            var L1highlightsOrange = L.layerGroup([L1_miniCoffee]);
            //var L1highlightsGray = L.layerGroup([L1_GrayArea1]);
            //------------------------------------------------------------------------------------------------------------------------------------------


            //------------------------------------------------------------------------------------------------------------------------------------------
            var L2 = L.layerGroup([L2footprint, L2walls, L2_trialSport, L2_paulMitchell, L2_hairtalkExtensions, L2_Tsport, L2_4mobile,
                L2_beautyAndStyle, L2_aaa66, L2_antey, L2_zatochka1, L2_centrExcpertize, L2_planka, L2_arena, L2_atlantArmor,
                L2_byblos, L2_sunmar, L2_nAndVi, L2_ferrante, L2_rascheshi, L2_normajBaker, L2_vsk, L2_shveynaya, L2_selfClick,
                L2_paintings, L2_BrownArea1, L2_BrownArea2, L2_BrownArea3, L2_BrownArea4, L2_BrownArea5, L2_BrownArea6,
                L2_BrownArea7, L2_BrownArea8, L2_BrownArea9, L2_BrownArea10, L2_BrownArea11, L2_BrownArea12, L2_BrownArea13]);

            var L2highlightsBlue = L.layerGroup([L2_trialSport, L2_hairtalkExtensions, L2_Tsport, L2_planka, L2_arena, L2_atlantArmor, L2_byblos,
                L2_ferrante, L2_normajBaker, L2_shveynaya, L2_paintings]);
            var L2highlightsPurple = L.layerGroup([L2_paulMitchell, L2_4mobile, L2_aaa66, L2_zatochka1, L2_centrExcpertize,L2_sunmar, L2_rascheshi,
                L2_vsk, L2_selfClick]);
            var L2highlightsPink = L.layerGroup([L2_beautyAndStyle, L2_antey, L2_nAndVi]);
            //------------------------------------------------------------------------------------------------------------------------------------------


            //------------------------------------------------------------------------------------------------------------------------------------------
            var L3 = L.layerGroup([L3footprint, L3walls, L3_EconomMag, L3_BrownArea1, L3_BrownArea2, L3_BrownArea3]);
            var L3highlightsBlue = L.layerGroup([L3_EconomMag]);
            
           //------------------------------------------------------------------------------------------------------------------------------------------


           //------------------------------------------------------------------------------------------------------------------------------------------
            var L4 = L.layerGroup([L4footprint, L4walls, L4_FitnessArt, L4_UralYoga, L4_KangooJumps, L4_NiasCenter1, L4_NiasCenter2,
                L4_integro, L4_Kit, L4_Francesca, L4_firstWill, L4_Manicure, L4_Evgenia,L4_VernayaBeauty, L4_resnicy, L4_LizaSlim, L4_Zagar,
                L4_Aquanika, L4_spaKabinet, L4_domFitnesa, L4_BrownArea1, L4_BrownArea2, L4_BrownArea3, L4_BrownArea4, L4_BrownArea5, L4_BrownArea6,
                L4_BrownArea7, L4_BrownArea8, L4_BrownArea9, L4_BrownArea10,L4_BrownArea11, L4_BrownArea12, L4_BrownArea13, L4_BrownArea14, L4_BrownArea15]);
            var L4highlightsPurple = L.layerGroup([L4_FitnessArt, L4_UralYoga, L4_KangooJumps, L4_NiasCenter1, L4_NiasCenter2,
                L4_integro, L4_Kit]);
            var L4highlightsPink = L.layerGroup([L4_firstWill, L4_Manicure, L4_VernayaBeauty, L4_resnicy, L4_LizaSlim, L4_Zagar, L4_Aquanika, L4_spaKabinet]);
            var L4highlightsBlue = L.layerGroup([L4_Evgenia]);
            var L4highlightsGreen = L.layerGroup([L4_domFitnesa]);
            //------------------------------------------------------------------------------------------------------------------------------------------
            var map = L.map('map', {
		        crs: L.CRS.Simple,
		        minZoom: 0,
                maxZoom: 3,
                layers: [L1],
	        });
            

            //этажи
            var baseMaps = {
                "1 этаж" : L1,
                "2 этаж" : L2,
                "3 этаж" : L3,
                "4 этаж" : L4
            }; 

            /*
            //фильтры отображения
            var overlays = {
                'Банкоматы 1 этаж' : L1_cashMachine,
                'Лестницы 1 этаж' : L1_stairs,
                'Туалеты 1 этаж' : L1_toilets,
                'Лифты' : L1_lifts
            };
            */
            
            

            //#region 
            L1highlightsBlue.eachLayer(function(layer) {
                if (layer instanceof L.Polygon) {
                    layer.on('mouseover', function (e) {
                        layer.setStyle(highlightBlue);
            //			layer.bringToFront();
                        });
                    layer.on('mouseout', function (e) {
                        layer.setStyle(magazinesStyle);
            //			layer.bringToBack();
                        });
                }
            });
            L2highlightsBlue.eachLayer(function(layer) {
                if (layer instanceof L.Polygon) {
                    layer.on('mouseover', function (e) {
                        layer.setStyle(highlightBlue);
            //			layer.bringToFront();
                        });
                    layer.on('mouseout', function (e) {
                        layer.setStyle(magazinesStyle);
            //			layer.bringToBack();
                        });
                }
            });
            L4highlightsBlue.eachLayer(function(layer) {
                if (layer instanceof L.Polygon) {
                    layer.on('mouseover', function (e) {
                        layer.setStyle(highlightBlue);
            //			layer.bringToFront();
                        });
                    layer.on('mouseout', function (e) {
                        layer.setStyle(magazinesStyle);
            //			layer.bringToBack();
                        });
                }
            });

            L2highlightsPink.eachLayer(function(layer) {
                if (layer instanceof L.Polygon) {
                    layer.on('mouseover', function (e) {
                        layer.setStyle(highlightPink);
            //			layer.bringToFront();
                        });
                    layer.on('mouseout', function (e) {
                        layer.setStyle(magazinesStyle);
            //			layer.bringToBack();
                        });
                }
            });
            L4highlightsPink.eachLayer(function(layer) {
                if (layer instanceof L.Polygon) {
                    layer.on('mouseover', function (e) {
                        layer.setStyle(highlightPink);
            //			layer.bringToFront();
                        });
                    layer.on('mouseout', function (e) {
                        layer.setStyle(magazinesStyle);
            //			layer.bringToBack();
                        });
                }
            });
            

            L1highlightsGreen.eachLayer(function(layer) {
                if (layer instanceof L.Polygon) {
                    layer.on('mouseover', function (e) {
                        layer.setStyle(highlightGreen);
            //			layer.bringToFront();
                        });
                    layer.on('mouseout', function (e) {
                        layer.setStyle(magazinesStyle);
            //			layer.bringToBack();
                        });
                }
            });
            L4highlightsGreen.eachLayer(function(layer) {
                if (layer instanceof L.Polygon) {
                    layer.on('mouseover', function (e) {
                        layer.setStyle(highlightGreen);
            //			layer.bringToFront();
                        });
                    layer.on('mouseout', function (e) {
                        layer.setStyle(magazinesStyle);
            //			layer.bringToBack();
                        });
                }
            });
            L1highlightsOrange.eachLayer(function(layer) {
                if (layer instanceof L.Polygon) {
                    layer.on('mouseover', function (e) {
                        layer.setStyle(highlightOrange);
            //			layer.bringToFront();
                        });
                    layer.on('mouseout', function (e) {
                        layer.setStyle(fixtureStyle);
            //			layer.bringToBack();
                        });
                }
            });
            L1highlightsPurple.eachLayer(function(layer) {
                if (layer instanceof L.Polygon) {
                    layer.on('mouseover', function (e) {
                        layer.setStyle(highlightPurple);
            //			layer.bringToFront();
                        });
                    layer.on('mouseout', function (e) {
                        layer.setStyle(fixtureStyle);
            //			layer.bringToBack();
                        });
                }
            });
            L2highlightsPurple.eachLayer(function(layer) {
                if (layer instanceof L.Polygon) {
                    layer.on('mouseover', function (e) {
                        layer.setStyle(highlightPurple);
            //			layer.bringToFront();
                        });
                    layer.on('mouseout', function (e) {
                        layer.setStyle(fixtureStyle);
            //			layer.bringToBack();
                        });
                }
            });
            L4highlightsPurple.eachLayer(function(layer) {
                if (layer instanceof L.Polygon) {
                    layer.on('mouseover', function (e) {
                        layer.setStyle(highlightPurple);
            //			layer.bringToFront();
                        });
                    layer.on('mouseout', function (e) {
                        layer.setStyle(fixtureStyle);
            //			layer.bringToBack();
                        });
                }
            });
            

            L3highlightsBlue.eachLayer(function(layer) {
                if (layer instanceof L.Polygon) {
                    layer.on('mouseover', function (e) {
                        layer.setStyle(highlightBlue);
            //			layer.bringToFront();
                        });
                    layer.on('mouseout', function (e) {
                        layer.setStyle(magazinesStyle);
            //			layer.bringToBack();
                        });
                }
            });
            //#endregion
            


            // --------------------------------------------------------МАРКЕРЫ--------------------------------------------------------------
            
            // Иконки
            //#region 
            var iconTinkoff = L.icon({
                iconUrl: "img/tinkoff.svg",
                iconSize: [25, 25], //размер в пикселях
            });
            var iconOtkr = L.icon({
                iconUrl : "img/otkritie.png",
                iconSize: [20, 20],
            });
            var iconUbrir = L.icon({
                iconUrl : "img/ubrirLogo.png",
                iconSize : [20, 20],
            });
            var iconEscape = L.icon({
                iconUrl : "img/escape.png",
                iconSize : [15, 15],
            });
            var iconEntry = L.icon({
                iconUrl : "img/entry.png",
                iconSize : [23, 23]
            });
            var iconStairs = L.icon({
                iconUrl: "img/stair.png",
                iconSize: [15, 15], //размер в пикселях
            });
            var iconEscalators = L.icon({
                iconUrl: "img/escalator.png",
                iconSize: [20, 20],
            });
            var iconEnter = L.icon({
                iconUrl: "img/enter.png",
                iconSize: [15, 15],
            });
            var iconLift = L.icon({
                iconUrl: "img/lift.png",
                iconSize: [15,15],
            });
            var iconToilet = L.icon({
                iconUrl: "img/toilet.png",
                iconSize: [15, 15]
            });
            //#endregion
            
            // Маркеры
            //#region 
            //---------------------------------------------------------1 этаж----------------------------------------------------------
            var tinkoffMark = L.marker([147.5, 100.75], {
                icon: iconTinkoff
            }).addTo(L1_cashMachine).bindPopup("<div class='centered-text'> Банкомат Тинькофф <br> <b> 1 этаж</div>");
            var otkritieMark = L.marker([152.5, 96.5], {
                icon: iconOtkr
            }).addTo(L1_cashMachine).bindPopup("<div class='centered-text'> Банкомат Открытие <br> <b> 1 этаж</div>");
            var ubrirMark = L.marker([-200, -68], {
                icon: iconUbrir
            }).addTo(L1_cashMachine).bindPopup("<div class='centered-text'> Банкомат УБРиР <br> <b> 1 этаж</div>");
            var markExit5 = L.marker([222, -8], {
                icon:iconEscape
            }).addTo(L1_escapes);
            var markExit6 = L.marker([53, -56], {
                icon:iconEscape
            }).addTo(L1_escapes);
            var markExit16 = L.marker([-37, 90], {
                icon:iconEscape
            }).addTo(L1_escapes);
            var markExit17 = L.marker([-65, -49], {
                icon:iconEscape
            }).addTo(L1_escapes);
            var markExit18 = L.marker([-75, -74], {
                icon:iconEscape
            }).addTo(L1_escapes);
            var markStair1 = L.marker([180, 88], {
                icon: iconStairs
            }).addTo(L1_stairs);
            var markStair2 = L.marker([219, -50],{
                icon: iconStairs
            }).addTo(L1_stairs);
            var markStair3 = L.marker([30, 88],{
                icon: iconStairs
            }).addTo(L1_stairs);
            var markStair4 = L.marker([-85, -74],{
                icon: iconStairs
            }).addTo(L1_stairs);
            var markStair5 = L.marker([-190, -40],{
                icon: iconStairs
            }).addTo(L1_stairs);
            var markStair6 = L.marker([62, -50],{
                icon: iconStairs
            }).addTo(L1_stairs);
            var markEscalator1 = L.marker([100, 64.2], {
                icon: iconEscalators
            }).addTo(L1_stairs);
            var markLift1 = L.marker([128, 104], {
                icon: iconLift
            }).addTo(L1_lifts);
            var markLift2 = L.marker([205, -38.5], {
                icon: iconLift
            }).addTo(L1_lifts);
            var markLift3 = L.marker([-127.5, 102.75], {
                icon: iconLift
            }).addTo(L1_lifts);
            var markToilet1 = L.marker([130, -51], {
                icon: iconToilet
            }).addTo(L1_toilets);
            var markEscalator2 = L.marker([100, 76], {
                icon: iconEscalators
            }).addTo(L1_stairs);
            //----------------------------------------------------------2 этаж----------------------------------------------------------------
            var markExit1 = L.marker([-40, 91], {
                icon:iconEscape
            }).addTo(L2_escapes);
            var markExit2 = L.marker([-74, -73], {
                icon:iconEscape
            }).addTo(L2_escapes);
            var markExit3 = L.marker([71, -49], {
                icon:iconEscape
            }).addTo(L2_escapes);
            var markExit4 = L.marker([196, -50], {
                icon:iconEscape
            }).addTo(L2_escapes);
            var markLift4 = L.marker([128, 105], {
                icon:iconLift
            }).addTo(L2_lifts);
            var markLift5 = L.marker([202, -37], {
                icon:iconLift
            }).addTo(L2_lifts);
            var markStair7 = L.marker([180, 90], {
                icon:iconStairs
            }).addTo(L2_stairs);
            var markStair8 = L.marker([209, -51], {
                icon:iconStairs
            }).addTo(L2_stairs);
            var markStair9 = L.marker([-192, -45], {
                icon:iconStairs
            }).addTo(L2_stairs);
            var markStair10 = L.marker([-90, -73.5], {
                icon:iconStairs
            }).addTo(L2_stairs);
            var markEscalator3 = L.marker([121, 65], {
                icon:iconEscalators
            }).addTo(L2_stairs);
            var markEscalator4 = L.marker([76.5, 78.5], {
                icon:iconEscalators
            }).addTo(L2_stairs);


            //------------------------------------------------------3 этаж------------------------------------------------------------------
            var markEscalator5 = L.marker([121, 55], {
                icon:iconEscalators
            }).addTo(L3_stairs);
            var markEscalator6 = L.marker([85, 71], {
                icon:iconEscalators
            }).addTo(L3_stairs);
            var markStair11 = L.marker([214, -51], {
                icon:iconStairs
            }).addTo(L3_stairs);
            var markStair12 = L.marker([180, 88], {
                icon:iconStairs
            }).addTo(L3_stairs);
            var markStair13 = L.marker([-88, -74], {
                icon:iconStairs
            }).addTo(L3_stairs);
            var markStair14 = L.marker([-195, -42], {
                icon:iconStairs
            }).addTo(L3_stairs);
            var markLift6 = L.marker([129, 103], {
                icon:iconLift
            }).addTo(L3_lifts);
            var markLift7 = L.marker([206, -37], {
                icon:iconLift
            }).addTo(L3_lifts);
            var markExit6 = L.marker([201, -51], {
                icon:iconEscape
            }).addTo(L3_escapes);
            var markExit7 = L.marker([100, -54], {
                icon:iconEscape
            }).addTo(L3_escapes);
            var markExit8 = L.marker([-186, -42], {
                icon:iconEscape
            }).addTo(L3_escapes);
            var markExit9 = L.marker([-32, 90], {
                icon:iconEscape
            }).addTo(L3_escapes);

            //------------------------------------------------------4 этаж------------------------------------------------------------------
            var markEscalator7 = L.marker([90, 76], {
                icon:iconEscalators
            }).addTo(L4_stairs);
            var markEscalator8 = L.marker([117.5, 72], {
                icon:iconEscalators
            }).addTo(L4_stairs);
            var markStair15 = L.marker([180, 90], {
                icon:iconStairs
            }).addTo(L4_stairs);
            var markStair16 = L.marker([210, -49], {
                icon:iconStairs
            }).addTo(L4_stairs);
            var markStair17 = L.marker([-85, -69], {
                icon:iconStairs
            }).addTo(L4_stairs);
            var markStair18 = L.marker([-188, -35], {
                icon:iconStairs
            }).addTo(L4_stairs);
            var markExit10 = L.marker([196, -50], {
                icon:iconEscape
            }).addTo(L4_escapes);
            var markExit11 = L.marker([45, -56], {
                icon:iconEscape
            }).addTo(L4_escapes);
            var markExit12 = L.marker([-40, 89], {
                icon:iconEscape
            }).addTo(L4_escapes);
            var markExit13 = L.marker([-55, 76], {
                icon:iconEscape
            }).addTo(L4_escapes);
            var markExit14 = L.marker([-75, -69], {
                icon:iconEscape
            }).addTo(L4_escapes);
            var markExit15 = L.marker([-175, -15], {
                icon:iconEscape
            }).addTo(L4_escapes);
            var markToilet2 = L.marker([-160, -73.5], {
                icon:iconToilet
            }).addTo(L4_toilets);
            var markLift8 = L.marker([126.5, 105], {
                icon:iconLift
            }).addTo(L4_lifts);
            var markLift9 = L.marker([207, -35], {
                icon:iconLift
            }).addTo(L4_lifts);
            
            //-------------------------------------------------------Входы-------------------------------------------------------------------
            var markEntry1 = L.marker([42,106], {
                icon:iconEntry
            }).addTo(L_entry).bindPopup("<div class='centered-text'> Главный вход в здание </div>");
            var markEntry2 = L.marker([-142,110], {
                icon:iconEntry
            }).addTo(L_entry).bindPopup("<div class='centered-text'> Главный вход в здание </div>");
            var markEntry3 = L.marker([-200,-28], {
                icon:iconEntry
            }).addTo(L_entry).bindPopup("<div class='centered-text'> Главный вход в здание </div>");
            //#endregion
            
            //------------------------------------------------------------------------------------------------------------------------------
            
            //var layersControl = L.control.layers(baseMaps, overlays, {collapsed: false}).addTo(map);
            var overlays1 = {
                'Банкоматы 1 этаж' : L1_cashMachine,
                'Лестницы 1 этаж' : L1_stairs,
                'Туалеты 1 этаж' : L1_toilets,
                'Лифты 1 этаж' : L1_lifts,
                'Выходы 1 этаж' : L1_escapes
            }
            var overlays2 = {
                'Лифты 2 этаж' : L2_lifts,
                'Лестницы 2 этаж' : L2_stairs,
                'Выходы 2 этаж' : L2_escapes
            }
            var overlays3 = {
                'Лифты 3 этаж' : L3_lifts,
                'Лестницы 3 этаж' : L3_stairs,
                'Выходы 3 этаж' : L3_escapes
            }
            var overlays4 = {
                'Лифты 4 этаж' : L4_lifts,
                'Лестницы 4 этаж' : L4_stairs,
                'Выходы 4 этаж' : L4_escapes,
                'Туалеты 4 этаж' : L4_toilets
            }

            var layersControl1 = L.control.layers(baseMaps, overlays1, {collapsed: false});
            var layersControl2 = L.control.layers(baseMaps, overlays2, {collapsed: false});
            var layersControl3 = L.control.layers(baseMaps, overlays3, {collapsed: false});
            var layersControl4 = L.control.layers(baseMaps, overlays4, {collapsed: false});
            
            //смена слоев
            map.on('baselayerchange', function(e) {
                sidebar.hide();
                //console.log(e);

                map.removeLayer(L1_cashMachine);
                map.removeLayer(L1_escapes);
                map.removeLayer(L1_toilets);
                map.removeLayer(L1_stairs);
                map.removeLayer(L1_lifts);
                map.removeLayer(L2_lifts);
                map.removeLayer(L2_stairs);
                map.removeLayer(L2_escapes);
                map.removeLayer(L3_stairs);
                map.removeLayer(L3_escapes);
                map.removeLayer(L3_lifts);
                map.removeLayer(L4_stairs);
                map.removeLayer(L4_escapes);
                map.removeLayer(L4_lifts);
                map.removeLayer(L4_toilets);
                
                // Добавление оверлейных слоев для нового базового слоя
                if (e.name === '1 этаж') {
                    L1_cashMachine.addTo(map);
                    L1_toilets.addTo(map);
                    L1_stairs.addTo(map);
                    L1_lifts.addTo(map);
                    L1_escapes.addTo(map);
                    L_entry.addTo(map);
                    
                    layersControl1.remove();
                    layersControl2.remove();
                    layersControl3.remove();
                    layersControl4.remove();
                    layersControl1 = L.control.layers(baseMaps, overlays1, {collapsed: false}).addTo(map);
                } else if (e.name === '2 этаж') {
                    L2_stairs.addTo(map);
                    L2_lifts.addTo(map);
                    L2_escapes.addTo(map);
                    L_entry.addTo(map);
                    
                    layersControl1.remove();
                    layersControl2.remove();
                    layersControl3.remove();
                    layersControl4.remove();
                    layersControl2 = L.control.layers(baseMaps, overlays2, {collapsed: false}).addTo(map);
                } else if (e.name === '3 этаж') {
                    L3_stairs.addTo(map);
                    L3_escapes.addTo(map);
                    L3_lifts.addTo(map);
                    L_entry.addTo(map);

                    layersControl1.remove();
                    layersControl2.remove();
                    layersControl3.remove();
                    layersControl4.remove();
                    layersControl3 = L.control.layers(baseMaps, overlays3, {collapsed: false}).addTo(map);
                } else if (e.name === '4 этаж') {
                    L4_lifts.addTo(map);
                    L4_stairs.addTo(map);
                    L4_toilets.addTo(map);
                    L4_escapes.addTo(map);
                    L_entry.addTo(map);

                    layersControl1.remove();
                    layersControl2.remove();
                    layersControl3.remove();
                    layersControl4.remove();
                    layersControl4 = L.control.layers(baseMaps, overlays4, {collapsed: false}).addTo(map);
                }
                // Обновление контроллера слоев
                
            });


            //--------------ПОМЕНЯТЬ ЭТАЖ ПРИ ВЫБОРЕ СТАРТОВОГО-----------------------------------------------------
            layersControl1.addTo(map)



            var sidebar = L.control.sidebar('sidebar', {
                closeButton: true,
                position: 'left'
            });

            map.addControl(sidebar);
            map.setView([0.25, 9.5], 1);
            map.addControl(new L.Control.Fullscreen());