"use strict";

$(document).ready(function() {
	
	// var x=0;
	// x++;
	var mainurl = window.location.origin;
	var articleurl = mainurl.concat("/knowledge-centre-article-1");
	$.get(articleurl, function(html){
		var mainbanner1 = $(html).find('#article_banner_featured_img_1 img').attr('src');
		var headingtxt1 = $(html).find('#knowledge-centre-artical-box-1 h1').text();
		var paragraphtxt1 = $(html).find('#knowledge-centre-artical-box-1 p').text();
		$("#knowledge-centre-article-1 h4").text(headingtxt1);
		$("#knowledge-centre-article-1 .article-para").text(paragraphtxt1);
		$("#article_img_1 img").attr('src' , mainbanner1);
	});
	var articleur2 = mainurl.concat("/knowledge-centre-article-2");
	$.get(articleur2, function(html){
		var mainbanner2 = $(html).find('#article_banner_featured_img_2 img').attr('src');
		var headingtxt2 = $(html).find('#knowledge-centre-artical-box-2 h1').text();
		var paragraphtxt2 = $(html).find('#knowledge-centre-artical-box-2 p').text();
		$("#knowledge-centre-article-2 h4").text(headingtxt2);
		$("#knowledge-centre-article-2 .article-para").text(paragraphtxt2);
		$("#article_img_2 img").attr('src' , mainbanner2);
	});
	var articleur3 = mainurl.concat("/knowledge-centre-article-3");
	$.get(articleur3, function(html){
		var mainbanner3 = $(html).find('#article_banner_featured_img_3 img').attr('src');
		var headingtxt3 = $(html).find('#knowledge-centre-artical-box-3 h1').text();
		var paragraphtxt3 = $(html).find('#knowledge-centre-artical-box-3 p').text();
		$("#knowledge-centre-article-3 h4").text(headingtxt3);
		$("#knowledge-centre-article-3 .article-para").text(paragraphtxt3);
		$("#article_img_3 img").attr('src' , mainbanner3);
	});
	var articleur4 = mainurl.concat("/knowledge-centre-article-4");
	$.get(articleur4, function(html){
		var mainbanner4 = $(html).find('#article_banner_featured_img_4 img').attr('src');
		var headingtxt4 = $(html).find('#knowledge-centre-artical-box-4 h1').text();
		var paragraphtxt4 = $(html).find('#knowledge-centre-artical-box-4 p').text();
		$("#knowledge-centre-article-4 h4").text(headingtxt4);
		$("#knowledge-centre-article-4 .article-para").text(paragraphtxt4);
		$("#article_img_4 img").attr('src' , mainbanner4);
	});
	var articleur5 = mainurl.concat("/knowledge-centre-article-5");
	$.get(articleur5, function(html){
		var mainbanner5 = $(html).find('#article_banner_featured_img_5 img').attr('src');
		var headingtxt5 = $(html).find('#knowledge-centre-artical-box-5 h1').text();
		var paragraphtxt5 = $(html).find('#knowledge-centre-artical-box-5 p').text();
		$("#knowledge-centre-article-5 h4").text(headingtxt5);
		$("#knowledge-centre-article-5 .article-para").text(paragraphtxt5);
		$("#article_img_5 img").attr('src' , mainbanner5);
	});
	var articleur6 = mainurl.concat("/knowledge-centre-article-6");
	$.get(articleur6, function(html){
		var mainbanner6 = $(html).find('#article_banner_featured_img_6 img').attr('src');
		var headingtxt6 = $(html).find('#knowledge-centre-artical-box-6 h1').text();
		var paragraphtxt6 = $(html).find('#knowledge-centre-artical-box-6 p').text();
		$("#knowledge-centre-article-6 h4").text(headingtxt6);
		$("#knowledge-centre-article-6 .article-para").text(paragraphtxt6);
		$("#article_img_6 img").attr('src' , mainbanner6);
	});
	var articleur7 = mainurl.concat("/knowledge-centre-article-7");
	$.get(articleur7, function(html){
		var mainbanner7 = $(html).find('#article_banner_featured_img_7 img').attr('src');
		var headingtxt7 = $(html).find('#knowledge-centre-artical-box-7 h1').text();
		var paragraphtxt7 = $(html).find('#knowledge-centre-artical-box-7 p').text();
		$("#knowledge-centre-article-7 h4").text(headingtxt7);
		$("#knowledge-centre-article-7 .article-para").text(paragraphtxt7);
		$("#article_img_7 img").attr('src' , mainbanner7);
	});
	var articleur8 = mainurl.concat("/knowledge-centre-article-8");
	$.get(articleur8, function(html){
		var mainbanner8 = $(html).find('#article_banner_featured_img_8 img').attr('src');
		var headingtxt8 = $(html).find('#knowledge-centre-artical-box-8 h1').text();
		var paragraphtxt8 = $(html).find('#knowledge-centre-artical-box-8 p').text();
		$("#knowledge-centre-article-8 h4").text(headingtxt8);
		$("#knowledge-centre-article-8 .article-para").text(paragraphtxt8);
		$("#article_img_8 img").attr('src' , mainbanner8);
	});
	var articleur9 = mainurl.concat("/knowledge-centre-article-9");
	$.get(articleur9, function(html){
		var mainbanner9 = $(html).find('#article_banner_featured_img_9 img').attr('src');
		var headingtxt9 = $(html).find('#knowledge-centre-artical-box-9 h1').text();
		var paragraphtxt9 = $(html).find('#knowledge-centre-artical-box-9 p').text();
		$("#knowledge-centre-article-9 h4").text(headingtxt9);
		$("#knowledge-centre-article-9 .article-para").text(paragraphtxt9);
		$("#article_img_9 img").attr('src' , mainbanner9);
	});
	var articleur10 = mainurl.concat("/knowledge-centre-article-10");
	$.get(articleur10, function(html){
		var mainbanner10 = $(html).find('#article_banner_featured_img_10 img').attr('src');
		var headingtxt10 = $(html).find('#knowledge-centre-artical-box-10 h1').text();
		var paragraphtxt10 = $(html).find('#knowledge-centre-artical-box-10 p').text();
		$("#knowledge-centre-article-10 h4").text(headingtxt10);
		$("#knowledge-centre-article-10 .article-para").text(paragraphtxt10);
		$("#article_img_10 img").attr('src' , mainbanner10);
	});
	var articleur11 = mainurl.concat("/knowledge-centre-article-11");
	$.get(articleur11, function(html){
		var mainbanner11 = $(html).find('#article_banner_featured_img_11 img').attr('src');
		var headingtxt11 = $(html).find('#knowledge-centre-artical-box-11 h1').text();
		var paragraphtxt11 = $(html).find('#knowledge-centre-artical-box-11 p').text();
		$("#knowledge-centre-article-11 h4").text(headingtxt11);
		$("#knowledge-centre-article-11 .article-para").text(paragraphtxt11);
		$("#article_img_11 img").attr('src' , mainbanner11);
	});
	var articleur12 = mainurl.concat("/knowledge-centre-article-12");
	$.get(articleur12, function(html){
		var mainbanner12 = $(html).find('#article_banner_featured_img_12 img').attr('src');
		var headingtxt12 = $(html).find('#knowledge-centre-artical-box-12 h1').text();
		var paragraphtxt12 = $(html).find('#knowledge-centre-artical-box-12 p').text();
		$("#knowledge-centre-article-12 h4").text(headingtxt12);
		$("#knowledge-centre-article-12 .article-para").text(paragraphtxt12);
		$("#article_img_12 img").attr('src' , mainbanner12);
	});


	$(".related-products-box, .products-details-box").each(function(i,el){	
		$(el.lastElementChild).click(function(e){
				e.stopPropagation();
				e.preventDefault();
				var targeturl = $(e.currentTarget).attr('href')
				var strIndex = targeturl.lastIndexOf('/');
				var replaceurl = targeturl.substring(strIndex).replace('/', '')
				$("#mypopup").show();
				$("#frame").attr("src", replaceurl);	
		})
	})
	
	// $(".products-details-box").each(function(i,el){	
		// $(el.lastElementChild).click(function(e){
				// e.stopPropagation();
				// e.preventDefault();
				// var test = $(e.currentTarget).attr('href')
				// var strIndex = test.lastIndexOf('/');
				// var replaceurl = test.substring(strIndex).replace('/', '')
				// $("#mypopup").show();
				// $("#frame").attr("src", replaceurl);	
		// })
	// })
	
	$(".products-link-1, .products-link-2, .products-link-3, .products-link-4, .products-link-5, .products-link-6, .products-link-7, .products-link-8, .products-details-box a").click(function () {
		$('body').addClass('overflow-hidden');
	});
	
	$('.close-prduct-popup').click(function(){
		$(this).parents().hide();
	    $('#mypopup', window.parent.document).fadeOut();
	    $('body', window.parent.document).removeClass('overflow-hidden');
	});
	
	// space in number
	var phonecall = $(".agent-img-box .call-me").text();
	var phone = phonecall.replace(/(\d{2})/, '$1 ');
	$('.agent-img-box .call-me').text(phone);
	
	var phonecall2 = $(".mobile-tabing-box .call-me").text();
	var phone2 = phonecall2.replace(/(\d{2})/, '$1 ');
	$('.mobile-tabing-box .call-me').text(phone2);
	
	setTimeout(function(){
	  //if number not available 
	  if ($(".agent-img-box .call-me").text().trim().length <= 0) {
		$(".tabing-box .tabs li:first-child, .tabs-icon-box .tabs-icon-4").hide();
	  }
	  else{
		$(".tabing-box .tabs li:first-child, .tabs-icon-box .tabs-icon-4").show();
	  }
	},1000)
	
  //about us popup-
  
  setTimeout(function(){
	$('.close-popup').click(function(){
	  $('#our_team_info_popup_0').removeClass('open');
	  $('#our-team-slider .swiper-wrapper').parent('.swiper-container').removeClass('popup-active');
	  $('#our-team-slider .swiper-wrapper').removeClass('popup-active');
	  $('body').removeClass('overflow-hidden');
	});
	$('#about_popup_0').click(function(){
	  $('#our_team_info_popup_0').addClass('open');
	  $('#our-team-slider .swiper-wrapper').parent('.swiper-container').addClass('popup-active');
	  $('#our-team-slider .swiper-wrapper').addClass('popup-active');
	  $('body').addClass('overflow-hidden');
	});
	// close popup-1 
	$('.close-popup').click(function(){
	  $('#our_team_info_popup_1').removeClass('open');
	  $('#our-team-slider .swiper-wrapper').parent('.swiper-container').removeClass('popup-active');
	  $('#our-team-slider .swiper-wrapper').removeClass('popup-active');
	  $('body').removeClass('overflow-hidden');
	});
	$('#about_popup_1').click(function(){
	  $('#our_team_info_popup_1').addClass('open');
	  $('#our-team-slider .swiper-wrapper').parent('.swiper-container').addClass('popup-active');
	  $('#our-team-slider .swiper-wrapper').addClass('popup-active');
	  $('body').addClass('overflow-hidden');
	});
	// close popup-2 
	$('.close-popup').click(function(){
	  $('#our_team_info_popup_2').removeClass('open');
	  $('#our-team-slider .swiper-wrapper').parent('.swiper-container').removeClass('popup-active');
	  $('#our-team-slider .swiper-wrapper').removeClass('popup-active');
	  $('body').removeClass('overflow-hidden');
	});
	$('#about_popup_2').click(function(){
	  $('#our_team_info_popup_2').addClass('open');
	  $('#our-team-slider .swiper-wrapper').parent('.swiper-container').addClass('popup-active');
	  $('#our-team-slider .swiper-wrapper').addClass('popup-active');
	  $('body').addClass('overflow-hidden');
	});
	// close popup-3 
	$('.close-popup').click(function(){
	  $('#our_team_info_popup_3').removeClass('open');
	  $('#our-team-slider .swiper-wrapper').parent('.swiper-container').removeClass('popup-active');
	  $('#our-team-slider .swiper-wrapper').removeClass('popup-active');
	  $('body').removeClass('overflow-hidden');
	});
	$('#about_popup_3').click(function(){
	  $('#our_team_info_popup_3').addClass('open');
	  $('#our-team-slider .swiper-wrapper').parent('.swiper-container').addClass('popup-active');
	  $('#our-team-slider .swiper-wrapper').addClass('popup-active');
	  $('body').addClass('overflow-hidden');
	});
	// close popup-4 
	$('.close-popup').click(function(){
	  $('#our_team_info_popup_4').removeClass('open');
	  $('#our-team-slider .swiper-wrapper').parent('.swiper-container').removeClass('popup-active');
	  $('#our-team-slider .swiper-wrapper').removeClass('popup-active');
	  $('body').removeClass('overflow-hidden');
	});
	$('#about_popup_4').click(function(){
	  $('#our_team_info_popup_4').addClass('open');
	  $('#our-team-slider .swiper-wrapper').parent('.swiper-container').addClass('popup-active');
	  $('#our-team-slider .swiper-wrapper').addClass('popup-active');
	  $('body').addClass('overflow-hidden');
	});
	// close popup-5 
	$('.close-popup').click(function(){
	  $('#our_team_info_popup_5').removeClass('open');
	  $('#our-team-slider .swiper-wrapper').parent('.swiper-container').removeClass('popup-active');
	  $('#our-team-slider .swiper-wrapper').removeClass('popup-active');
	  $('body').removeClass('overflow-hidden');
	});
	$('#about_popup_5').click(function(){
	  $('#our_team_info_popup_5').addClass('open');
	  $('#our-team-slider .swiper-wrapper').parent('.swiper-container').addClass('popup-active');
	  $('#our-team-slider .swiper-wrapper').addClass('popup-active');
	  $('body').addClass('overflow-hidden');
	});
	// close popup-6 
	$('.close-popup').click(function(){
	  $('#our_team_info_popup_6').removeClass('open');
	  $('#our-team-slider .swiper-wrapper').parent('.swiper-container').removeClass('popup-active');
	  $('#our-team-slider .swiper-wrapper').removeClass('popup-active');
	  $('body').removeClass('overflow-hidden');
	});
	$('#about_popup_6').click(function(){
	  $('#our_team_info_popup_6').addClass('open');
	  $('#our-team-slider .swiper-wrapper').parent('.swiper-container').addClass('popup-active');
	  $('#our-team-slider .swiper-wrapper').addClass('popup-active');
	  $('body').addClass('overflow-hidden');
	});
	// close popup-7 
	$('.close-popup').click(function(){
	  $('#our_team_info_popup_7').removeClass('open');
	  $('#our-team-slider .swiper-wrapper').parent('.swiper-container').removeClass('popup-active');
	  $('#our-team-slider .swiper-wrapper').removeClass('popup-active');
	  $('body').removeClass('overflow-hidden');
	});
	$('#about_popup_7').click(function(){
	  $('#our_team_info_popup_7').addClass('open');
	  $('#our-team-slider .swiper-wrapper').parent('.swiper-container').addClass('popup-active');
	  $('#our-team-slider .swiper-wrapper').addClass('popup-active');
	  $('body').addClass('overflow-hidden');
	});
	// close popup-8 
	$('.close-popup').click(function(){
	  $('#our_team_info_popup_8').removeClass('open');
	  $('#our-team-slider .swiper-wrapper').parent('.swiper-container').removeClass('popup-active');
	  $('#our-team-slider .swiper-wrapper').removeClass('popup-active');
	  $('body').removeClass('overflow-hidden');
	});
	$('#about_popup_8').click(function(){
	  $('#our_team_info_popup_8').addClass('open');
	  $('#our-team-slider .swiper-wrapper').parent('.swiper-container').addClass('popup-active');
	  $('#our-team-slider .swiper-wrapper').addClass('popup-active');
	  $('body').addClass('overflow-hidden');
	});
	// close popup-9 
	$('.close-popup').click(function(){
	  $('#our_team_info_popup_9').removeClass('open');
	  $('#our-team-slider .swiper-wrapper').parent('.swiper-container').removeClass('popup-active');
	  $('#our-team-slider .swiper-wrapper').removeClass('popup-active');
	  $('body').removeClass('overflow-hidden');
	});
	$('#about_popup_9').click(function(){
	  $('#our_team_info_popup_9').addClass('open');
	  $('#our-team-slider .swiper-wrapper').parent('.swiper-container').addClass('popup-active');
	  $('#our-team-slider .swiper-wrapper').addClass('popup-active');
	  $('body').addClass('overflow-hidden');
	});
	// close popup-10 
	$('.close-popup').click(function(){
	  $('#our_team_info_popup_10').removeClass('open');
	  $('#our-team-slider .swiper-wrapper').parent('.swiper-container').removeClass('popup-active');
	  $('#our-team-slider .swiper-wrapper').removeClass('popup-active');
	  $('body').removeClass('overflow-hidden');
	});
	$('#about_popup_10').click(function(){
	  $('#our_team_info_popup_10').addClass('open');
	  $('#our-team-slider .swiper-wrapper').parent('.swiper-container').addClass('popup-active');
	  $('#our-team-slider .swiper-wrapper').addClass('popup-active');
	  $('body').addClass('overflow-hidden');
	});
	// close popup-11 
	$('.close-popup').click(function(){
	  $('#our_team_info_popup_11').removeClass('open');
	  $('#our-team-slider .swiper-wrapper').parent('.swiper-container').removeClass('popup-active');
	  $('#our-team-slider .swiper-wrapper').removeClass('popup-active');
	  $('body').removeClass('overflow-hidden');
	});
	$('#about_popup_11').click(function(){
	  $('#our_team_info_popup_11').addClass('open');
	  $('#our-team-slider .swiper-wrapper').parent('.swiper-container').addClass('popup-active');
	  $('#our-team-slider .swiper-wrapper').addClass('popup-active');
	  $('body').addClass('overflow-hidden');
	});
	// close popup-12 
	$('.close-popup').click(function(){
	  $('#our_team_info_popup_12').removeClass('open');
	  $('#our-team-slider .swiper-wrapper').parent('.swiper-container').removeClass('popup-active');
	  $('#our-team-slider .swiper-wrapper').removeClass('popup-active');
	  $('body').removeClass('overflow-hidden');
	});
	$('#about_popup_12').click(function(){
	  $('#our_team_info_popup_12').addClass('open');
	  $('#our-team-slider .swiper-wrapper').parent('.swiper-container').addClass('popup-active');
	  $('#our-team-slider .swiper-wrapper').addClass('popup-active');
	  $('body').addClass('overflow-hidden');
	});
	// close popup-13 
	$('.close-popup').click(function(){
	  $('#our_team_info_popup_13').removeClass('open');
	  $('#our-team-slider .swiper-wrapper').parent('.swiper-container').removeClass('popup-active');
	  $('#our-team-slider .swiper-wrapper').removeClass('popup-active');
	  $('body').removeClass('overflow-hidden');
	});
	$('#about_popup_13').click(function(){
	  $('#our_team_info_popup_13').addClass('open');
	  $('#our-team-slider .swiper-wrapper').parent('.swiper-container').addClass('popup-active');
	  $('#our-team-slider .swiper-wrapper').addClass('popup-active');
	  $('body').addClass('overflow-hidden');
	});
	// close popup-14 
	$('.close-popup').click(function(){
	  $('#our_team_info_popup_14').removeClass('open');
	  $('#our-team-slider .swiper-wrapper').parent('.swiper-container').removeClass('popup-active');
	  $('#our-team-slider .swiper-wrapper').removeClass('popup-active');
	  $('body').removeClass('overflow-hidden');
	});
	$('#about_popup_14').click(function(){
	  $('#our_team_info_popup_14').addClass('open');
	  $('#our-team-slider .swiper-wrapper').parent('.swiper-container').addClass('popup-active');
	  $('#our-team-slider .swiper-wrapper').addClass('popup-active');
	  $('body').addClass('overflow-hidden');
	});
	// close popup-15 
	$('.close-popup').click(function(){
	  $('#our_team_info_popup_15').removeClass('open');
	  $('#our-team-slider .swiper-wrapper').parent('.swiper-container').removeClass('popup-active');
	  $('#our-team-slider .swiper-wrapper').removeClass('popup-active');
	  $('body').removeClass('overflow-hidden');
	});
	$('#about_popup_15').click(function(){
	  $('#our_team_info_popup_15').addClass('open');
	  $('#our-team-slider .swiper-wrapper').parent('.swiper-container').addClass('popup-active');
	  $('#our-team-slider .swiper-wrapper').addClass('popup-active');
	  $('body').addClass('overflow-hidden');
	});
	// close popup-16 
	$('.close-popup').click(function(){
	  $('#our_team_info_popup_0').removeClass('open');
	  $('#our-team-slider .swiper-wrapper').parent('.swiper-container').removeClass('popup-active');
	  $('#our-team-slider .swiper-wrapper').removeClass('popup-active');
	  $('body').removeClass('overflow-hidden');
	});
	$('#about_popup_16').click(function(){
	  $('#our_team_info_popup_16').addClass('open');
	  $('#our-team-slider .swiper-wrapper').parent('.swiper-container').addClass('popup-active');
	  $('#our-team-slider .swiper-wrapper').addClass('popup-active');
	  $('body').addClass('overflow-hidden');
	});
	// close popup-17
	$('.close-popup').click(function(){
	  $('#our_team_info_popup_17').removeClass('open');
	  $('#our-team-slider .swiper-wrapper').parent('.swiper-container').removeClass('popup-active');
	  $('#our-team-slider .swiper-wrapper').removeClass('popup-active');
	  $('body').removeClass('overflow-hidden');
	});
	$('#about_popup_17').click(function(){
	  $('#our_team_info_popup_17').addClass('open');
	  $('#our-team-slider .swiper-wrapper').parent('.swiper-container').addClass('popup-active');
	  $('#our-team-slider .swiper-wrapper').addClass('popup-active');
	  $('body').addClass('overflow-hidden');
	});
	// close popup-18 
	$('.close-popup').click(function(){
	  $('#our_team_info_popup_18').removeClass('open');
	  $('#our-team-slider .swiper-wrapper').parent('.swiper-container').removeClass('popup-active');
	  $('#our-team-slider .swiper-wrapper').removeClass('popup-active');
	  $('body').removeClass('overflow-hidden');
	});
	$('#about_popup_18').click(function(){
	  $('#our_team_info_popup_18').addClass('open');
	  $('#our-team-slider .swiper-wrapper').parent('.swiper-container').addClass('popup-active');
	  $('#our-team-slider .swiper-wrapper').addClass('popup-active');
	  $('body').addClass('overflow-hidden');
	});
	// close popup-19 
	$('.close-popup').click(function(){
	  $('#our_team_info_popup_19').removeClass('open');
	  $('#our-team-slider .swiper-wrapper').parent('.swiper-container').removeClass('popup-active');
	  $('#our-team-slider .swiper-wrapper').removeClass('popup-active');
	  $('body').removeClass('overflow-hidden');
	});
	$('#about_popup_19').click(function(){
	  $('#our_team_info_popup_19').addClass('open');
	  $('#our-team-slider .swiper-wrapper').parent('.swiper-container').addClass('popup-active');
	  $('#our-team-slider .swiper-wrapper').addClass('popup-active');
	  $('body').addClass('overflow-hidden');
	});
	// close popup-20
	$('.close-popup').click(function(){
	  $('#our_team_info_popup_20').removeClass('open');
	  $('#our-team-slider .swiper-wrapper').parent('.swiper-container').removeClass('popup-active');
	  $('#our-team-slider .swiper-wrapper').removeClass('popup-active');
	  $('body').removeClass('overflow-hidden');
	});
	$('#about_popup_20').click(function(){
	  $('#our_team_info_popup_20').addClass('open');
	  $('#our-team-slider .swiper-wrapper').parent('.swiper-container').addClass('popup-active');
	  $('#our-team-slider .swiper-wrapper').addClass('popup-active');
	  $('body').addClass('overflow-hidden');
	});
  },1000)
  
   
  
});

