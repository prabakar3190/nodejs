var express = require('express');
var router = express.Router();
/* GET ratings. */
router.get('/', function(req, res, next) {

    Ratings.getRatings(function(err, rating){
        if(err){
            throw err;
        }
      //  res.send('Ratings API');
        res.json(rating);
    }); 
  });
  module.exports = router;

  router.get('/:_id', (req, res) => {
	Ratings.getRatingsById(req.params._id, (err, rating) => {
		if(err){
			throw err;
		}
		res.json(rating);
	});
});

router.post('/', (req, res) => {
	var rating = req.body;
	Ratings.addRatings(rating, (err, rating) => {
		if(err){
			throw err;
		}
		res.json(rating);
	});
});

router.put('/:_id', (req, res) => {
	var id = req.params._id;
	var rating = req.body;
	Ratings.updateRatings(id, rating, {}, (err, rating) => {
		if(err){
			throw err;
		}
		res.json(rating);
	});
});