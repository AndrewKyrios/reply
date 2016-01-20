/** This is a test */
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