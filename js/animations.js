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
