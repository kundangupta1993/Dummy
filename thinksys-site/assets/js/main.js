var windowWidth = $(window).width();
jQuery(document).ready(function ($) {
  TweenMax.set('.rightCircleOne,.leftCircleTwo,.rightCircleThree,.leftCircleFour,.rightCircleFive' ,{ height:'0%'})
  TweenMax.set('.leftSectionOne ul,.leftSectionTwo ul,.leftSectionThree ul,.leftSectionFour ul,.leftSectionFive ul',{autoAlpha:0})


  $(".accordionTabList li").hover(
    function(){
      $(this).find(".collapsed").fadeOut(0);
      }, 
    function(){
      $(this).find(".collapsed").fadeIn(1000);
    });

  var icon = $(".mobile-menu-icon");
  var menu = $(".mobile-slider");
  var tl = new TimelineLite({
    paused: true,
    reversed: true
  });
  tl.fromTo(
    ".mobile-slider",
    0.3, {
      x: 200,
      autoAlpha: 0
    }, {
      x: 0,
      autoAlpha: 1,
      ease: Power4.easeOut
    }
  );
  tl.to(
    ".filter",
    0.3, {
      autoAlpha: 1
    },
    0
  );
  icon.click(function () {
    tl.play();
  });
  $(".close-menu").click(function () {
    tl.reverse();
  });
  // Also close slider when clicking outside of the menu
  $(".filter").click(function () {
    tl.reverse();
  });

  $(".all-jobs").click(function () {
     $('.collapse').addClass('show');
    $('.all-jobs').hide();
  });

  $.fn.jQuerySimpleCounter = function( options ) {
    var settings = $.extend({
        start:  0,
        end:    100,
        easing: 'swing',
        duration: 400,
        complete: ''
    }, options );

    var thisElement = $(this);

    $({count: settings.start}).animate({count: settings.end}, {
    duration: settings.duration,
    easing: settings.easing,
    step: function() {
      var mathCount = Math.ceil(this.count);
      thisElement.text(mathCount);
    },
    complete: settings.complete
  });
};

  $(".hover-trigger").click(function () {

    $(this).siblings(".content-box").toggleClass("full-cont");;
    $(this).toggleClass("iconRed");

  });
});


function startAnimation(){
  
    // process animation
    var t2 = new TimelineMax();
   
     t2.to('.rightCircleOne',1,{height:'100%',onComplete:function(){
        TweenMax.to('.leftCircleOne',0.1,{className:'+=firstBorderClass'})
        TweenMax.to('.leftSectionOne ul h3',0.2,{color:'#fe9b2c'},'same')
        TweenMax.to('.leftSectionOne ul',0.7,{autoAlpha:1},'same')
     }})
       .to('.leftCircleTwo',1,{height:'100%',onComplete:function(){
        TweenMax.to('.leftCircleTwo',0.1,{className:'+=secondBorderClass'})
        TweenMax.to('.leftSectionTwo h3',0.2,{color:'#29a9b8'},'same1')
        TweenMax.to('.leftSectionTwo ul',0.7,{autoAlpha:1},'same1')
     }})
     .to('.rightCircleThree',1,{height:'100%',onComplete:function(){
        TweenMax.to('.leftCircleThree',0.1,{className:'+=thirdBorderClass'})
        TweenMax.to('.leftSectionThree h3',0.2,{color:'#426e9b'},'same2')
        TweenMax.to('.leftSectionThree ul',0.7,{autoAlpha:1},'same2')
     }})
     .to('.leftCircleFour',1,{height:'100%',onComplete:function(){
        TweenMax.to('.leftCircleFour',0.1,{className:'+=fourthBorderClass'})
        TweenMax.to('.leftSectionFour h3',0.2,{color:'#9bb95e'},'same3')
        TweenMax.to('.leftSectionFour ul',0.7,{autoAlpha:1},'same3')
     }})
     .to('.rightCircleFive',1,{height:'100%',onComplete:function(){
        TweenMax.to('.leftCircleFive',0.1,{className:'+=fivethBorderClass'})
        TweenMax.to('.leftSectionFive h3',0.2,{color:'#ee7234'},'same4')
        TweenMax.to('.leftSectionFive ul',0.7,{autoAlpha:1},'same4')
     }})
}
var flag =true;
window.onscroll = function () {
  myFunction();
  
  var topScroll = $(window).scrollTop();
  // console.log('$(window).scrollTop() ', topScroll);
  if (topScroll >= 1800){
    startAnimation();
    // console.log(flag);
    if(flag){
    // $('#number1').jQuerySimpleCounter({end: 200,duration: 3000});
    //  $('#number2').jQuerySimpleCounter({end: 500,duration: 2500});
    //   $('#number3').jQuerySimpleCounter({end: 10,duration: 3000});
    //   setTimeout(function(){
      //   flag=false;
      // },3000)
  }
     
  }
};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


/*var t1 = new TimelineMax();
    TweenMax.set('.servicesMenu',{autoAlpha:0,display:'none', x:1500});
    $(".serviceTxt").hover(function(){
        t1.to('.servicesMenu',0.5,{x:0, autoAlpha:1, display:'block',})
    },
    function(){
    t1.to('.servicesMenu',0.5,{x:1500, autoAlpha:0, display:'none',})
    }
);*/

/*  header js  */
$(".mobile-menu-icon").on("click", function () {
  $("body").addClass("hoverflow_H");
  $('.mobile-slider, .filter').show();
})
$(".closeBtn, .filter").on("click", function () {
  $("body").removeClass("hoverflow_H");
})


$('.backIcon').click(function (e) {
  e.stopPropagation();
  $('.submenu').hide();
});
/*  end of header js  */

$(document).on('click', '.banner-arrow', function (event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 1000);

});