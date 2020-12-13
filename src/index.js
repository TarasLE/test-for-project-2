// import './css/styles.css';
// import ApiServices from './js/components/apiService'
// import { refs } from './js/components/refs'
// import imageCardTpl from './templates/imageCardTpl.hbs'
// import * as basicLightbox from 'basiclightbox'
// import '../node_modules/basiclightbox/dist/basicLightbox.min.css'
// import '@pnotify/core/dist/BrightTheme.css';
// import '@pnotify/core/dist/PNotify.css';
// import { error } from './js/components/variables'

// console.log("Index.js is ACTIVE");

// const apiServices = new ApiServices();

// let searchQuery = '';
// let scrollSize;
// refs.searchForm.addEventListener('submit', onSearch)
// refs.loadMoreBtn.addEventListener('click', onLoadMore)
// refs.imageContainer.addEventListener('click', onPictureClick)





// async function onSearch(event) {
//     event.preventDefault();
//     clearImageContainer()
//      apiServices.query = event.currentTarget.elements.query.value.trim();
 
//     if (apiServices.query.length === 0) {
//         return
//     } else{
        
    
//     apiServices.resetPage();

//         await apiServices.fetchImages().then(data => {
//            if (data.length == 0) {
//                  error({
//                 delay: 1000,
//                 text: 'Incorrect name. Please check and try again',
//                 type: 'info'
//                 });
//         } else {
//             appendImagesMarkUp(data)
//             }
//         })
//         scrollSize = refs.imageContainer.clientHeight;
//         }
// }
 
// async function onLoadMore() {
//     if (apiServices.query.length === 0 || refs.imageContainer.innerHTML.length == 0) {
//         return
//     } else {
//     const scrollRevers = scrollSize * (apiServices.page - 1);
//     await apiServices.fetchImages().then(appendImagesMarkUp)
//          window.scrollTo({ top: scrollRevers, behavior: "smooth" })
//          }
  
// }

// function appendImagesMarkUp(images) {

//     refs.imageContainer.insertAdjacentHTML('beforeend', imageCardTpl(images))
// }

// function clearImageContainer() {
//     refs.imageContainer.innerHTML = '';
// }

// const instance = basicLightbox.create(`
//     <h1>Dynamic Content</h1>
//     <p>You can set the content of the lightbox with JS.</p>
// `)

// function onPictureClick(event) {
 
//   if (event.target.nodeName !== "IMG") {
//     return
//   } else
  
//     event.preventDefault();
//     const instance = basicLightbox.create(`
//     <img src="${event.target.dataset.source}" width="800" height="600">
// `)
//   instance.show()
//   }
      

// console.log("this is test js for project 2");

// const API_CATEGORIES = 'https://callboard-backend.herokuapp.com/call/categories';

//  async function postData(url = API_CATEGORIES, method = 'GET') {
//       const response = await fetch(url, {
//           method: method,
//           headers: {
//               'Content-Type': 'application/json',
//                Authorization:
//         'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmQzMzYxZjgwZGFiZDAwMTc5ZDdmZjYiLCJzaWQiOiI1ZmQzMzY0MjgwZGFiZDAwMTc5ZDdmZjkiLCJpYXQiOjE2MDc2Nzc1MDYsImV4cCI6MTYwNzY4MTEwNn0.RnvvG68q1yWWaIVr777cLMJg-eNwugnc7x5ldqFuoNM',
       
//           },
//           redirect: 'follow',
//           referrerPolicy: 'no-referrer'
     
//       });
//           return await response.json();
    
//  };


//   function fetchImages() {
//         const option = {
//         headers: {}
//     }

//     const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=cat&page=1&per_page=12&key=19125806-9a56a48a4edb0ea3b4b1e3bdb`
  
//         return fetch(url, option).then(response => response.json()).then(data => {
//                 // this.incrementPage();
//                 return data.hits;
//         });
//   }
    
//   console.log(fetchImages());
// function fetchCategories() {

//     const option = {
//           method: 'GET',
//           headers: {
//               'Content-Type': 'application/json',
//                Authorization:
//         'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmQzMzYxZjgwZGFiZDAwMTc5ZDdmZjYiLCJzaWQiOiI1ZmQzMzY0MjgwZGFiZDAwMTc5ZDdmZjkiLCJpYXQiOjE2MDc2Nzc1MDYsImV4cCI6MTYwNzY4MTEwNn0.RnvvG68q1yWWaIVr777cLMJg-eNwugnc7x5ldqFuoNM',
       
//           },
//     }

//     const url = `https://callboard-backend.herokuapp.com/call/categories`

//     return fetch(url, option).then(response => response.json());
// };
   

