var User = function(name) {
    this.name = name;
 
    this.say = function() {
        define.add("User: " + this.name);
    };
}
 
var DecoratedUser = function(user, Course, city) {
    this.user = user;
    this.name = user.name;  // interface stays the same
    this.Course = Course;
    this.city = city;
 
    this.say = function() {
        define.add("Decorated User: " + this.name + ", " +
                   this.Course + ", " + this.city);
    };
}
 
// defining helper
 
var define = (function() {
    var define = "";
 
    return {
        add: function(msg) { define += msg + "\n"; },
        show: function() { console.log(define); define = ""; }
    }
})();
 
function run() {
 
    var user = new User("Krishan Arora");
    user.say();
 
    var decorated = new DecoratedUser(user, "B.TECH", "Gurugram");
    decorated.say();
 
    define.show();
}
run()















