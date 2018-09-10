/* global describe it */
const expect = require('chai').expect
const cervezas = require('../src/index')

describe('Cervezas', () => {
  describe('La lista de todas', () => {
    it('Debería ser un array de objetos', () => {
      expect(cervezas.todas).to.satisfy(isArrayOfObjects)
    })
    it('Debería incluir la cerveza Ambar', () => {
      expect(cervezas.todas).to.satisfy(contieneAmbar)
    })
  })
  describe('Elegir una cerveza al azar', () => {
    it('Debería mostrar un elemento de la lista de cervezas', () => {
      const cerveza = cervezas.alazar()
      expect(cervezas.todas).to.include(cerveza)
    })
  })
})

const isArrayOfObjects = array => {
  return array.every(item => {
    return typeof item === 'object'
  })
}

const contieneAmbar = array =>
  array.some(cerveza => cerveza.nombre === 'ÁMBAR ESPECIAL')
