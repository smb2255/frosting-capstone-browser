'use strict'
// Use strict affects what config.apiOrigin does.
const config = require('../config.js')
// const store = require('../store')

const createItem = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/items',
    method: 'POST',
    headers: {
      // Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const indexItems = function () {
  return $.ajax({
    url: config.apiOrigin + '/items',
    method: 'GET',
    headers: {
      // Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateItem = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/items/' + data.item.id,
    method: 'PATCH',
    headers: {
      // Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteItem = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/items/' + id,
    method: 'DELETE',
    headers: {
      // Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createItem,
  indexItems,
  updateItem,
  deleteItem
}
