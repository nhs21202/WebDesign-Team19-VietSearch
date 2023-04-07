
//Scroll-to-top button
let mybutton = document.querySelector("#scroll")

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

const headerE1 = document.querySelector(".navbar");
window.addEventListener ("scroll", () => {
  if (window.scrollY >50){
    headerE1.classList.add("navbar-scrolled");
  }
  else{
    headerE1.classList.remove("navbar-scrolled");
  }
});

// change navbar styles on scroll

window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})



// show/hide faq answer 

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
  faq.addEventListener('click', () => {
      faq.classList.toggle('open');

      // change icon
      const icon = faq.querySelector('.faq__icon i');
      if(icon.className === 'uil uil-plus') {
          icon.className = "uil uil-minus";
      } else {
          icon.className = "uil uil-plus";

      }
  })
})



// show/hide nav menu
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");


menuBtn.addEventListener('click', () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
})


// close nav menu 
const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)