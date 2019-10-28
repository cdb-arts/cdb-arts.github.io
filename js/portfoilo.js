
//nav menu//
function myFunction() {
    var x = document.getElementById("myTopnav, sidenav");
    if (x.className === "topnav, sidenav") {
        x.className += " responsive";
    } else {
        x.className = "topnav, sidenav";
    }
}


// When the user scrolls down 50px from the top of the document, show the button//



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 1000) {
        document.getElementById("myBtn").style.display = "block";
    }
    else {
        document.getElementById("myBtn").style.display = "none";
    }
}



// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {

    mainNav.classList.toggle('active');
});