$(document).ready(function(){
	var agentdetails = $(".about-our-team p.text").first().text().trim();
	$(".about-agent-details p.about-agent").html( agentdetails );
	
	$('.our-team-box a[href*=" "]').prop('href', function(i, v){
	  return v.replace(/%20/g,"");
	});
	$('.our-team-box a').prop('href', function(i, oldText) {
	  return oldText.toLowerCase();
	});


  var collapse_content_selector = $(this).attr('${url}/services');
  var toggle_switch = $(this);
  $(collapse_content_selector).toggle(function(){
    if($(this).css('display')=='none'){
      toggle_switch.html('Show');//change the button label to be 'Show'
    }else{
      toggle_switch.html('Hide');//change the button label to be 'Hide'
    }
  });


  // if ($("#related-products-slider .swiper-wrapper").text().trim().length <= 0) {
    // $(".related-products").hide();
  // }
  // else{
    // $(".related-products").show();
  // }

  //awards-box
  if ($(".company-awards img").length <= 0) {
    $(".company-of-awards").hide();
  }
  else{
    $(".company-of-awards").show();
  }

  //knowledge-tab-knowledge-artical-slider
  if ($("#knowledge-artical-slider .swiper-wrapper .swiper-slide").text().trim().length <= 0) {
    $(".knowledge-tab li:nth-child(1)").hide();
  }
  else{
    $(".knowledge-tab li:nth-child(1)").css("display", "inline-block");
  }
  //knowledge-tab-video
  if ($("#videos-artical-slider .swiper-wrapper .swiper-slide").text().trim().length <= 0) {
    $(".knowledge-tab li:nth-child(2)").hide();
  }
  else{
    $(".knowledge-tab li:nth-child(2)").css("display", "inline-block");
  }
  //knowledge-tab-Calculators
  if ($("#calculator-slider .swiper-wrapper .swiper-slide").text().trim().length <= 0) {
    $(".knowledge-tab li:nth-child(3)").hide();
  }
  else{
    $(".knowledge-tab li:nth-child(3)").css("display", "inline-block");
  }
  //knowledge-tab-Forms and documents
  if ($("#resources-documents-filter").text().trim().length <= 0) {
    $(".knowledge-tab li:nth-child(4)").hide();
  }
  else{
    $(".knowledge-tab li:nth-child(4)").css("display", "inline-block");
  }
  
  //hide contact-us section
    var homeurl = window.location.origin;
	var contactus = homeurl.concat("/contact-us");
	$.get(contactus, function(html){
		var otheroffice = $(html).find('.place_name_row .sublingss').text().trim().length <= 0;
		if (otheroffice){
			$(".contact-us, .other-office").hide();
			$(".page-location-in-bo .contact-us").show();
		}
		else{
			$(".contact-us, .other-office").show();
			$(".page-location-in-bo .contact-us").show();
		}
	});
  
  //hide contact-us section
  if ($(".office-address-box.nsw .place_name_row .sublingss").text().trim().length <= 0) {
    $(".office-address-box.nsw").hide();
  }
  else{
    $(".office-address-box.nsw").show();
  }
  //hide contact-us section
  if ($(".office-address-box.victoria .place_name_row .sublingss").text().trim().length <= 0) {
    $(".office-address-box.victoria").hide();
  }
  else{
    $(".office-address-box.victoria").show();
  }
  
  //HEAD OFFICE
  if ($(".footer-content-box-content p").text().trim().length <= 0) {
    $(".footer-content-box-content h6:nth-child(2)").hide();
  }
  else{
    $("footer-content-box-content h6:nth-child(2)").show();
  }
 

  if(window.self !== window.top) {
    $('body').addClass("page-location-in-bo");
  }
  
  
  jQuery(window).on("load resize", function(){
    //$('body').removeClass("page-name-index");
    $('body').removeClass("popup-disabled");
  });
	// main nev
	$('.menu_list_row > li').click(function(){
    $('.menu_list_row > li').removeClass('active');
		$(this).addClass('active');
	});
	
	//tabing-box show // hide
	$('.tabs-icon-box .tabs-icon-4').click(function(){
		$('.tabing-box').removeClass('show');
		$('.tabing-box').addClass('show');
		$('.tabs li:nth-child(1), #tab-1').addClass('current');
	});
	$('.tabs-icon-box .tabs-icon-3').click(function(){
		$('.tabing-box').removeClass('show');
		$('.tabing-box').addClass('show');
		$('.tabs li:nth-child(3), #tab-3').addClass('current');
	});
	$('.tabs-icon-box .tabs-icon-2').click(function(){
		$('.tabing-box').removeClass('show');
		$('.tabing-box').addClass('show');
		$('.tabs li:nth-child(4), #tab-4').addClass('current');
	});
	$('.tabs-icon-box .tabs-icon-1').click(function(){
		$('.tabing-box').removeClass('show');
		$('.tabing-box').addClass('show');
		$('.tabs li:nth-child(2), #tab-2').addClass('current');
	});

	//TABS
	$('ul.tabs li, .close-icon').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li, .tabing-box').removeClass('current');
		$('.tab-content').removeClass('current');
		
		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});
	$('.close-icon').click(function(){
		$(this).parents('.tabing-box').removeClass('show');
	});

	$('.toggle-nav').click(function(){
		$('.toggle-nav').toggleClass('active');
		$('.menu_list').toggleClass('active');
		$('body').toggleClass('overflow-hidden');
	});
	$('.navigation li.dropdown-menu').click(function(){
		$('.mobile-sub-menu').toggleClass('active');
	});
	$('.back-prev a').click(function(){
		$('.mobile-sub-menu').removeClass('active');
	});
	
	
	//Mobile View Only TABS
	$('ul.mobile-tabs li, .mobile-close-icon').click(function(){
    var tab_id = $(this).attr('mobile-data-tab');

	$('ul.mobile-tabs li, .mobile-tabing-box').removeClass('show');
    $('.mobile-tab-content').removeClass('show');
		
    $(this).addClass('show');

      $(".mobile-tabs li").each(function(i,item){
        if(item.getAttribute("mobile-data-tab") === tab_id){
          item.classList.add("show");
          $(".toggle-nav, .menu_list").removeClass('active')
          $("body").removeClass('overflow-hidden')
        }
        else{
          item.classList.remove("show")
        }
      })

    $("#"+tab_id).addClass('show');

    // $([document.documentElement, document.body]).animate({
        // scrollTop: $(".mobile-tabing-box").offset().top
    // }, 2000);

  });
	
  //What we offer 
  $('.offertabs-content').hide(); 
	$('ul.offertabs li, .close-icon').click(function(){
		var offertabs_id = $(this).attr('data-offertabs');

		$('ul.offertabs li').removeClass('active');
		$('.offertabs-content').removeClass('active');
		
		$(this).addClass('active');
		$("#"+offertabs_id).addClass('active');
	});
  
  // Our advice process
  $('.advice-process-content').hide(); 
	$('ul.advice-process li').click(function(){
		var offertabs_id = $(this).attr('data-advice-process');
      
		$('ul.advice-process li').removeClass('active');
    $('.advice-process-content').removeClass('active');   

		$(this).addClass('active');
		$("#"+offertabs_id).addClass('active');
	});
	
  // knowledge-tab
  $('.knowledge-tab-content').hide();
	$('ul.knowledge-tab li').click(function(){
		var offertabs_id = $(this).attr('data-knowledge');

		$('ul.knowledge-tab li').removeClass('active');
		$('.knowledge-tab-content').removeClass('active');
		
		$(this).addClass('active');
		$("#"+offertabs_id).addClass('active');
	});
	
	// Redirect to another page
	$('.js-anchor-link').click(function(e){
	  e.preventDefault();
	  var target = $($(this).attr('href'));
	  if(target.length){
		var scrollTo = target.offset().top;
		$('body, html').animate({scrollTop: scrollTo+'px'}, 800);
	  }
	});

	// INITIATE THE FOOTER
    // siteFooter();
	// jQuery(window).on("load resize", function(){
		// siteFooter();
	// });		
	// function siteFooter() {
		// var siteContent = $('.clearfix-page');
		// var siteContentHeight = siteContent.height();
		// var siteFooter = $('#footer');
		// var siteFooterHeight = siteFooter.height();
		// //console.log('Footer Height = ' + siteFooterHeight + 'px');
		// siteContent.css({
			// "padding-top" : siteFooterHeight + 0
		// });
	// };
	

  // Text limit
  setTimeout(function(){
	  $(".products-details-box p, .details-leading-box p, .related-products-box p, .news-artical-box p, .news-artical-box .article-para").each(function(i, item){
		if(item.innerText.length >= 132){
		  var substing = item.innerText.substring(0,132) + '...'
		  $(item).text(substing)
		}
		else{
		  return item
		}
	  })
   },2000)
   
   // home page Text limit
	$(".what-our-goal .about-our-goal").each(function(i, item){
    if(item.innerHTML.length >= 600){
      var substing = item.innerHTML.substring(0,600) + '...'
      $(item).html(substing)
    }
    else{
      return item
    }
  })
  // services page Text limit
  $(".sercices-life-stage").each(function(i, item){
	$(this).attr('title', item.innerText);
    if(item.innerHTML.length >= 600){
      var substing = item.innerHTML.substring(0,600) + '...'
      $(item).html(substing)
    }
    else{
      return item
    }
  })
  
  // OTHER OFFICES Text limit
  $(".other-office-box p").each(function(i, item){
    if(item.innerText.length >= 355){
      var substing = item.innerText.substring(0,355) + '...'
      $(item).text(substing)
    }
    else{
      return item
    }
  })
  // regional-financial-planing Text limit
  $(".regional-financial-planing p").each(function(i, item){
    if(item.innerText.length >= 240){
      var substing = item.innerText.substring(0,240) + '...'
      $(item).text(substing)
    }
    else{
      return item
    }
  })
  // copyright-renouf Text limit
  $(".copyright-renouf p").each(function(i, item){
	$(this).attr('title', item.innerText);
    if(item.innerText.length >= 750){
      var substing = item.innerText.substring(0,750) + '...'
      $(item).text(substing)
    }
    else{
      return item
    }
  })
  // header banner Text limit
  $(".banner-heading h3").each(function(i, item){
    $(this).attr('title', item.innerText);
    if(item.innerText.length >= 55){
      var substing = item.innerText.substring(0,55) + '...'
            $(item).text(substing)
        }
        else{
        return item
      }
  })
  // header banner Text limit
  $(".banner-heading h1").each(function(i, item){
	$(this).attr('title', item.innerText);
    if(item.innerText.length >= 65){
      var substing = item.innerText.substring(0,65) + '...'
      $(item).text(substing)
    }
    else{
      return item
    }
  })
	// var txt= $('.products-details-box p, .details-leading-box p, .related-products-box p, .news-artical-box p, .news-artical-box .article-para').text();
	// if(txt.length > 200)
	// $('.products-details-box p, .details-leading-box p, .related-products-box p, .news-artical-box p, .news-artical-box .article-para').append(txt.substring(0,132) + '...');


	$('#email_phone li, #memail_phone li').click(function(){
		$('li').removeClass("active");
		$(this).addClass("active");
	});

  //contact page
  $('#loc-1-1').click(function(){
    $('.place_name_row').children('.customMapBubble').removeClass("active");
		$('.place_name_row').children('#custom-loc-1-1').addClass("active");
  });
  $('#loc-1-2').click(function(){
    $('.place_name_row').children('.customMapBubble').removeClass("active");
		$('.place_name_row').children('#custom-loc-1-2').addClass("active");
  });
  $('#loc-1-3').click(function(){
    $('.place_name_row').children('.customMapBubble').removeClass("active");
		$('.place_name_row').children('#custom-loc-1-3').addClass("active");
  });
  $('#loc-1-4').click(function(){
    $('.place_name_row').children('.customMapBubble').removeClass("active");
		$('.place_name_row').children('#custom-loc-1-4').addClass("active");
  });
  $('#loc-1-5').click(function(){
    $('.place_name_row').children('.customMapBubble').removeClass("active");
		$('.place_name_row').children('#custom-loc-1-5').addClass("active");
  });
  $('#loc-1-6').click(function(){
    $('.place_name_row').children('.customMapBubble').removeClass("active");
		$('.place_name_row').children('#custom-loc-1-6').addClass("active");
  });
  $('#loc-1-7').click(function(){
    $('.place_name_row').children('.customMapBubble').removeClass("active");
		$('.place_name_row').children('#custom-loc-1-7').addClass("active");
  });
  $('#loc-1-8').click(function(){
    $('.place_name_row').children('.customMapBubble').removeClass("active");
		$('.place_name_row').children('#custom-loc-1-8').addClass("active");
  });
  $('#loc-1-9').click(function(){
    $('.place_name_row').children('.customMapBubble').removeClass("active");
		$('.place_name_row').children('#custom-loc-1-9').addClass("active");
  });
  $('#loc-1-10').click(function(){
    $('.place_name_row').children('.customMapBubble').removeClass("active");
		$('.place_name_row').children('#custom-loc-1-10').addClass("active");
  });
  $('#loc-1-11').click(function(){
    $('.place_name_row').children('.customMapBubble').removeClass("active");
		$('.place_name_row').children('#custom-loc-1-11').addClass("active");
  });
  $('#loc-1-12').click(function(){
    $('.place_name_row').children('.customMapBubble').removeClass("active");
		$('.place_name_row').children('#custom-loc-1-12').addClass("active");
  });
  $('#loc-1-13').click(function(){
    $('.place_name_row').children('.customMapBubble').removeClass("active");
		$('.place_name_row').children('#custom-loc-1-13').addClass("active");
  });
  $('#loc-1-14').click(function(){
    $('.place_name_row').children('.customMapBubble').removeClass("active");
		$('.place_name_row').children('#custom-loc-1-14').addClass("active");
  });
  $('#loc-1-15').click(function(){
    $('.place_name_row').children('.customMapBubble').removeClass("active");
		$('.place_name_row').children('#custom-loc-1-15').addClass("active");
  });
  $('#loc-1-16').click(function(){
    $('.place_name_row').children('.customMapBubble').removeClass("active");
		$('.place_name_row').children('#custom-loc-1-16').addClass("active");
  });
  $('#loc-1-17').click(function(){
    $('.place_name_row').children('.customMapBubble').removeClass("active");
		$('.place_name_row').children('#custom-loc-1-17').addClass("active");
  });
  $('#loc-1-18').click(function(){
    $('.place_name_row').children('.customMapBubble').removeClass("active");
		$('.place_name_row').children('#custom-loc-1-18').addClass("active");
  });
  $('#loc-1-19').click(function(){
    $('.place_name_row').children('.customMapBubble').removeClass("active");
		$('.place_name_row').children('#custom-loc-1-19').addClass("active");
  });
  $('#loc-1-20').click(function(){
    $('.place_name_row').children('.customMapBubble').removeClass("active");
		$('.place_name_row').children('#custom-loc-1-20').addClass("active");
  });
  $('#loc-1-21').click(function(){
    $('.place_name_row').children('.customMapBubble').removeClass("active");
		$('.place_name_row').children('#custom-loc-1-21').addClass("active");
  });
  $('#loc-1-22').click(function(){
    $('.place_name_row').children('.customMapBubble').removeClass("active");
		$('.place_name_row').children('#custom-loc-1-22').addClass("active");
  });
  $('#loc-1-23').click(function(){
    $('.place_name_row').children('.customMapBubble').removeClass("active");
		$('.place_name_row').children('#custom-loc-1-23').addClass("active");
  });
  $('#loc-1-24').click(function(){
    $('.place_name_row').children('.customMapBubble').removeClass("active");
		$('.place_name_row').children('#custom-loc-1-24').addClass("active");
  });
  $('#loc-1-25').click(function(){
    $('.place_name_row').children('.customMapBubble').removeClass("active");
		$('.place_name_row').children('#custom-loc-1-25').addClass("active");
  });
  $('#loc-1-26').click(function(){
    $('.place_name_row').children('.customMapBubble').removeClass("active");
		$('.place_name_row').children('#custom-loc-1-26').addClass("active");
  });
  $('#loc-1-27').click(function(){
    $('.place_name_row').children('.customMapBubble').removeClass("active");
		$('.place_name_row').children('#custom-loc-1-27').addClass("active");
  });
  $('#loc-1-28').click(function(){
    $('.place_name_row').children('.customMapBubble').removeClass("active");
		$('.place_name_row').children('#custom-loc-1-28').addClass("active");
  });
  $('#loc-1-29').click(function(){
    $('.place_name_row').children('.customMapBubble').removeClass("active");
		$('.place_name_row').children('#custom-loc-1-29').addClass("active");
  });
  $('#loc-1-30').click(function(){
    $('.place_name_row').children('.customMapBubble').removeClass("active");
		$('.place_name_row').children('#custom-loc-1-30').addClass("active");
  });
  $('#loc-1-31').click(function(){
    $('.place_name_row').children('.customMapBubble').removeClass("active");
		$('.place_name_row').children('#custom-loc-1-31').addClass("active");
  });
  $('#loc-1-32').click(function(){
    $('.place_name_row').children('.customMapBubble').removeClass("active");
		$('.place_name_row').children('#custom-loc-1-32').addClass("active");
  });
  $('#loc-1-33').click(function(){
    $('.place_name_row').children('.customMapBubble').removeClass("active");
		$('.place_name_row').children('#custom-loc-1-33').addClass("active");
  });
  $('#loc-1-34').click(function(){
    $('.place_name_row').children('.customMapBubble').removeClass("active");
		$('.place_name_row').children('#custom-loc-1-34').addClass("active");
  });
  $('#loc-1-35').click(function(){
    $('.place_name_row').children('.customMapBubble').removeClass("active");
		$('.place_name_row').children('#custom-loc-1-35').addClass("active");
  });
  $('#loc-1-36').click(function(){
    $('.place_name_row').children('.customMapBubble').removeClass("active");
		$('.place_name_row').children('#custom-loc-1-36').addClass("active");
  });
  $('#loc-1-37').click(function(){
    $('.place_name_row').children('.customMapBubble').removeClass("active");
		$('.place_name_row').children('#custom-loc-1-37').addClass("active");
  });
  $('#loc-1-38').click(function(){
    $('.place_name_row').children('.customMapBubble').removeClass("active");
		$('.place_name_row').children('#custom-loc-1-38').addClass("active");
  });
  $('#loc-1-39').click(function(){
    $('.place_name_row').children('.customMapBubble').removeClass("active");
		$('.place_name_row').children('#custom-loc-1-39').addClass("active");
  });
  $('#loc-1-40').click(function(){
    $('.place_name_row').children('.customMapBubble').removeClass("active");
		$('.place_name_row').children('#custom-loc-1-40').addClass("active");
  });
  $('.tooltip-close-btn').click(function(){
		$('.place_name_row').children('.customMapBubble').removeClass("active");
  });


  $('select').niceSelect();	
  
  
    if($(".swiper-container .swiper-wrapper .swiper-slide").length == 1) {
		//$('.swiper-wrapper').addClass( "disabled" );
		$('.slider-controler').hide();
	}
	
	$('.swiper-slide').filter(function() {
	  return $(this).text().trim().length == 0;
	}).remove();
	
	setTimeout(function(){
	  //testimonial
	  if ($("#form-rate-us .swiper-wrapper .swiper-slide").text().trim().length <= 0) {
		$(".reviews-section, .section-customer-say").hide();
	  }
	  else{
		$(".reviews-section, .section-customer-say").show();
	  }
	},3000)
	
	
	//copyright-renouf
	if ($(".social-links").html().trim().length <= 0) {
		$('.social-links').hide();
		$(".copyright-renouf").addClass('social-links-blank');
	}
	else{
		$('.social-links').show();
		$(".copyright-renouf").removeClass('social-links-blank');
	}

});



