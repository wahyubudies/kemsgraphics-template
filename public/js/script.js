

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

 
  
});