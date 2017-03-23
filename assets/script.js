 jQuery(document).ready(function($) {

    $(".scroll a, .navbar-brand, .gototop").click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 600,'swing');
    $(".scroll li").removeClass('active');
    $(this).parents('li').toggleClass('active');
    });
    });






var wow = new WOW(
  {
    boxClass:     'wowload',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true        // act on asynchronously loaded content (default is true)
  }
);
wow.init();




$('.carousel').swipe( {
     swipeLeft: function() {
         $(this).carousel('next');
     },
     swipeRight: function() {
         $(this).carousel('prev');
     },
     allowPageScroll: 'vertical'
 });


 (function() {

   'use strict';

   // define variables
   var items = document.querySelectorAll(".timeline li");

   // check if an element is in viewport
   // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
   function isElementInViewport(el) {
     var rect = el.getBoundingClientRect();
     return (
       rect.top >= 0 &&
       rect.left >= 0 &&
       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
     );
   }

   function callbackFunc() {
     for (var i = 0; i < items.length; i++) {
       if (isElementInViewport(items[i])) {
         items[i].classList.add("in-view");
       }
     }
   }

   // listen for events
   window.addEventListener("load", callbackFunc);
   window.addEventListener("resize", callbackFunc);
   window.addEventListener("scroll", callbackFunc);

 })();
