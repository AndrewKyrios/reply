var reply = require('./../');

reply.confirm('Do you confirm to continue?', function(err, yes) {
    if (yes && !err) {
        console.log("You have confirmed to continue.");
    
    } else {
        console.log("You chose to not continue.");
    }
});
    