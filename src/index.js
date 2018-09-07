const cervezas = require('./cervezas.json')
const uniqueRandomArray = require('unique-random-array')

const prueba = function () {
  return 'Copon'
}

module.exports = {
  todas: cervezas,
  seleccion: 'Ambar Beer',
  alazar: uniqueRandomArray(cervezas)
}
