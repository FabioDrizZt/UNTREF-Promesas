const traerDatos = () => {
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

traerDatos()
  .then(data => console.log(data))
  .catch(err => console.error(err))
