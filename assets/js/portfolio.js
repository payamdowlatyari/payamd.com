window.onscroll = () => { scrollFunction() };

const scrollFunction = () => {

    const topNav = document.getElementById('top-nav');
    const logo = document.getElementById("logo");
    const home = document.getElementById("logo-home");

    let navLinks = document.getElementsByClassName('nav-link');

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

    topNav.style.paddingTop = "10px";
    topNav.style.paddingBottom = "10px";
    topNav.style.height = "3em";
    topNav.style.transition = "1s";
    topNav.style.backgroundColor = "#FDFEFE";
   
    logo.style.display = "none";
    home.style.display = "inline-flex";

    for(let i = 0; i < navLinks.length; i++)
        navLinks[i].style.color = "#111"

  } else {
    topNav.style.paddingTop = "5vh";
    topNav.style.transition = "1s";
    logo.style.display = "block";
    home.style.display = "none";
    topNav.style.backgroundColor = "transparent";

    for(let i = 0; i < navLinks.length; i++)
        navLinks[i].style.color = "#ddd"
  }
}

