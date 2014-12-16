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
    ga('send', 'event', 'Message', 'Sent');
});

$('.bio').on('click', function(e) {
    e.preventDefault();
    $('.bio-text').toggleClass('hidden showing');
    scrollToElement($('.bio-text'));
    ga('send', 'event', 'About', 'Bio');
});

$('.photogs-link').on('click', function(e) {
    showWork(e, 'photos');
    ga('send', 'event', 'Other Work', 'Photos');
});

$('.videos-link').on('click', function(e) {
    showWork(e, 'videos');
    ga('send', 'event', 'Other Work', 'Videos');
});

$('.graphics-link').on('click', function(e) {
    showWork(e, 'graphics');
    ga('send', 'event', 'Other Work', 'Graphics');
});

$('.main-nav a').on('click', function(){
    ga('send', 'event', 'Navigation', $(this).html());
});

$('.links a').on('click', function(){
    ga('send', 'event', 'Work', $(this).attr('href'), $(this).html());
});

$('.read-more').on('click', function(){
    ga('send', 'event', 'Blog', $(this).attr('href'));
});

try {
    console.log('%c    ___        ________   ________ \n    |\\  \\      |\\   ____\\ |\\   __  \\ \n    \\ \\  \\     \\ \\  \\___| \\ \\  \\|\\  \\ \n  __ \\ \\  \\     \\ \\  \\  ___\\ \\  \\\\\\  \\ \n |\\  \\\\_\\  \\  ___\\ \\  \\|\\  \\\\ \\  \\\\\\  \\   \n \\ \\________\\|\\__\\\\ \\_______\\\\ \\_______\\ \n  \\|________|\\|__| \\|_______| \\|_______| \n\n %cHey, How\'s it going?. Need a developer? \n\n email: %cjgoley@gmail.com \n %cgithub: http://github.com/jgoley \n twitter: http://twitter.com/jgoley \n ', 'color:rgba(1, 164, 245, 1);', 'color:red;', 'color:rgba(136, 136, 136, 1)', 'color: red')
    } catch(e) {}