
//loading page
 (function) (){
   var perload = document.getElementById("preload");
   var loading = 0;
   var id = setlInterval(frame, 64);

   function frame(){
     if(loading == 100){
       clearInterval(id);
       window.open("Home/Portfolio.html","_self");
     }
}
else{
   loading = loading + 1;
   if(loading == 90){
     preload.style.animation ="fadeout 1s ease";
      }
    }
  }
})();
