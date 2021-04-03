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
      // if (document.querySelector("main").classList.contains("page-home")) {
      //   setTimeout(() => {
      //     document.getElementById("header_main").classList.add("header-loaded");
      //   }, 1500);
      // }
      setTimeout(() => {
        document.getElementById("header_main").classList.add("header-loaded");
      }, 1500);
    }
  }

  function scrollOnPageLoad() {
    if ($(".page-home").length) {
      window.scrollTo(0, 0);
    }
  }

  $(document).ready( () => {
    checkScroll();
    $(window).scroll(checkScroll);
  });

  $(window).on("load", function() {
    setTimeout(() => {
      scrollOnPageLoad();
    }, 300);
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
      effect: 'fade',
      autoHeight: true,
      pagination: {
        el: '.swiper-starter .swiper-pagination',
        clickable: true,
      },
    });
  }
}

// home page - section legendary
var holoGradient = () => {
  const sectionLegendary = document.querySelectorAll(".legendary");

  if (sectionLegendary.length) {
    var cardCounter = 1;
    // automatically add class .pokemon-card-[number] and class .pokemon-style-[number]
    $('.legendary .item').each(function(){
      $(this).find(".pokemon-card").addClass('pokemon-card-'+cardCounter);
      $(this).find(".pokemon-style").addClass('pokemon-style-'+cardCounter);
      cardCounter++;
    });

    // holo effect for .pokemon-card-1
    $(".pokemon-card-1").on("mousemove", function(e) {
      var left = e.offsetX;
      var top = e.offsetY;
      var height = $(".pokemon-card-1").height();
      var width = $(".pokemon-card-1").width();
      var leftPosition = Math.abs(Math.floor(100 / width * left)-100);
      var topPosition = Math.abs(Math.floor(100 / height * top)-100);
      var backgroundPosition = `background-position: ${leftPosition}% ${topPosition}%;`
      var style = `.pokemon-card-1.active:before { ${backgroundPosition} }`
      $(".pokemon-card-1").removeClass("active");
      $(".pokemon-card-1").addClass("active");
      $(".pokemon-style-1").html(style);
    }).on("mouseout", function() {
      $(".pokemon-card-1").removeClass("active");
    });
    // holo effect for .pokemon-card-2
    $(".pokemon-card-2").on("mousemove", function(e) {
      var left = e.offsetX;
      var top = e.offsetY;
      var height = $(".pokemon-card-2").height();
      var width = $(".pokemon-card-2").width();
      var leftPosition = Math.abs(Math.floor(100 / width * left)-100);
      var topPosition = Math.abs(Math.floor(100 / height * top)-100);
      var backgroundPosition = `background-position: ${leftPosition}% ${topPosition}%;`
      var style = `.pokemon-card-2.active:before { ${backgroundPosition} }`
      $(".pokemon-card-2").removeClass("active");
      $(".pokemon-card-2").addClass("active");
      $(".pokemon-style-2").html(style);
    }).on("mouseout", function() {
      $(".pokemon-card-2").removeClass("active");
    });
    // holo effect for .pokemon-card-3
    $(".pokemon-card-3").on("mousemove", function(e) {
      var left = e.offsetX;
      var top = e.offsetY;
      var height = $(".pokemon-card-3").height();
      var width = $(".pokemon-card-3").width();
      var leftPosition = Math.abs(Math.floor(100 / width * left)-100);
      var topPosition = Math.abs(Math.floor(100 / height * top)-100);
      var backgroundPosition = `background-position: ${leftPosition}% ${topPosition}%;`
      var style = `.pokemon-card-3.active:before { ${backgroundPosition} }`
      $(".pokemon-card-3").removeClass("active");
      $(".pokemon-card-3").addClass("active");
      $(".pokemon-style-3").html(style);
    }).on("mouseout", function() {
      $(".pokemon-card-3").removeClass("active");
    });
    // holo effect for .pokemon-card-4
    $(".pokemon-card-4").on("mousemove", function(e) {
      var left = e.offsetX;
      var top = e.offsetY;
      var height = $(".pokemon-card-4").height();
      var width = $(".pokemon-card-4").width();
      var leftPosition = Math.abs(Math.floor(100 / width * left)-100);
      var topPosition = Math.abs(Math.floor(100 / height * top)-100);
      var backgroundPosition = `background-position: ${leftPosition}% ${topPosition}%;`
      var style = `.pokemon-card-4.active:before { ${backgroundPosition} }`
      $(".pokemon-card-4").removeClass("active");
      $(".pokemon-card-4").addClass("active");
      $(".pokemon-style-4").html(style);
    }).on("mouseout", function() {
      $(".pokemon-card-4").removeClass("active");
    });

    // $(".legendary .items .item").each(function() {
    //   var $pokemonCard = $(this).find(".pokemon-card");
    //   var $pokemonStyle = $(this).find(".pokemon-style");
    //   $pokemonCard.on("mousemove", function(e) {
    //     var $pokemonCard = $(this);
    //     var left = e.offsetX;
    //     var top = e.offsetY;
    //     var height = $pokemonCard.height();
    //     var width = $pokemonCard.width();
    //     var leftPosition = Math.abs(Math.floor(100 / width * left)-100);
    //     var topPosition = Math.abs(Math.floor(100 / height * top)-100);
    //     var backgroundPosition = `background-position: ${leftPosition}% ${topPosition}%;`
    //     var style = `.pokemon-card.active:before { ${backgroundPosition} }`
    //     $pokemonCard.removeClass("active");
    //     $pokemonCard.addClass("active");
    //     $pokemonStyle.html(style);
    //   }).on("mouseout", function() {
    //     $pokemonCard.removeClass("active");
    //   });
    // });
  }
}


// initialize the functions
preloader();
headerFunctions();
homeHero();
swipers();
holoGradient();