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
    },
    end: function() {
        //I get fired when the animation is ending
    },
    scrollChange: function($currentListItem) {
        //I get fired when you enter a section and I pass the list item of the section
    }
});


$('.send-message').submit(function(e){
    e.preventDefault();
    var msgParams = $(e.target).serializeObject();
    sendMail(msgParams);
});


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