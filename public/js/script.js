

document.addEventListener( 'DOMContentLoaded', function() {
  new Splide("#service-pertama", {
    type    : 'loop',
    focus: "center",
    width: 640,
    drag: 'free',
  }).mount();

  new Splide("#service-kedua", {
    type    : 'loop',
    focus: "center",
     width: 640,
    drag: 'free',
  }).mount();

  new Splide("#service-ketiga", {
    perPage: 1,
    type    : 'loop',
    focus: "center",
     width: 640,
    drag: 'free',
  }).mount();

  new Splide("#fivver", {
    perPage: 1,
    type    : 'loop',
    focus: "center",
    width: 1200,
    height: 700,
    drag: 'free',
    breakpoints: {
      1500 : {
        width: 900,
        height: 500,
      }
    }
  }).mount();

  new Splide("#yungcultr", {
    perPage: 1,
    type    : 'loop',
    focus: "center",
    width: 1200,
    height: 700,
    drag: 'free',
    breakpoints: {
      1500 : {
        width: 900,
        height: 500,
      }
    }
  }).mount();

 
  
});