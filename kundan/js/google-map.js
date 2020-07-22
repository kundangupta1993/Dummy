"use strict";

var functions = {
	
    isMobile: function isMobile() {
        return window.innerWidth < 767;
    },

    isTabletBig: function isTabletBig() {
        return window.innerWidth < 992;
    },

    isTablet : function isTablet(){
        return window.innerWidth >= 768 && window.innerWidth < 1024;
    },


    getMobileOperatingSystem: function getMobileOperatingSystem() {
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;

        // Windows Phone must come first because its UA also contains "Android"
        if (/windows phone/i.test(userAgent)) {
            return "Windows Phone";
        }

        if (/android/i.test(userAgent)) {
            return "Android";
        }

        // iOS detection from: http://stackoverflow.com/a/9039885/177710
        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            return "iOS";
        }

        return "unknown";
    }, isInterntExplorer: function () {

        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");

        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
        {
            return true;
        } else  // If another browser, return 0
        {
            return false;
        }

        return false;
    },

    adaptLinksToLocalEnviroment: function(){
        const url = window.location.href;
        if(url.indexOf("localhost") >= 0){
            let links = $('a');
            for(var i = 0 ; i < links.length; i++){
                let link = links[i];
                    $(link).attr('href', $(link).attr('href') + '.html')
            }
        }
    }

};
for (var prop in functions) {
    if (!window[prop]) {
        window[prop] = functions[prop];
    }
}


