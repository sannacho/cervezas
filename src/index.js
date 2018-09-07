const cervezas = require('./cervezas.json')
const uniqueRandomArray = require('unique-random-array')
const _ = require('lodash')

const prueba = function () {
  return 'Copon'
}

module.exports = {
  todas: _.sortBy(cervezas, ['nombre']),
  seleccion: 'Ambar Beer',
  alazar: uniqueRandomArray(cervezas)
}
