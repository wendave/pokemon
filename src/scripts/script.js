// preloaded function
var preloader = () => {
  setTimeout(() => {
    document.body.classList.add("body-loaded");
    document.getElementById("preloader").classList.add("preloader-loaded");
  }, 1000);
}

// header function
var headerFunctions = () => {
  function checkScroll() {
    if ($(window).scrollTop() >= 50) {
      $(".header-main").addClass("header-scrolled");
    } else {
      $(".header-main").removeClass("header-scrolled");
    }
  }

  function headerLoaded() {
    window.onload = function () {
      if (document.querySelector("main").classList.contains("page-home")) {
        setTimeout(() => {
          document.getElementById("header_main").classList.add("header-loaded");
        }, 1500);
      }
    }
  }

  $(document).ready( () => {
    checkScroll();
    $(window).scroll(checkScroll);
  });

  headerLoaded();
}

// home page - section hero
var homeHero = () => {
  const sectionHero = document.querySelectorAll("#wrapper_pokeballs");

  if (sectionHero.length) {    
    var sectionPokeball = document.getElementsByClassName("wrapper-pokeballs");
    var heroBackground = document.getElementById('hero_background');
    var pokeball = document.getElementById('wrapper_pokeballs').getElementsByClassName('pokeball');
    var pokeslides = document.querySelector(".swiper-starter").getElementsByClassName('swiper-slide');

    function hoverPokeball() {
      // for (var i = 0; i < pokeball.length; i++) {
      //   pokeball[i].addEventListener("mouseover", function() {
      //     var imageSrc = this.dataset.image;
      //     heroBackground.style.backgroundImage = 'url("'+imageSrc+'")';
      //   }),
      //   pokeball[i].addEventListener("mouseleave", function() {
      //     var defaultBlack = "../assets/images/bg-black.jpg"; 
      //     heroBackground.style.backgroundImage = 'url("'+defaultBlack+'")';
      //   });
      // }

      for (var i = 0; i < pokeball.length; i++) {
        pokeball[i].addEventListener("mouseover", function() {
          var imageSrc = this.dataset.image;
          heroBackground.src = imageSrc;
        }),
        pokeball[i].addEventListener("mouseleave", function() {
          var defaultBlack = "../assets/images/bg-black.jpg"; 
          heroBackground.src = defaultBlack;
        });
      }
    }

    function clickPokeball() {
      // section swiper - add data-slide for each slide
      for (var i = 0; i < pokeslides.length; i++) {
        var pokeSlide = i + 1;
        pokeslides[i].dataset.pokemonSlide = pokeSlide;
      }

      // section hero - add data-number for each item
      for (var i = 0; i < pokeball.length; i++) {
        var pokeNumber = i + 1;
        pokeball[i].dataset.pokemonNumber = pokeNumber;

        pokeball[i].addEventListener("click", function() {
          var selectedNumber = Number(this.dataset.pokemonNumber) + 1;

          $("html, body").animate({
            scrollTop: $(".swiper-starter").offset().top
          }, 1000);

          if ( selectedNumber == 2 ) {
            document.querySelector(".swiper-starter .swiper-pagination-bullet:nth-child(2)").click();
          }
          else if ( selectedNumber == 3 ) {
            document.querySelector(".swiper-starter .swiper-pagination-bullet:nth-child(3)").click();
          }
          else if ( selectedNumber == 4 ) {
            document.querySelector(".swiper-starter .swiper-pagination-bullet:nth-child(4)").click();
          }
          else if ( selectedNumber == 5 ) {
            document.querySelector(".swiper-starter .swiper-pagination-bullet:nth-child(5)").click();
          }
        });
      }
    }

    // test time
    setTimeout(() => {
      document.getElementById("home_hero_pokeball_image").classList.remove("zoom");
    }, 100);
    setTimeout(() => {
      document.getElementById("home_hero_pokeball_image").classList.add("opacity-0");
    }, 300);
    setTimeout(() => {
      document.getElementById("typing_text").parentElement.classList.remove("opacity-0");
      document.getElementById("typing_text").parentElement.classList.add("opacity-100");
    }, 700);
    setTimeout(() => {
      document.getElementById("typing_text").parentElement.classList.remove("opacity-100");
      document.getElementById("typing_text").parentElement.classList.add("opacity-0");
    }, 800);
    
    if (sectionPokeball.length) {
      setTimeout(() => {
        document.getElementById("wrapper_pokeballs").classList.add("show-element");
      }, 1000);

      hoverPokeball();
      clickPokeball();
    }

    // real time
    // setTimeout(() => {
    //   document.getElementById("home_hero_pokeball_image").classList.remove("zoom");
    // }, 1300);
    // setTimeout(() => {
    //   document.getElementById("home_hero_pokeball_image").classList.add("opacity-0");
    // }, 3500);
    // setTimeout(() => {
    //   document.getElementById("typing_text").parentElement.classList.remove("opacity-0");
    //   document.getElementById("typing_text").parentElement.classList.add("opacity-100");
    // }, 4000);
    // setTimeout(() => {
    //   document.getElementById("typing_text").parentElement.classList.remove("opacity-100");
    //   document.getElementById("typing_text").parentElement.classList.add("opacity-0");
    // }, 9000);
    
    // if (sectionPokeball.length) {
    //   setTimeout(() => {
    //     document.getElementById("wrapper_pokeballs").classList.add("show-element");
    //   }, 9200);

    //   hoverPokeball();
    //   clickPokeball();
    // }
  }
}

// swipers
var swipers = () => {
  const sectionSwiperStarter = document.querySelectorAll(".swiper-starter");

  if (sectionSwiperStarter.length) {
    var pokemonStarter = new Swiper('.swiper-starter .swiper-container', {
      touchRatio: 0,
      pagination: {
        el: '.swiper-starter .swiper-pagination',
        clickable: true,
      },
    });
  }
}

// home page - section gameboy
var gameboy = () => {
  const sectionGameboy = document.querySelectorAll(".gameboy");

}


// initialize the functions
preloader();
headerFunctions();
homeHero();
swipers();
gameboy();