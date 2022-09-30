// const EventEmitter = require('events');
// //this is school class
// class School extends EventEmitter{
//      StartPeriod(){
//         console.log("Start Period ended");
    
//         setTimeout(()=>{
//             this.emit('Bell Ring Start',{
//                 period:'first',
//                 text: 'nine',
//             })
//         },1000);
//     }
// }
// module.exports = School;
const EventEmitter = require('events');

class School extends EventEmitter {
    startPeriod() {
        console.log("Class started");

        // raise event when bell rings
        // raise an event
        setTimeout(() => {
            this.emit('bellRing', {
                period: 'first',
                text: 'period ended',
            });
        }, 2000);
    }
}

module.exports = School;