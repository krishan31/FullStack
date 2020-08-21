class Director{
    constructor(fname,lname){
        this.firstName = fname
        this.lastName = lname
    }

    getName(){
        return 'Director ' + this.firstName + " " + this.lastName
    }
}
module.exports = Director