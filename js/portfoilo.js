
//nav menu//
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


// When the user scrolls down 20px from the top of the document, show the button//
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    }
    else {
        document.getElementById("myBtn").style.display = "none";
    }
}


// When the user clicks on the button, scroll to the top of the document//
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//For the email button that appears and disappear //
 window.onscroll = function() {scrollFunction()};
 function scrollFunction(){
 if (document.body.scrollTop > 5 || document.documentElementscrollTop> 5){
   document.getElementById("contactMe").style.display="block";
}
else {
  document.getElementById("contactMe").style.display="none";
}
 }
