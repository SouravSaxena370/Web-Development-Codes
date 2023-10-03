const EventEmitter=require('events');

class MyEmitter extends EventEmitter{}

const myEmitter=new MyEmitter();
myEmitter.on('TankFull',()=>{
    console.log('Tank is full. Please turn off motor!');
    setTimeout(()=>{
        console.log('Water is wasting. Turn off motor!');
    },3000);
});
// myEmitter.emit('event');
myEmitter.emit('TankFull')
console.log('Script is running');
console.log('Script is still running');
