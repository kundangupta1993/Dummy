/*var divHeight = $('.othersection').height();
$(window).on('scroll', function() {
    var scroll = $(window).scrollTop();
    if(divHeight < scroll + 100){
        $('.right-section-new').css('opacity', '1');
        $('.right-section-new').addClass('scale-img');
    }else{
        $('.right-section-new').removeClass('scale-img');
    }
});*/

TweenMax.set('.box1,.box2,.box3,.box4,.box5,.box6,.box7,.box8,.box9,.box10,.box11,.box12,.box13,.box14,.box15,.box16,.box17,.box18,.box19,.box20,.box21,.box22,.box23,.box24,.box25,.box26,.box27,.box28,.box29,.box30,.box31,.box32', {autoAlpha:0, y:-200})
TweenMax.set('.serviceTxt, .service_heading1, .servie_para, .servButton', {autoAlpha:0, x:200})
TweenMax.set('.casestudy-section .heading, .casestudy-section .details, .casestudy-section .csButton', {autoAlpha:0, x:200})
//TweenMax.set('.right-section-new .box1, .right-section-new .box2, .right-section-new .box3, .right-section-new .box4', {autoAlpha:0, y:-500})

function section(){
  var t1 = new TimelineMax();
t1.to('.serviceTxt', 0.3, {autoAlpha:1, x:0},"same")
.to('.service_heading1, .servie_para', 0.3, {autoAlpha:1, x:0},"same")
.to('.servButton', 0.3, {autoAlpha:1, x:0},"same")
  .to('.box29', 0.2, {delay:0.1, autoAlpha:1, y:0},"same")
  .to('.box28', 0.2, {delay:0.2, autoAlpha:1, y:0},"same")
  .to('.box27', 0.2, {delay:0.3, autoAlpha:1, y:0},"same")
  .to('.box26', 0.2, {delay:0.4, autoAlpha:1, y:0},"same")
  .to('.box25', 0.2, {delay:0.5, autoAlpha:1, y:0},"same")
  .to('.box24', 0.2, {delay:0.6, autoAlpha:1, y:0},"same")
  .to('.box23', 0.2, {delay:0.7, autoAlpha:1, y:0},"same")
  .to('.box22', 0.2, {delay:0.8, autoAlpha:1, y:0},"same")
  .to('.box21', 0.2, {delay:0.9, autoAlpha:1, y:0},"same")
  .to('.box20', 0.2, {delay:1, autoAlpha:1, y:0},"same")
  .to('.box19', 0.2, {delay:1.1, autoAlpha:1, y:0},"same")
  .to('.box18', 0.2, {delay:1.2, autoAlpha:1, y:0},"same")
  .to('.box17', 0.2, {delay:1.3, autoAlpha:1, y:0},"same")
  .to('.box16', 0.2, {delay:1.4, autoAlpha:1, y:0},"same")
  .to('.box15', 0.2, {delay:1.5, autoAlpha:1, y:0},"same")
  .to('.box14', 0.2, {delay:1.6, autoAlpha:1, y:0},"same")
  .to('.box13', 0.2, {delay:1.7, autoAlpha:1, y:0},"same")
  .to('.box12', 0.2, {delay:1.8, autoAlpha:1, y:0},"same")
  .to('.box11', 0.2, {delay:1.9, autoAlpha:1, y:0},"same")
  .to('.box10', 0.2, {delay:2, autoAlpha:1, y:0},"same")
  .to('.box9', 0.2, {delay:2.1, autoAlpha:1, y:0},"same")
  .to('.box8', 0.2, {delay:2.2, autoAlpha:1, y:0},"same")
  .to('.box7', 0.2, {delay:2.3, autoAlpha:1, y:0},"same")
  .to('.box6', 0.2, {delay:2.4, autoAlpha:1, y:0},"same")
  .to('.box5', 0.2, {delay:2.5, autoAlpha:1, y:0},"same")
  .to('.box4', 0.2, {delay:2.6, autoAlpha:1, y:0},"same")
  .to('.box3', 0.2, {delay:2.7, autoAlpha:1, y:0},"same")
  .to('.box2', 0.2, {delay:2.8, autoAlpha:1, y:0},"same")
  .to('.box1', 0.2, {delay:2.9, autoAlpha:1, y:0},"same")
  
}


