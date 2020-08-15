var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})


gsap.to("h2.title", {duration: 1, opacity: 0.3});


 $(function() {
            $("html, body, *").mousewheel(function(event, delta) { 
                this.scrollLeft -= (delta * 100);
                this.scrollRight -= (delta * 100);
                event.preventDefault();
            });
        });