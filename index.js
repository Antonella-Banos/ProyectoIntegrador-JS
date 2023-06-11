const productsContainer = document.querySelector(".products-container");
const categoriesContainer = document.querySelector(".categories");




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


const applyFilter = () => {
    
};




const init = () => {
    renderProducts(productsData);
    categoriesContainer.addEventListener("click", applyFilter);
};

init();