function caseStudy(){
  var t3 = new TimelineMax();
  t3.to('.casestudy-section .heading', 1, {autoAlpha:1, x:0})
    .to('.casestudy-section .details', 1, {autoAlpha:1, x:0}, '-=0.5')
    .to('.casestudy-section .csButton', 1, {autoAlpha:1, x:0}, '-=0.5')
    /*.to('.right-section-new .box4', 0.5, { autoAlpha:1, y:0})
    .to('.right-section-new .box3', 0.5, { autoAlpha:1, y:0})
    .to('.right-section-new .box2', 0.5, {autoAlpha:1, y:0})
    .to('.right-section-new .box1', 0.5, {autoAlpha:1, y:0});*/
}


TweenMax.set('#hexagon1, #hexagon2, #hexagon3, #hexagon4, #hexagon5, #hexagon6, #hexagon7, #hexagon8, #hexagon9, #hexagon10, #hexagon11, #hexagon12, #hexagon13, #hexagon14, #hexagon15, #hexagon16', {autoAlpha:0, x:500});

TweenMax.set('.heading, .aboutDesc, .abtBtn',  {autoAlpha:0, x:-100});
function aboutus(){
  var t2 = new TimelineMax();
      t2.to('.heading', 1, {autoAlpha:1, x: 0})
        .to('.aboutDesc', 1, {autoAlpha:1, x: 0}, '-=0.5')
        .to('.abtBtn', 1, {autoAlpha:1, x: 0}, '-=0.5')
        .to('#hexagon14', 0.5, {autoAlpha:1, x: 0}, '-=0.3')
        .to('#hexagon13', 0.5, {autoAlpha:1, x: 0}, '-=0.3')
        .to('#hexagon8', 0.5, {autoAlpha:1, x: 0}, '-=0.3')
        .to('#hexagon9', 0.5, {autoAlpha:1, x: 0}, '-=0.3')
        .to('#hexagon5', 0.5, {autoAlpha:1, x: 0}, '-=0.3')
        .to('#hexagon10', 0.5, {autoAlpha:1, x: 0}, '-=0.3')
        .to('#hexagon12', 0.5, {autoAlpha:1, x: 0}, '-=0.3')
        .to('#hexagon6', 0.5, {autoAlpha:1, x: 0}, '-=0.3')
        .to('#hexagon7', 0.5, {autoAlpha:1, x: 0}, '-=0.3')
        .to('#hexagon11', 0.5, {autoAlpha:1, x: 0}, '-=0.3')
        .to('#hexagon16', 0.5, {autoAlpha:1, x: 0}, '-=0.3')
        .to('#hexagon1', 0.5, {autoAlpha:1, x: 0}, '-=0.3')
        .to('#hexagon2', 0.5, {autoAlpha:1, x: 0}, '-=0.3')
        .to('#hexagon3', 0.5, {autoAlpha:1, x: 0}, '-=0.3')
        .to('#hexagon4', 0.5, {autoAlpha:1, x: 0}, '-=0.3')
        .to('#hexagon15', 0.5, {autoAlpha:1, x: 0},'-=0.3');

}


$(window).scroll(function(e) {
  // console.log('document.body.getBoundingClientRect().top ' + document.body.getBoundingClientRect().top);
  if(document.body.getBoundingClientRect().top <= '-900' && document.body.getBoundingClientRect().top >= '-1599'){
    // console.log('1200 ', document.body.getBoundingClientRect().top)
    section();
  }else if(document.body.getBoundingClientRect().top <= '-2200' && document.body.getBoundingClientRect().top >= '-2299'){
    caseStudy();
  }
  else if((document.body.getBoundingClientRect().top) <= '-2300'){
    aboutus();
  }
});
/* tiles*/
/* tiles */



$("#button").click(function() {
  $('html, body').animate({
      scrollTop: $("#myDiv").offset().top
  }, 2000);
});