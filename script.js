function myFunction() {

    event.preventDefault();

    var fname = document.getElementById("fname").value;

    var mail = document.getElementById("email").value;

    alert(fname+", thank you for your details. We will be in touch via "+mail+" shortly.");

    var x=document.getElementById("form");

    x.style.display = "none";

}

// Cart JS - Daniel Hahn 
let carts = document.querySelectorAll('.btn');

//shop page
let products = [
    {
        name: 'Babolat Pure Strike',
        tag: 'Babolat Pure Strike 179 euro',
        price: 179.00,
        inCart: 0
    },
    {
        name: 'HEAD Extreme Tour',
        tag: 'HEAD Extreme Tour  180euro',
        price: 180.00,
        inCart: 0
    },
    {
        name: 'HEAD Graphene 360+',
        tag: 'HEAD Graphene 360+  150euro',
        price: 150.00,
        inCart: 0
    },
    {
        name: 'Babolat Team Clay Can of 4 Balls',
        tag: 'Babolat Team Can of 4 Balls 6.95 euro',
        price: 6.95,
        inCart: 0
    },
    {
        name: 'Babolat Team Clay Can of 4 Balls',
        tag: 'Babolat Team Clay Can of 4 Balls 5.85 euro',
        price: 5.85,
        inCart: 0
    },
    {
        name: 'BIPACK of 4 Dunlop Austrtalion Open Balls',
        tag: 'BIPACK OF 4 DUNLOP AUSTRALIAN OPEN BALLS 12.90 euro',
        price: 12.90,
        inCart: 0
    },
    {
        name: 'ADIDAS ADIZERO UBERSONIC 4 CLAY COURT SHOES',
        tag: 'ADIDAS ADIZERO UBERSONIC 4 CLAY COURT SHOES 109e',
        price: 109.00,
        inCart: 0
    },
    {
        name: 'ADIDAS BARRICADE ALL COURT SHOES',
        tag: 'ADIDAS BARRICADE ALL COURT SHOES 112e',
        price: 112.00,
        inCart: 0
    },
    {
        name: 'ASICS COURT FF NEW YORK ALL COURT SHOES',
        tag: 'ASICS COURT FF CORIC NEW YORK ALL COURT SHOES 144e',
        price: 144.00,
        inCart: 0
    },
    {
        name: 'ADIDAS A. RDY VISOR',
        tag: 'ADIDAS A. RDY VISOR 14.90e',
        price: 14.90,
        inCart: 0
    },
    {
        name: 'ADIDAS ASK CREW MC SOCKS',
        tag: 'ADIDAS ASK CREW MC SOCKS 12e',
        price: 12.00,
        inCart: 0
    },
    {
        name: 'ADIDAS WOMEN COURT DRESS',
        tag: 'ADIDAS DRESS 54.94e',
        price: 54.94,
        inCart: 0
    },
    {
        name: '10 OVERGRIPS TOURNA GRIP ORIGINAL XL',
        tag: '10 OVERGRIPS TOURNA GRIP ORIGINAL XL 18.90e',
        price: 18.90,
        inCart: 0
    },
    {
        name: '30 BABOLAT VS ORIGINAL OVERGRIPS',
        tag: '30 BABOLAT VS ORIGINAL OVERGRIPS 39.95e',
        price: 39.95,
        inCart: 0
    },
    {
        name: '30 DUNLOP SUPER TAC OVERGRIPS',
        tag: '30 DUNLOP SUPER TAC OVERGRIPS 69.95e',
        price: 69.95,
        inCart: 0
    },
    {
        name: 'MINI RACQUET ULTRA 100 MINIONS',
        tag: 'minion1',
        price: 32.00,
        inCart: 0
    },
    {
        name: 'JUNIOR WILSON MINIONS 25 PACK',
        tag: 'minion2',
        price: 59.90,
        inCart: 0
    },
    {
        name: 'WILSON MINIONS BOX O FUN VIBRATION DAMPENERS',
        tag: 'minion3',
        price: 96.00,
        inCart: 0
    }
]

//sale page

//new page

for(let i=0; i<carts.length; i++){
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers){
        document.querySelector('.cart span').textContent=productNumbers;
    }
}

function cartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers+1);
        document.querySelector('.cart span').textContent=productNumbers+1;
    }
    else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent=1;
    }
    setItems(products);
}

function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    if(cartItems != null){
        if(cartItems[product.tag] == undefined){
            cartItems= {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart +=1;
    }
    else{
        product.inCart=1;
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify
    (cartItems));
}

function totalCost(product){
    let cartCost=localStorage.getItem('totalCost');
    if(cartCost != null){
        cartCost=parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    }
    else{
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart(){
    let cartItems = localStorage.getItem('productsInCart')
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost=localStorage.getItem('totalCost');
    if(cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
                <ion-icon name="close-circle"></ion-icon>
                <img src="./images/${item.tag}.jpg">
                <span>${item.name}</span>
            </div>
            <div class="price">€${item.price}</div>
            <div class="quantity">
                <ion-icon class="decrease" name="arrow-dropleft-circle"></ion-icon>
                <span>${item.inCart}</span>
                <ion-icon class=increase" name="arrow-dropright-circle"></ion-icon>
            </div>
            <div class="total">
                €${item.inCart * item.price}
            </div>
            `;
        });

        product.container.innerHTML += `
        <div class="basketTotalContainer">
            <h4 class="basketTotalTitle">
                Basket Total
            </h4>
            <h4 class="basketTotal">
                €${cartCost}
            </h4>
        `;

    }
}

onLoadCartNumbers();