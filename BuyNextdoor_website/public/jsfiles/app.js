const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-link li');

  burger.addEventListener('click',() => {

      nav.classList.toggle('nav-active');

      //Animate navLinks
      navLinks.forEach((link,index) => {
          if (link.style.animation) {
              link.style.animation = '';
          } else{
              link.style.animation = `navLinkFade 0.5s ease forwards ${index/7+0.3}s`;
          }
      });
      //animation
      burger.classList.toggle('toggle');

    });
  }  

navSlide();
