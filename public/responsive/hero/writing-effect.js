
// hero section block 1 heading effect
document.addEventListener("DOMContentLoaded", function (event) {
    var typed = new Typed('#hero-heading-writing-effect', {
        strings: ['at your service.', 'in your hand.','Worldwide','for every patient '],
        typeSpeed: 40,
        backSpeed: 10,
        backDelay: 500,
        startDelay: 500,
        loop: true
      });
//   hero number writing effect

    var typed = new Typed('#hero-number-writing-effect', {
        strings: ['+917070790906','+91992973933','+917878850251'],
        typeSpeed: 100,
        backSpeed: 10,
        backDelay: 1000,
        startDelay: 1000,
        attr: 'placeholder',
        bindInputFocusEvents: true,
        loop: true
    });
});
