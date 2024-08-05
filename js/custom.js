// JS Scroll to contact
document.getElementById('connectButton').addEventListener('click', function() {
    var contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
});

// JS Counter
$(document).ready(function() {
    $('.counter-number').each(function () {
        var finalValue = $(this).data('to');
        $(this).prop('Counter', 0).animate({
            Counter: finalValue
        }, {
            duration: $(this).data('speed') || 9000, 
            easing: 'swing',
            step: function (now) {
                if ($(this).data('percent')) { 
                    $(this).text(Math.ceil(now) + '%');
                } else {
                    $(this).text(Math.ceil(now));
                }
            }
        });
    });
});

