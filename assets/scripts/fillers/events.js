const mainTemplate = require('../templates/main.handlebars')
const signUpTemplate = require('../templates/signUp.handlebars')
const signInTemplate = require('../templates/signIn.handlebars')
const profileTemplate = require('../templates/profile.handlebars')
const changePassTemplate = require('../templates/changePass.handlebars')
const createItemTemplate = require('../templates/createItem.handlebars')

const onClearState = function () {
  $('#errorMessageProfile').html('')
  $('#changePassContainer').html('')
  $('#createItemContainer').html('')
}

const onPageLoad = function () {
  const mainHTML = mainTemplate()
  $('#content').html(mainHTML)
}
const onSignUpLoad = function () {
  const signUpHTML = signUpTemplate()
  $('#form').html(signUpHTML)
}

const onSignInLoad = function () {
  const signInHTML = signInTemplate()
  $('#form').html(signInHTML)
}

const onChangePassLoad = function () {
  onClearState()
  const changePassHTML = changePassTemplate()
  $('#changePassContainer').html(changePassHTML)
}

const onProfileLoad = function () {
  const profileHTML = profileTemplate()
  $('#user-content').html(profileHTML)
}

const onCreateItemLoad = function () {
  onClearState()
  const createItemHTML = createItemTemplate()
  $('#createItemContainer').html(createItemHTML)
}

const eventListeners = function () {
  $('#content').on('click', '#signIn', onSignInLoad)
  $('#content').on('click', '#signUp', onSignUpLoad)
  $('#content').on('click', '#changePass', onChangePassLoad)
  $('#user-content').on('click', '#createItem', onCreateItemLoad)
}

module.exports = {
  onPageLoad,
  onProfileLoad,
  eventListeners,
  onSignInLoad,
  onClearState
}
