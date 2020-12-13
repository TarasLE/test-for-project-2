import containerOnsaleTpl from './templates/initial page/containerOnSaleGood.hbs';
const refOnsaleContainer = document.querySelector('.cont-on-sale')

console.log(refOnsaleContainer);

function RenderContainerOnsale() {
    refOnsaleContainer.insertAdjacentHTML('beforeend', containerOnsaleTpl());
   
  }
 
RenderContainerOnsale();