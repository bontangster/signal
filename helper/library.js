const express = require('express');
const app = express();
const consoles = require('./console.js');
var c = new consoles();
const library = {
  APP: app,
  CONSOLE: new consoles(),
  UUID: require('uuid'),
  DB: require('mongoose')
}
module.exports = library
