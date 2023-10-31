$(document).ready(function(){
    $('.header-burger').click(function(event) {
      $('.header-burger, .header_menu').toggleClass('active');
    });
  });

/*let headerBurger = document.querySelector('.header-burger');
headerBurger.addEventListener('click', () => {
    headerBurger.classList.add('active')
});*/


function showResultWindow() {
    setTimeout(function () {
        $('.header_menu.active').slideDown('slow');
    }, 1500);
}
  

$(".carousel-inner").slick({
    arrows: false,
    dots: true,
    responsive: [
        {
            breakpoint: 2048,
            settings: "unslick",
        },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
});
  
$(".carousel-inner-genres").slick({
    arrows: false,
    dots: true,
    responsive: [
        {
            breakpoint: 2048,
            settings: "unslick",
        },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });