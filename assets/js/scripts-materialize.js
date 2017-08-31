/**
 * Created by Carlos on 19/07/2017.
 */

/*----- SLIDER ----- */
$(document).ready(function(){
    $('.slider').slider({
        indicators: false,
        height: '75vh'
    });

    $('.carousel').carousel();

    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15, // Creates a dropdown of 15 years to control year,
        today: 'Today',
        clear: 'Clear',
        close: 'Ok',
        closeOnSelect: false // Close upon selecting a date,
    });
});
/*----- END SLIDER ----- */
