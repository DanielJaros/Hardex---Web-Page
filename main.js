/*$("li").click(function() {
    $("li").css("background-color", "");
    $(this).css("background-color", "red")
});
*/

/*$(document).on('click', 'ul li', function() {
    $(this).addClass('active')
})
*/
console.log('siema');
const name = 'Daniel Jaros';
const age = 35;

console.log(`${name}
${age}`);
console.log(`Nazywam się ${name} i mam ${age} lat`);

// DOM document.querySelector();

const header = document.querySelector('.main__header');
console.log(header);

const paragraphs = document.querySelectorAll('p');
console.log(paragraphs);

const whereHeader = document.querySelector('.section__header');
console.log(header.innerHTML);

// podmienianie tekstu na stronie NIEDZIAŁA!!!!!!!!!!!!!!!!!!

/* 
const a = document.querySelector('.main__header__paragraph');
a.innerHTML = 'Działa';
*/

// Change background color of active link nav bar


// Hamburger menu click listener

$(document).ready(function() {
    $('.hamburgerMenu--toggle').click(function() {
        $('nav').toggleClass('menu__navigation__bar__active')
        $('.hamburgerMenu--bars').toggleClass('active')

    })
    $('.in-products-btn').click(function() {
        $('nav ul li .menu__subMenu__in__conteiner').toggleClass('menu__subMenu__in__conteiner__active')

    })
    $('.out-products-btn').click(function() {
        $('nav ul li .menu__subMenu__out__conteiner').toggleClass('menu__subMenu__out__conteiner__active')

    })
    $('.liberon-products-btn').click(function() {
        $('nav ul li .menu__subMenu__liberon').toggleClass('menu__subMenu__liberon__active')

    })
});


//Remove href from product buttons when mobile menu is on

function checkPosition() {
    if (x.matches) {
        $('nav ul li .in-products-btn').removeAttr("href")
        $('nav ul li .out-products-btn').removeAttr("href")
        $('nav ul li .liberon-products-btn').removeAttr("href")
        $('.in-products-btn').click(function() {

            $('nav ul .fa-caret-down-in').toggleClass('rotate')
        })
        $('.out-products-btn').click(function() {

            $('nav ul .out').toggleClass('rotate')
        })
        $('.liberon-products-btn').click(function() {

            $('nav ul .liberon').toggleClass('rotate')
        })


    } else if (window.matchMedia('(min-width:866px)').matches) {
        $('nav ul li .in-products-btn').attr('href', 'produkty-do-wewnatrz')
        $('nav ul li .out-products-btn').attr('href', 'produkty-na-zewnatrz')
        $('nav ul li .liberon-products-btn').attr('href', 'liberon')

        // Addin active class to menu element of active page
        $('nav ul li').click(function() {
            $(this).addClass("active").siblings().removeClass("active");
        })
    }
}
var x = window.matchMedia('(max-width:865px)')
checkPosition()
x.addListener(checkPosition)

/*Arrow UP display after scroll down */


$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 40) {
            $('#topBtn').fadeIn();
        } else {
            $('#topBtn').fadeOut();
        }
    });
    $("#topBtn").click(function() {
        $('html, body').animate({ scrollTop: 0 }, 400);
    });
});

// Load nav-bar.html file to every pages

$(function() {
    $("#conteiner-nav").load("http://localhost/Hardex-website/nav-bar.html");
});

// Closing hamburgerMenu when click out of menu__navigationBar DIV !!!NIEDOKOŃCZONE!!!!
/*
$(document).on("click", function(e) {
    if (
        $(e.target).closest('nav').length == 0 &&
        $(".menu__navigation__bar__active")
    )
});  */