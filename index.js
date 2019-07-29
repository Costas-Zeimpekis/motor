let showSideBar = true;
const sideBar = document.getElementById('sideBar');
const imgShowSideBar = document.getElementById('imgShowSideBar');

function sideMenuShowHandler() {
  showSideBar
    ? (imgShowSideBar.src = './images/burger-open.svg')
    : (imgShowSideBar.src = './images/burger-close.svg');
  sideBar.classList.toggle('flex', showSideBar);
  sideBar.classList.toggle('hidden', !showSideBar);
  showSideBar = !showSideBar;
}
