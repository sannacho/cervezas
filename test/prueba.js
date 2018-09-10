const alumnos = [
  {
    nombre: 'pepe',
    apellido: 'perez'
  },
  {
    nombre: 'juan',
    apellido: 'martinez'
  }
]

const losPepe = alumnos.filter(
  (alumno) => { return alumno.nombre === 'pepe' }
)

console.log(losPepe)
