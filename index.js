
// require >>>>>>>>>>>>>>>
const path = require('path');
const os = require('os');
const fs = require('fs');
const EventEmitter = require('events');
// >>>>>>>>>>>>>>>>>>>>>>>


const myPath= 'C:/Users/pc/NODE PROJECTS/core-node-js/index.js';
// PATH >>>>>>>>>>>>>>>>>>
console.log(path.basename(myPath));
console.log(path.dirname(myPath));
console.log(path.extname(myPath));
console.log(path.parse(myPath));
//  >>>>>>>>>>>>>>>>>>>>>>

// OS >>>>>>>>>>>>>>>>>>>>
console.log(os.platform());
console.log(os.homedir());
console.log(os.freemem());
console.log(os.cpus());
// >>>>>>>>>>>>>>>>>>>>>>>

// FS >>>>>>>>>>>>>>>>>>>>
fs.writeFileSync('myFile.txt','hello programmers')
fs.appendFileSync('myFile.txt', ' how are you?')
const data = fs.readFileSync('myFile.txt')
fs.readFile('myFile.txt', (err, data)=>{
    console.log(data.toString());
})
console.log('hello');
console.log(data);
console.log(data.toString());
// >>>>>>>>>>>>>>>>>>>>>>>

// EVENT >>>>>>>>>>>>>>>>>
const emitter = new EventEmitter();
emitter.on('Hello', ()=>{
    console.log('How are you');
})
emitter.emit('Hello')
// >>>>>>>>>>>>>>>>>>>>>>>
