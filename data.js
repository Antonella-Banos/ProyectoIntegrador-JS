const productsData = [
    {
        id: 1,
        prodName: "BLUSA VANESSA",
        prodPrice: "$8000",
        prodCategory: "blusas",
        prodImg: "./assets/img/products/product1.png",
    },
    {
        id: 2,
        prodName: "TOP ANGELA",
        prodPrice: "$7000",
        prodCategory: "tops",
        prodImg: "./assets/img/products/product2.png",
    },
    {
        id: 3,
        prodName: "TOP MARINA",
        prodPrice: "$6500",
        prodCategory: "tops",
        prodImg: "./assets/img/products/product3.png",
    },
    {
        id: 4,
        prodName: "TOP ROSALIA",
        prodPrice: "$6500",
        prodCategory: "tops",
        prodImg: "./assets/img/products/product4.png",
    },
    {
        id: 5, 
        prodName: "JEANS FAUSTINA",
        prodPrice: "$9000",
        prodCategory: "jeans",
        prodImg: "./assets/img/products/product5.png",
    },
    {
        id: 6,
        prodName: "VESTIDO ISABELLA",
        prodPrice: "$10000",
        prodCategory: "vestidos",
        prodImg: "./assets/img/products/product6.png",
    },
];


const showAllProducts = (size) => {
    let productsList = [];
    for (let i = 0; i < productsData.length; i += size) {
        productsList.push(productsData.slice(i, i + size));
    };
    return productsList;
}

const appState = {
    products: showAllProducts(6),
    currentProductsIndex: 0,
    productsLimit: showAllProducts(6).length,
    activeFilter: null,
};


