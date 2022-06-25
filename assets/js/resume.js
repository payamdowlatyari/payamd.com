var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
  .add({
    targets: '.ml3 .letter',
    opacity: [0, 0.75],
    easing: "easeInOutQuad",
    duration: 500,
    delay: (el, i) => 100 * (i + 1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 500,
    easing: "easeOutExpo",
    delay: 3000
  });

document.getElementById("chev-up").style.display = "none";
document.getElementById("sideNav").style.opacity = "1";

window.onscroll = () => {
  scrollFunction()
};

const scrollFunction = () => {

  if (document.body.scrollTop < 100 && document.documentElement.scrollTop < 100 ) {

    document.getElementById("sideNav").style.width = "100vw";
    document.getElementById("chev-down").style.display = "block";
    document.getElementById("chev-up").style.display = "none";
  
  } else {
    
    document.getElementById("sideNav").style.width = "18em";
    document.getElementById("chev-down").style.display = "none";
    document.getElementById("chev-up").style.display = "block";        
  }
}