$(window).on("load resize scroll",function(e){
  $(".customers-reviews-box").css({"min-height": "60px"});
    var maxHeight = 0;
$("#customers-feedback-slider .customers-feedback-box, #related-products-slider .related-products-box").each(function(){
   if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
});
jQuery("#customers-feedback-slider .customers-feedback-box, #related-products-slider .related-products-box").height(maxHeight);
}).resize();




// slider
var swiper1 = new Swiper('#services-slider', {
	slidesPerView: 3,
	slidesPerColumn: 1,
	spaceBetween: 66,
	observer: true,
  observeParents: true,
  allowTouchMove:false,
  pagination: {
	el: '.swiper-pagination',
	type: 'fraction',
	clickable: true,
  },
   breakpoints: {
	1367: {
	  spaceBetween: 48,
	},
	1024: {
	  slidesPerView: 2,
	  spaceBetween: 30,
	},
	767: {
		initialSlide: 0,
		spaceBetween: 0,
		slidesPerView: "auto",
		centeredSlides: true,
		slidesOffsetBefore: 0,
		loop: true,
	},
	320: {
	  slidesPerView: 1,
	  spaceBetween: 0,
	}
  },
  navigation: {
	nextEl: '.swiper-button-next',
	prevEl: '.swiper-button-prev',
  }
})

