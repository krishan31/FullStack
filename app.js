const events =  require('events');
const eventEmitter = new events.EventEmitter();  //event emitter class

var ringbell = function(){
    console.log('ring ring ring');
}

