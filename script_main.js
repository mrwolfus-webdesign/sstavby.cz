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
          arrowd.href = "#"+sections[3].id
          arrowu.href = "#"+sections[1].id
        }
        if (section.id === sections[3].id){
          arrowd.href = "#"+sections[4].id
          arrowu.href = "#"+sections[2].id
        }
        if (section.id === sections[4].id){
          arrowd.href = "#"+sections[5].id
          arrowu.href = "#"+sections[3].id
        }
        if (section.id === sections[5].id){
          arrowd.href = "#"+sections[6].id
          arrowu.href = "#"+sections[4].id
        }
        if (section.id === sections[6].id){
          arrowu.href = "#"+sections[5].id
        }
    }
  });
});


const sections1 = document.querySelectorAll('body > section');
var arrowdown = document.getElementById("arrowdown");

window.addEventListener('scroll', () => {
  sections1.forEach((section1, key) => {
    const bounding = section1.getBoundingClientRect();
    if ((bounding.bottom >= 0 && bounding.bottom <= window.innerHeight)
      || (bounding.top >= -window.innerHeight && bounding.top <= 0)) {
        if (section1.id === sections1[6].id) {
          arrowdown.style.opacity = "0"
          arrowdown.style.visibility = "hidden"
        } else {
          arrowdown.style.opacity = "1"
          arrowdown.style.visibility = "visible"
        }
    }
  });
});

function myFunction1(){
  document.getElementById("popup_services").style.visibility = "visible";
  document.getElementById("a1").style.display = "block";
};

function myFunction2(){
  document.getElementById("popup_services").style.visibility = "visible";
  document.getElementById("a2").style.display = "block";
};

function myFunction3(){
  document.getElementById("popup_services").style.visibility = "visible";
  document.getElementById("a3").style.display = "block";
};
function myFunction4(){
  document.getElementById("popup_services").style.visibility = "visible";
  document.getElementById("a4").style.display = "block";
};
function myFunction5(){
  document.getElementById("popup_services").style.visibility = "visible";
  document.getElementById("a5").style.display = "block";
};
function myFunction6(){
  document.getElementById("popup_services").style.visibility = "visible";
  document.getElementById("a6").style.display = "block";
};
function myFunction7(){
  document.getElementById("popup_services").style.visibility = "visible";
  document.getElementById("a7").style.display = "block";
};
function myFunction8(){
  document.getElementById("popup_services").style.visibility = "visible";
  document.getElementById("a8").style.display = "block";
};

const popup = document.getElementById("popup_services");
popup.addEventListener('click', () => {
  popup.style.visibility = "hidden";
  document.getElementById("a1").style.display = "none";
  document.getElementById("a2").style.display = "none";
  document.getElementById("a3").style.display = "none";
  document.getElementById("a4").style.display = "none";
  document.getElementById("a5").style.display = "none";
  document.getElementById("a6").style.display = "none";
  document.getElementById("a7").style.display = "none";
  document.getElementById("a8").style.display = "none";
});

window.addEventListener('scroll', function() {
  document.getElementById("popup_services").style.visibility = "hidden";
  document.getElementById("a1").style.display = "none";
  document.getElementById("a2").style.display = "none";
  document.getElementById("a3").style.display = "none";
  document.getElementById("a4").style.display = "none";
  document.getElementById("a5").style.display = "none";
  document.getElementById("a6").style.display = "none";
  document.getElementById("a7").style.display = "none";
  document.getElementById("a8").style.display = "none";
  document.getElementById("popup_reference").style.visibility = "hidden";
  arowsss.style.display = "none";
  ref1.style.display = "none";
  ref2.style.display = "none";
  ref3.style.display = "none";
  ref4.style.display = "none";
  ref5.style.display = "none";
  ref6.style.display = "none";
  ref7.style.display = "none";
  ref8.style.display = "none";
  ref9.style.display = "none";
  ref10.style.display = "none";
  ref11.style.display = "none";
  ref12.style.display = "none";
  ref13.style.display = "none";
  ref14.style.display = "none";
  ref15.style.display = "none";
  ref16.style.display = "none";
  ref17.style.display = "none";
  ref18.style.display = "none";
  ref19.style.display = "none";
  ref20.style.display = "none";
  ref21.style.display = "none";
  ref22.style.display = "none";
  ref23.style.display = "none";
  ref24.style.display = "none";
  ref25.style.display = "none";
})

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



var min = 1;
var max = 6;

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

function myFunctionR1(){
  document.getElementById("popup_reference").style.visibility = "visible";
  arowsss.style.display = "block";
};

