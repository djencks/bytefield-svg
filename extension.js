'use strict'

const generate = require('./lib.js')
const extension = require('asciidoctor-generic-svg-extension')

module.exports.register = (registry) => extension.register(registry, 'bytefield', generate)

