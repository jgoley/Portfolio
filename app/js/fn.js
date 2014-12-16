function showWork(e, w) {
    e.preventDefault();
    $('.more-work').removeClass('showing');
    $('#' + w + '-container').addClass('showing');
    scrollToElement($('#' + w + '-container'));
}

function scrollToElement($element) {
    $('html, body').animate({
        scrollTop: $element.offset().top - 100
    }, 1000);
}

$.fn.serializeObject = function() {
    return this.serializeArray().reduce(function(acum, i) {
        acum[i.name] = i.value;
        return acum;
    }, {});
};

function sendMail(params) {
    Parse.Cloud.run('sendEmail', params);
}