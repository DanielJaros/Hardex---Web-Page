/*$("li").click(function() {
    $("li").css("background-color", "");
    $(this).css("background-color", "red")
});
*/
$(document).on('click', 'ul li', function() {
    $(this).addClass('active')
})

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