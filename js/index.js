var app = new Vue({
  el: '#app',
  data: {
    message: 'scroll to continue'
  }
})





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



$(".ball").hover(function() {
gsap.to('.ball', {
  duration: 1,
  scale: 2
})
});






$(document).ready(function() {
    $('.title').hover(
        function () {
            gsap.to(this, {duration: 1, opacity: 0.3});
        },
        function () {
            gsap.to(this, {duration: 1, opacity: 1});
        }
    )
});


$(document).ready(function() {
    $('.animation').hover(
        function () {
            gsap.to(this, {
              duration: 1,
              scale: 2,
                rotation: 180
            })
        },
        function () {
            gsap.to(this, {
              duration: 1,
              scale: 1,
            rotation: 360
            })
        }
    )
});


$(document).ready(function() {
    $('img').click(
        function () {
            gsap.to(this, {
              duration: 0.1,
                rotation: 360
            })
        }
    )
});
