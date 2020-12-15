
import containerOnsaleTpl from '../../templates/container-on-sale-good.hbs';
import containerInitialTpl from '../../templates/container-initial.hbs';
import CardsInitialTpl from '../../templates/card-initial.hbs';
import CardsOnSaleTpl from '../../templates/card-onsale.hbs';


const refMainContainer = document.querySelector('.main-containet');
let currentCategory;

const categoryNames = {
    sales1: "РОЗПРОДАЖ", 
    sales2: "РІЗНЕ",
    recreationAndSport: "ВІДПОЧИНОК І СПОРТ",
    free: "ВІДДАМ БЕЗКОШТОВНО",
    businessAndServices: "БІЗНЕС ТА ПОСЛУГИ",
    work: "РОБОТА",
    electronics: "ЕЛЕКТРОНІКА",
    trade: "НЕРУХОМІСТЬ"
}

function fillNameOfContainers() {
   
    
}

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
    const refSaleCardContainer = document.querySelector('.products-CardOnSale');
    // console.log(refSaleCardContainer);
    
    category.map(element => {
        if (element.isOnSale)
        {  refSaleCardContainer.insertAdjacentHTML('beforeend', CardsOnSaleTpl({element})) }
    });
        
        const refCurretnCategory = document.querySelector(`.cont-initial-${currentCategory}`)
        // console.log(refCurretnCategory);
        refCurretnCategory.insertAdjacentHTML('beforeend', CardsInitialTpl(category));
        
}





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
                
                currentCategory = element.split(' ').join('')
                
        return data;
            });
            
            return response;
       
};



function renderContainers(element) {
    // console.log(element);
refMainContainer.insertAdjacentHTML('beforeend', containerInitialTpl(element))
}



function RenderContainerOnsale() {
    refMainContainer.insertAdjacentHTML('afterbegin', containerOnsaleTpl());
   
  }

function RenderContainerInitial() {
    fetchCategories().then(data => {
            
            data.forEach(element => {
                // console.log(element);
                currentCategory = element.split(' ').join(''),
                
                // console.log(currentCategory);
               
                   renderContainers(element.split(' ').join(''))
                //    RenderContainerOnsale()
                   
              
        });
        }
    )
}

function FillContainers() {
    fetchCategories().then(data => {
            
            data.forEach(element => {
                
                cardsMarkUp(element)
                             
        });
        }
    )
}
  
RenderContainerOnsale();
RenderContainerInitial();
FillContainers();

