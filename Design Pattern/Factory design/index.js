const empFactory = require('./empFactory')

let engineer = empFactory('Roy','Agasthyan','engineer')
let manager = empFactory('Sam','Johnson','manager')
let director = empFactory('Jack', 'Daniel','director')

console.log(engineer.getName())
console.log(manager.getName())
console.log(director.getName())