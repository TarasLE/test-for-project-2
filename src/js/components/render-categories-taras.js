
import containerOnsaleTpl from './templates/initial page/containerOnSaleGood.hbs';
import containerInitialTpl from './templates/initial page/container-initial.hbs';
import CardsInitialTpl from './templates/initial page/card-initial.hbs';





// const refMainContainer = document.querySelector('.main-containet')
// var currentCategory;

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

//     const response = fetch(url, option).then(response => response.json()).then(data =>
//     {
//        return data;
//     });
//     return response;
// };

// function renderCardsToCategories(category) {
//     const refOnSaleCardContainer = document.querySelector('.cont-on-sale');
    
//     category.map(element => {
//         if (element.isOnSale)
//         { refOnSaleCardContainer.insertAdjacentHTML('beforeend', CardsInitialTpl({ element })) }
//     });
        
//         var refCurretnCategory = document.querySelector(`.cont-initial-${currentCategory}`)
//         refCurretnCategory.insertAdjacentHTML('beforeend', CardsInitialTpl(category));
        
// }


// function cardsMarkUp(element) {
//     fetchGoodsByCategory(element).then(renderCardsToCategories);
    
// }


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
                
//                 currentCategory = element.split(' ').join('')
                
//         return data;
//             });
            
//             return response;
       
// };


// function renderContainers(element) {
// refMainContainer.insertAdjacentHTML('beforeend', containerInitialTpl(element))
// }


// function RenderContainerOnsale() {
//     refMainContainer.insertAdjacentHTML('afterbegin', containerOnsaleTpl());
   
//   }

// function RenderContainerInitial() {
//     fetchCategories().then(data => {
            
//             data.forEach(element => {
//                 currentCategory = element.split(' ').join(''),
               
//                     renderContainers(element.split(' ').join(''))
               
//         });
//         }
//     )
// }

// function FillContainers() {
//     fetchCategories().then(data => {
            
//             data.forEach(element => {
                
//                 cardsMarkUp(element)
//          });
//         }
//     )
// }
  
// RenderContainerOnsale();
// RenderContainerInitial();
// FillContainers();

function fetchCategories() {
    let page=1;
    const option = {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
               Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmQzMzYxZjgwZGFiZDAwMTc5ZDdmZjYiLCJzaWQiOiI1ZmQzMzY0MjgwZGFiZDAwMTc5ZDdmZjkiLCJpYXQiOjE2MDc2Nzc1MDYsImV4cCI6MTYwNzY4MTEwNn0.RnvvG68q1yWWaIVr777cLMJg-eNwugnc7x5ldqFuoNM',
       
          },
    }
    const url = `https://callboard-backend.herokuapp.com/call?${page}`;
    const url2 = `https://callboard-backend.herokuapp.com/call/categories`

    const response = fetch(url, option).then(response => response.json()).then(data =>
    {
       return data;
    });
    return response;
};

// fetchCategories();