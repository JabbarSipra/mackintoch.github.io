
// slider data
$('.nft-slider').slick({
     infinite: true,
     slidesToShow: 5,
     slidesToScroll: 3,
     arrows: false,
     autoplay: true,
     autoplaySpeed: 2000,
     dots: false,
     responsive: [
          {
            breakpoint: 1124,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
   });

  //  navbar function

  let menu = document.querySelector(".fa-bars");
  let links = document.querySelector(".navbar .right");

  menu.onclick = ()=> {
    menu.classList.toggle('fa-times');
    links.classList.toggle('active');
  }
  links.onclick = ()=> {
    menu.classList.remove('fa-times');
    links.classList.remove('active');
  }