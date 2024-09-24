const now = new Date()
console.log(now)

const fechaEspecifica = new Date(2024, 6, 5, 15, 30, 0)
console.log({ fechaEspecifica })

const soloFecha = new Date(2024, 6, 5)
console.log({ soloFecha })

const fechaCadena = new Date('2024-6-5')
console.log({ fechaCadena })

console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now.getDay())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getSeconds())
console.log(now.getMilliseconds())
console.log(now.getTime())
console.log(now.getTimezoneOffset()) // diferencia entre gmt y gmt-3
