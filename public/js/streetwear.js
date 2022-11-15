

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
        },
        768:{
          height: 300,
        }
      }
    }).mount();
    
  });

  const menuSideOpen = document.querySelector('#menuSideOpen')
  const menuSideContent = document.querySelector('#menuSide')
  
  menuSideOpen.addEventListener('click', () => {
    menuSideContent.classList.toggle('active')
    document.querySelector('body').classList.toggle('overflow-hidden')
  })