// console.log(fetchImages()); 
// console.log(fetchCategories());
//  console.log(postData());





// console.log(refOnsaleContainer);

// function RenderContainerOnsale() {
//     refOnsaleContainer.insertAdjacentHTML('beforeend', containerOnsaleTpl());
   
//   }
 
// RenderContainerOnsale();



// console.log(refOnsaleContainer);

// function RenderContainerInitial() {
//     refInitialContainer.insertAdjacentHTML('beforeend', containerOnsaleTpl());
   
//   }
 
// RenderContainerInitial();

// const API_CATEGORIES = 'https://callboard-backend.herokuapp.com/call/specific/transport';
// async function getCategories(url = API_CATEGORIES, method = 'GET') {
//       const response = await fetch(url, {
//           method: method,
//           headers: {
//               'Content-Type': 'application/json',
//                Authorization:
//         'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmQzMzYxZjgwZGFiZDAwMTc5ZDdmZjYiLCJzaWQiOiI1ZmQzMzY0MjgwZGFiZDAwMTc5ZDdmZjkiLCJpYXQiOjE2MDc2Nzc1MDYsImV4cCI6MTYwNzY4MTEwNn0.RnvvG68q1yWWaIVr777cLMJg-eNwugnc7x5ldqFuoNM',
       
//           },
//           redirect: 'follow',
//           referrerPolicy: 'no-referrer'
     
//       });
//     return await response.json();
// };
  
// console.log(getCategories());
// const categories = [...getCategories()];
// console.log(categories);

// import CardsInitialTpl from './templates/initial page/card-initial.hbs';
// import CardsOnSalelTpl from './templates/initial page/card-on-sale.hbs';

// const refOnSaleCardContainer = document.querySelector('.cards-container-onsale')
// const refInitialCardContainer = document.querySelector('.cards-container-initial')

// function renderCardsToInitialCategory() {
// refInitialCardContainer.insertAdjacentHTML('beforeend', CardsInitialTpl());
// }

// function renderCardsOnSaleCategory() {
// refOnSaleCardContainer.insertAdjacentHTML('beforeend', CardsOnSalelTpl());
// }

// function renderCardsToCategories(category) {
//     if(category.isOnSale){
//         refOnSaleCardContainer.insertAdjacentHTML('beforeend', CardsOnSalelTpl(category))
//     }
//     else {
//         refInitialCardContainer.insertAdjacentHTML('beforeend', CardsInitialTpl(category));
//     }
    
// }

// function cardsMarkUp(element) {
//     fetchGoodsByCategory(element).then(renderCardsToCategories);
// }

// cardsMarkUp("trade");

// function fetchGoodsByCategory(element) {
    
//     const option = {
//           method: 'GET',
//           headers: {
//               'Content-Type': 'application/json',
//                Authorization:
//         'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmQzMzYxZjgwZGFiZDAwMTc5ZDdmZjYiLCJzaWQiOiI1ZmQzMzY0MjgwZGFiZDAwMTc5ZDdmZjkiLCJpYXQiOjE2MDc2Nzc1MDYsImV4cCI6MTYwNzY4MTEwNn0.RnvvG68q1yWWaIVr777cLMJg-eNwugnc7x5ldqFuoNM',
       
//           },
//     }
    
//             const url = `https://callboard-backend.herokuapp.com/call/specific/${element}`
//             const response = fetch(url, option).then(response => response.json()).then(data =>
    
//             {
                
//         return data;
//             });
//             return response;
       
// };
// console.log(fetchGoodsByCategory("trade"));

// renderCardsToCategories( fetchGoodsByCategory("trade") )


// function fetchGoodsByCategory() {
    
//     const option = {
//           method: 'GET',
//           headers: {
//               'Content-Type': 'application/json',
//                Authorization:
//         'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmQzMzYxZjgwZGFiZDAwMTc5ZDdmZjYiLCJzaWQiOiI1ZmQzMzY0MjgwZGFiZDAwMTc5ZDdmZjkiLCJpYXQiOjE2MDc2Nzc1MDYsImV4cCI6MTYwNzY4MTEwNn0.RnvvG68q1yWWaIVr777cLMJg-eNwugnc7x5ldqFuoNM',
       
//           },
//     }
//     fetchCategories().then(data => {
//         data.forEach(element => {
//             const url = `https://callboard-backend.herokuapp.com/call/specific/${element}`
//             const response = fetch(url, option).then(response => response.json()).then(data =>
    
//             {
                
//         return data;
//             });
//             return response;
//         });
       
//     })
// };




   
// console.log(fetchCategories());

import testTpl from './templates/initial page/test.hbs';


// console.log(MainContainer);

