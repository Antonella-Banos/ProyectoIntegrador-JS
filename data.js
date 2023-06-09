const boton = document.querySelector(".btn-buy");


const = productsData [
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

const createBotonData = (botonData) => {
    return `
    <button 
    class="btn-buy" 
    data-id:"${botonData.id}"
    data-name: "${botonData.prodName}"
    data-price: "${botonData.prodPrice}"
    data-img: "${botonData.prodImg}">COMPRAR</button>
    `
}

const renderBoton = ( ) => {
    boton.innerHTML = productsData.map((botonData) => createBotonData(botonData)).join("");

}


const init = ( ) => {
    document.addEventListener("DOMContentLoaded", renderBoton);

}

init();
