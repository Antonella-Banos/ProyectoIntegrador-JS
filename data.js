const productsData = [
    {
        id: 1,
        name: "BLUSA VANESSA",
        price: "$8000",
        category: "blusas",
        category: "./assets/img/products/product1.png",
    },
    {
        id: 2,
        name: "TOP ANGELA",
        price: "$7000",
        category: "tops",
        img: "./assets/img/products/product2.png",
    },
    {
        id: 3,
        name: "TOP MARINA",
        price: "$6500",
        category: "tops",
        img: "./assets/img/products/product3.png",
    },
    {
        id: 4,
        name: "TOP ROSALIA",
        price: "$6500",
        category: "tops",
        img: "./assets/img/products/product4.png",
    },
    {
        id: 5, 
        name: "JEANS FAUSTINA",
        price: "$9000",
        category: "jeans",
        img: "./assets/img/products/product5.png",
    },
    {
        id: 6,
        name: "VESTIDO ISABELLA",
        price: "$10000",
        category: "vestidos",
        img: "./assets/img/products/product6.png",
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


