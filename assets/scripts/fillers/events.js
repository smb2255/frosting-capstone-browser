const mainTemplate = require('../templates/main.handlebars')
const signUpTemplate = require('../templates/signUp.handlebars')
const signInTemplate = require('../templates/signIn.handlebars')
const changePassTemplate = require('../templates/changePass.handlebars')

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

const eventListeners = function () {
  $('#content').on('click', '#signIn', onSignInLoad)
  $('#content').on('click', '#signUp', onSignUpLoad)
  $('#content').on('click', '#changePass', onChangePassLoad)
}

module.exports = {
  onPageLoad,
  eventListeners,
  onSignInLoad,
  onClearState
}
