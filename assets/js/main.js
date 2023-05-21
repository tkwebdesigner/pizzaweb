// Scrollbar navbar 
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function (){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");
    }
}

// nav hide  
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})

// Change menuicon on Click
let changeIcon = function(icon){
    if(icon){
        icon.classList.toggle("fa-times")
    }
    else{
        icon.classList.remove("fa-times")
    }
}

// Using arrow function
// changeIcon = (icon) => icon.classList.toggle("fa-times");

var btn = $('#btnUp');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

// Lazy Load Function
$(function() {
  $('.lazy').lazy();
});