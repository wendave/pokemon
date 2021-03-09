// preloaded function
var preloader = () => {
  document.body.classList.add("body-loaded");
  setTimeout(() => {
    document.getElementById("preloader").classList.add("preloader-loaded");
  }, 1000);
}

// header function
var headerScrolled = () => {
  function checkScroll() {
    if ($(window).scrollTop() >= 50) {
      $(".header-main").addClass("header-scrolled");
    } else {
      $(".header-main").removeClass("header-scrolled");
    }
  }
  
  $(document).ready(function() {
    checkScroll();
    $(window).scroll(checkScroll);
  });
}

// initialize the functions
preloader();
headerScrolled();