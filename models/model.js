var mongoose = require('mongoose');

//Rating Schema
var ratingsSchema = mongoose.Schema({
    rating:{
        type: Number
    },
    name:{
        type: String
    }   
});

var Ratings = module.exports = mongoose.model('Ratings', ratingsSchema);

//Get ratings
module.exports.getRatings = function(callback,limit){
        Ratings.find(callback).limit(limit);
}
  
// Get Ratings
module.exports.getRatingsById = (id, callback) => {
	Ratings.findById(id, callback);
}

// Add Ratings
module.exports.addRatings = (rating, callback) => {
	Ratings.create(rating, callback);
}

// Update Ratings
module.exports.updateRatings = (id, rating, options, callback) => {
    var query = {_id: id};
    var currentRating= rating.rating;
    console.log("currentRating"+currentRating);
    Ratings.getRatingsById(id, (err, rating) => {
		if(err){
			throw err;
		}
        var prevRating= rating.rating;
        console.log("prevRating"+prevRating);
        var newRating = ((prevRating)+(currentRating))/2;
        console.log("newRating "+newRating);
        var update = {
            rating: newRating
        }
        Ratings.findOneAndUpdate(query, update, options, callback);
	});
}


