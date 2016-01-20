// This is the example I created for the "get" method
var schedule = {
    school:'UW',
    course:"",
    instructor:"",
    building:"",
    room_number:"",
}

var reply = require('./..');

reply.get(schedule, function(e, details) {
    console.log(details);
});