$(document).ready(function(){
    //Home
    $("#aboutBrief").waypoint(function() {
        $('#aboutBrief').addClass('fadeInLeft');
    }, { offset: '100%'});
    $("#aboutBrief2").waypoint(function() {
        $('#aboutBrief2').addClass('fadeInRight');
    }, { offset: '100%'});
     $("#aboutBriefImg").waypoint(function() {
        $('#aboutBriefImg').addClass('bounceInRight');
    }, { offset: '100%'});
    $("#aboutBriefImg2").waypoint(function() {
        $('#aboutBriefImg2').addClass('fadeInUp');
    }, { offset: '100%'});
    $("#moji1").hover( function() {
        $('#moji1').addClass('rubberBand');
    },  function() {
        $('#moji1').removeClass('rubberBand') 
    } );
    $("#moji2").hover( function() {
        $('#moji2').addClass('tada');
    },  function() {
        $('#moji2').removeClass('tada') 
    } );
    $("#contactarFeature1").waypoint(function() {
        $('#contactarFeature1').addClass('fadeInUp');
    }, { offset: '100%'});
    $("#contactarFeature2").waypoint(function() {
        $('#contactarFeature2').addClass('fadeInUp');
    }, { offset: '100%'});
    $("#testimonial").waypoint(function() {
        $('#testimonial').addClass('fadeInUp');
    }, { offset: '100%'});
    $("#collage2").waypoint(function() {
        $('#collage2').addClass('fadeInUp');
    }, { offset: '100%'});
    $("#collage3").waypoint(function() {
        $('#collage3').addClass('fadeInUp');
    }, { offset: '100%'});

    $("#h1").waypoint(function() {
        $('#h1').addClass('rotateIn');
    }, { offset: '100%'});

    $("#h2").waypoint(function() {
        $('#h2').addClass('fadeIn');
    }, { offset: '100%'});
    $("#h5").waypoint(function() {
        $('#h5').addClass('fadeIn');
    }, { offset: '100%'});

     // --------------------------------------------------- Portfolio ---------------------------------------------
    $('.gallery .animate-box a').click( function() {
        var itemID =  $(this).attr('href');
        $('.gallery #fh5co-project').addClass('item_open');
        //$('.gallery div:only-child').addClass('item_open');
        $(itemID).addClass('item_open');
        return false;
    });
    $('.close').click(function() {
        $('.port').removeClass('item_open');
        $('.gallery #fh5co-project').removeClass('item_open');
        return false;
    });

    $(".gallery div a").click(function() {
        $('html, body').animate({
            scrollTop: parseInt($("#top").offset().top)
        }, 400);
});

});