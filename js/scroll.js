 $(function() {
            $("html, body, *").mousewheel(function(event, delta) { 
                if (this.scrollLeft > 5540) {
                    $('html,body').animate({
                        scrollLeft: $("#container1").offset().left},
                        'slow');
                }
                else{
                    console.log(this.scrollLeft);
                    this.scrollLeft -= (delta * 100);
                    this.scrollRight -= (delta * 100);
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
        scrollLeft: $("#container4").offset().left},
        'slow');
});
