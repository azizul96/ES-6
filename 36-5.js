const addProduct = ()=>{
    const productField =document.getElementById('product-name')
    const quantityField =document.getElementById('product-quantity')
    const product = productField.value;
    const quantity = quantityField.value;
    productField.value = "";
    quantityField.value = "";
    displayProduct(product,quantity);
    saveProductLocalStorage(product,quantity);
}

const displayProduct = (product, quantity)=>{
    const productContainer = document.getElementById('product-container')
    const li = document.createElement('li')
    li.innerText = `${product} ${quantity}`
    productContainer.appendChild(li)
}

const getStoredCart = ()=>{
    let cart = {};
    const storedCart = localStorage.getItem('cart')
    if(storedCart){
        cart = JSON.parse(storedCart)
    }
    return cart
}


const saveProductLocalStorage = (product,quantity) =>{
    const cart = getStoredCart();
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringified)
}

const showLocalStorage = () => {
    const saveCart = getStoredCart();
    for(const product in saveCart){
        const quantity = saveCart[product]
        displayProduct(product,quantity)
    }
}
showLocalStorage()