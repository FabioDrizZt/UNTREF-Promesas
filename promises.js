const miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    // generar un nro aleatorio
    const nro = Math.random()
    if (nro > 0.5) {
      resolve('Exito !')
    } else {
      reject(new Error('Error 404 !'))
    }
  }, 1500)
})

function internalLog (err) {
  // manda el error a la base de datos
  err += 2
}

miPromesa
  .then((result) => {
    // Cuando se completa la promesa
    console.log(result)
  })
  .catch((error) => {
    // Cuando la promesa falla
    internalLog(error)
    console.error('Error al ejecutar la tarea')
  })
  .finally(() => {
    console.log('Se termino la operación')
    console.log('Se cierra la conexión con la BD')
  })

console.log('Vemos como anda la promesa apenas la creamos')
console.log(miPromesa)

setTimeout(() => {
  console.log('Volvemos a chequear la promesa 2seg despues: ')
  console.log(miPromesa)
}, 2000)
