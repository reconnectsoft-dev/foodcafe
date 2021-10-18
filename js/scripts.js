// Change Color on Click
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

//  Add class on Scroll

var sections = document.querySelectorAll("section");

onscroll = function() {
    var scrollPosition = document.documentElement.scrollTop;

    sections.forEach((section) => {
        if (
            scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
            scrollPosition <
            section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25
        ) {
            var currentId = section.attributes.id.value;
            removeAllActiveClasses();
            addActiveClass(currentId);
        }
    });
};

var removeAllActiveClasses = function() {
    document.querySelectorAll("navbar li a").forEach((el) => {
        el.classList.remove("navbar__active");
    });
};

var addActiveClass = function(id) {
    // console.log(id);
    var selector = `navbar li a[href="#${id}"]`;
    document.querySelector(selector).classList.add("navbar__active");
};

var navLinks = document.querySelectorAll("navbar li a");

navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        var currentId = e.target.attributes.href.value;
        var section = document.querySelector(currentId);
        var sectionPos = section.offsetTop;
        // section.scrollIntoView({
        //   behavior: "smooth",
        // });

        window.scroll({
            top: sectionPos,
            behavior: "smooth",
        });
    });
});


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