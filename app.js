/* Variables */
let cars = [
  {
    name: "Bmw 116d",
    image: "./img/bmw.jpg",
    link: "http://www.arabalar.com.tr/bmw/1-serisi/2018/116d-1-5",
  },
  {
    name: "Honda Civic",
    image: "./img/honda.jpg",
    link: "http://www.arabalar.com.tr/honda/civic/2021/1-6-elegance-cvt",
  },
  {
    name: "Mazda CX-3",
    image: "./img/mazda.jpg",
    link: "http://www.arabalar.com.tr/mazda/cx-3/2017/1-5-sky-d-motion",
  },
  {
    name: "Skoda Superb",
    image: "./img/skoda.jpg",
    link: "http://www.arabalar.com.tr/skoda/superb/2020/1-6-tdi-prestige-dsg",
  },
  {
    name: "Volvo S40",
    image: "./img/volvo.jpg",
    link: "http://www.arabalar.com.tr/volvo/s40/2012/1-6-d",
  },
];
const leftArrow = document.querySelector(".fa-arrow-circle-left");
const rightArrow = document.querySelector(".fa-arrow-circle-right");
let index = 0;
let settings = {
  duration: "2000",
  random: false,
};
let clearInterval;
init(settings);

/* add event listener  */
window.addEventListener("load", slideShow(index));
leftArrow.addEventListener("click", previousSlide);
rightArrow.addEventListener("click", nextSlide);

/* functions */
// slide show
function slideShow(i) {
  index = i;
  if (i < 0) {
    index = cars.length - 1;
  } else if (index >= cars.length) {
    index = 0;
  }
  document
    .querySelector(".card-img-top")
    .setAttribute("src", cars[index].image);
  document.querySelector(".card-title").innerHTML = cars[index].name;
  document.querySelector(".btn-primary").setAttribute("href", cars[index].link);
}

// slider with arrows
function previousSlide() {
  index--;
  slideShow(index);
}

function nextSlide() {
  index++;
  slideShow(index);
}

// random slider
function init(settings) {
  let previousIndex;
  clearInterval = setInterval(function () {
    if (settings.random) {
      // aynı slide'I arka arkaya tekrarlamaması için.
      do {
        // random index
        index = Math.floor(Math.random() * cars.length);
      } while (index == previousIndex);
      previousIndex = index;
    } else {
      // artan index
      if (index + 1 == cars.length) {
        index = -1;
      }
      index++;
      slideShow(index);
    }
    slideShow(index);
  }, settings.duration);
}

// resim üzerine gelindiğinde ve çıkıldığında slider'ı durdurur ve devam ettirir.
document
  .querySelector(".card-img-top")
  .addEventListener("mouseenter", function () {
    clearTimeout(clearInterval);
  });
document
  .querySelector(".card-img-top")
  .addEventListener("mouseleave", function () {
    init(settings);
  });
