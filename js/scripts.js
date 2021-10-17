var selector, elems, makeActive;

selector = '.navbar li a';

elems = document.querySelectorAll(selector);

makeActive = function() {
    for (var i = 0; i < elems.length; i++)
        elems[i].classList.remove('navbar__active');

    this.classList.add('navbar__active');
};

for (var i = 0; i < elems.length; i++)
    elems[i].addEventListener('mousedown', makeActive);

// let scrollpos = window.scrollY
// const header = document.querySelector("navbar")
// const header_height = header.offsetHeight

// const add_class_on_scroll = () => header.classList.add("navbar__active")
// const remove_class_on_scroll = () => header.classList.remove("navbar__active")

// window.addEventListener('scroll', function() {
//     scrollpos = window.scrollY;

//     if (scrollpos >= header_height) { add_class_on_scroll() } else { remove_class_on_scroll() }

//     console.log(scrollpos)
// })


// Menu Sections Js
function breakfast() {

    document.getElementById("breakfast").classList.add('active');
    document.getElementById("lunch").classList.remove('active');
    document.getElementById("dinner").classList.remove('active');
    document.getElementById("main-dish").classList.remove('active');

    document.getElementById("breakfast_link").classList.add('active');
    document.getElementById("lunch_link").classList.remove('active');
    document.getElementById("dinner_link").classList.remove('active');
    document.getElementById("main-dish_link").classList.remove('active');
}

function lunch() {

    document.getElementById("breakfast").classList.remove('active');
    document.getElementById("lunch").classList.add('active');
    document.getElementById("dinner").classList.remove('active');
    document.getElementById("main-dish").classList.remove('active');

    document.getElementById("breakfast_link").classList.remove('active');
    document.getElementById("lunch_link").classList.add('active');
    document.getElementById("dinner_link").classList.remove('active');
    document.getElementById("main-dish_link").classList.remove('active');
}

function dinner() {
    document.getElementById("breakfast").classList.remove('active');
    document.getElementById("lunch").classList.remove('active');
    document.getElementById("dinner").classList.add('active');
    document.getElementById("main-dish").classList.remove('active');

    document.getElementById("breakfast_link").classList.remove('active');
    document.getElementById("lunch_link").classList.remove('active');
    document.getElementById("dinner_link").classList.add('active');
    document.getElementById("main-dish_link").classList.remove('active');
}

function main_dish() {
    document.getElementById("breakfast").classList.remove('active');
    document.getElementById("lunch").classList.remove('active');
    document.getElementById("dinner").classList.remove('active');
    document.getElementById("main-dish").classList.add('active');

    document.getElementById("breakfast_link").classList.remove('active');
    document.getElementById("lunch_link").classList.remove('active');
    document.getElementById("dinner_link").classList.remove('active');
    document.getElementById("main-dish_link").classList.add('active');
}