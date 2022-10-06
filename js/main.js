// tool box
let toolbox = document.querySelector(".tool-box .open");
let toolboxicon = document.querySelector(".tool-box .open i");
toolbox.addEventListener("click", () => {
  toolbox.parentNode.classList.toggle("open");
  toolboxicon.classList.toggle("fa-spin");
});

// option 1
let colorLi = Array.from(document.querySelectorAll(".tool-box .opt li "));
colorLi.forEach((color) => {
  color.addEventListener("click", (e) => {
    active(colorLi, e);
    let data = color.dataset.color;
    document.documentElement.style.setProperty("--main-color", data);
    localStorage.setItem("color", data);
  });
});

// random Background
let randomholder;
let time = 10000;
let buttons = Array.from(document.querySelectorAll(".tool-box .opt button "));
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    active(buttons, e);
    let data = e.target.dataset.background;
    if (data === "yes") {
      randomholder = setInterval(() => {
        Randombackground();
      }, time);
      localStorage.setItem("random", data);
    } else if (data === "no") {
      clearInterval(randomholder);
      localStorage.setItem("random", data);
    }
  });
});

// Gallery
let imgs = document.querySelectorAll(".gallary .container img");
let popup = document.querySelector(".gallary .popup");
let popup_img = document.querySelector(".gallary .img-holder img");
imgs.forEach((img) => {
  img.onclick = (e) => {
    popup_img.src = e.target.src;
    popup.style.display = "Block";
  };
});
document
  .querySelector(".gallary .popup button")
  .addEventListener("click", () => {
    popup.style.display = "none";
  });

// Skill Sction
// timeline section
// button top
let progressspans = document.querySelectorAll(".progress div div span");
let skillsection = document.querySelector(".skills");

let timelinesection = document.querySelector(".timeline");
let leftside = document.querySelectorAll(".timeline .left .text");
let rightside = document.querySelectorAll(".timeline .right .text");

let aboutsection = document.querySelector(".about-us");
let topbtn = document.querySelector(".scrolltop");
window.onscroll = () => {
  if (window.scrollY >= skillsection.offsetTop - 10) {
    progressspans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  //time line
  if (window.scrollY >= timelinesection.offsetTop) {
    leftside.forEach((left) => {
      left.style.left = 0;
    });
    rightside.forEach((right) => {
      right.style.right = 0;
    });
  }
  //button
  if (window.scrollY >= aboutsection.offsetTop) {
    topbtn.style.display = "block";
  } else if (window.scrollY < aboutsection.offsetTop) {
    topbtn.style.display = "none";
  }
};
topbtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

inputs = document.querySelectorAll("input");
inputs.forEach((inp) => {
  inp.oninput = () => {};
});

//toggle menu
let menu = document.querySelector(" header .container i");
menu.addEventListener("click", () => {
  document
    .querySelector("header .container .links-ul ul")
    .classList.toggle("open");
});

// local storge
let lastcolor = localStorage.getItem("color");
if (lastcolor != null) {
  // color
  document.documentElement.style.setProperty("--main-color", lastcolor);
  colorLi.forEach((color) => {
    if (color.dataset.color == lastcolor) {
      colorLi.forEach((color2) => {
        color2.classList.remove("active");
        color.classList.add("active");
      });
    }
  });
  // random background
  if (localStorage.getItem("random") === "yes") {
    randomholder = setInterval(() => {
      Randombackground();
    }, time);
  }
  if (localStorage.getItem("random") === "no") {
    document
      .querySelector(".tool-box .opt button:nth-child(1)")
      .classList.remove("active");
    document
      .querySelector(".tool-box .opt button:nth-child(2)")
      .classList.add("active");
    clearInterval(randomholder);
  }
}
////////////////// Functions \\\\\\\\\\\\\\\\
// random background Function
function Randombackground() {
  let random = [
    "img01.jpg",
    "img02.jpg",
    "img03.jpg",
    "img04.jpg",
    "img05.jpg",
    "img13.jpg",
  ];
  let randomindex = Math.floor(Math.random() * random.length);
  let background = document.querySelector(".landing");
  background.style.backgroundImage = `url('img/${random[randomindex]}')`;
}
function active(array, e) {
  array.forEach((ar) => {
    ar.classList.remove("active");
    e.target.classList.add("active");
  });
}
