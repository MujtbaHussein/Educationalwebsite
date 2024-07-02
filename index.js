 
//Mobile Navigation 
const menuBtn = document.querySelector(".icon-mobile-nav-open");
const header = document.querySelector('.header');
menuBtn.addEventListener('click',()=> {
  header.classList.toggle("nav-open")
})

 

//Scrolling 
const allLinks = document.querySelectorAll('a:link');
allLinks.forEach((link)=>{
  link.addEventListener('click',function(e) {
    e.preventDefault();
    const href = link.getAttribute('href')
    if (href ==='#') {
      window.scrollTo({
        top:0,
        behavior:"smooth"
      })
    }
    if (href !=='#' && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({
        behavior:"smooth"
      })
      }
    if (link.classList.contains('main-nav-link')) {
      header.classList.remove("nav-open")
    }
  })
})


//Sticky navigation 

const sectionHeroEl = document.querySelector(".hero-section");

const obs = new IntersectionObserver(function(entries){
const ent = entries[0];
console.log(ent);
if (ent.isIntersecting===false) {
  document.body.classList.add('sticky')
}
if (ent.isIntersecting===true) {
document.body.classList.remove('sticky')
}
},
{
//In the viweport
root:null,
threshold:0,
rootMargin:"-80px",
});

obs.observe(sectionHeroEl);