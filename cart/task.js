const cart = document.querySelector('.cart__products');
const cartProducts = document.querySelectorAll('.cart__product')

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
        const cartProductsArr = Array.from(document.querySelectorAll('.cart__product'))

        const productInCart = cartProductsArr.find((elem) => {
            return elem.getAttribute('data-id') === product.getAttribute('data-id')
        })

        if (productInCart) {
            productInCart.children[1].textContent = Number(quantityValue.textContent) + Number(productInCart.children[1].textContent)
        } else {
            cart.insertAdjacentHTML('beforeend', `
            <div class="cart__product" data-id="${product.getAttribute('data-id')}">
                <img class="cart__product-image" src="${img.getAttribute('src')}">
                <div class="cart__product-count">${Number(quantityValue.textContent)}</div>
            </div>
            `)
        }
    })
}