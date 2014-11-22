console.log("Hey, How's it going?  Need a developer? jgoley@gmail.com or @jgoley");

$('.main-nav').onePageNav({
    currentClass: 'current',
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing'
});

$('.send-message').submit(function(e) {
    e.preventDefault();
    var msgParams = $(this).serializeObject();
    var from = "From: " + msgParams.fromName;
    var fromEmail = "Email: " + msgParams.fromEmail;
    msgParams.message = '<p>' + from + '</p><p>' + fromEmail + '</p><p>' + msgParams.message + '</p>';
    console.log(msgParams);
    sendMail(msgParams);
    $(this).html('<h1>Message sent. Thanks!</h1>');
});

$('.bio').on('click', function(e) {
    e.preventDefault();
    $('.bio-text').toggleClass('hidden showing');
    scrollToElement($('.bio-text'));
});

$('.photogs-link').on('click', function(e) {
    showWork(e, 'photos');
});

$('.videos-link').on('click', function(e) {
    showWork(e, 'videos');
});

$('.graphics-link').on('click', function(e) {
    showWork(e, 'graphics');
});