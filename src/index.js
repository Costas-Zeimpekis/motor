let showSideBar = true;
const sideBar = document.getElementById('sideBar');
const imgShowSideBar = document.getElementById('imgShowSideBar');

function sideMenuShowHandler() {
  showSideBar
    ?
    (imgShowSideBar.src = './images/burger-open.svg') :
    (imgShowSideBar.src = './images/burger-close.svg');
  sideBar.classList.toggle('flex', showSideBar);
  sideBar.classList.toggle('hidden', !showSideBar);
  showSideBar = !showSideBar;
}

const slides = Array.from(document.querySelector('.slides').getElementsByTagName('figure'));
const dots = Array.from(document.querySelector('.dots').getElementsByTagName('a'));

let index;
let nextIndex;
let slide;
let startPoint;
let endPoint;

function changeDotsColor(nextIndex) {
  dots.forEach(dot => dot.className = "bg-gray-400")
  dots[nextIndex].className = "bg-gray-800";
}

changeDotsColor(0);

function setActiveDot(step) {
  nextIndex = index + step;
  changeDotsColor(nextIndex)
}

slides.forEach(slide => {
  slide.ontouchstart = function (event) {
    const that = this;
    slide = slides.find(slide => slide.id === that.id)
    index = slides.indexOf(slide);
    startPoint = event.touches[0].screenX;
  }
  slide.ontouchmove = function (event) {
    startPoint > event.touches[0].screenX ? setActiveDot(1) : setActiveDot(-1);
  }
})