// slider
var swiper2 = new Swiper('#services-slider-2', {
	slidesPerView: 4,
	slidesPerColumn: 1,
	spaceBetween: 2,
	observer: true,
  observeParents: true,
  allowTouchMove:false,
  pagination: {
	el: '.swiper-pagination',
	type: 'fraction',
	clickable: true,
  },
   breakpoints: {
	1024: {
	  slidesPerView: 2,
	  spaceBetween: 0,
	},
	767: {
		initialSlide: 0,
		spaceBetween: 0,
		slidesPerView: "auto",
		centeredSlides: true,
		slidesOffsetBefore: 0,
		loop: true,
	},
	320: {
	  slidesPerView: 1,
	  spaceBetween: 0,
	}
  },
  navigation: {
	nextEl: '.swiper-button-next',
	prevEl: '.swiper-button-prev',
  }
})


var swiper3 = new Swiper('#reviews', {
  slidesPerView: 1,
  slidesPerColumn: 1,
  spaceBetween: 0,
  allowTouchMove:false,
  observer: true,
  pagination: {
	el: '.swiper-pagination',
	type: 'fraction',
  },
  navigation: {
	nextEl: '.swiper-button-next',
	prevEl: '.swiper-button-prev',
  }
})

var swiper4 = new Swiper("#our-team-slider", {
  slidesPerView: 5,
  slidesPerColumn: 1,
  spaceBetween: 46,
  noSwiping: false,
  allowSlidePrev: false,
  allowSlideNext: false,
  allowTouchMove:false,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 15,
      noSwiping: true,
      allowSlidePrev: true,
      allowSlideNext: true
    },
    767: {
      slidesPerView: 1,
      spaceBetween: 0,
      noSwiping: true,
      allowSlidePrev: true,
      allowSlideNext: true
    }
  }
});
// swiper4.on('slideChange', function () {
	// if(this.activeIndex === -1) {
		// console.log("IM ON SECOND SLIDE!");
		// alert("IM ON SECOND SLIDE!");
	// }
