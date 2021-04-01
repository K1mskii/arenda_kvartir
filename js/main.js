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
const menuLinks = document.querySelectorAll('.menu__link[data-goto], .footer__link[data-goto]');
if(menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header, footer').offsetHeight;

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
// Magic line
document.addEventListener('DOMContentLoaded', () => {
	const navLine = document.querySelector('.menu__line'),
				navItem = document.querySelectorAll('.menu__item');

	navLine.style.width = `${navItem[0].offsetWidth}px`;

	navItem.forEach(el => {
		el.addEventListener('mouseenter', (e) => {
			navLine.style.width = `${e.currentTarget.offsetWidth}px`;
			navLine.style.left = `${e.currentTarget.offsetLeft}px`;
		});

		el.addEventListener('mouseleave', () => {
			navLine.style.width = `${navItem[0].offsetWidth}px`;
			navLine.style.left = `0px`;
		});
	});
});


$(function () {
    AOS.init({
        disable: 'phone'
    });
});

    

// Input mask
$(function(){
	$("#hero_phone").mask("+7 (999) 999-99-99");
});


$(document).ready(function() {
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
});


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

(function() {
	let btns = document.querySelectorAll("*[data-modal-btn]");
  
	for (let i = 0; i < btns.length; i++) {
	  btns[i].addEventListener('click', function() {
		let name = btns[i].getAttribute('data-modal-btn');
		let modal = document.querySelector("[data-modal-window='"+name+"']");
		modal.style.display = "block";
		let close = modal.querySelector(".modal__close");
		close.addEventListener('click', function() {
		  modal.style.display = "none";
		})
	  })
	}
  
	window.onclick = function (e) {
	  if(e.target.hasAttribute('data-modal-window')) {
		let modals = document.querySelectorAll("*[data-modal-window]");
		for (let i = 0; i < modals.length; i++) {
		  modals[i].style.display = "none";
		}
	  }
	}
})();

// Counter
let count = 0;
window.addEventListener('scroll', function() {
    const counters = document.querySelectorAll('.counter');
    let countY = window.scrollY;

    let countOffset = document.querySelector(".about").offsetTop;
    
    if ((countY >= countOffset - 500) && (count == 0)) {
        counters.forEach(counter => {
            // start with 0 by default
            counter.innerText = '0';
            
            const updateCounter = () => {
                const target = +counter.getAttribute('data-target');
                const c = +counter.innerText;
                
                // get the 0.1% to speed up things
                const increment = target / 500;
                
                if(c < target) {
                    counter.innerText = `${Math.ceil(c + increment)}`;
                    setTimeout(updateCounter, 1)
                } else {
                    counter.innerText = target;
                }
            };
            
            updateCounter();
        });
        count = 1;
    }
})


document.addEventListener('DOMContentLoaded', () => {

	let mySwiper = new Swiper('.slider-block', {
		slidesPerView: 1,
	})

	const maxItems = 5;
	const sliderNavItems = document.querySelectorAll('.slider-nav__item');
	const sliderNav = document.querySelector('.slider-nav');

	sliderNavItems.forEach((el, index) => {
		el.setAttribute('data-index', index);

		el.addEventListener('click', (e) => {
			const index = parseInt(e.currentTarget.dataset.index);
			mySwiper.slideTo(index);
		});
	});
});