const popupr = document.getElementById("popup_reference");
const arowsss = document.getElementById("arrowsss");
const ref1 = document.getElementById("ref1");
const ref2 = document.getElementById("ref2");
const ref3 = document.getElementById("ref3");
const ref4 = document.getElementById("ref4");
const ref5 = document.getElementById("ref5");
const ref6 = document.getElementById("ref6");
const ref7 = document.getElementById("ref7");
const ref8 = document.getElementById("ref8");
const ref9 = document.getElementById("ref9");
const ref10 = document.getElementById("ref10");
const ref11 = document.getElementById("ref11");
const ref12 = document.getElementById("ref12");
const ref13 = document.getElementById("ref13");
const ref14 = document.getElementById("ref14");
const ref15 = document.getElementById("ref15");
const ref16 = document.getElementById("ref16");
const ref17 = document.getElementById("ref17");
const ref18 = document.getElementById("ref18");
const ref19 = document.getElementById("ref19");
const ref20 = document.getElementById("ref20");
const ref21 = document.getElementById("ref21");
const ref22 = document.getElementById("ref22");
const ref23 = document.getElementById("ref23");
const ref24 = document.getElementById("ref24");
const ref25 = document.getElementById("ref25");
popupr.addEventListener('click', (eventa) => {
  if (!arowsss.contains(eventa.target) && !all1.contains(eventa.target) && !all2.contains(eventa.target) && !all3.contains(eventa.target)){
    popupr.style.visibility = "hidden";
    arowsss.style.display = "none";
    ref1.style.display = "none";
    ref2.style.display = "none";
    ref3.style.display = "none";
    ref4.style.display = "none";
    ref5.style.display = "none";
    ref6.style.display = "none";
    ref7.style.display = "none";
    ref8.style.display = "none";
    ref9.style.display = "none";
    ref10.style.display = "none";
    ref11.style.display = "none";
    ref12.style.display = "none";
    ref13.style.display = "none";
    ref14.style.display = "none";
    ref15.style.display = "none";
    ref16.style.display = "none";
    ref17.style.display = "none";
    ref18.style.display = "none";
    ref19.style.display = "none";
    ref20.style.display = "none";
    ref21.style.display = "none";
    ref22.style.display = "none";
    ref23.style.display = "none";
    ref24.style.display = "none";
    ref25.style.display = "none";
    all_r1.style.display = "none";
  }
});

function myFunctionRG1(){
  arowsss.style.display = "block";
  ref1.style.display = "block";
  min = 1;
  max = 6;
}
function myFunctionRG2(){
  arowsss.style.display = "block";
  ref2.style.display = "block";
  min = 7;
  max = 12;
}
function myFunctionRG3(){
  arowsss.style.display = "block";
  ref3.style.display = "block";
  min = 13;
  max = 21;
}
function myFunctionRG4(){
  arowsss.style.display = "block";
  ref4.style.display = "block";
  min = 22;
  max = 25;
}
function myFunctionRG5(){
  arowsss.style.display = "block";
  ref5.style.display = "block";
  min = 26;
  max = 34;
}
function myFunctionRG6(){
  arowsss.style.display = "block";
  ref6.style.display = "block";
  min = 35;
  max = 48;
}
function myFunctionRG7(){
  arowsss.style.display = "block";
  ref7.style.display = "block";
  min = 49;
  max = 54;
}
function myFunctionRG8(){
  arowsss.style.display = "block";
  ref8.style.display = "block";
  min = 55;
  max = 60;
}
function myFunctionRG9(){
  arowsss.style.display = "block";
  ref9.style.display = "block";
  min = 61;
  max = 75;
}
function myFunctionRG10(){
  arowsss.style.display = "block";
  ref10.style.display = "block";
  min = 76;
  max = 84;
}
function myFunctionRG11(){
  arowsss.style.display = "block";
  ref11.style.display = "block";
  min = 85;
  max = 88;
}
function myFunctionRG12(){
  arowsss.style.display = "block";
  ref12.style.display = "block";
  min = 89;
  max = 92;
}
function myFunctionRG13(){
  arowsss.style.display = "block";
  ref13.style.display = "block";
  min = 93;
  max = 95;
}
function myFunctionRG14(){
    arowsss.style.display = "block";
    ref14.style.display = "block";
    min = 96;
    max = 103;
}
function myFunctionRG15(){
  arowsss.style.display = "block";
  ref15.style.display = "block";
  min = 104;
  max = 107;
}
function myFunctionRG16(){
  arowsss.style.display = "block";
  ref16.style.display = "block";
  min = 108;
  max = 124;
}
function myFunctionRG17(){
  arowsss.style.display = "block";
  ref17.style.display = "block";
  min = 125;
  max = 128;
}
function myFunctionRG18(){
  arowsss.style.display = "block";
  ref18.style.display = "block";
  min = 129;
  max = 132;
}
function myFunctionRG19(){
  arowsss.style.display = "block";
  ref19.style.display = "block";
  min = 133;
  max = 136;
}
function myFunctionRG20(){
  arowsss.style.display = "block";
  ref20.style.display = "block";
  min = 137;
  max = 139;
}
function myFunctionRG21(){
  arowsss.style.display = "block";
  ref21.style.display = "block";
  min = 140;
  max = 144;
}
function myFunctionRG22(){
  arowsss.style.display = "block";
  ref22.style.display = "block";
  min = 145;
  max = 155;
}
function myFunctionRG23(){
  arowsss.style.display = "block";
  ref23.style.display = "block";
  min = 156;
  max = 158;
}
function myFunctionRG24(){
  arowsss.style.display = "block";
  ref24.style.display = "block";
  min = 159;
  max = 165;
}
function myFunctionRG25(){
  arowsss.style.display = "block";
  ref25.style.display = "block";
  min = 166;
  max = 171;
}