// });

			
var swiper5 = new Swiper("#related-products-slider", {
  slidesPerView: 3,
  slidesPerColumn: 1,
  spaceBetween: 64,
  noSwiping: false,
  allowSlidePrev: false,
  allowSlideNext: false,
  allowTouchMove:false,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 15,
      noSwiping: true,
      allowSlidePrev: true,
      allowSlideNext: true
    },
    767: {
      slidesPerView: 1,
      spaceBetween: 0,
      slidesPerColumn: 1,
      noSwiping: true,
      allowSlidePrev: true,
      allowSlideNext: true
    }
  }
});


var swiper6 = new Swiper("#knowledge-artical-slider", {
  slidesPerView: 4,
  slidesPerColumn: 1,
  spaceBetween: 42,
  noSwiping: false,
  allowSlidePrev: false,
  allowSlideNext: false,
  allowTouchMove:false,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 15,
      noSwiping: true,
      allowSlidePrev: true,
      allowSlideNext: true
    },
    767: {
      slidesPerView: 1,
      spaceBetween: 0,
	  slidesPerColumn: 1,
      noSwiping: true,
      allowSlidePrev: true,
      allowSlideNext: true,
    }
  }
});


var swiper7 = new Swiper("#videos-artical-slider", {
  slidesPerView: 3,
  slidesPerColumn: 1,
  spaceBetween: 42,
  noSwiping: false,
  observer: true,
  observeParents: true,
  allowTouchMove:false,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 15,
      noSwiping: true,
      allowSlidePrev: true,
      allowSlideNext: true
    },
    767: {
      slidesPerView: 1,
      spaceBetween: 0,
	  slidesPerColumn: 1,
      noSwiping: true,
      allowSlidePrev: true,
      allowSlideNext: true
    }
  }
});

