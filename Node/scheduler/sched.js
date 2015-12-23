var schedule = require('node-schedule');


var l = schedule.scheduleJob('0 32 11 22 * *', function(){
    console.log('The answer to life, the universe, and everything!');
});



/*var CronJob = require('cron').CronJob;
console.log("asdsad")
new CronJob('* * * * * *', function() {
  console.log('You will see this message every second');
}, null, true, 'Asia/Kolkata');*/