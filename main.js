const rangein = document.querySelectorAll('.range-in input');

const pricein = document.querySelectorAll('.price-in input');

const progress = document.querySelector('.slider .pro');




rangein.forEach(input => {
    input.addEventListener('input', e => {
        let minVal = parseInt(rangein[0].value);
        let maxval = parseInt(rangein[1].value);

        let price = 1000;

        if (maxval - minVal < price) {
            if (e.target.className === 'range-min') {
                rangein[0].value = maxval - price;
            } else {
                rangein[1].value = minVal + price;
            }
        } else {
            pricein[0].value = minVal;
            pricein[1].value = maxval;
            progress.style.left = (minVal / rangein[0].max) * 100 + "%";
            progress.style.right = 100 - (maxval / rangein[1].max) * 100 + "%";
        }
    })
})

pricein.forEach(input => {
    input.addEventListener('input', e => {
        let minVal = parseInt(rangein[0].value)
        let maxval = parseInt(rangein[1].value);

        if (pricein[0].value < pricein[1].value) {
            rangein[0].value = pricein[0].value;
            rangein[1].value = pricein[1].value;
        } else {
            rangein[0].value = pricein[0].value;
            rangein[1].value = pricein[1].value + 500;
        }
    })
})


// domenebis sia 

const categories = [{
        name: "უძრავი ქონება",
        id: 1
    },
    {
        name: "ბიზნესი",
        id: 2
    },
    {
        name: "მედია",
        id: 3
    }
]

const domainList = [{
        domainName: "example1",
        domainExtension: ".ge",
        price: 35000,
        categories: [1, 2],
        inCart: 0
    },
    {
        domainName: "example2",
        domainExtension: ".com.ge",
        price: 30000,
        categories: [2, 3],
        inCart: 0
    },
    {
        domainName: "example3",
        domainExtension: ".edu.ge",
        price: 25000,
        categories: [2],
        inCart: 0
    },
    {
        domainName: "example4",
        domainExtension: ".ge",
        price: 20000,
        categories: [3],
        inCart: 0
    },
    {
        domainName: "example5",
        domainExtension: ".org.ge",
        price: 10000,
        categories: [1, 3],
        inCart: 0
    }
]

const wrapper = document.getElementById("sort2-second");

function domFunc(arr) {
    for (domenebi of arr) {
        // shevqmnat div sruli domainistvis

        let card = document.createElement("div");

        // mivanichit class
        card.classList.add('card')

        // shevqmnat ori div 1) saxeli 2) pasi da button

        let domainContainerLeft = document.createElement("div");

        domainContainerLeft.classList.add('domain-left')
        // davamtot arrow da saxeli domainContainerLefts

        let icon = document.createElement("i");
        icon.classList.add("fa-solid", "fa-arrow-down", "fa-2xs");
        let textLeft = document.createElement("h3");
        textLeft.innerHTML = `${domenebi.domainName}${domenebi.domainExtension}`;

        domainContainerLeft.append(icon, textLeft);


        let domainContainerRight = document.createElement("div");

        domainContainerRight.classList.add("domain-right");

        let textRight = document.createElement("h3");
        textRight.innerHTML = `${domenebi.price} ლ `;

        let btn = document.createElement('a');

        btn.classList.add('buy-item');

        btn.setAttribute("id", "btn-market");


        let icon1 = document.createElement("i");
        icon1.classList.add("fa-solid", "fa-cart-shopping", "fa-lg");


        btn.append(icon1);

        domainContainerRight.append(textRight, btn);

        card.append(domainContainerLeft, domainContainerRight);

        wrapper.append(card);


    }
}

domFunc(domainList)

// filter with price 

pricein.forEach(input => {
    input.addEventListener('input', e => {
        let minVal1 = parseInt(pricein[0].value)
        let maxval1 = parseInt(pricein[1].value);

        let doms = document.getElementsByClassName('card');

        for (let i = 0; i < doms.length; i++) {
            if (minVal1 > domainList[i].price || maxval1 < domainList[i].price) {
                doms[i].setAttribute("id", "hide");
            } else {
                doms[i].removeAttribute('id');
            }
        }
    })
})

// filter with categories

