const productsContainer = document.querySelector(".products-container");
const categoriesContainer = document.querySelector(".categories");
const categoriesList = document.querySelectorAll(".category");




const productTemplateCreation = (product) => {
    const {id, prodName, prodPrice, prodImg} = product;

    return `
    <div class="clothing-item">
    <img src=${prodImg} alt=${prodName} class="rotate">
    <div class="clothing-item-info">

    <div class="clothing-item-title">
      <h3>${prodName}</h3>
    </div>

    <div class="clothing-item-price">
      <span>${prodPrice}</span>
    </div>

    <div class="clothing-item-buy">
      <button class="btn-buy"
      data-id =${id}
      data-name =${prodName}
      data-price =${prodPrice}
      data-img=${prodImg}
      >COMPRAR</button>
    </div>
    </div>
    </div>
    `;
};



const renderProducts = (productsList) => {
    productsContainer.innerHTML = productsList.map(productTemplateCreation).join("");
};


const isInactiveFilterBtn = (element) => {
    return (
       element.classList.contains("category") && 
       !element.classList.contains("active")
    )
};

const changeBtnActiveState = (selectedCategory) => {
    const categories = [...categoriesList];
    categories.forEach((categoryBtn) => {
       if (categoryBtn.dataset.category !== selectedCategory) {
           categoryBtn.classList.remove("active");
           return;
       }
       categoryBtn.classList.add("active");
    })
}

const changeFilterState = (btn) => {
    appState.activeFilter = btn.dataset.category;
    changeBtnActiveState(appState.activeFilter);
};

const renderFilteredProducts = () => {
    const filteredProducts = productsData.filter((product) => {
       return product.prodCategory === appState.activeFilter;
    });
    renderProducts(filteredProducts);
};

const applyFilter = ({target}) => {
    if (!isInactiveFilterBtn(target)) {
       return; 
    }
    changeFilterState(target);
    productsContainer.innerHTML = "";
    if (appState.activeFilter) {
       renderFilteredProducts();
       return;
    }
};




const init = () => {
    renderProducts(productsData);
    categoriesContainer.addEventListener("click", applyFilter);
};

init();

