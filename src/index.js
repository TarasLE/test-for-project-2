
import containerInitialTpl from './templates/initial page/container-initial.hbs';
import CardsInitialTpl from './templates/initial page/card-initial.hbs';




let refMainContainer = document.querySelector('.main-containet');
const refPaginationStartCategories = document.querySelector('.all-button');
console.log(refPaginationStartCategories);
refPaginationStartCategories.addEventListener('click', mainPagination)
var currentCategory;
let currentPageButton = 1;

const listCategories = document.querySelector('.all-button');

const searchCategories = (e) => {
    const elem = e.target;
    if (!elem.classList.contains("number-button")) return
    e.preventDefault();
    let value = elem.getAttribute('work-button');
    // updateState(`/category?value=${value}`);
    // updatedContent()
    console.log(value);
}

listCategories.addEventListener('click', searchCategories)

const categoryNames = {
    sales1: "РОЗПРОДАЖ", 
    sales2: "РІЗНЕ",
    recreationAndSport: "ВІДПОЧИНОК І СПОРТ",
    free: "ВІДДАМ БЕЗКОШТОВНО",
    businessAndServices: "БІЗНЕС ТА ПОСЛУГИ",
    work: "РОБОТА",
    electronics: "ЕЛЕКТРОНІКА",
    property: "НЕРУХОМІСТЬ",
    transport: "ТРАНСПОРТ",
    trade: "ОБМІН"
}

function mainPagination(event) {
    // event.preventDefault();
       
    if (event.target.className = 'work-button') {
        clearCategoryContainer()
        currentPageButton = event.target.innerText;
        renderCategories();
        console.log(currentPageButton);
    }
}

function clearCategoryContainer() {
   refMainContainer.innerHTML = ''; 
}

function fillNameOfContainers(name) {
    let refNameCardContainer = document.querySelector(`.cont-name-${name}`);
    if (name === 'sales') {
        refNameCardContainer.insertAdjacentHTML('beforeend', categoryNames["sales1"] + "<span class ='vert-line'>|</span>" +  categoryNames["sales1"] )
    }
    else {
        refNameCardContainer.insertAdjacentHTML('beforeend', categoryNames[name])
    }
}

function renderCardsToCategories(category) {
        const refOnSaleCardContainer = document.querySelector('.cont-initial-sales');
        var refCurretnCategory = document.querySelector(`.cont-initial-${currentCategory}`)
        refCurretnCategory.insertAdjacentHTML('beforeend', CardsInitialTpl(category));
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
    const url = `https://callboard-backend.herokuapp.com/call?page=${currentPageButton}`;
    
    const response = fetch(url, option).then(response => response.json()).then(data =>
    {
       return data;
    });
    return response;
};

function RenderContainersByPage(element) {
            refMainContainer.insertAdjacentHTML('beforeend', containerInitialTpl(element))
 }


function renderCategories() {
    fetchCategories().then(data => {
        let curData = data;
        let categoriesArr = Object.keys(data);
            categoriesArr.forEach(element => {
                currentCategory = element;
                RenderContainersByPage(element);
                fillNameOfContainers(element);
                renderCardsToCategories(data[element])
                       
        })
    })
}

renderCategories();