var swiper8 = new Swiper("#calculator-slider", {
  slidesPerView: 1,
  slidesPerColumn: 1,
  spaceBetween: 42,
  noSwiping: false,
  allowSlidePrev: false,
  allowSlideNext: false,
  allowTouchMove:false,
  observer: true,
  observeParents: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 15,
      noSwiping: true,
      allowSlidePrev: true,
      allowSlideNext: true
    },
    767: {
      slidesPerView: 1,
      spaceBetween: 0,
	  slidesPerColumn: 1,
      noSwiping: true,
      allowSlidePrev: true,
      allowSlideNext: true
    }
  }
});

var swiper9 = new Swiper("#customers-feedback-slider", {
  slidesPerView: 3,
  slidesPerColumn: 1,
  spaceBetween: 64,
  noSwiping: false,
  allowSlidePrev: false,
  allowSlideNext: false,
  allowTouchMove:false,
  observer: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 15,
      noSwiping: true,
      allowSlidePrev: true,
      allowSlideNext: true
    },
    767: {
      slidesPerView: 1,
      spaceBetween: 0,
	    slidesPerColumn: 1,
      noSwiping: true,
      allowSlidePrev: true,
      allowSlideNext: true
    }
  }
});

$('.offertabs-content').on('show', function(){
  $(this).find('.swiper-container')[0].swiper.update()
});
$('.knowledge-tab-content').on('show', function(){
  $(this).find('.swiper-container')[0].swiper.update()
});
$('#form-rate-us').on('show', function(){
  $(this).find('.swiper-container')[0].swiper.update()
});










// form validation
$(".mobileMeetingThankpupup, .desktopMeetingThankpupup, .contactFormThankpupup, .testimonialsFormThankpupup").hide();

