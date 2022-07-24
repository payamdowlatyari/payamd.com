window.onscroll = () => { scrollFunction() };

const scrollFunction = () => {

    const topNav = document.getElementById('top-nav');
    const arrow = document.getElementById("hero-arrow");
    const logo = document.getElementById("logo");
    const home = document.getElementById("logo-home");

    let navLinks = document.getElementsByClassName('nav-link');



  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) { 
      arrow.style.display = "none";
    } else {
      arrow.style.paddingTop = "5vh"
    }


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
    topNav.style.paddingTop = "40vh";
    topNav.style.paddingBottom = "40vh";
    topNav.style.height = "100vh";
    topNav.style.transition = "1s";
    arrow.style.display = "block";
    arrow.style.paddingTop = "0vh"
    logo.style.display = "block";
    home.style.display = "none";

    topNav.style.backgroundColor = "#0D1117";

    for(let i = 0; i < navLinks.length; i++)
        navLinks[i].style.color = "#ddd"
    
  }
}

