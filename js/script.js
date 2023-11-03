$(function(){
  // Quando o documento está pronto (DOM pronto)...

  // Quando um elemento <li> com classe "toggle" dentro de uma lista <ul> com classe "navigation" é clicado.
  $('ul.navigation li.toggle').bind("click", function(){
    // Altera a classe do elemento clicado para "bg-blue" e remove a classe "bg-blue" de seus irmãos.
    $(this).toggleClass("bg-blue");
    $(this).siblings().removeClass("bg-blue");
    
    // Abre (slide down) o elemento com classe "content" dentro do elemento clicado.
    $(this).find(".content").slideDown('fast');    

    // Verifica se algum elemento <li> com classe "toggle" tem a classe "bg-blue".
    if ($('ul.navigation li.toggle').hasClass("bg-blue")) {
      // Se houver elementos com classe "bg-blue", fecha (slide up) os elementos "content" que não estão sendo clicados.
      $("ul.navigation li.toggle").not(this).find(".content").slideUp('fast');
    } else {
      // Se nenhum elemento tem a classe "bg-blue", fecha todos os elementos "content".
      $("ul.navigation li.toggle").find(".content").slideUp('fast');
    }  
  });
});
