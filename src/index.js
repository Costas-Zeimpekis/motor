// Sidebar //
import imgOpen from '/assets/images/burger-open.svg';
import imgClose from '/assets/images/burger-close.svg';
import imgUp from './assets/images/chevron-top-solid.svg';
import imgDown from './assets/images/chevron-bottom-solid.svg';

let showSideBar = true;
const sideBar = document.getElementById('sideBar');
const imgShowSideBar = document.getElementById('imgShowSideBar');

window.sideMenuShowHandler = () => {
  showSideBar
    ? (imgShowSideBar.src = imgOpen)
    : (imgShowSideBar.src = imgClose);

  sideBar.classList.toggle('flex', showSideBar);
  sideBar.classList.toggle('hidden', !showSideBar);
  showSideBar = !showSideBar;
};

//Tap to open//
// const tabcontents = document.querySelectorAll('.tabcontent');
// window.onresize = tabcontentWindowResize;

// function tabcontentWindowResize() {
//   if (window.innerWidth > 768) {
//     Array.from(tabcontents).forEach(
//       tabcontent => (tabcontent.style.height = '300px')
//     );
//   }
// }

const editors = {};

window.handleOpenEditor = (item, id) => {
  if (!editors[id]) {
    editors[id] = {};
    editors[id]['element'] = document.getElementById(id);
    editors[id]['button'] = item.firstElementChild;
    editors[id]['icon'] = item.lastElementChild;
  }

  if (!editors[id]['open']) {
    editors[id]['element'].setAttribute(
      'style',
      'height: 300px; margin-bottom: 55px;'
    );
    editors[id]['button'].classList.replace('order-1', 'order-2');
    editors[id]['icon'].classList.replace('order-2', 'order-1');
    editors[id]['icon'].src = imgUp;
    editors[id]['open'] = true;
  } else {
    editors[id]['element'].setAttribute(
      'style',
      'height: 0; margin-bottom: 0;'
    );
    editors[id]['button'].classList.replace('order-2', 'order-1');
    editors[id]['icon'].classList.replace('order-1', 'order-2');
    editors[id]['icon'].src = imgDown;
    editors[id]['open'] = false;
  }
};

//Editor Tabs //
const editorsTabs = {};

window.chooseEditorTabs = item => {
  const parent = item.parentElement.parentElement;

  if (!editorsTabs[parent]) {
    editorsTabs[parent.id] = {};
    editorsTabs[parent.id]['buttons'] = parent.getElementsByTagName('button');
    editorsTabs[parent.id]['codes'] = parent.getElementsByTagName('code');
  }

  const buttons = Array.from(editorsTabs[parent.id]['buttons']);
  const codes = Array.from(editorsTabs[parent.id]['codes']);

  buttons.forEach(button => {
    if (button === item) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });

  codes.forEach(code => {
    if (code.classList.contains(item.name)) {
      code.style.display = 'inline';
    } else {
      code.style.display = 'none';
    }
  });
};

//Slider//
let index;
let nextIndex;
let startPoint;

const slides = Array.from(
  document.querySelector('.slides').getElementsByTagName('figure')
);
const dots = Array.from(
  document.querySelector('.dots').getElementsByTagName('a')
);

window.changeDotsColor = nextIndex => {
  dots.forEach(dot => (dot.className = 'bg-gray-400'));
  if (nextIndex >= 0 && nextIndex <= slides.length - 1)
    dots[nextIndex].className = 'bg-gray-800';
};

changeDotsColor(0);

window.setActiveDot = step => {
  nextIndex = index + step;
  if (nextIndex >= 0 && nextIndex <= slides.length - 1)
    changeDotsColor(nextIndex);
};

slides.forEach(slide => {
  slide.ontouchstart = function(event) {
    const that = this;
    slide = slides.find(slide => slide.id === that.id);
    index = slides.indexOf(slide);
    startPoint = event.touches[0].screenX;
  };
  slide.ontouchmove = function(event) {
    startPoint > event.touches[0].screenX ? setActiveDot(1) : setActiveDot(-1);
  };
});
