'use strict'

const store = require('../store')

// const historyTemplate = require('./templates/orderHistory.handlebars')

const addToCartSuccess = function (data) {
  console.log('reached')
  store.cart = data.cart
  $('.add-to-cart').text('Added to cart!').css('color', 'green')
}

// const checkoutSuccess = function (data) {
//   store.cart = data.cart
//   $('.update-item-btn').hide()
//   $('.delete-btn').hide()
//   $('.cart-button').removeClass('hide')
//   $('#checkout').addClass('hide')
//   $('#cart-message').text('Select "Cancel" or "Purchase" to proceed').css('color', 'green')
// }
//
// const checkoutFailure = function () {
//   $('#cart-message').text('Error checking out').css('color', 'red')
// }
//
// const updateOrderSuccess = function () {
//   store.cart = null
//   const resetVal = 0.00
//   document.getElementById('cart-total').value = resetVal.toFixed(2)
//   $('.cart-item').remove()
//   $('.cart-button').addClass('hide')
//   $('#cart-message').text('Purchase successful!').css('color', 'green')
//   $('#cart-total').trigger('reset')
//   $('#checkout').addClass('hide')
//   $('.cart-btn').removeClass('hide')
//   $('.add-to-cart').text('')
// }
//
// const updateOrderFailure = function () {
//   $('#cart-message').text('Error updating order').css('color', 'red')
// }
//
// const cancelOrderSuccess = function () {
//   store.cart = null
//   const resetVal = 0.00
//   document.getElementById('cart-total').value = resetVal.toFixed(2)
//   $('.cart-item').remove()
//   // message indicating success
//   $('.cart-button').addClass('hide')
//   $('#cart-message').text('Order canceled').css('color', 'green')
//   $('#cart-total').trigger('reset')
//   $('.cart-btn').removeClass('hide')
//   $('.add-to-cart').text('')
// }
//
// const cancelOrderFailure = function () {
//   $('#cart-message').text('Error canceling order').css('color', 'red')
// }
//
// // const getHistorySuccess = function (data) {
// //   const historyHTML = historyTemplate({ carts: data.carts })
// //   $('#order-history').html(historyHTML)
// // }
//
// // const getHistoryFailure = function () {
// //   $('#history-message').text('Error retrieving order history').css('color', 'red')
// // }

module.exports = {
  // checkoutSuccess,
  // checkoutFailure,
  // updateOrderSuccess,
  // updateOrderFailure,
  // cancelOrderSuccess,
  // cancelOrderFailure,
  addToCartSuccess
  // getHistorySuccess,
  // getHistoryFailure
}
