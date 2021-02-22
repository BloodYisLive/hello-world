$(function(){
    //banner section
    $("#banner-area .owl-carousel").owlCarousel({
        dots: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        margin: 10,
        items: 1,
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        stagePadding: 0,
        itemsMobile : false
        });

    //Hiding navbar swction
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("nav-bar").style.top = "none";
    } else {
      document.getElementById("nav-bar").style.top = "initial";
    }
    prevScrollpos = currentScrollPos;
  }
  //Include File
  function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
      }
    }
  }
});