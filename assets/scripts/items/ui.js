const indexItemsTemplate = require('../templates/indexItems.handlebars')
const createItemTemplate = require('../templates/createItem.handlebars')

const onCreateItemSuccess = function (data) {
  $('#createItemContainer').html('')
}

const onCreateItemFailure = function () {
  $('#errorMessageProfile').text('You failed...')
}

const onIndexItemsSuccess = function (data) {
  if (data.items.length < 1) {
    $('#bucketListBucket').html('')
    const createItemHTML = createItemTemplate()
    $('#createItemContainer').html(createItemHTML)
  } else {
    const indexItemsHTML = indexItemsTemplate({'items': data.items})
    $('#bucketListBucket').html(indexItemsHTML)
  }
}

const onIndexItemsFailure = function () {
  const buttonHTML = (`
    <p>'Unable to display Bucket-Items</p>
    <button id="indexItemsFailButton">TRY AGAIN</button>`)
  $('#errorMessageProfile').html(buttonHTML)
}

const onUpdateItemFailure = function () {
  $('#errorMessageProfile').text('You failed...to update item')
}

const onDeleteItemFailure = function () {
  $('#errorMessageProfile').text('Unable to delete Bucket Item')
}

module.exports = {
  onCreateItemSuccess,
  onCreateItemFailure,
  onIndexItemsSuccess,
  onIndexItemsFailure,
  onUpdateItemFailure,
  onDeleteItemFailure
}
