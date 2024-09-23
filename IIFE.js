// Inmediately Invoked Function Expression

(async () => {
  try {
    const response = await fetch('https://apis.datos.gob.ar/georef/api/provincias')
    const datos = await response.json()
    console.table(datos.provincias)
  } catch (error) {
    console.error('Error: ', error)
  }
})()
