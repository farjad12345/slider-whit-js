const source = [
  {
    img: "1.jpg",
    circle: ".one",
  },
  {
    img: "2.jpg",
    circle: ".two",
  },
  {
    img: "3.jpg",
    circle: ".three",
  },
];
const img = document.querySelector(".img");
var index = 0;
const circles = document.getElementsByClassName("fa-circle");
const leftCursor = document.querySelector(".fa-angle-left");
const rightCurser = document.querySelector(".fa-angle-right");
let x = "";

//start the slider
function start() {
  clearInterval(x);
  x = setInterval(function () {
    if (index == 2) {
      index = 0;
    } else {
      index++;
    }
    for (let i = 0; i < 3; i++) {
      circles[i].classList.remove("color-black");
    }
    document
      .querySelector(`${source[index].circle}`)
      .classList.add("color-black");
    img.setAttribute("src", `images/${source[index].img}`);
  }, 3000);
}
// slider to right and right Arow

function right() {
  clearInterval(x);
  if (index == 2) {
    index = 0;
  } else {
    index++;
  }
  img.setAttribute("src", `images/${source[index].img}`);
  for (let i = 0; i < 3; i++) {
    circles[i].classList.remove("color-black");
  }
  document
    .querySelector(`${source[index].circle}`)
    .classList.add("color-black");
}
// slider to left and left Arow

function left() {
  clearInterval(x);
  console.log(index);
  if (index == 0) {
    index = 2;
    img.setAttribute("src", `images/${source[index].img}`);
    for (let i = 0; i < 3; i++) {
      circles[i].classList.remove("color-black");
    }
    document
      .querySelector(`${source[index].circle}`)
      .classList.add("color-black");
  } else {
    index--;
    img.setAttribute("src", `images/${source[index].img}`);
    for (let i = 0; i < 3; i++) {
      circles[i].classList.remove("color-black");
    }
    document
      .querySelector(`${source[index].circle}`)
      .classList.add("color-black");
  }
}
// circle buttom one
function one() {
  index = 0;
  img.setAttribute("src", `images/${source[index].img}`);
  var circles = document.getElementsByClassName("fa-circle");
  for (let i = 0; i < 3; i++) {
    circles[i].classList.remove("color-black");
  }
  document
    .querySelector(`${source[index].circle}`)
    .classList.add("color-black");
}
// circle buttom two

function two() {
  index = 1;
  img.setAttribute("src", `images/${source[index].img}`);
  var circles = document.getElementsByClassName("fa-circle");
  for (let i = 0; i < 3; i++) {
    circles[i].classList.remove("color-black");
  }
  document
    .querySelector(`${source[index].circle}`)
    .classList.add("color-black");
}
// circle buttom three

function three() {
  index = 2;
  img.setAttribute("src", `images/${source[index].img}`);
  var circles = document.getElementsByClassName("fa-circle");
  for (let i = 0; i < 3; i++) {
    circles[i].classList.remove("color-black");
  }
  document
    .querySelector(`${source[index].circle}`)
    .classList.add("color-black");
}
