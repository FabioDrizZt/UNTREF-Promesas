const promesa1 = new Promise((resolve) => setTimeout(() => {
  resolve('Promesa 1')
}, 1000))
const promesa2 = new Promise((resolve) => setTimeout(() => {
  resolve('Promesa 2')
}, 2000))
const promesa3 = new Promise((resolve, reject) => setTimeout(() => {
  // resolve('Promesa 3')
  reject(new Error('Promesa 3'))
}, 3000))

Promise.allSettled([promesa1, promesa2, promesa3])
  .then(resultado => {
    const fulfilled = resultado.filter(p => p.status === 'fulfilled')
    fulfilled.forEach(p => console.log(p.value))
  })
