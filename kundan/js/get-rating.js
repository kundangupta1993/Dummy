"use strict";

var apiOverwrite = {
    init: function() {
        if(this.checkIfLocal()) {
            console.log('local-debug/apiOverwrite, mode: only for local development');
            $('html').addClass('page-location-localhost');

            this.fixOnLeadSubmit();
            this.fixSubmitForm();
            this.fixRatingGet();
            this.fixRatingSet();
        }
    },
    checkIfLocal: function() {
        var pageUrl = document.location.href;
        return pageUrl.indexOf('/local/') > 0;
    },
    fixOnLeadSubmit: function() {
        window.onLeadSubmit = function() {
            console.log('call function onLeadSubmit with next arguments', arguments);
        };
    },
    fixSubmitForm: function() {
        window.submitForm = function() {
            console.log('call function submitForm with next arguments', arguments);
            console.log('then returned self resolved new Promise');
            return new Promise(function(resolve, reject) {
                resolve('api-overwrite');
            });

        };
    },
    fixRatingGet: function() {
        window.rating = window.rating || {};
        window.rating.requestRatingList = function(callback) {
            console.log('typeof callback', typeof callback);
            if(typeof callback === 'function') {
                // var demoRating = '';

                var demoRating = [{
                    name: "M&B (Victoria)",
                    date: "06/11/2018",
                    target_name: "",
                    rating: 1,
                    review: "Adam explained the complexities of having a SMSF in a real simple way he also compvared all the paperwork and the systems needed to have it operating. Has an efficient network where you don't need to look around for the other services as they are all a phone call away. Wouldn't go anywhere else!."
                }, {
                    name: "Gabriel Bell",
                    date: "06/11/2018",
                    target_name: "",
                    rating: 5,
                    review: "Highly recommended agent"
                }, {
                    name: "Helton Murphy",
                    date: "06/11/2018",
                    target_name: "",
                    rating: 5,
                    review: "Adam explained the complexities of having a SMSF in a real simple way he also compvared all the paperwork and the systems needed to have it operating. Has an efficient network where you don't need to look around for the other services as they are all a phone call away. Wouldn't go anywhere else!. Adam explained the complexities of having a SMSF in a real simple way he also compvared all the paperwork and the systems needed to have it operating. Has an efficient network where you don't need to look around for the other services as they are all a phone call away. Wouldn't go anywhere else!. Adam explained the complexities of having a SMSF in a real simple way he also compvared all the paperwork and the systems needed to have it operating. Has an efficient network where you don't need to look around for the other services as they are all a phone call away. Wouldn't go anywhere else!."
                }, {
                    name: "Gregory Richardson",
                    date: "06/11/2018",
                    target_name: "",
                    rating: 5,
                    review: "Highly recommended agent"
                }, {
                    name: "Gladys Simpson",
                    date: "06/11/2018",
                    target_name: "",
                    rating: 5,
                    review: "I got answers to all of my questions, thank you!"
                }];

                if(new URL(location.href).searchParams.get('emptyRating')) {
                    demoRating = [];
                }


                console.log('callback function', callback);
                console.log('call callback of function requestRatingList with next demo arguments', demoRating);
                return callback(demoRating);
            }

        };
    },
    fixRatingSet: function() {
        window.rating = window.rating || {};
        window.rating.rateBusiness = function() {
            console.log('call function fixRatingSet with next arguments', arguments);
            console.log('arguments length', arguments[arguments.length - 1]);
            console.log('last arguments item typeof is ', typeof arguments[arguments.length - 1]);

            if(typeof arguments[arguments.length - 1] === 'function') {
                return arguments[arguments.length - 1]();
            }
        };
    },


};

//apiOverwrite.init();

