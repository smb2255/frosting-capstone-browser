const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const fillers = require('../fillers/events.js')

const updateItemTemplate = require('../templates/updateItem.handlebars')

const onCreateItemSubmit = function (event) {
  event.preventDefault()
  fillers.onClearState()
  const data = getFormFields(event.target)
  api.createItem(data)
    .then(onIndexItems)
    .then(ui.onCreateItemSuccess)
    .catch(ui.onCreateItemFailure)
}

const onIndexItems = function () {
  fillers.onClearState()
  api.indexItems()
    .then(ui.onIndexItemsSuccess)
    .catch(ui.onIndexItemsFailure)
}

const onUpdateItemSubmit = function (event) {
  event.preventDefault()
  fillers.onClearState()
  const data = getFormFields(event.target)
  api.updateItem(data)
    .then(onIndexItems)
    .catch(ui.onUpdateItemFailure)
}

const onDeleteItemClick = function () {
  fillers.onClearState()
  const dataId = $(this).parents('.card').data('id')
  api.deleteItem(dataId)
    .then(onIndexItems)
    .catch(ui.onDeleteItemFailure)
}

const onUpdateItemClick = function () {
  fillers.onClearState()
  const dataId = $(this).parents('.card').data('id')
  const parent = $(this).parents('.card')
  const title = parent.find('.card-title').text()
  const description = parent.find('.card-description').text()
  const item = {
    _id: dataId,
    title: title,
    description: description
  }
  const updateItemHTML = updateItemTemplate({item: item})
  $(this).parents('.card-body').html(updateItemHTML)
}

const userEventListeners = function () {
  $('#content').on('submit', '#createItemForm', onCreateItemSubmit)
  $('#content').on('click', '#indexItems', onIndexItems)
  $('#content').on('submit', '.updateItemForm', onUpdateItemSubmit)
  $('#content').on('submit', '#updateItemForm', onUpdateItemSubmit)
  $('#content').on('click', '#deletItemButton', onDeleteItemClick)
  $('#content').on('click', '#updateItemButton', onUpdateItemClick)
  $('#content').on('click', '#indexItemsFailButton', onIndexItems)
}

module.exports = {
  userEventListeners,
  onIndexItems
}
