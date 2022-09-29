

document.addEventListener( 'DOMContentLoaded', function() {
    new Splide("#streetwear", {
      type    : 'loop',
      focus: "center",
      width: 1200,
      height: 700,
      drag: 'free',
      breakpoints: {
        1500:{
            height: 480,
        },
        1300:{
            width: 1000,
            height: 600,
        }
      }
    }).mount();
  
   
  
   
    
  });