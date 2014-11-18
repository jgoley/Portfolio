(function(){
    Parse.initialize("NXnx3AGGgXuHTuhH9b9CH8FtnpZ1rw2Nb5NZ2tEc", "egrsd4QPqFZas2YDxzlVvXg36LErxeVSumMv8kRx");
})();

$('.main-nav').onePageNav({
    currentClass: 'current',
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing',
    begin: function() {
        //I get fired when the animation is starting
        console.log("begin");
    },
    end: function() {
        console.log("end");
        //I get fired when the animation is ending
    },
    scrollChange: function($currentListItem) {
        console.log("scrollChange");
        //I get fired when you enter a section and I pass the list item of the section
    }
});


$('.send-message').submit(function(e){
    e.preventDefault();
    var msgParams = $(this).serializeObject();
    var from = "From: "+msgParams.fromName;
    var fromEmail = "Email: "+msgParams.fromEmail;
    msgParams.message = '<p>'+from+'</p><p>'+fromEmail+'</p><p>'+msgParams.message+'</p>';
    console.log(msgParams);
    sendMail(msgParams);
    $(this).html('<h1>Message sent. Thanks!</h1>');
});

$('.bio').on('click', function(e){
    e.preventDefault();
    $('.bio-text').toggleClass('hidden showing');
})

$.fn.serializeObject = function() {
    return this.serializeArray().reduce(function(acum, i) {
        acum[i.name] = i.value;
        return acum;
    }, {});
};


function sendMail(params) {
    Parse.Cloud.run('sendEmail', params, {
        success: function(result) {
            console.log(result)
        },
        error: function(error) {
            console.log(error);
        }
    });
}