// Sidebar //
import imgOpen from '/assets/images/burger-open.svg';
import imgClose from '/assets/images/burger-close.svg';

let showSideBar = true;
const sideBar = document.getElementById('sideBar');
const imgShowSideBar = document.getElementById('imgShowSideBar');

window.sideMenuShowHandler = () => {
  showSideBar
    ?
    (imgShowSideBar.src = imgOpen) :
    (imgShowSideBar.src = imgClose);


  sideBar.classList.toggle('flex', showSideBar);
  sideBar.classList.toggle('hidden', !showSideBar);
  showSideBar = !showSideBar;
}


//Tap to open//
const editors = {};

window.handleOpenEditor = (item, id) => {
  if (!editors[id]) {
    editors[id] = {};
    editors[id]['element'] = document.getElementById(id);
    editors[id]['button'] = item.firstElementChild;
    editors[id]['icon'] = item.lastElementChild;
  }

  if (!editors[id]['open']) {
    editors[id]['element'].style.display = 'block';
    editors[id]['button'].classList.replace('order-1', 'order-2');
    editors[id]['icon'].classList.replace('order-2', 'order-1');
    editors[id]['icon'].style.transform = "rotate(180deg)";
    editors[id]['open'] = true;
  } else {
    editors[id]['element'].style.display = 'none';
    editors[id]['button'].classList.replace('order-2', 'order-1');
    editors[id]['icon'].classList.replace('order-1', 'order-2');
    editors[id]['icon'].style.transform = "rotate(0deg)";
    editors[id]['open'] = false;
  }
}


//Slider//
const slides = Array.from(document.querySelector('.slides').getElementsByTagName('figure'));
const dots = Array.from(document.querySelector('.dots').getElementsByTagName('a'));

let index;
let nextIndex;
let slide;
let startPoint;
let endPoint;

window.changeDotsColor = (nextIndex) => {
  dots.forEach(dot => dot.className = "bg-gray-400")
  dots[nextIndex].className = "bg-gray-800";
}

changeDotsColor(0);

window.setActiveDot = (step) => {
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