/* Header form */
var meetingForm = {
  init: function init() {
    this.bind();
    this.fixPlaceholder();
  },
  closeMeetingForm: function closeMeetingForm() {
    setTimeout(function() {
      $(".desktopmeetingForm").show();
      $("#main-tab-3").addClass("active");
      $(".desktopMeetingThankpupup").hide();
    }, 500);
  },
  bind: function bind() {
    var self = this;
    $(".close-thank-you-msg").click(function() {
      self.closeMeetingForm();
    });

    $(".form-group input").keydown(function() {
      $(this)
        .css("background-color", "white")
        .removeClass("placeholder-white")
        .css("color", "black");
    });

    $("#Desktopsubmit_but").click(function() {
      console.log("hello form");
      self.sendFormToServer();
    });
    $(".desktopmeetingForm .phone").keyup(function() {
      this.value = this.value.replace(/[^0-9\+.]/g, "");
    });
  },
  createThankYouMessageAndInsertItToHtml: function createThankYouMessageAndInsertItToHtml() {
    var weWillContactYouShortlyMessage = "We will contact you shortly";

    $(".meeting-confirmation p").html(weWillContactYouShortlyMessage);
  },
  getMessageSentToBackOffice: function getMessageSentToBackOffice() {
    var countryCode = getMessageSentToBackOffice
      ? $(".meeting_time").find("span").html()
      : $(".countryCode").find("span").html()

    var iWantToScheduleAnAppointment__translation =
      "I want to schedule an appointment";
    var name = $(".first_name").val();
    var lastName = $(".last_name").val();
    var meetingDate = $(".meeting_date").val();
    var meetingTime = $(".meeting_time").val();
    var email = $(".email").val();
    var countryCode = $(".countryCode").find("span").html();
    var phone = $(".phone").val();
    var contactmethod = $("#email_phone li.active").html().trim()
    var messageToBeSentToTheBackOffice = "";
    messageToBeSentToTheBackOffice = ""
      .concat(iWantToScheduleAnAppointment__translation, "\n Name: ")
      .concat(name, "\n Last Name: ")
      .concat(lastName, "\n Meeting Date: ")
      .concat(meetingDate, "\n Meeting Time: ")
      .concat(meetingTime, "\n Email address: ")
      .concat(email, "\n Telepone: ")
      .concat(countryCode, phone, "\n Preferred contact method: ")
      .concat(contactmethod);
    return messageToBeSentToTheBackOffice;
  },
  sendFormToServer: function sendFormToServer() {
    var self = this;
    var payload = {};
    var name = $(".first_name");
    var lastName = $(".last_name");
    var email = $(".email");
    var phone = $(".phone");
    var contactmethod = $("#email_phone li.active");
    var phoneCodeId = $(".countryCode").find("span").html();
    var messageToBeSentToTheBackOffice = this.getMessageSentToBackOffice();
    // countryCode = $(".countryCode").find("span").html();

    if (self.isFormValid(name, lastName, phone, email)) {
      payload.contactmethod = contactmethod.val();
      var contactInfo = {
        phones: [
          {
            phoneCodeId: phoneCodeId,
            phoneNumber: phone.val(),
            phoneTypeId: "MOBILE"
          }
        ],
        emails: [
          {
            address: email.val()
          }
        ],
        tags: ["meeting"],
        firstName: name.val(),
        lastName: lastName.val()
      };
      window
        .submitForm({
          formType: "meeting",
          executionId: window.executionId ? window.executionId : null,
          payload: payload,
          contactInfo: contactInfo,
          message: {
            text: messageToBeSentToTheBackOffice
          }
        })
        .then(function(result) {
          console.log(
            "first name " +
              name.val() +
              "last name " +
              lastName.val() +
              "\nemail " +
              email.val() +
              "\nphone " +
              phone.val() +
              "\ncontactmethod " +
              contactmethod +
              "\nmessage to the bo " +
              messageToBeSentToTheBackOffice
          );
          console.log(result);
          self.showThankYouMessageAndHideForm();
          self.resetForm();
          document.getElementById(
            "desktopSendNameMeeting"
          ).innerHTML = name.val();
        });
      var googleTagManagerCodeExist = window.dataLayer.length > 0;

      if (googleTagManagerCodeExist) {
        dataLayer.push({
          event: "submit",
          eventCategory: "Form submitted",
          eventAction: "Submit clicked",
          eventLabel: "Meeting Form"
        });
      }
    }
  },
  showThankYouMessageAndHideForm: function showThankYouMessageAndHideForm() {
    $(".desktopmeetingForm").hide();
    $(".desktopMeetingThankpupup").show();
  },
  resetForm: function resetForm() {
    $(".desktopmeetingForm input, .desktopmeetingForm textarea").val("");
  },
  changeStyleOfUnValidInput: function changeStyleOfUnValidInput(elm) {
    $(elm)
      .css("background-color", "#c64c47")
      .css("color", "white")
      .addClass("placeholder-white");
  },
  isFormValid: function isFormValid(firstName, lastName, phone, email) {
    this.handleObligatoryFieldsStyle(firstName, lastName, phone, email);
    return (
      phone !== "" &&
      this.isPhoneValid(phone.val()) &&
      email !== "" &&
      this.isEmailValid(email.val()) &&
      firstName !== "" &&
      this.isNameValid(firstName.val()) &&
      lastName != "" &&
      this.isNameValid(lastName.val())
    );
  },
  isEmailValid: function isEmailValid(e) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(e);
  },
  isNameValid: function isNameValid(e) {
    var ne = /^([a-zA-Z]+\s)*[a-zA-Z]+$/;
    return ne.test(e);
  },
  isPhoneValid: function isPhoneValid(e) {
    var ph = /^(0|[+]{1})?[0-9][0-9]{9}$/;
    return ph.test(e);
  },
  fixPlaceholder: function fixPlaceholder() {

    if (jQuery.fn.placeholder) {
      $("input, textarea").placeholder();
    }
  },
  handleObligatoryFieldsStyle: function handleObligatoryFieldsStyle(
    firstName,
    lastName,
    phone,
    email
  ) {
    if (firstName.val() === "") {
      this.changeStyleOfUnValidInput(firstName);
    }

    if (lastName.val() === "") {
      this.changeStyleOfUnValidInput(lastName);
    }

    if (phone.val() === "") {
      this.changeStyleOfUnValidInput(phone);
    }

    if (!this.isEmailValid(email.val())) {
      this.changeStyleOfUnValidInput(email);
    }

    if (!this.isPhoneValid(phone.val())) {
      this.changeStyleOfUnValidInput(phone);
    }

    if (!this.isNameValid(lastName.val())) {
      this.changeStyleOfUnValidInput(lastName);
    }

    if (!this.isNameValid(firstName.val())) {
      this.changeStyleOfUnValidInput(firstName);
    }
  }
};
meetingForm.init();








// form validation MobilemeetingForm
var mobileMeetingForm = {
  init: function init() {
    this.bind();
    this.fixPlaceholder();
  },
  closeMeetingForm: function closeMeetingForm() {
    setTimeout(function() {
      $(".mobileMeetingForm").show();
      $("#main-tab-3").addClass("active");
      $(".mobileMeetingThankpupup").hide();
    }, 500);
  },
  bind: function bind() {
    var self = this;
    $(".close-thank-you-msg").click(function() {
      self.closeMeetingForm();
    });

    $(".form-group input").keydown(function() {
      $(this)
        .css("background-color", "white")
        .removeClass("placeholder-white")
        .css("color", "black");
    });

    $("#mobileMeetingFormsubmit").click(function() {
      console.log("hello form");
      self.sendFormToServer();
    });
    $(".mobileMeetingForm #mphone").keyup(function() {
      this.value = this.value.replace(/[^0-9\+.]/g, "");
    });
  },
  createThankYouMessageAndInsertItToHtml: function createThankYouMessageAndInsertItToHtml() {
    var weWillContactYouShortlyMessage = "We will contact you shortly";

    $(".meeting-confirmation p").html(weWillContactYouShortlyMessage);
  },
  getMessageSentToBackOffice: function getMessageSentToBackOffice() {
    var countryCode = getMessageSentToBackOffice
      ? $(".mmeeting_time").find("span").html()
      : $(".mcountryCode").find("span").html()

    var iWantToScheduleAnAppointment__translation =
      "I want to schedule an appointment";
    var name = $(".mfirst_name").val();
    var lastName = $(".mlast_name").val();
    var meetingDate = $(".mmeeting_date").val();
    var meetingTime = $(".mmeeting_time").val();
    var email = $(".memail").val();
    var countryCode = $(".mcountryCode").find("span").html();
    var phone = $(".mphone").val();
	var mcontactmethod = $("#memail_phone li.active").html().trim()
    var messageToBeSentToTheBackOffice = "";
    messageToBeSentToTheBackOffice = ""
      .concat(iWantToScheduleAnAppointment__translation, "\n Name: ")
      .concat(name, "\n Last Name: ")
      .concat(lastName, "\n Meeting Date: ")
      .concat(meetingDate, "\n Meeting Time: ")
      .concat(meetingTime, "\n Email address: ")
      .concat(email, "\n Telepone: ")
      .concat(countryCode, phone, "\n Preferred contact method: ")
      .concat(mcontactmethod);
    return messageToBeSentToTheBackOffice;
  },
  sendFormToServer: function sendFormToServer() {
    var self = this;
    var payload = {};
    var name = $(".mfirst_name");
    var lastName = $(".mlast_name");
    var email = $(".memail");
    var phone = $(".mphone");
    var mcontactmethod = $("#memail_phone li.active");
    var phoneCodeId = $(".mcountryCode").find("span").html()
    var messageToBeSentToTheBackOffice = this.getMessageSentToBackOffice();
    // countryCode = $(".mcountryCode").find("span").html();

    if (self.isFormValid(name, lastName, phone, email)) {
      payload.client_message = mcontactmethod.val();
      var contactInfo = {
        phones: [
          {
            phoneCodeId: phoneCodeId,
            phoneNumber: phone.val(),
            phoneTypeId: "MOBILE"
          }
        ],
        emails: [
          {
            address: email.val()
          }
        ],
        tags: ["mobileMeetingForm"],
        firstName: name.val(),
        lastName: lastName.val()
      };
      window
        .submitForm({
          formType: "mobileMeetingForm",
          executionId: window.executionId ? window.executionId : null,
          payload: payload,
          contactInfo: contactInfo,
          message: {
            text: messageToBeSentToTheBackOffice
          }
        })
        .then(function(result) {
          console.log(
            "first name " +
              name.val() +
              "last name " +
              lastName.val() +
              "\nemail " +
              email.val() +
              "\nphone " +
              phone.val() +
              "\nmcontactmethod " +
              mcontactmethod +
              "\nmessage to the bo " +
              messageToBeSentToTheBackOffice
          );
          console.log(result);
          self.showThankYouMessageAndHideForm();
          self.resetForm();
          document.getElementById(
            "desktopSendNameMeeting"
          ).innerHTML = name.val();
        });
      var googleTagManagerCodeExist = window.dataLayer.length > 0;

      if (googleTagManagerCodeExist) {
        dataLayer.push({
          event: "submit",
          eventCategory: "Form submitted",
          eventAction: "Submit clicked",
          eventLabel: "Meeting Form"
        });
      }
    }
  },
  showThankYouMessageAndHideForm: function showThankYouMessageAndHideForm() {
    $(".mobileMeetingForm").hide();
    $(".mobileMeetingThankpupup").show();
  },
  resetForm: function resetForm() {
    $(".mobileMeetingForm input, .mobileMeetingForm textarea").val("");
  },
  changeStyleOfUnValidInput: function changeStyleOfUnValidInput(elm) {
    $(elm)
      .css("background-color", "#c64c47")
      .css("color", "white")
      .addClass("placeholder-white");
  },
  isFormValid: function isFormValid(firstName, lastName, phone, email) {
    this.handleObligatoryFieldsStyle(firstName, lastName, phone, email);
    return (
      phone !== "" &&
      this.isPhoneValid(phone.val()) &&
      email !== "" &&
      this.isEmailValid(email.val()) &&
      firstName !== "" &&
      this.isNameValid(firstName.val()) &&
      lastName != "" &&
      this.isNameValid(lastName.val())
    );
  },
  isEmailValid: function isEmailValid(e) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(e);
  },
  isNameValid: function isNameValid(e) {
    var ne = /^([a-zA-Z]+\s)*[a-zA-Z]+$/;
    return ne.test(e);
  },
  isPhoneValid: function isPhoneValid(e) {
    var ph = /^(0|[+]{1})?[0-9][0-9]{9}$/;
    return ph.test(e);
  },
  fixPlaceholder: function fixPlaceholder() {

    if (jQuery.fn.placeholder) {
      $("input, textarea").placeholder();
    }
  },
  handleObligatoryFieldsStyle: function handleObligatoryFieldsStyle(
    firstName,
    lastName,
    phone,
    email
  ) {
    if (firstName.val() === "") {
      this.changeStyleOfUnValidInput(firstName);
    }

    if (lastName.val() === "") {
      this.changeStyleOfUnValidInput(lastName);
    }

    if (phone.val() === "") {
      this.changeStyleOfUnValidInput(phone);
    }

    if (!this.isEmailValid(email.val())) {
      this.changeStyleOfUnValidInput(email);
    }

    if (!this.isPhoneValid(phone.val())) {
      this.changeStyleOfUnValidInput(phone);
    }

    if (!this.isNameValid(lastName.val())) {
      this.changeStyleOfUnValidInput(lastName);
    }

    if (!this.isNameValid(firstName.val())) {
      this.changeStyleOfUnValidInput(firstName);
    }
  }
};
mobileMeetingForm.init();






