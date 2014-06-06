(function($,undefined){var defaults={duration:5E3,easing:"swing",animateOpacity:false,intStepDecimals:0,intEndDecimals:0,floatStepDecimals:4,floatEndDecimals:1,callback:function(){}};function round(number,decimals){return Math.round(number*Math.pow(10,decimals))/Math.pow(10,decimals)}function isInt(number){return/^-?[\d]+$/.test(number)}$.fn.animateNumber=function(value,options,callback){if(typeof options==="function"){callback=options;options={}}options=$.extend({},defaults,options);return this.each(function(){var container=
$(this);var initialValue=parseFloat($(this).text(),10);if(round(value,options.floatEndDecimals)==round(initialValue,options.floatEndDecimals))return;var type=container.data("type")||(isInt($(this).text())?"int":"float"),stepDecimals,endDecimals,defaultStepDecimals,defaultEndDecimals;if(type=="int"){defaultStepDecimals=options.intStepDecimals;defaultEndDecimals=options.intEndDecimals}else{defaultStepDecimals=options.floatStepDecimals;defaultEndDecimals=options.floatEndDecimals}stepDecimals=container.data("stepDecimals")||
defaultStepDecimals;endDecimals=container.data("endDecimals")||defaultEndDecimals;if(options.animateOpacity)container.animate({opacity:0.2},{duration:options.duration/2,easing:options.easing,complete:function(){container.animate({opacity:1},{duration:options.duration/2,easing:options.easing})}});$({number:initialValue}).animate({number:value},{duration:options.duration,easing:options.easing,step:function(){container.text(round(this.number,stepDecimals))},complete:function(){container.text(round(this.number,
endDecimals));if(typeof options.callback==="function")options.callback.call(container)}})})}})(jQuery);


$(function () {
    $(window).scroll(function(){
        // add navbar opacity on scroll
        if ($(this).scrollTop() > 100) {
            $(".navbar.navbar-fixed-top").addClass("scroll");
        } else {
            $(".navbar.navbar-fixed-top").removeClass("scroll");
        }

        // global scroll to top button
        if ($(this).scrollTop() > 300) {
            $('.scrolltop').fadeIn();
        } else {
            $('.scrolltop').fadeOut();
        }        
    });

    $('#myCarousel').carousel('cycle');

    // scroll back to top btn
    $('.scrolltop, .etusivu').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 700);
        return false;
    });

    // scroll navigation functionality
    $('.scroller').click(function(){
    	var section = $($(this).data("section"));
    	var top = section.offset().top;
        $("html, body").animate({ scrollTop: top }, 700);
        return false;
    });

    // FAQs
    var $faqs = $("#faq .faq");
    $faqs.click(function () {
        var $answer = $(this).find(".answer");
        $answer.slideToggle('fast');
    });

    if (!$.support.leadingWhitespace) {
        //IE7 and 8 stuff
        $("body").addClass("old-ie");
    }
		
		$("#switch_lan_en").click(function(){
			$.cookie('userlang', 'http://topcompetitors.com/en', { expires: 90 });
			window.location = $.cookie('userlang');
		});
		$("#switch_lan_fi").click(function(){
			$.cookie('userlang', 'http://topcompetitors.com/fi', { expires: 90 });
			window.location = $.cookie('userlang');
		});
		
});

//
window.twitterShares = 0;
window.facebookLikes = 0;
window.totalShares = 0;

window.getShares = function() {
	jQuery.getJSON("http://urls.api.twitter.com/1/urls/count.json?url=http://quangpham.com&callback=?", function(tdata) {
		window.twitterShares = tdata.count;
		jQuery.getJSON("http://graph.facebook.com/?ids=http://quangpham.com&callback=?", function(data) {
			window.facebookLikes = data["http://quangpham.com"].shares;
			window.totalShares = window.facebookLikes + window.twitterShares;
			$("#social_box").html("Total shares on social media: " + window.totalShares.toString());
		});
	});
}
$(window).load(function() {
	window.getShares();
});


// Facebook
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=168831249938144";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Twitter
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

// Google
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-41824217-1']);
_gaq.push(['_trackPageview']);
(function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-41824217-1', 'topcompetitors.com');
ga('send', 'pageview');
