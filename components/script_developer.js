var x = window.matchMedia("(max-width: 1140px)");

function myFunction() {
    var checkBox = document.getElementById("menu_checkbox");
    var nav = document.getElementById("links_nav");
    var navmob = document.getElementById("navbar_mobile");
    var navv = document.getElementById("navbar");
    if (checkBox.checked == true){
      nav.style.opacity = "1";
      nav.style.visibility = "visible";
      navmob.style.right = "0";
      navv.style.backgroundColor = "rgba(0,0,0,0.9)";
      navv.style.zIndex = "3";
    }
    else {
       nav.style.opacity = "0";
       nav.style.visibility = "hidden";
       navmob.style.right = "-100%";
       if (x.matches) {
        navv.style.backgroundColor = "rgba(0,0,0,0.9";
       } else {
        navv.style.backgroundColor = "rgba(0,0,0,0)";
      };
       navv.style.zIndex = "1";
    }
  };

const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const navmobb = document.getElementById("navbar_mobile");
const stylnavmobb = window.getComputedStyle(navmobb);

test = function(){
  var div = document.getElementById("navbar_mobile");
  var style = window.getComputedStyle(div)
  
  if(style.display == "grid"){
    if (checkboxa.checked == true){
      first.style.backgroundColor = "black";
      second.style.backgroundColor = "black";
      third.style.backgroundColor = "black";
      navvv.style.backgroundColor = "rgba(0,0,0,0)";
      navvv.style.zIndex = "6";
    }
    else {
      first.style.backgroundColor = "white";
      second.style.backgroundColor = "white";
      third.style.backgroundColor = "white";
    }
  }
  else{
    first.style.backgroundColor = "white";
    second.style.backgroundColor = "white";
    third.style.backgroundColor = "white";
  }
}

  const nava = document.getElementById("links_nav");
  const checkboxa = document.getElementById("menu_checkbox");
  const navvv = document.getElementById("navbar");
  nava.addEventListener('click', function(){
    nava.style.opacity = "0";
    nava.style.visibility = "hidden";
    checkboxa.checked = false;
    navmobb.style.right = "-100%";
    if (x.matches) {
      navvv.style.backgroundColor = "rgba(0,0,0,0.9";
     } else {
      navvv.style.backgroundColor = "rgba(0,0,0,0)";
    };
    navvv.style.zIndex = "1";
    first.style.backgroundColor = "white";
    second.style.backgroundColor = "white";
    third.style.backgroundColor = "white";
  });

const chb = document.getElementById("chb");
window.addEventListener('click', function(event){
    if (!chb.contains(event.target)){
      checkboxa.checked = false;
      nava.style.opacity = "0";
      nava.style.visibility = "hidden";
      navmobb.style.right = "-100%";
      if (x.matches) {
        navvv.style.backgroundColor = "rgba(0,0,0,0.9";
       } else {
        navvv.style.backgroundColor = "rgba(0,0,0,0)";
      };
      navvv.style.zIndex = "1";
      first.style.backgroundColor = "white";
      second.style.backgroundColor = "white";
      third.style.backgroundColor = "white";
    }
});

window.addEventListener('scroll', function(){
  if (checkboxa.checked == true){
    checkboxa.checked = false;
    nava.style.opacity = "0";
    nava.style.visibility = "hidden";
    navmobb.style.right = "-100%";
    if (x.matches) {
      navvv.style.backgroundColor = "rgba(0,0,0,0.9";
     } else {
      navvv.style.backgroundColor = "rgba(0,0,0,0)";
    };
    navvv.style.zIndex = "1";
    first.style.backgroundColor = "white";
    second.style.backgroundColor = "white";
    third.style.backgroundColor = "white";
  }
})

var arrowup = document.getElementById("arrowup");

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 300) {
      arrowup.style.opacity = "1"
      arrowup.style.visibility = "visible"
  } else {
      arrowup.style.opacity = "0"
      arrowup.style.visibility = "hidden"
  }
};

window.addEventListener("scroll", myScrollFunc);

const sections = document.querySelectorAll('body > section');
var arrowd = document.getElementById("arrowd");
var arrowu = document.getElementById("arrowu");

window.addEventListener('scroll', () => {
  sections.forEach((section, key) => {
    const bounding = section.getBoundingClientRect();
    if ((bounding.bottom >= 0 && bounding.bottom <= window.innerHeight)
      || (bounding.top >= -window.innerHeight && bounding.top <= 0)) {
        if (section.id === sections[0].id) {
          arrowd.href = "#"+sections[1].id
        }
        if (section.id === sections[1].id){
          arrowd.href = "#"+sections[2].id
          arrowu.href = "#"+sections[0].id
        }
        if (section.id === sections[2].id){
          arrowu.href = "#"+sections[1].id
        }
    }
  });
});


