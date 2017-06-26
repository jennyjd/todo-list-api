'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TodoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    default: false
  },
  description: {
    type: String,
    default:  ''
  },
  categoryId: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Todos', TodoSchema);