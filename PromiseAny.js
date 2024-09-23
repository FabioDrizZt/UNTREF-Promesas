const promesa1 = new Promise((resolve, reject) => setTimeout(() => {
  reject(new Error('Promesa 1'))
}, 3000))
const promesa2 = new Promise((resolve, reject) => setTimeout(() => {
  reject(new Error('Promesa 2'))
}, 2000))
const promesa3 = new Promise((resolve, reject) => setTimeout(() => {
  // resolve('Promesa 3')
  reject(new Error('Promesa 3'))
}, 500))

Promise.any([promesa1, promesa2, promesa3])
  .then(resultado => console.log(resultado))
  .catch(error => console.error('TODAS LAS PROMESAS FALLARON', error))
