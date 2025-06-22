window.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });

  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));
});

window.addEventListener('scroll', () => {
  const heading = document.querySelector('.banner h2');
  if (window.scrollY > 100) {
    heading.style.background = 'rgba(200, 200, 200, 0.7)'; // change background on scroll
    // heading.style.color = '#000';  // optional, keep text color same
  } else {
    heading.style.background = 'rgba(255, 255, 255, 0.7)'; // original background
  }
});


const observer = new IntersectionObserver((entries)=> {
  entries.forEach((entry)=>{
      console.log(entry)
      if(entry.isIntersecting){
          entry.target.classList.add('show');
      }

      else{
          entry.target.classList.remove('show');
      }
  })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

  function toggleMenu() {
    const menu = document.querySelector(".navbar ul");
    menu.classList.toggle("show");
  }