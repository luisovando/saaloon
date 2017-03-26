/**
 * Created by Developer on 05/03/2015.
 */

jQuery.fn.reset = function () {
    $(this).each(function () {
        this.reset();
    });
};

/*$(document).bind('contextmenu', function()
{
    alert('<h2>No tienes privilegios para visualizar estas opciones</h2>');
    return false;
});*/

$(function () {
    /**
     * AFFIX EFFECT
     */

    /* affix the navbar after scroll below header */
   $('#nav').affix({
        offset: {
            //top: $('header').height() - $('#nav').height()
            top: $('header').height()
        }
    });

    /* highlight the top nav as scrolling occurs */
    $('body').scrollspy({target: '#nav'});

    /* smooth scrolling for scroll to top */
    $('.scroll-top').click(function () {
        $('body,html').animate({scrollTop: 0}, 1000);
    });

    /* smooth scrolling for nav sections */
    $('#nav .navbar-nav li>a').click(function () {
        var link = $(this).attr('href');
        var posi = $(link).offset().top + 15;
        $('body,html').animate({scrollTop: posi}, 700);
    })

    /**
     * CAROUSEL GALLERY
     */
    $('#myCarousel, #mySmartCarousel, #myDistCarousel').carousel({
        interval: 10000
    })

    $('#myCarousel').on('slid.bs.carousel', function () {
        //alert("slid");
    });

    $('div.navbar-collapse > ul > li > a').click(function(){
        $('.collapse').collapse('hide')
    });

    $(".fancybox").fancybox({
        afterLoad: function() {
            var myTitle = '<h2 class="product-title">' + this.title + '</h2>';
            var caption = '<p class="product-content">' + $(this.element).data('caption') + '</p>';
            this.title = myTitle + caption;
        },
        helpers:  {
            overlay: {
                locked: false
            },
            title : {
                type : 'inside'
            }
        }
    });

    $(".stylebook").fancybox({
        helpers:  {
            overlay: {
                locked: false
            },
            title : {
                type : 'inside'
            }
        }
    });

    $(".ifancybox").fancybox({
        width: "75%",
        height: "75%",
        autoScale: !1,
        transitionIn: "none",
        transitionOut: "none",
        type: "iframe"
    })
});


