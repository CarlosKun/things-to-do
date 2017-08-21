/**
 * Created by Carlos on 30/07/2017.
 */

$(window).scroll(function () {
    $nav = $('#main-nav');
    var scroll = $(this).scrollTop();
    if ( $(this).scrollTop() < 100 ){
        console.log(scroll);
        $nav.css('background-color', 'transparent');
    }else {
        $nav.css('background-color', '#aeea00');
    }
});

