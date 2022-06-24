const panels = document.querySelectorAll('.nav-btn');
const layout = document.querySelector('.layout');
panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
    if (panel.id == 'one') {
      layout.classList.add('layoutOne');
    }
    if (panel.id == 'two') {
      layout.classList.add('layoutTwo');
    }
    if (panel.id == 'three') {
      layout.classList.add('layoutThree');
    }
  });
});
function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
  layout.classList.remove('layoutOne');
  layout.classList.remove('layoutTwo');
  layout.classList.remove('layoutThree');
}
