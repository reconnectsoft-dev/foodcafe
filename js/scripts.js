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

//  Add class on Scroll Navbar

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
        section.scrollIntoView({
            behavior: "smooth",
        });

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

// Loading Preloader
function onload_function() {
    document.getElementById('preloader_foodcafe').style.display = "none";
}

// Datepicker JS

$(function() {
    $("#datepicker-13").datepicker();
});

function Datepicker() {
    this._curInst = null; // The current instance in use
    this._keyEvent = false; // If the last event was a key event
    this._disabledInputs = []; // List of date picker inputs that have been disabled
    this._datepickerShowing = false; // True if the popup picker is showing , false if not
    this._inDialog = false; // True if showing within a "dialog", false if not
    this._mainDivId = "ui-datepicker-div"; // The ID of the main datepicker division
    this._inlineClass = "ui-datepicker-inline"; // The name of the inline marker class
    this._appendClass = "ui-datepicker-append"; // The name of the append marker class
    this._triggerClass = "ui-datepicker-trigger"; // The name of the trigger marker class
    this._dialogClass = "ui-datepicker-dialog"; // The name of the dialog marker class
    this._disableClass = "ui-datepicker-disabled"; // The name of the disabled covering marker class
    this._unselectableClass = "ui-datepicker-unselectable"; // The name of the unselectable cell marker class
    this._currentClass = "ui-datepicker-current-day"; // The name of the current day marker class
    this._dayOverClass = "ui-datepicker-days-cell-over"; // The name of the day hover marker class
    this.regional = []; // Available regional settings, indexed by language code
    this.regional[""] = { // Default regional settings
        closeText: "Done", // Display text for close link
        prevText: "Prev", // Display text for previous month link
        nextText: "Next", // Display text for next month link
        currentText: "Today", // Display text for current month link
        monthNames: ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ], // Names of months for drop-down and formatting
        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], // For formatting
        dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], // For formatting
        dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], // For formatting
        dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], // Column headings for days starting at Sunday
        weekHeader: "Wk", // Column header for week of the year
        dateFormat: "mm/dd/yy", // See format options on parseDate
        firstDay: 0, // The first day of the week, Sun = 0, Mon = 1, ...
        isRTL: false, // True if right-to-left language, false if left-to-right
        showMonthAfterYear: false, // True if the year select precedes month, false for month then year
        yearSuffix: "" // Additional text to append to the year in the month headers
    };
    this._defaults = { // Global defaults for all the date picker instances
        showOn: "focus", // "focus" for popup on focus,
        // "button" for trigger button, or "both" for either
        showAnim: "fadeIn", // Name of jQuery animation for popup
        showOptions: {}, // Options for enhanced animations
        defaultDate: null, // Used when field is blank: actual date,
        // +/-number for offset from today, null for today
        appendText: "", // Display text following the input box, e.g. showing the format
        buttonText: "...", // Text for trigger button
        buttonImage: "", // URL for trigger button image
        buttonImageOnly: false, // True if the image appears alone, false if it appears on a button
        hideIfNoPrevNext: false, // True to hide next/previous month links
        // if not applicable, false to just disable them
        navigationAsDateFormat: false, // True if date formatting applied to prev/today/next links
        gotoCurrent: false, // True if today link goes back to current selection instead
        changeMonth: false, // True if month can be selected directly, false if only prev/next
        changeYear: false, // True if year can be selected directly, false if only prev/next
        yearRange: "c-10:c+10", // Range of years to display in drop-down,
        // either relative to today's year (-nn:+nn), relative to currently displayed year
        // (c-nn:c+nn), absolute (nnnn:nnnn), or a combination of the above (nnnn:-n)
        showOtherMonths: false, // True to show dates in other months, false to leave blank
        selectOtherMonths: false, // True to allow selection of dates in other months, false for unselectable
        showWeek: false, // True to show week of the year, false to not show it
        calculateWeek: this.iso8601Week, // How to calculate the week of the year,
        // takes a Date and returns the number of the week for it
        shortYearCutoff: "+10", // Short year values < this are in the current century,
        // > this are in the previous century,
        // string value starting with "+" for current year + value
        minDate: null, // The earliest selectable date, or null for no limit
        maxDate: null, // The latest selectable date, or null for no limit
        duration: "fast", // Duration of display/closure
        beforeShowDay: null, // Function that takes a date and returns an array with
        // [0] = true if selectable, false if not, [1] = custom CSS class name(s) or "",
        // [2] = cell title (optional), e.g. $.datepicker.noWeekends
        beforeShow: null, // Function that takes an input field and
        // returns a set of custom settings for the date picker
        onSelect: null, // Define a callback function when a date is selected
        onChangeMonthYear: null, // Define a callback function when the month or year is changed
        onClose: null, // Define a callback function when the datepicker is closed
        numberOfMonths: 1, // Number of months to show at a time
        showCurrentAtPos: 0, // The position in multipe months at which to show the current month (starting at 0)
        stepMonths: 1, // Number of months to step back/forward
        stepBigMonths: 12, // Number of months to step back/forward for the big links
        altField: "", // Selector for an alternate field to store selected dates into
        altFormat: "", // The date format to use for the alternate field
        constrainInput: true, // The input is constrained by the current date format
        showButtonPanel: false, // True to show button panel, false to not show it
        autoSize: false, // True to size the input for the date format, false to leave as is
        disabled: false // The initial disabled state
    };
}