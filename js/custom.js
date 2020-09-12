$(function(){
  'use strict'

  //Sticky Menu js
  $(window).scroll(function(){
    var scrolling = $(this).scrollTop();
     
     if(scrolling > 50){
         $(".nav-bg").addClass("menu-bg");
     }
     else{
         $(".nav-bg").removeClass("menu-bg");
     }
     if(scrolling > 100){
         back2top.fadeIn(500);
     }
     else{
         back2top.fadeOut(500);
     }
 });

  

 // Closes responsive menu when a scroll link is clicked
 $('.nav-link').on('click', function () {
  $('.navbar-collapse').collapse('hide');
 });


  // Back to top js
  var back2top = $(".back-to-top");
  var html_body = $('html,body');
  back2top.click(function(){
    html_body.animate({scrollTop:0},1000);
  });




});