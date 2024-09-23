const traerFrutas = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.3) {
        const datosFrutas = ['pera', 'anana', 'uva', 'sandia']
        resolve(datosFrutas)
      } else {
        reject(new Error('No encontramos las frutas'))
      }
    }, 1500)
  })
}

const traerVerduras = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        const datosVerduras = ['tomate', 'lechuga', 'acelga', 'espinaca']
        resolve(datosVerduras)
      } else {
        reject(new Error('No encontramos las Verduras'))
      }
    }, 1500)
  })
}

traerFrutas()
  .then(resultado => {
    console.log(resultado)
    return traerVerduras()
  })
  .then(resultado => {
    console.log(resultado)
  })
  .catch(err => {
    console.log('Error: ', err)
  })
