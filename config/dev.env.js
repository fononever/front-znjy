'use strict'
const merge = require('webpack-merge')
const baseEnv = require('./base.env')

module.exports = merge(baseEnv, {
  NODE_ENV: '"development"'
})
