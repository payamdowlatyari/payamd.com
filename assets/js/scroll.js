// scroll sections

const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});

// open hanmburger menu

const select = document.getElementById('select-menu');
const open = document.getElementById('open-menu');
let c = document.getElementById('close');
let o = document.getElementById('open');

// open.style.display = 'none';
// o.style.display = 'inline';
// c.style.display = 'none';

// select.addEventListener('click', () => {

//   if(open.style.display == 'none'){
//     o.style.display = 'none';
//     c.style.display = 'inline';
//     open.style.display = 'inline';
//   }  
//   else{
//     c.style.display = 'none';
//     o.style.display = 'inline';
//     open.style.display = 'none';
//   }
// });

// social menu

// const social = document.getElementById('social-menu');
// const openS = document.getElementById('open-social');
// let cs = document.getElementById('close-s');
// let os = document.getElementById('open-s');

// openS.style.display = 'none';
// os.style.display = 'inline';
// cs.style.display = 'none';

// social.addEventListener('click', () => {

//   if(openS.style.display == 'none'){
//     os.style.display = 'none';
//     cs.style.display = 'inline';
//     openS.style.display = 'inline';
//   }  

//   else{
//     cs.style.display = 'none';
//     os.style.display = 'inline';
//     openS.style.display = 'none';
//   }
// })

// Add up arrow
// window.onscroll = () => { scrollFunction() };

// const scrollFunction = () => {

// const arrow = document.getElementsByClassName('fa-chevron-up');

// if (document.documentElement.scrollTop > 10) {
//   arrow[0].style.display = 'inline';
// } else {
//   arrow[0].style.display = 'none';
// }

// }
// IMDB

// ((d, s, id) => { 
//   let js, stags = d.getElementsByTagName(s)[0];   
//   if (d.getElementById(id)) { return; } 
//   js = d.createElement(s); 
//   js.id = id; 
//   js.src = "https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/js/rating.js"; 
//   stags.parentNode.insertBefore(js, stags); 
// })(document, "script", "imdb-rating-api");


window.onscroll = () => { scrollFunction() };

const scrollFunction = () => {

    const topNav = document.getElementById('top-nav');
    const logo = document.getElementById("logo");
    const home = document.getElementById("logo-home");
    const title = document.getElementById("title");
    const blog = document.getElementById("logo-blog");

    let navLinks = document.getElementsByClassName('nav-link');

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

    topNav.style.paddingTop = "5px";
    topNav.style.paddingBottom = "5px";
    topNav.style.height = "1.25em";
    topNav.style.transition = "1s";
    topNav.style.backgroundColor = "#FDFEFE";
   
    logo.style.display = "none";
    home.style.display = "inline-flex";
    title.style.display = "none";
    blog.style.display = "inline-flex";

    for(let i = 0; i < navLinks.length; i++)
        navLinks[i].style.color = "#111"

  } else {
    topNav.style.transition = "1s";
    logo.style.display = "block";
    home.style.display = "none";
    blog.style.display = "none";
    title.style.display = "block";
    topNav.style.backgroundColor = "transparent";

    for(let i = 0; i < navLinks.length; i++)
        navLinks[i].style.color = "#11151c"
  }
}

