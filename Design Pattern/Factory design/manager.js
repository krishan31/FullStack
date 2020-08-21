class Manager{
    constructor(fname, lname){
        this.firstName = fname
        this.lastName = lname
    }

    getName(){
        return 'Manager ' + this.firstName + " " + this.lastName
    }
}
module.exports = Manager