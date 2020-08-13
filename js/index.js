var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})


gsap.to("h2.title", {duration: 1, opacity: 0.3});