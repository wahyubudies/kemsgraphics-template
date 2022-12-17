

document.addEventListener( 'DOMContentLoaded', function() {

    new Splide("#premade1", {
     perPage: 1,
     pagination: false
    }).mount();

    new Splide("#premade2", {
        perPage: 1,
        pagination: false
       }).mount();
    
       new Splide("#premade3", {
        perPage: 1,
        pagination: false
       }).mount();

       new Splide("#premade4", {
        perPage: 1,
        pagination: false
       }).mount();

       new Splide("#premade5", {
        perPage: 1,
        pagination: false
       }).mount();

       new Splide("#premade6", {
        perPage: 1,
        pagination: false
       }).mount();

       new Splide("#premade7", {
        perPage: 1,
        pagination: false
       }).mount();

       new Splide("#premade8", {
        perPage: 1,
        pagination: false
       }).mount();

       new Splide("#premade9", {
        perPage: 1,
        pagination: false
       }).mount();
    
  });

  const menuSideOpen = document.querySelector('#menuSideOpen')
  const menuSideContent = document.querySelector('#menuSide')
  
  menuSideOpen.addEventListener('click', () => {
    menuSideContent.classList.toggle('active')
    document.querySelector('body').classList.toggle('overflow-hidden')
  })