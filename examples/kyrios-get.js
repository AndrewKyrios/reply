var schedule = {
    course:"",
    instructor:"",
    building:"",
    room_number:"",
}

var reply = require('./..');

reply.get(schedule, function(e, details) {
    console.log(details);
});