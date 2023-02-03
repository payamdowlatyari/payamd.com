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

// navbar animation on scroll

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
    // topNav.style.backgroundColor = "#ebf2fa";
    topNav.style.backgroundColor = "#11151c";
   
    logo.style.display = "none";
    home.style.display = "inline-flex";
    title.style.display = "none";
    blog.style.display = "inline-flex";

    for(let i = 0; i < navLinks.length; i++)
        // navLinks[i].style.color = "#353535"
        navLinks[i].style.color = "#ebf2fa"

  } else {
    topNav.style.transition = "1s";
    logo.style.display = "block";
    home.style.display = "none";
    blog.style.display = "none";
    title.style.display = "block";
    topNav.style.backgroundColor = "transparent";

    for(let i = 0; i < navLinks.length; i++)
        // navLinks[i].style.color = "#000"
        navLinks[i].style.color = "#fff"
  }
}

// right menu

const rightMenu = () => {

  const sections = document.querySelectorAll("section");
  const navLi = document.querySelectorAll("header .menu-links ul li");

  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset > sectionTop - 100) 
      current = section.getAttribute("id"); 
  });

  navLi.forEach((li) => {  
      li.classList.remove("active");
    if (li.classList.contains(current)) 
      li.classList.add("active");
  });

}



window.onscroll = () => {

  scrollFunction();

  rightMenu();
  

};




  

