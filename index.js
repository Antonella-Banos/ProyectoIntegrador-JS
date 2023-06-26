const productsContainer = document.querySelector(".products-container");
const categoriesContainer = document.querySelector(".categories");
const categoriesList = document.querySelectorAll(".category");
const shoppingBagBtn = document.querySelector(".shopping-bag-label");
const shoppingBagMenu = document.querySelector(".shopping-bag");
const menuBtn = document.querySelector(".menu-label");
const barsMenu = document.querySelector(".navbar-list");




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
       appState.currentProductsIndex = 0;
       return;
    }
    renderProducts(appState.products[0]);
};


const toggleShoppingBag = () => {
    shoppingBagMenu.classList.toggle("open-shopping-bag");
    if (barsMenu.classList.contains("open-menu")) {
        barsMenu.classList.remove("open-menu");
        return;
    }
};

const toggleMenu = () => {
    barsMenu.classList.toggle("open-menu");
    if (shoppingBagMenu.classList.contains("open-shopping-bag")) {
        shoppingBagMenu.classList.remove("open-shopping-bag");
        return;
    }
}

const closeOnScroll = () => {
    if (!barsMenu.classList.contains("open-menu") && !shoppingBagMenu.classList.contains("open-shopping-bag")) {
        return
    }
    barsMenu.classList.remove("open-menu");
    shoppingBagMenu.classList.remove("open-shopping-bag");
}

const closeOnClick = (e) => {
    if (!e.target.classList.contains("navbar-link")) {
        return;
    }
    barsMenu.classList.remove("open-menu");
}

const init = () => {
    renderProducts(appState.products[appState.currentProductsIndex]);
    categoriesContainer.addEventListener("click", applyFilter);
    shoppingBagBtn.addEventListener("click", toggleShoppingBag);
    menuBtn.addEventListener("click", toggleMenu);
    window.addEventListener("scroll", closeOnScroll);
    barsMenu.addEventListener("click", closeOnClick);
};

init();

