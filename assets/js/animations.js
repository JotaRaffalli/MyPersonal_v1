$(document).ready(function(){
    //Home
    $("#aboutBrief").waypoint(function() {
        $('#aboutBrief').addClass('fadeInLeft');
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

});