const burgurButton = document.querySelector('.burgur button');
const burgurCollapse = document.querySelector('.burgur-collapse');
var show = false;

function openMobileNav(){
    document.querySelector(".mobile-nav-section").style.display="flex";
  }
  function closeMobileNav(){
    document.querySelector(".mobile-nav-section").style.display="none";
    document.querySelector(".navbar").style.display="flex";
  }

