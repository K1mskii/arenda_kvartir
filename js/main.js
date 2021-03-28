// burger menu
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__nav');
if(iconMenu) {
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}

// Прокрутка при клике
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if(menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            // Закрытие меню при клике X
            if(iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}


// Input mask
$(function(){
	$("#hero_phone").mask("+7 (999) 999-99-99");
});

let flag = 0;
window.addEventListener('scroll', function() {
    let scrollY = window.scrollY;

    let mapOffset = document.querySelector("#map").offsetTop;
    
    if ((scrollY >= mapOffset - 500) && (flag == 0)) {
        ymaps.ready(init);
        var myMap,
        myPlacemark1,
        myPlacemark2;
        function init(){
            // Создание карты.
                myMap = new ymaps.Map("map", {
                center: [59.40725602805697,56.806888306671105],
                zoom: 14
            });

            myPin = new ymaps.GeoObjectCollection({}, {
                iconLayout: 'default#image',
                iconImageHref: 'img/mapMark.png',
                iconImageSize: [50, 50],
                iconImageOffset: [-30, -50]
            });

            myMap.controls
                .remove('trafficControl')
                .remove('geolocationConrol')
                .remove('searchControl')
                .remove('typeSelector');

            myMap.behaviors.disable([
            'drag'
            ]);

            myPlacemark1 = new ymaps.Placemark([59.4071661874045,56.800613352996315], {
            balloonContentHeader: 'Филиал №1',
            balloonContent: 'ул. Пятилетки 29'
            });
            myPlacemark2 = new ymaps.Placemark([59.41217615091655,56.8095826599421], {
            balloonContentHeader: 'Филиал №2',
            balloonContent: 'ул. Карла Маркса 2'
            });
            myPin.add(myPlacemark1).add(myPlacemark2);
            myMap.geoObjects.add(myPin);
        };
        flag = 1;
    }
})

// Slick slider
$(function () {
	$("#slider").slick({
        infinite: true,
        loop: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
        dots: true,
        prevArrow: $(".prev-arrow"),
        nextArrow: $(".next-arrow"),
        responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            },
        },
        ],
    });
});

$(document).ready(function() {
    const myLazyLoad = new LazyLoad({
        elements_selector: ".lazy"
    });
});