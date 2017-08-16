$(document).ready(function(){
    //Home
    $("#aboutBrief").waypoint(function() {
        $('#aboutBrief').addClass('fadeInLeft');
    }, { offset: '100%'});
     $("#aboutBriefImg").waypoint(function() {
        $('#aboutBriefImg').addClass('bounceInRight');
    }, { offset: '100%'});
    $("#moji1").hover( function() {
        $('#moji1').addClass('rubberBand');
    },  function() {
        $('#moji1').removeClass('rubberBand') 
    } );

});