var googleMap = {

    init: function () {
        this.activateMap();
        this.changeLinkOfMapAccordingToOperatingSystem();
    },

    changeLinkOfMapAccordingToOperatingSystem: function () {
		
        $("#businessMaplink1").click(function () {
            if (isMobile()) {
                if (getMobileOperatingSystem() === 'iOS') {
                    window.open("maps://maps.google.com/maps?daddr=" + $("#businessAddress1").text())
                }
                else {
                    window.open("https://maps.google.com/?q=" + $("#businessAddress1").text())
                }
            }
            else {
                window.open("https://maps.google.com/?q=" + $("#businessAddress1").text())
            }
            return false;
        })
		$("#businessMaplink2").click(function () {
            window.open("https://maps.google.com/?q=" + $("#businessAddress2").text())
            return false;
        })
		$("#businessMaplink3").click(function () {
            window.open("https://maps.google.com/?q=" + $("#businessAddress3").text())
            return false;
        })
		$("#businessMaplink4").click(function () {
            window.open("https://maps.google.com/?q=" + $("#businessAddress4").text())
            return false;
        })
		$("#businessMaplink5").click(function () {
            window.open("https://maps.google.com/?q=" + $("#businessAddress5").text())
            return false;
        })
		$("#businessMaplink6").click(function () {
            window.open("https://maps.google.com/?q=" + $("#businessAddress6").text())
            return false;
        })
		$("#businessMaplink7").click(function () {
            window.open("https://maps.google.com/?q=" + $("#businessAddress7").text())
            return false;
        })
		$("#businessMaplink8").click(function () {
            window.open("https://maps.google.com/?q=" + $("#businessAddress8").text())
            return false;
        })
		$("#businessMaplink9").click(function () {
            window.open("https://maps.google.com/?q=" + $("#businessAddress9").text())
            return false;
        })
		$("#businessMaplink10").click(function () {
            window.open("https://maps.google.com/?q=" + $("#businessAddress10").text())
            return false;
        })
		$("#businessMaplink11").click(function () {
            window.open("https://maps.google.com/?q=" + $("#businessAddress11").text())
            return false;
        })
		$("#businessMaplink12").click(function () {
            window.open("https://maps.google.com/?q=" + $("#businessAddress12").text())
            return false;
        })
		$("#businessMaplink13").click(function () {
            window.open("https://maps.google.com/?q=" + $("#businessAddress13").text())
            return false;
        })
		$("#businessMaplink14").click(function () {
            window.open("https://maps.google.com/?q=" + $("#businessAddress14").text())
            return false;
        })
		$("#businessMaplink15").click(function () {
            window.open("https://maps.google.com/?q=" + $("#businessAddress15").text())
            return false;
        })
		$("#businessMaplink16").click(function () {
            window.open("https://maps.google.com/?q=" + $("#businessAddress16").text())
            return false;
        })
		$("#businessMaplink17").click(function () {
            window.open("https://maps.google.com/?q=" + $("#businessAddress17").text())
            return false;
        })
		$("#businessMaplink18").click(function () {
            window.open("https://maps.google.com/?q=" + $("#businessAddress18").text())
            return false;
        })
		$("#businessMaplink19").click(function () {
            window.open("https://maps.google.com/?q=" + $("#businessAddress19").text())
            return false;
        })
		$("#businessMaplink20").click(function () {
            window.open("https://maps.google.com/?q=" + $("#businessAddress20").text())
            return false;
        })
		$("#businessMaplink21").click(function () {
            window.open("https://maps.google.com/?q=" + $("#businessAddress21").text())
            return false;
        })
		$("#businessMaplink22").click(function () {
            window.open("https://maps.google.com/?q=" + $("#businessAddress22").text())
            return false;
        })
		$("#businessMaplink23").click(function () {
            window.open("https://maps.google.com/?q=" + $("#businessAddress23").text())
            return false;
        })
		$("#businessMaplink24").click(function () {
            window.open("https://maps.google.com/?q=" + $("#businessAddress24").text())
            return false;
        })
		$("#businessMaplink25").click(function () {
            window.open("https://maps.google.com/?q=" + $("#businessAddress25").text())
            return false;
        })
		$("#businessMaplink26").click(function () {
            window.open("https://maps.google.com/?q=" + $("#businessAddress26").text())
            return false;
        })
		$("#businessMaplink27").click(function () {
            window.open("https://maps.google.com/?q=" + $("#businessAddress27").text())
            return false;
        })
		$("#businessMaplink28").click(function () {
            window.open("https://maps.google.com/?q=" + $("#businessAddress28").text())
            return false;
        })
		$("#businessMaplink29").click(function () {
            window.open("https://maps.google.com/?q=" + $("#businessAddress29").text())
            return false;
        })
		$("#businessMaplink30").click(function () {
            window.open("https://maps.google.com/?q=" + $("#businessAddress30").text())
            return false;
        })
		$("#businessMaplink31").click(function () {
            window.open("https://maps.google.com/?q=" + $("#businessAddress31").text())
            return false;
        })
		$("#businessMaplink32").click(function () {
            window.open("https://maps.google.com/?q=" + $("#businessAddress32").text())
            return false;
        })
		$("#businessMaplink33").click(function () {
            window.open("https://maps.google.com/?q=" + $("#businessAddress33").text())
            return false;
        })
		$("#businessMaplink34").click(function () {
            window.open("https://maps.google.com/?q=" + $("#businessAddress34").text())
            return false;
        })
		$("#businessMaplink35").click(function () {
            window.open("https://maps.google.com/?q=" + $("#businessAddress35").text())
            return false;
        })
		$("#businessMaplink36").click(function () {
            window.open("https://maps.google.com/?q=" + $("#businessAddress36").text())
            return false;
        })
		$("#businessMaplink37").click(function () {
            window.open("https://maps.google.com/?q=" + $("#businessAddress37").text())
            return false;
        })
		$("#businessMaplink37").click(function () {
            window.open("https://maps.google.com/?q=" + $("#businessAddress37").text())
            return false;
        })
		$("#businessMaplink38").click(function () {
            window.open("https://maps.google.com/?q=" + $("#businessAddress38").text())
            return false;
        })
		$("#businessMaplink39").click(function () {
            window.open("https://maps.google.com/?q=" + $("#businessAddress39").text())
            return false;
        })
		$("#businessMaplink40").click(function () {
            window.open("https://maps.google.com/?q=" + $("#businessAddress40").text())
            return false;
        })
		
		
    },

    activateMap : function activateMap() {
        var geocoder = new google.maps.Geocoder();
        var latlng = new google.maps.LatLng(-34.397, 150.644);
        var myOptions = {
            zoom: 17,
            center: latlng,
            mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
            },
            navigationControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("google_map"), myOptions);
        if (geocoder) {
            geocoder.geocode({
                'address': window.businessUnitAddress,

            }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
                        map.setCenter(results[0].geometry.location);

                        var infowindow = new google.maps.InfoWindow({
                            content: '<b>' + window.businessUnitAddress + '</b>',
                            size: new google.maps.Size(150, 50)
                        });

                        var marker = new google.maps.Marker({
                            position: results[0].geometry.location,
                            map: map,
                            title: window.businessUnitAddress
                        });
                        google.maps.event.addListener(marker, 'click', function () {
                            infowindow.open(map, marker);
                        });

                    } else {
                    }
                } else {
                }
            });
        }
    }
}

googleMap.init();

