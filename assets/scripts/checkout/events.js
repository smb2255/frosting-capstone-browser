'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('../store')
const config = require('../config.js')

const cartArray = []

const onShowModalActions = function (event) {
  $('#history-message').html('')
  $('#cart-message').html('')
}

const addToCart = function (event) {
  const name = $(event.target).parents('.product').find('.prod-name').text()
  const price = $(event.target).parents('.product').find('.product-price').text()

  const product = {
    name: name,
    quantity: 1,
    price: price
  }
  cartArray[0] = product

  const itemPrice = price.replace('$', '')
  stripeTotal = itemPrice
  document.getElementById('cart-total').value = itemPrice

  $('.cart-btn').addClass('hide')
  $('.add-to-cart').text('Added to cart!').css('color', 'green')
  $('#checkout').removeClass('hide')
}

const onCheckout = () => {
  // Hide update and delete buttons moved to ui.js
  const data = {
    cart: {
      pastOrder: [''],
      orderTotal: 0
    }
  }

  api.checkout(data)
    .then(ui.checkoutSuccess)
    .catch(ui.checkoutFailure)
}

const onUpdateItem = (event) => {
  const qty = $('.cart-quant').val()
  cartArray[0].quantity = qty
  const price = cartArray[0].price.replace('$', '')
  stripeTotal = price * qty

  document.getElementById('cart-total').value = stripeTotal.toFixed(2)
}

const onRemoveItem = (event) => {
  // Reveal the Cart button and empty label text so that the item can be added to the cart again after it is removed.
  const data = $(event.target)
  data.parents('tr').remove()
  const resetVal = 0.00
  stripeTotal = resetVal
  document.getElementById('cart-total').value = resetVal.toFixed(2)
  $('#checkout').addClass('hide')
  $('.cart-btn').removeClass('hide')
  $('.add-to-cart').text('')
  $('#cart-message').text('Order removed').css('color', 'green')
}

const onCancelOrder = function (event) {
  // Show update and delete buttons upon order cancel event so that modifications can be made to the cart
  $('.update-item-btn').show()
  $('.delete-btn').show()
  stripeTotal = 0
  api.cancelOrder()
    .then(ui.cancelOrderSuccess)
    .catch(ui.cancelOrderFailure)
}

const onHiddenModalActions = function (event) {
  // if the modal is hidden when a cart is present, cancel the entire order so that the item can be added again to the cart.
  if (store.cart) {
    $('.cart-btn').removeClass('hide')
    $('.add-to-cart').text('')
    $('#checkout').addClass('hide')
    onCancelOrder()
  }
}

const onGetHistory = function (event) {
  event.preventDefault()
  api.getHistory()
    .then(ui.getHistorySuccess)
    .catch(ui.getHistoryFailure)
}

// -------------------------- EVENT HANDLERS BELOW --------------------------------------
const addHandlers = () => {
  $('.cart-btn').on('click', addToCart)
  $('#checkout').on('click', onCheckout)
  $('body').on('click', '.update-item-btn', onUpdateItem)
  $('body').on('click', '.delete-btn', onRemoveItem)
  $('#delete').on('click', onCancelOrder)
  $('#get-orders').on('click', onGetHistory)
  $('#cart-button').on('click', onShowModalActions)
  $('#cart').on('hidden.bs.modal', onHiddenModalActions)
  $('body').on('click', function () { $('#message').html('') })

  // ---------------------- CUSTOM STRIPE INTEGRATION HANDLERS -------------------------
  $('#purchase').on('click', (event) => {
    event.preventDefault()
    handler.open({
      name: 'Frosting',
      amount: stripeTotal * 100
    })
  })
  window.addEventListener('popstate', () => {
    handler.close()
  })
}

module.exports = {
  addHandlers
}
