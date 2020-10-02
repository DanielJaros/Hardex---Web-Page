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
/*
const header = document.querySelector('.main__header');
console.log(header);

const paragraphs = document.querySelectorAll('p');
console.log(paragraphs);

const whereHeader = document.querySelector('.section__header');
console.log(header.innerHTML);
*/
// podmienianie tekstu na stronie NIEDZIAŁA!!!!!!!!!!!!!!!!!!

/* 
const a = document.querySelector('.main__header__paragraph');
a.innerHTML = 'Działa';
*/

// Load nav-bar.html file to every pages

/*$(function() {
    $("#conteiner-nav").load("http://localhost/Hardex-website/nav-bar.html");
});
*/



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
        $('#in-products-btn').removeAttr("href")
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
        $('nav ul li .in-products-btn').attr('href', 'http://localhost/Hardex-website/produkty-do-wewnatrz')
        $('nav ul li .out-products-btn').attr('href', 'http://localhost/Hardex-website/produkty-na-zewnatrz')
        $('nav ul li .liberon-products-btn').attr('href', 'http://localhost/Hardex-website/liberon')

        // Add active class to menu element of active page

    }
}
var x = window.matchMedia('(max-width:865px)');
checkPosition()
x.addListener(checkPosition);

/* Add active class to menu element of active menu page */
$(function() {
    setMenuLinkActive();
});

var firstChildBreadcrumbHref = $('.breadcrumb').find('a:first').attr('href');


function setMenuLinkActive() {
    var ElementIsHrefEqualToLocal = [];

    ElementIsHrefEqualToLocal = $('.menu li a').filter(function() {
        return this.href === location.href
    });

    if (typeof ElementIsHrefEqualToLocal != "undefined" && ElementIsHrefEqualToLocal != null && ElementIsHrefEqualToLocal.length != null && ElementIsHrefEqualToLocal.length > 0) {
        $('.menu li a').filter(function() {
            return this.href === location.href;
        }).closest('.menu__item').addClass('active');

    } else {

        $('.menu li a').filter(function() {
            return this.href === firstChildBreadcrumbHref;
        }).closest('.menu__item').addClass('active');

    }

}

/* Add active class to menu element of active sub__menu page */
$(function() {
    setSubMenuLinkActive();
    setLabelWrapperActive(); //Function to set active description of last SubMenu Link
});

var lastChildBreadcrumbHref = $('.breadcrumb').find('a:last').attr('href');

function setSubMenuLinkActive() {
    var SubMenuElementIsHrefEqualToLocal = [];

    SubMenuElementIsHrefEqualToLocal = $('.menu__subMenu li a').filter(function() {
        return this.href === location.href;
    });

    if (typeof SubMenuElementIsHrefEqualToLocal != "undefined" && SubMenuElementIsHrefEqualToLocal != null && SubMenuElementIsHrefEqualToLocal.length != null && SubMenuElementIsHrefEqualToLocal.length > 0) {

        $('.menu__subMenu li a').filter(function() {
            return this.href === location.href;
        }).addClass('menu__subMenu__productsList__link--active');
    } else {

        $('.menu__subMenu li a').filter(function() {
            return this.href === lastChildBreadcrumbHref;
        }).addClass('menu__subMenu__productsList__link--active');

    }
}

function setLabelWrapperActive() {
    $('.menu__subMenu li a').filter(function() {
        return this.href === location.href;
    }).children().addClass('menu__subMenu__productsList__link--active');
};

/* Add at active Product page active class to menu and submenu element which contei this product  

$(function() {
    setMenuLinkActiveAtProductPage();
    setSubMenuLinkActiveAtProductPage();
});

var firstChildBreadcrumbHref = $('.breadcrumb').find('a:first').attr('href');
var lastChildBreadcrumbHref = $('.breadcrumb').find('a:last').attr('href');
console.log(firstChildBreadcrumbHref);

function setMenuLinkActiveAtProductPage() {
    $('.menu li a').each(function() {
        if (this.href !== location.href) {
            $('.menu li a').filter(function() {
                return this.href === firstChildBreadcrumbHref;
            }).closest('.menu__item').addClass('active');
        }
    });
    console.log($('.menu li a'));
}

function setSubMenuLinkActiveAtProductPage() {
    $('.menu li a').each(function() {
        if (this.href !== location.href) {
            $('.menu__subMenu li a').filter(function() {
                return this.href === lastChildBreadcrumbHref;
            }).addClass('menu__subMenu__productsList__link--active');
        }
    });
}
*/

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


// Closing hamburgerMenu when click out of menu__navigationBar DIV !!!NIEDOKOŃCZONE!!!!
/*
$(document).on("click", function(e) {
    if (
        $(e.target).closest('nav').length == 0 &&
        $(".menu__navigation__bar__active")
    )
});  
*/