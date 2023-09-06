const starNav = document.querySelectorAll(".star__nav__link");
const starContent = document.querySelectorAll(".coffee__tab__content");
starNav.forEach((star) => { 
    star.addEventListener("click", () => {
      removeActiveStar();  
      star.classList.add("active"); 
      const activeContent = document.querySelector(`#${star.id}-content`);  
      removeActiveContent();  
      activeContent.classList.add("active"); 
    });
});

function removeActiveStar() {
     starNav.forEach((star) => {
        star.classList.remove("active"); 
    });
}

function removeActiveContent() { 
    starContent.forEach((star) => { 
         star.classList.remove("active");
         });
        }

const accordionNav = document.querySelectorAll(".accordion__nav__link");
const accordionContent = document.querySelectorAll(".accordion__content");
accordionNav.forEach