const sections1 = document.querySelectorAll('body > section');
var arrowdown = document.getElementById("arrowdown");

window.addEventListener('scroll', () => {
  sections.forEach((section1, key) => {
    const bounding = section1.getBoundingClientRect();
    if ((bounding.bottom >= 0 && bounding.bottom <= window.innerHeight)
      || (bounding.top >= -window.innerHeight && bounding.top <= 0)) {
        if (section1.id === sections1[2].id) {
          arrowdown.style.opacity = "0"
          arrowdown.style.visibility = "hidden"
        } else {
          arrowdown.style.opacity = "1"
          arrowdown.style.visibility = "visible"
        }
    }
  });
});

function myFunctionR1(){
  document.getElementById("popup_reference").style.visibility = "visible";
};

const popupr = document.getElementById("popup_reference");
popupr.addEventListener('click', (eventa) => {
  if (!arowsss.contains(eventa.target) && !all_d1_1.contains(eventa.target) && !all_d1_2.contains(eventa.target) && !all_d1_3.contains(eventa.target)){
  popupr.style.visibility = "hidden";
  info1.style.display = "none";
  all_d1.style.display = "none";
  arowsss.style.display = "none";
  gal1.style.display = "none";
  gal2.style.display = "none";
  gal3.style.display = "none";
  gal4.style.display = "none";
  gal5.style.display = "none";
  }
});


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

const info1 = document.getElementById("info1");
const info2 = document.getElementById("info2");
const info3 = document.getElementById("info3");
const info4 = document.getElementById("info4");
const info5 = document.getElementById("info5")
const arowsss = document.getElementById("arrowsss");
const gal1= document.getElementById("gal11");
const gal2 = document.getElementById("gal22");
const gal3 = document.getElementById("gal33");
const gal4 = document.getElementById("gal44");
const gal5 = document.getElementById("gal55")
function myFunctionInfo1(){
  info1.style.display = "block";
};

window.addEventListener('scroll', () => {
  popupr.style.visibility = "hidden";
  info1.style.display = "none";
  all_d1.style.display = "none";
  arowsss.style.display = "none";
  gal1.style.display = "none";
  gal2.style.display = "none";
  gal3.style.display = "none";
  gal4.style.display = "none";
  gal5.style.display = "none";
});


const all_d1 = document.getElementById("all_d");
const all_d1_1 = document.getElementById("all_d1");
const all_d1_2 = document.getElementById("all_d2");
const all_d1_3 = document.getElementById("all_d3");
function all_d(){
  popupr.style.visibility = "visible";
  all_d1.style.display = "grid";
}

function all_d1_22(){
  all_d1.style.display = "none";
  popupr.style.visibility = "hidden";
  currentSlide(4);
}
function all_d1_33(){
  all_d1.style.display = "none";
  popupr.style.visibility = "hidden";
  currentSlide(2);
}
function all_d1_44(){
  all_d1.style.display = "none";
  popupr.style.visibility = "hidden";
  currentSlide(1);
}
function all_d1_55(){
  all_d1.style.display = "none";
  popupr.style.visibility = "hidden";
  currentSlide(3);
}
function all_d1_66(){
  all_d1.style.display = "none";
  popupr.style.visibility = "hidden";
  currentSlide(5);
}

var min = 6;
var max = 10;

let slideIndexImg = min;
showSlidesImg(slideIndexImg);

function plusSlidesImg(m) {
  showSlidesImg(slideIndexImg += m);
}

function currentSlideImg(m) {
  showSlidesImg(slideIndexImg = m);
}

function showSlidesImg(m) {
  let o;
  let slidesimg = document.getElementsByClassName("mySlidesImg");
  if (m > max) {slideIndexImg = min}    
  if (m < min) {slideIndexImg = max}
  for (o = 0; o < max; o++) {
    slidesimg[o].style.display = "none";  
  }
  slidesimg[slideIndexImg-1].style.display = "block";
}

function galer1(){
  arowsss.style.display = "block";
  gal1.style.display = "block";
  min = 1;
  max = 5;
}
function galer2(){
  arowsss.style.display = "block";
  gal2.style.display = "block";
  min = 6;
  max = 10;
}
function galer3(){
  arowsss.style.display = "block";
  gal3.style.display = "block";
  min = 11;
  max = 16;
}
function galer4(){
  arowsss.style.display = "block";
  gal4.style.display = "block";
  min = 17;
  max = 19;
}
function galer5(){
  arowsss.style.display = "block";
  gal5.style.display = "block";
  min = 20;
  max = 20;
}