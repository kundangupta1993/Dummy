"use strict";

var rating = {
    props: {
        ratingData: {},
    },
    initForm: function() {
        var self = this;
        var currentForm = $('#testimonials-form');
        var currentFormExist = currentForm.length > 0;

        if(currentFormExist) {
            var currentFormSubmit = $('#submit-testimonials');
            var currentFormThank = $('.testimonialsFormThankpupup');

            var curentFullName = currentForm.find('.tmnl_first_name');
            var curentNote = currentForm.find('.tmnl_text_field');

            var curentFullNameValue = curentFullName.val();
            var curentNoteValue = curentNote.val();


            currentFormSubmit.click(function(event) {

                // put all required input error
                curentFullName.addClass('status-error');
                curentNote.addClass('status-error');

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
                // check each input for error and remove error
                if(curentFullName.val() !== '' && curentFullName.val() !== undefined || curentNote.val() !== '' && curentNote.val() !== undefined){
                    curentFullName.addClass('status-error'); 
                    var curentFullNameValue = curentFullName.val() || '';
                    var curentNoteValue = curentNote.val() || '';
                    //var curentDate = moment().format('DD MMMM YYYY');

                    $(currentForm).hide();
                    $(currentForm).find('input, textarea').val('');
                    $(currentFormThank).show();
                    console.log('Rating was Send');

                    window.rating.rateBusiness(curentFullNameValue, '', curentNoteValue, function(e) {
                        // show thank you and hide form                       
                    });
                }
                else{
                    curentFullName.removeClass('placeholder-white').css('background-color', '#c64c47').css('color', 'white'); 
                    curentNote.removeClass('placeholder-white').css('background-color', '#c64c47').css('color', 'white');
                }
            });
        }
    },

    
    notEmpty:function($inputElement) {
        return $inputElement.val() !== '';
    },    

};
rating.initForm();

