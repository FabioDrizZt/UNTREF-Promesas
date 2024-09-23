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
      if (Math.random() > 0.9) {
        const datosVerduras = ['tomate', 'lechuga', 'acelga', 'espinaca']
        resolve(datosVerduras)
      } else {
        reject(new Error('No encontramos las Verduras'))
      }
    }, 1000)
  })
}

async function ejecutarOperaciones () {
  try { // Esto es el .then
    // Todo el código se ejecuta como si fuese sincronico
    const frutas = await traerFrutas()
    console.log(frutas)
    const datosVerduras = await traerVerduras()
    console.log(datosVerduras)
  } catch (error) { // Esto es el .catch
    console.error('Error: ', error)
  } finally {
    console.log('Se cerro la conexion a la BD')
  }
}

ejecutarOperaciones()