// function fillNameCategory(category) {
// MainContainer.insertAdjacentHTML('beforeend',category)
// }

// ----------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------
import containerOnsaleTpl from './templates/initial page/containerOnSaleGood.hbs';
import containerInitialTpl from './templates/initial page/container-initial.hbs';
import CardsInitialTpl from './templates/initial page/card-initial.hbs';
import CardsOnSalelTpl from './templates/initial page/card-on-sale.hbs';


// const refInitialContainer = document.querySelector('.cont-initial')
// const refOnsaleContainer = document.querySelector('.cont-on-sale')
// const refOnSaleCardContainer = document.querySelector('.cont-on-sale')
// const refInitialCardContainer = document.querySelector('.cards-container-initial')
const refMainContainer = document.querySelector('.main-containet')
var currentCategory;
// var categoriesArr = [];

// console.log(refOnSaleCardContainer);
function fetchCategories() {

    const option = {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
               Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmQzMzYxZjgwZGFiZDAwMTc5ZDdmZjYiLCJzaWQiOiI1ZmQzMzY0MjgwZGFiZDAwMTc5ZDdmZjkiLCJpYXQiOjE2MDc2Nzc1MDYsImV4cCI6MTYwNzY4MTEwNn0.RnvvG68q1yWWaIVr777cLMJg-eNwugnc7x5ldqFuoNM',
       
          },
    }

    const url = `https://callboard-backend.herokuapp.com/call/categories`

    const response = fetch(url, option).then(response => response.json()).then(data =>
    {
       
        return data;
    });
    return response;
};

function renderCardsToCategories(category) {
    const refOnSaleCardContainer = document.querySelector('.cont-on-sale');
    // console.log(refOnSaleCardContainer);
    category.map(element => {
        if (element.isOnSale)
        { refOnSaleCardContainer.insertAdjacentHTML('beforeend', CardsInitialTpl({ element })) }
    });
        // console.log(`category from render cards ${category}`);
        var refCurretnCategory = document.querySelector(`.cont-initial-${currentCategory}`)
        refCurretnCategory.insertAdjacentHTML('beforeend', CardsInitialTpl(category));
        
}

// function renderCardsOnSale(category) {
        
//         refOnSaleCardContainer.insertAdjacentHTML('beforeend', CardsInitialTpl(category));
        
// }



function cardsMarkUp(element) {
    fetchGoodsByCategory(element).then(renderCardsToCategories);
    
}


function fetchGoodsByCategory(element) {
    
    const option = {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
               Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmQzMzYxZjgwZGFiZDAwMTc5ZDdmZjYiLCJzaWQiOiI1ZmQzMzY0MjgwZGFiZDAwMTc5ZDdmZjkiLCJpYXQiOjE2MDc2Nzc1MDYsImV4cCI6MTYwNzY4MTEwNn0.RnvvG68q1yWWaIVr777cLMJg-eNwugnc7x5ldqFuoNM',
       
          },
    }
    
            const url = `https://callboard-backend.herokuapp.com/call/specific/${element}`
            const response = fetch(url, option).then(response => response.json()).then(data =>
             
            {
                // data.map(element => { console.log(`from fetch element.id ${element.userId}`) })
                // data.map(element => { if (element.isOnSale) { renderCardsOnSale(element) } })
                // data.map(element => { if(element.isOnSale){console.log(element)}})
                // console.log(`from fetch ${ data }`);
                currentCategory = element.split(' ').join('')
                // console.log(`from fetch ${currentCategory}`);
        return data;
            });
            // console.log(response);
            return response;
       
};



function renderContainers(element) {
refMainContainer.insertAdjacentHTML('beforeend', containerInitialTpl(element))
}



function RenderContainerOnsale() {
    refMainContainer.insertAdjacentHTML('afterbegin', containerOnsaleTpl());
   
  }

function RenderContainerInitial() {
    fetchCategories().then(data => {
            
            data.forEach(element => {
                currentCategory = element.split(' ').join(''),
                // console.log(currentCategory),
                    renderContainers(element.split(' ').join(''))
                    // console.log(`render container ${element}`) ;
                // cardsMarkUp(element)
                //  console.log(`render cards ${element}`) ;
              
        });
        }
    )
}

function FillContainers() {
    fetchCategories().then(data => {
            
            data.forEach(element => {
                // currentCategory = element.split(' ').join(''),
                // categoriesArr.push(currentCategory)
                cardsMarkUp(element)
                             
        });
        }
    )
}
  
RenderContainerOnsale();
RenderContainerInitial();
FillContainers();
// console.log(categoriesArr);
// console.log("test");
// const textT = 'bussiness and work';
// textT.trim()
// console.log(textT.trim(input));
