const cart = document.querySelector('.cart__products');
const products = document.querySelectorAll('.product')

for (let index = 0; index < products.length; index++) {
    const product = products[index];
    const img = document.querySelectorAll('.product__image')[index]
    const quantityDec = document.querySelectorAll('.product__quantity-control_dec')[index]
    const quantityInc = document.querySelectorAll('.product__quantity-control_inc')[index]
    const quantityValue = document.querySelectorAll('.product__quantity-value')[index]
    const add = document.querySelectorAll('.product__add')[index]

    quantityDec.addEventListener('click', (e) => {
        if (Number(quantityValue.textContent) === 1) {
            return
        }
        quantityValue.textContent = Number(quantityValue.textContent) - 1
    })

    quantityInc.addEventListener('click', (e) => {
        quantityValue.textContent = Number(quantityValue.textContent) + 1
    })

    add.addEventListener('click', (e) => {
        for (let index = 0; index < cart.children.length; index++) {
            if (cart.children[index].getAttribute('data-id') === product.getAttribute('data-id')) {
                cart.children[index].children[1].textContent = Number(quantityValue.textContent) + Number(cart.children[index].children[1].textContent)
                return
            } 
        }

        const newProduct = document.createElement('div')
        cart.appendChild(newProduct)
        newProduct.classList.add('cart__product')
        newProduct.setAttribute('data-id', product.getAttribute('data-id'))

        const imgInCart = document.createElement('img')
        const quantityInCart = document.createElement('div')
        newProduct.appendChild(imgInCart)
        newProduct.appendChild(quantityInCart)
        imgInCart.classList.add('cart__product-image')
        imgInCart.setAttribute('src', img.getAttribute('src'))
        quantityInCart.classList.add('cart__product-count')
        quantityInCart.textContent = Number(quantityValue.textContent)
    })
}