// form validation contactForm
var contactForm = {
  init: function init() {
    this.bind();
    this.fixPlaceholder();
  },
  closeMeetingForm: function closeMeetingForm() {
    setTimeout(function() {
      $(".contactForm").show();
      $("#main-tab-3").addClass("active");
      $(".contactFormThankpupup").hide();
    }, 500);
  },
  bind: function bind() {
    var self = this;
    $(".close-thank-you-msg").click(function() {
      self.closeMeetingForm();
    });

    $(".form-group input").keydown(function() {
      $(this)
        .css("background-color", "white")
        .removeClass("placeholder-white")
        .css("color", "black");
    });

    $("#contactFormsubmit").click(function(evt) {
      console.log("hello form");
	    var sitekey = $(".g-recaptcha").attr('data-sitekey')
		if (sitekey.length) {
			  var response = grecaptcha.getResponse();
			  if(response.length == 0) 
			  { 
				//reCaptcha not verified
				alert("please verify you are humann!"); 
				evt.preventDefault();
				return false;
			  }
		}
      self.sendFormToServer();
    });
    $(".form-group #contact_phone").keyup(function() {
      this.value = this.value.replace(/[^0-9\+.]/g, "");
    });
  },
  createThankYouMessageAndInsertItToHtml: function createThankYouMessageAndInsertItToHtml() {
    var weWillContactYouShortlyMessage = "We will contact you shortly";

    $(".meeting-confirmation p").html(weWillContactYouShortlyMessage);
  },
  getMessageSentToBackOffice: function getMessageSentToBackOffice() {
    var countryCode = getMessageSentToBackOffice
      ? $(".contact_countryCode").find("span").html()
      : $(".contact_countryId").find("span").html()
    var contact_countryCode = document.getElementsByClassName("contact_countryCode");

    var iWantToScheduleAnAppointment__translation =
      "I want to schedule an appointment";
    var name = $(".contact_first_name").val();
    var lastName = $(".contact_last_name").val();
    var contact_countryCode = $(".contact_countryCode").val();
    var email = $(".contact_email").val();
    var countryCode = $(".contact_countryId").find("span").html();
    var phone = $(".contact_phone").val();
    var clientMessage = $(".text_field").val();
    var messageToBeSentToTheBackOffice = "";
    messageToBeSentToTheBackOffice = ""
      .concat(iWantToScheduleAnAppointment__translation, "\n Name: ")
      .concat(name, "\n Last Name: ")
      .concat(lastName, "\n Country Code: ")
      .concat(contact_countryCode, "\n Email address: ")
      .concat(email, "\n Telepone: ")
      .concat(countryCode, phone, "\n Consult for: ")
      .concat(clientMessage);
    return messageToBeSentToTheBackOffice;
  },
  sendFormToServer: function sendFormToServer() {
    var self = this;
    var payload = {};
    var name = $(".contact_first_name");
    var lastName = $(".contact_last_name");
    var email = $(".contact_email");
    var phone = $(".contact_phone");
    var clientMessage = $(".text_field");
    var phoneCodeId = $(".contact_countryCode").find("span").html()
    var messageToBeSentToTheBackOffice = this.getMessageSentToBackOffice();
    // countryCode = $(".mcountryCode").find("span").html();

    if (self.isFormValid(name, lastName, phone, email)) {
      payload.client_message = clientMessage.val();
      var contactInfo = {
        phones: [
          {
            phoneCodeId: phoneCodeId,
            phoneNumber: phone.val(),
            phoneTypeId: "MOBILE"
          }
        ],
        emails: [
          {
            address: email.val()
          }
        ],
        tags: ["contact-us"],
        firstName: name.val(),
        lastName: lastName.val()
      };
      window
        .submitForm({
          formType: "contact-us",
          executionId: window.executionId ? window.executionId : null,
          payload: payload,
          contactInfo: contactInfo,
          message: {
            text: messageToBeSentToTheBackOffice
          }
        })
        .then(function(result) {
          console.log(
            "first name " +
              name.val() +
              "last name " +
              lastName.val() +
              "\nemail " +
              email.val() +
              "\nphone " +
              phone.val() +
              "\nclientMessage " +
              clientMessage +
              "\nmessage to the bo " +
              messageToBeSentToTheBackOffice
          );
          console.log(result);
          self.showThankYouMessageAndHideForm();
          self.resetForm();
          document.getElementById(
            "contact-form"
          ).innerHTML = name.val();
        });
      var googleTagManagerCodeExist = window.dataLayer.length > 0;

      if (googleTagManagerCodeExist) {
        dataLayer.push({
          event: "submit",
          eventCategory: "Form submitted",
          eventAction: "Submit clicked",
          eventLabel: "Meeting Form"
        });
      }
    }
  },
  showThankYouMessageAndHideForm: function showThankYouMessageAndHideForm() {
    $(".contactForm").hide();
    $(".contactFormThankpupup").show();
  },
  resetForm: function resetForm() {
    $(".contactForm input, .contactForm textarea").val("");
  },
  changeStyleOfUnValidInput: function changeStyleOfUnValidInput(elm) {
    $(elm)
      .css("background-color", "#c64c47")
      .css("color", "white")
      .addClass("placeholder-white");
  },
  isFormValid: function isFormValid(firstName, lastName, phone, email) {
    this.handleObligatoryFieldsStyle(firstName, lastName, phone, email);
    return (
      phone !== "" &&
      this.isPhoneValid(phone.val()) &&
      email !== "" &&
      this.isEmailValid(email.val()) &&
      firstName !== "" &&
      this.isNameValid(firstName.val()) &&
      lastName != "" &&
      this.isNameValid(lastName.val())
    );
  },
  isEmailValid: function isEmailValid(e) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(e);
  },
  isNameValid: function isNameValid(e) {
    var ne = /^([a-zA-Z]+\s)*[a-zA-Z]+$/;
    return ne.test(e);
  },
  isPhoneValid: function isPhoneValid(e) {
    var ph = /^(0|[+]{1})?[0-9][0-9]{9}$/;
    return ph.test(e);
  },
  fixPlaceholder: function fixPlaceholder() {

    if (jQuery.fn.placeholder) {
      $("input, textarea").placeholder();
    }
  },
  handleObligatoryFieldsStyle: function handleObligatoryFieldsStyle(
    firstName,
    lastName,
    phone,
    email
  ) {
    if (firstName.val() === "") {
      this.changeStyleOfUnValidInput(firstName);
    }

    if (lastName.val() === "") {
      this.changeStyleOfUnValidInput(lastName);
    }

    if (phone.val() === "") {
      this.changeStyleOfUnValidInput(phone);
    }

    if (!this.isEmailValid(email.val())) {
      this.changeStyleOfUnValidInput(email);
    }

    if (!this.isPhoneValid(phone.val())) {
      this.changeStyleOfUnValidInput(phone);
    }

    if (!this.isNameValid(lastName.val())) {
      this.changeStyleOfUnValidInput(lastName);
    }

    if (!this.isNameValid(firstName.val())) {
      this.changeStyleOfUnValidInput(firstName);
    }
  }
};
contactForm.init();



$(function(){
	$( "#myDate" ).datepicker({ minDate: 0});
	$( "#mdatepicker" ).datepicker({ minDate: 0});
});






// about us page 
