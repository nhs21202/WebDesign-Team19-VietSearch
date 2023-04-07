
//Scroll-to-top button
let mybutton = document.getElementById("scroll")

  // When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

  // When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  
}

// changing the active class on the navbar
var item = document.querySelectorAll(".nav-item");
item.forEach((element) => {
  element.addEventListener("click", function () {
    item.forEach((e) => e.classList.remove("active1"));
    this.classList.add("active1");
  });
});
function openBox(event, boxName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab-btn");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active2", "");
  }
  document.getElementById(boxName).style.display = "flex";
  event.currentTarget.className += " active2";
}


//Sticky navbar
const headerE1 = document.querySelector(".navbar");
window.addEventListener ("scroll", () => {
  if (window.scrollY >50){
    headerE1.classList.add("navbar-scrolled");
  }
  else{
    headerE1.classList.remove("navbar-scrolled");
  }
});

//Mobile navbar
function openMobileNav(){
  document.querySelector(".mobile-nav-section").style.display="flex";
  document.querySelector(".navbar").style.display="none";
}
function closeMobileNav(){
  document.querySelector(".mobile-nav-section").style.display="none";
  document.querySelector(".navbar").style.display="flex";
}
