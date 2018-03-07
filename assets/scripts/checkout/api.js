'use strict'

const config = require('../config')
const store = require('../store')

const checkout = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/carts',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updateOrder = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/carts/' + store.cart._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const cancelOrder = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/carts/' + store.cart._id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getHistory = function () {
  return $.ajax({
    url: config.apiOrigin + '/carts',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  checkout,
  updateOrder,
  cancelOrder,
  getHistory
}
