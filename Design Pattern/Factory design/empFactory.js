const Engineer = require('./engineer')
const Manager = require('./manager')
const Director = require('./director')

const empFactory = function(fname, lname, type){
    if(type === 'engineer'){
        return new Engineer(fname,lname)
    } else if(type === 'manager') {
        return new Manager(fname, lname)
    } else if(type === 'director'){
        return new Director(fname, lname)
    }
}

module.exports = empFactory