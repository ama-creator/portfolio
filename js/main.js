$(function(){
    
        // preloader 
          $(window).on('load', function () {
              let $preloader = $('#p_prldr'),
                  $svg = $preloader.find('.svg');
              $preloader.delay(1200).fadeOut('slow');
            });      
  
});