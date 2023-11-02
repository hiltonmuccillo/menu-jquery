$(function(){
  $('ul.navigation li.toggle').bind("click", function(){
    $(this).toggleClass("bg-blue");
    $(this).siblings().removeClass("bg-blue");
    $(this).find(".content").slideDown('fast');    
    if ($('ul.navigation li.toggle').hasClass("bg-blue")) {
      $("ul.navigation li.toggle").not(this).find(".content").slideUp('fast');
    } else {
      $("ul.navigation li.toggle").find(".content").slideUp('fast')
    }  
  });
});
  