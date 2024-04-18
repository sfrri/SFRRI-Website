/** Javascript for development only **/ 

$(document).ready(function() {
    if (Modernizr.inputtypes.date) {
        $('.date-format-hint').hide();
    }
});