var $sectionHomeRating;
var getrating = {
	
    // apiOverwrite,
    props: {
        ratingData: {},
    },
    cacheDom: function() {
        this.$ratingBlockAverage = $('.block-average-rating');
        this.$blockNoRating = $('.block-empty-rating');

        this.$ratingAverageNumber = $('#average-rating-number-score');
        this.$ratingAverageAmount = $('#average-rating-amount');
        this.$ratingCardStars = $('#rating-card-stars .rating-star');

    },
    status:function(elem) {


    },
    bindEvents: function() {
        var self = this;
        this.$sectionHomeRating = $('.section-customer-say');

        // $(document).on('click', '.button-toggle-text-size', function() {
        //     var slideIndex = $(this).parents('.swiper-slide').index();

        //     if(self.props.ratingData[slideIndex].textWasTruncated) {
        //         $(this).text('read less');
        //         $(this).parent().contents()[0].nodeValue = self.props.ratingData[slideIndex].originalText;
        //     } else {
        //         $(this).text('read more');
        //         $(this).parent().contents()[0].nodeValue = self.props.ratingData[slideIndex].truncatedText;
        //     }

        //     self.props.ratingData[slideIndex].textWasTruncated = !self.props.ratingData[slideIndex].textWasTruncated;

        //     return false;
        // });


    },


    getData: function(cb) {
        var self = this;

        setTimeout(function(){
            window.rating.requestRatingList(function(reviewsData) {

                if(reviewsData.length === 0) {
                    $('html').addClass('status-rating-not-loaded');
                    self.$sectionHomeRating.remove();
                    self.$blockNoRating.removeClass('status-hidden');
                }
                else if(reviewsData.length > 0) {
                    //update props with rating data
                   self.props.ratingData = reviewsData;
                    // console.log('this.props.ratingData', this.props.ratingData);

                    // update html status
                    $('html').addClass('status-rating-loaded');
                    self.$ratingBlockAverage.removeClass('status-hidden');


                    // update buttons on home page
                    $('.page-name-index .button-see-all-review').text('View All Reviews');

                    // show elements on rating page
                    $('.controll-rating-average, .controll-rating-list').fadeIn('medium', 'swing', function() {});


                    // restructure data from rating object
                    // console.table(reviewsData);

                    var arrayWithAllRating = [];
                    var ratingSum = 0;
                    var amountOfReviews = reviewsData.length;


                    var originalText = '';
                    var truncatedText = '';
                    var textWasTruncated = '';

                    for (var i = 0; i < reviewsData.length; i++) {
                        // console.log(reviewsData[i]);
                        arrayWithAllRating.push(reviewsData[i].rating);
                        ratingSum += parseInt(reviewsData[i].rating, 10);


                        // truncate text, save full text, add toggle button
                        originalText = self.props.ratingData[i].review;
                        //encode original text
                        //originalText = safeEncodeHtmlString(originalText);

                       // truncatedText = truncateTextWholeWords(originalText, 200);
                        textWasTruncated = originalText !== truncatedText;

                        self.props.ratingData[i].originalText = originalText;
                        self.props.ratingData[i].truncatedText = truncatedText + '...';
                        self.props.ratingData[i].textWasTruncated = textWasTruncated;


                        // console.table({
                        //     'textWasTruncated': textWasTruncated,
                        //     'originalText': originalText,
                        //     'truncatedText': truncatedText,
                        // });

                        // generate customer review html

                       $('.block-rating-list').append(cb(self.props.ratingData[i]));

                    }


                    var ratingAverage = Math.round(ratingSum / amountOfReviews * 10) / 10;

                    self.$ratingAverageAmount.text(amountOfReviews);

                    //var rateClassForAverage = 'property-rate-' + Math.round((ratingAverage)) + ' property-rate-accurate-' + moreAccurateRating;
                    // console.log('rateClassForAverage', rateClassForAverage);

                    //add class to averageBlock
                   // self.$ratingBlockAverage.addClass(rateClassForAverage);


                    var circle1 = $('#progress');
                    var text1 = $('#average-rating-number-score');

                    if(circle1.length > 0) {
                        // (function() {
                            // var angle1 = 0;
                            // var percent1 = ratingAverage * 64;
                            // window.timer1 = window.setInterval(function() {
                                // circle1.attr("stroke-dasharray", angle1 + ", 20000");


                                // text1.text(((Math.floor((angle1 * 10 / 64)) / 10).toFixed(1)));


                                // if(angle1 >= percent1) {
                                    // window.clearInterval(window.timer1);
                                // }

                                // angle1 += 7;
                            // }.bind(this), 30);

                        // })();
                    }
					

                    self.$sectionHomeRating.removeClass('status-hidden');
                    // generate customer review html

                   // runCarousels.runRatingCarousels();

                    // insert customer review html
                }
            }
            );
        },1000)

       
     
        
    },

    getRatingItemDOM: function(dataObject) {
        return "<div class='rating-list-item swiper-slide'><div class='customers-feedback-box customers-reviews-box'><div class='block-rating-list-item-header'><div class='testimonials-titles'>" + dataObject.name + "</div>" + "<div class='reviews-infoicon feedback-icon'> <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'><path fill='#0C7CB0' d='M4.64118013,9.22701097 L4.64118013,10.9152792 L8.66329196,10.9152792 L8.66329196,20 L0,20 L0,10.9152792 L0.000209392291,10.9152792 L0.000209392291,9.22701097 C0.000209392291,5.79876265 0.940799564,3.25313044 2.79601526,1.66038109 C4.07938062,0.558620576 5.70384601,0 7.62439211,0 L7.62439211,4.86663044 C6.58182789,4.86663044 4.64118013,4.86663044 4.64118013,9.22701097 Z M18.9612048,4.86663044 L18.9612048,0 C17.0407634,0 15.416298,0.558620576 14.1329327,1.66038109 C12.277717,3.25313044 11.3370221,5.79887244 11.3370221,9.22701097 L11.3370221,10.9152792 L11.3370221,10.9152792 L11.3370221,20 L20,20 L20,10.9152792 L15.9778882,10.9152792 L15.9778882,9.22701097 C15.9779929,4.86663044 17.9186406,4.86663044 18.9612048,4.86663044 Z'></path></svg> </div>" + "</div><div class='block-rating-list-item-body'><p>" + dataObject.originalText + "</p> </div>" + "</div></div>" 
    },
   
};


getrating.cacheDom();
getrating.status();
getrating.bindEvents();
getrating.getData(getrating.getRatingItemDOM);

