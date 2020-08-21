class Engineer{
    constructor(fName, lName){
        this.firstName = fName
        this.lastName = lName
    }

    getName(){
        return ' Engineer ' + this.firstName + " " + this.lastName
    }
}
module.exports = Engineer