let categorFilter = document.querySelectorAll('.categoris input');



console.log(!domainList[0].categories.includes(1));


for (checkbox of categorFilter) {
    checkbox.addEventListener('click', function () {
        if (this.checked == true) {
            if (this.value == "უძრავი ქონება" || this.value == "ბიზნესი" || this.value == "მედია") {
                let sites = document.getElementsByClassName('card');
                for (let i = 0; i < sites.length; i++) {
                    if (this.value == "უძრავი ქონება") {
                        if (!domainList[i].categories.includes(1)) {
                            sites[i].setAttribute('id', 'hide');
                        } else {
                            sites[i].removeAttribute('id');
                        }
                    }
                    if (this.value == "ბიზნესი") {
                        if (!domainList[i].categories.includes(2)) {
                            sites[i].setAttribute('id', 'hide');
                        } else {
                            sites[i].removeAttribute('id');
                        }
                    }
                    if (this.value == "მედია") {
                        if (!domainList[i].categories.includes(3)) {
                            sites[i].setAttribute('id', 'hide');
                        } else {
                            sites[i].removeAttribute('id');
                        }
                    }
                }
            } else {
                sites[i].removeAttribute('id');
            }
        } else if (this.checked == false) {
            let sites = document.getElementsByClassName('card');
            for (let j = 0; j < sites.length; j++) {
                sites[j].removeAttribute('id');
            }
        }
    })
}





const element = document.querySelectorAll("#btn-market");

for (let i = 0; i < element.length; i++) {
    element[i].addEventListener('click', myFun);
}

function myFun(e) {
    this.parentElement.innerHTML = 'კალათაშია';
}



// make hamburger menu

const hamburger = document.querySelector('#bar');
const navMenu = document.querySelectorAll('#header');
const navBar = document.querySelector('#navbar1');

hamburger.addEventListener('click', () => {

    if (navBar.style.display == 'flex') {
        navMenu[1].style.display = "none";
        navBar.style.display = 'none';
    } else {
        navMenu[1].style.display = "flex";
        navBar.style.display = 'flex';
    }
})

// make sort responsivze 

const filter1 = document.querySelector('#mobile-sort1');
const filter2 = document.querySelector('.sort2-first');
const domainsHtml = document.querySelector('#sort2-second');
const exitFilter = document.querySelector('#exit');



filter1.addEventListener('click', () => {
    domainsHtml.style.display = 'none';
    document.querySelector('.mobile-sort2').style.display = 'none';
    filter1.style.display = 'none';
    filter2.style.display = 'block';
    document.querySelector('.sort-active').style.display = 'flex';

    let btnSearch = document.createElement('button');
    let textSearch = document.createElement('p');
    textSearch.innerHTML = 'ძიება';
    btnSearch.append(textSearch);
    btnSearch.classList.add('searching');

    filter2.append(btnSearch);
    document.querySelector('.search-market').style.display = 'none';
})

exitFilter.addEventListener('click', () => {
    domainsHtml.style.display = 'inline-block';
    document.querySelector('.mobile-sort2').style.display = 'block';
    filter1.style.display = 'block';
    filter2.style.display = 'none';
    document.querySelector('.sort-active').style.display = 'none';
})


// make cart numbers 
let carts = document.querySelectorAll('#btn-market');

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(domainList[i]);
        totalCost(domainList[i]);
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product) {
    console.log(product);
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems[product.domainExtension] == undefined) {
        cartItems = {
            ...cartItems,
            [product.domainExtension]: product
        }
    }

    if (cartItems != null) {
        cartItems[product.domainExtension].inCart += 1;
    } else {
        product.inCart = 1;

        cartItems = {
            [product.domainExtension]: product
        }
    }



    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
    let cartCost = localStorage.getItem("totalCost");
    
    if(cartCost != null){
        cartCost = +cartCost;
        localStorage.setItem("totalCost", cartCost + product.price );
    }

    localStorage.setItem("totalCost", product.price);
}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector('.products-container');

    if(cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
                <i class="fa-solid fa-circle-trash"></i>
                <span>${item.domainName}</span>
            </div>
            `
            console.log(item);
        })
    }
}

onLoadCartNumbers();
displayCart();

// make price filter 
