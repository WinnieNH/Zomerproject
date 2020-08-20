 $(function() {
            $("html, body, *").mousewheel(function(event, delta) { 
                var scrollValueForAnother = $('body').width() - $('#navigatiebalk').width();
                console.log(scrollValueForAnother);
                
                if (this.scrollLeft > scrollValueForAnother) {
                    $('html,body').animate({
                        scrollLeft: $("#container1").offset().left},
                        'slow');
                }
                else{
                    console.log(this.scrollLeft);
                    this.scrollLeft -= (delta * 215);
                    this.scrollRight -= (delta * 220);
                    event.preventDefault();
                }
                
            });
        });


$("#button1").click(function() {
    $('html,body').animate({
        scrollLeft: $("#container1").offset().left},
        'slow');
});

$("#button2").click(function() {
    $('html,body').animate({
        scrollLeft: $("#container2").offset().left},
        'slow');
});

$("#button3").click(function() {
    $('html,body').animate({
        scrollLeft: $("#container3").offset().left},
        'slow');
});

$("#button4").click(function() {
    $('html,body').animate({
        scrollLeft: $("#container5").offset().left},
        'slow');
});
