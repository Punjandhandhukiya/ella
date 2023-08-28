


$(document).ready(function(){
    
$('#slider1').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:5
        }
    }
});


$('#slider2').owlCarousel({
    loop:true,
    margin:5,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },

        1000:{
            items:5
        }
    }
})




 $('#proimg').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

$('#freqslider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

$('#relatedpro').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

$('#single_slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    autoplay:2000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:1
        }
    }
})
})


function black(){
    document.getElementById('img').src="img/black.webp";
    document.getElementById('.color_img').src="img/product.webp";
 }
 
 
 function blue(){
     document.getElementById('img').src="img/blue.webp";
  }
 
  function gre(){
     document.getElementById('img').src="img/product.webp";
  }
 
  function orange(){
     document.getElementById('img').src="img/orange.webp";
  }

  function plus(s){
    var txt=document.getElementById('box');
    if (s == '+') {
        txt.value++;
    }

    if (s == '-') {
        if (txt.value > 1) {
            
            txt.value--;
        }
    }
    
  }
 

  $(document).ready(function(){

    // $("#gree").click(function(){
    //     $("#gree").addclass(".outline");
    // });
    
    $(window).scroll(function(){
        var sticky = $('.sticky'),
            scroll = $(window).scrollTop();
      
        if (scroll >= 100) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
      });

      $('.bottom_top').click(function(){
        $('html, body').animate({
          scrollTop: '0px'
        },500);
        return false;
    })
  
    $('.bottom_top').hide();
    $(window).scroll(function(){
        if ($(window).scrollTop() > 100) {
        $('.bottom_top').fadeIn();
        }
        else{
        $('.bottom_top').fadeOut();
        }
    })

  });

  

  setTimeout(() => {
    $('.preloder').fadeOut();
  }, 3000);
