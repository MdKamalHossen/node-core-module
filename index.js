// const School = require('./school');

// const school = new School();

// school.on('bell Ring', ({period,text})=>{
//     console.log(`we need to run quickly because ${period} ${text}`);
// });

// school.StartPeriod();
const School = require('./school');

const school = new School();

// register a listener for bellRing event
school.on('bellRing', ({ period, text }) => {
    console.log(`We need to run because ${period} ${text}`);
});

school.startPeriod();






