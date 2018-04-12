'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const fillers = require('./fillers/events')
const users = require('./users/events')
const items = require('./items/events')

$(() => {
  setAPIOrigin(location, config)
  fillers.onPageLoad()
  fillers.eventListeners()
  users.userEventListeners()
  items.userEventListeners()
})
