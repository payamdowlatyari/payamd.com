window.onscroll = () => { scrollFunction() };

const scrollFunction = () => {

    const topNav = document.getElementById('top-nav');
    const arrow = document.getElementById("hero-arrow");
    const logo = document.getElementById("logo");
    const home = document.getElementById("logo-home");

    let navLinks = document.getElementsByClassName('nav-link');

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

    topNav.style.paddingTop = "10px";
    topNav.style.paddingBottom = "10px";
    topNav.style.height = "3em";
    topNav.style.transition = "1s";
    topNav.style.backgroundColor = "#fff";
    arrow.style.display = "none";
    logo.style.display = "none";
    home.style.display = "inline-flex";

    for(let i = 0; i < navLinks.length; i++)
        navLinks[i].style.color = "#111"

  } else {
    topNav.style.paddingTop = "40vh";
    topNav.style.paddingBottom = "40vh";
    topNav.style.height = "100vh";
    topNav.style.transition = "1s";
    arrow.style.display = "block";
    logo.style.display = "block";
    home.style.display = "none";

    topNav.style.backgroundColor = "#000";

    for(let i = 0; i < navLinks.length; i++)
        navLinks[i].style.color = "#ddd"
    
  }
}