const all_r1 = document.getElementById("all_r");
const all1 = document.getElementById("all_1");
const all2 = document.getElementById("all_2");
const all3 = document.getElementById("all_3");
function all_r(){
  popupr.style.visibility = "visible";
  all_r1.style.display = "grid";
}

function allfirst(){
  all_r1.style.display = "none";
  arowsss.style.display = "block";
  ref7.style.display = "block";
  min = 49;
  max = 54;
}
function allsecond(){
  all_r1.style.display = "none";
  arowsss.style.display = "block";
  ref8.style.display = "block";
  min = 55;
  max = 60;
}
function allthird(){
  all_r1.style.display = "none";
  arowsss.style.display = "block";
  ref9.style.display = "block";
  min = 61;
  max = 75;
}
function allfourth(){
  all_r1.style.display = "none";
  arowsss.style.display = "block";
  ref10.style.display = "block";
  min = 76;
  max = 84;
}
function allfifth(){
  all_r1.style.display = "none";
  arowsss.style.display = "block";
  ref11.style.display = "block";
  min = 85;
  max = 88;
}
function allsixth(){
  all_r1.style.display = "none";
  arowsss.style.display = "block";
  ref12.style.display = "block";
  min = 89;
  max = 92;
}
function allseven(){
  all_r1.style.display = "none";
  arowsss.style.display = "block";
  ref13.style.display = "block";
  min = 93;
  max = 95;
}
function alleight(){
  all_r1.style.display = "none";
  arowsss.style.display = "block";
  ref14.style.display = "block";
  min = 96;
  max = 103;
}
function allnine(){
  all_r1.style.display = "none";
  arowsss.style.display = "block";
  ref15.style.display = "block";
  min = 104;
  max = 107;
}
function alleleven(){
  all_r1.style.display = "none";
  arowsss.style.display = "block";
  ref16.style.display = "block";
  min = 108;
  max = 124;
}
function alltwelve(){
  all_r1.style.display = "none";
  arowsss.style.display = "block";
  ref17.style.display = "block";
  min = 125;
  max = 128;
}
function allthirteen(){
  all_r1.style.display = "none";
  arowsss.style.display = "block";
  ref18.style.display = "block";
  min = 129;
  max = 132;
}
function allfourtheen(){
  all_r1.style.display = "none";
  arowsss.style.display = "block";
  ref19.style.display = "block";
  min = 133;
  max = 136;
}
function allfiftheen(){
  all_r1.style.display = "none";
  arowsss.style.display = "block";
  ref20.style.display = "block";
  min = 137;
  max = 139;
}
function all2_1(){
  all_r1.style.display = "none";
  arowsss.style.display = "block";
  ref1.style.display = "block";
  min = 1;
  max = 6;
}
function all2_2(){
  all_r1.style.display = "none";
  arowsss.style.display = "block";
  ref3.style.display = "block";
  min = 13;
  max = 21;
}
function all2_3(){
  all_r1.style.display = "none";
  arowsss.style.display = "block";
  ref4.style.display = "block";
  min = 22;
  max = 25;
}
function all2_4(){
  all_r1.style.display = "none";
  arowsss.style.display = "block";
  ref5.style.display = "block";
  min = 26;
  max = 34;
}
function all2_5(){
  all_r1.style.display = "none";
  arowsss.style.display = "block";
  ref21.style.display = "block";
  min = 140;
  max = 144;
}
function all2_6(){
  all_r1.style.display = "none";
  arowsss.style.display = "block";
  ref22.style.display = "block";
  min = 145;
  max = 155;
}
function all2_7(){
  all_r1.style.display = "none";
  arowsss.style.display = "block";
  ref25.style.display = "block";
  min = 166;
  max = 171;
}
function all3_1(){
  all_r1.style.display = "none";
  arowsss.style.display = "block";
  ref2.style.display = "block";
  min = 7;
  max = 12;
}
function all3_2(){
  all_r1.style.display = "none";
  arowsss.style.display = "block";
  ref6.style.display = "block";
  min = 35;
  max = 48;
}
function all3_3(){
  all_r1.style.display = "none";
  arowsss.style.display = "block";
  ref23.style.display = "block";
  min = 156;
  max = 158;
}
function all3_4(){
  all_r1.style.display = "none";
  arowsss.style.display = "block";
  ref24.style.display = "block";
  min = 159;
  max = 165;
}