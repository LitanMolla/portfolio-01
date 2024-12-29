$(function(){


    var skills = {
        ht: 90,
        cs: 80,
        js: 60,
        rc: 50,
        jq: 60
      };
      
      $.each(skills, function(key, value) {
        var skillbar = $("." + key);
      
        skillbar.animate(
          {
            width: value + "%"
          },
          3000,
          function() {
            $(".speech-bubble").fadeIn();
          }
        );
      }); 


      
    $('.testimonialsSlik').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<i class="fa-solid fa-chevron-left prev"></i>',
        nextArrow: '<i class="fa-solid fa-angle-right next"></i>',
        dots:true,
      });


       //  Stykey Header  
  $(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    
    if(scrolling > 200){
        $('.navbar').addClass('sticky_name');
    }
    else {
         $('.navbar').removeClass('sticky_name');
    }
    });  
          

})