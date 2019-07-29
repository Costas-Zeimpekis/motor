let showSideBar = true;
const rectangleBox = document.getElementById('RectangleBox');
const imgShowSideBar = document.getElementById('imgShowSideBar');

function sideMenuShowHandler() {
  showSideBar
    ? (imgShowSideBar.src = './images/burger-open.svg')
    : (imgShowSideBar.src = './images/burger-close.svg');
  rectangleBox.classList.toggle('flex', showSideBar);
  rectangleBox.classList.toggle('hidden', !showSideBar);
  showSideBar = !showSideBar;
}
