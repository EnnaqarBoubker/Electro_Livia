jQuery(document).ready(function() {
	
    "use strict";
	
    $('#contactform, #contactt').submit(function() {

        var action = $(this).attr('action');

        $("#message").fadeOut(0, function() {
            $('#message').hide();

            $('#submit')
                .attr('disabled', 'disabled');

            $.post(action, {
                    name: $('#name').val(),
                    email: $('#email').val(),
                    message: $('#msg').val(), 
                },
                function(data) {
                    document.getElementById('message').innerHTML = data;
                    $('#message').fadeIn(200);
                    $('.hide').hide(0);
                    $('#submit').removeAttr('disabled');

                }
            );

        });

        return false;

    });

});




