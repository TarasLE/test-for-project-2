import containerInitialTpl from './templates/initial page/container-initial.hbs';
const refInitialContainer = document.querySelector('.cont-initial')

console.log(refOnsaleContainer);

function RenderContainerInitial() {
    refInitialContainer.insertAdjacentHTML('beforeend', containerOnsaleTpl());
   
  }
 
RenderContainerInitial();