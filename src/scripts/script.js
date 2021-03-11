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

// home page - hero section
var homeHero = () => {
  setTimeout(() => {
    document.getElementById("home_hero_pokeball_image").classList.remove("zoom");
  }, 1300);
  setTimeout(() => {
    document.getElementById("home_hero_pokeball_image").classList.add("opacity-0");
  }, 3500);
  setTimeout(() => {
    document.getElementById("typing_text").parentElement.classList.remove("opacity-0");
    document.getElementById("typing_text").parentElement.classList.add("opacity-100");
  }, 4000);
  setTimeout(() => {
    document.getElementById("typing_text").parentElement.classList.remove("opacity-100");
    document.getElementById("typing_text").parentElement.classList.add("opacity-0");
  }, 9000);

  var sectionPokeball = document.getElementsByClassName("wrapper-pokeballs");

  if (sectionPokeball.length) {
    setTimeout(() => {
      document.getElementById("wrapper_pokeballs").classList.add("show-element");
    }, 9200);
  }

  function hoverPokeball() {
    var heroBackground = document.getElementById('hero_background');
    var pokeball = document.getElementById('wrapper_pokeballs').getElementsByClassName('pokeball');
    for (var i = 0; i < pokeball.length; i++) {
      pokeball[i].addEventListener("mouseover", function() {
        var imageSrc = this.dataset.image;
        heroBackground.style.backgroundImage = 'url("'+imageSrc+'")';
        // console.log(this);
      }),
      pokeball[i].addEventListener("mouseleave", function() {
        var defaultBlack = "../assets/images/bg-black.jpg"; 
        heroBackground.style.backgroundImage = 'url("'+defaultBlack+'")';
      });
    }
  }

  function clickPokeball() {
    // $(".swiper-pagination-clickable .swiper-pagination-bullet:nth-child(3)").click();
  }

  hoverPokeball();
}

// swipers
var swipers = () => {
  var pokemonStarter = new Swiper('.swiper-starter .swiper-container', {
    touchRatio: 0,
    pagination: {
      el: '.swiper-starter .swiper-pagination',
      clickable: true,
      // renderBullet: function (index, className) {
      //   return '<span class="' + className + '">' + (index + 1) + '</span>';
      // },
    },
  });
}


// initialize the functions
preloader();
headerFunctions();
homeHero();
swipers();