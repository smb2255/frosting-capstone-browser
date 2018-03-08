'use strict'

// const getFormFields = require('../../lib/get-form-fields')

// const api = require('./api')
// const ui = require('./ui')
const cartArray = []

const addToCart = function (event) {
  const name = $(event.target).parents('.product').find('.prod-name').text()
  const price = $(event.target).parents('.product').find('.product-price').text()

  console.log(name)
  console.log(price)

  const tableVal = `<tr><td>${name}</td><td><input class="cart-quant" value=1></td><td>${price}</td></tr>`

  $('.fill-this').append(tableVal)
}
const onCheckout = () => {
  const price = cartArray[0].price.replace('$', '')
  const data = {
    cart: {
  pastOrder: cartArray,
  orderTotal: parseFloat(price) * cartArray[0].quantity * 100 // total in cents
    }
  }
  console.log(data)
  api.checkout(data)
    .then(console.log)
}

const addHandlers = () => {
  $('.add-to-cart').on('click', addToCart)
  $('#checkout').on('click', onCheckout)
}

module.exports = {
  addHandlers
}
