fetch('https://apis.datos.gob.ar/georef/api/provincias')
  .then(response => { return response.json() })
  .then(datos => console.table(datos.provincias))
