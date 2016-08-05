console.log('api-routes is loaded');
var express = require('express');
var app = express();
var path = require('path');
// Your api-routes.js file should 
// contain two routes:
var allFriends = require('../data/friends'.friendsArray);
 

function getMinOfArray(numArray) {
  return Math.min.apply(null, numArray);
};

// Routing


module.exports = function(app) {

   

        app.get('/api/friends', function(req, res) {
            // return the friendsArray
            res.json(allFriends);

            console.log(allFriends);
        });
    


    // after the submit button is hit, it sends a post request to make another post object, in this case a friend
    app.post('api/friends' , function(req,res){
            console.log('request body' + req.body);



        // add the submitted data to the friend data array
    friendData.push(req.body);

        var differences= [];
        //iterate through the array of friends using -1 so the user doesn't get himself as a best friend choice
        for (var i = 0; i < (friendData.length)-1; i++) {

                //var to hold score difference
                var friendDifference = [];
                //access the score of each friend and assign it to eachFriend
                var eachFriend = friendData[i].scores;
                //now loop through each of the scores

                for (var k = 0; k < eachFriend.length; k++) {
                //calculate the difference between each number in the scores while preventing negative numbers with Math.abs
                var difference = Math.abs(eachFriend[k] - req.body.scores[k]);
                 // send the values to the differences array
                friendDifference.push(difference);
                };
                // loop through the newly created friendDifference array and calculate over all difference
                var totalDifference = 0;
                for (var k = 0; k < friendDifference.length; k++) {
                totalDifference = totalDifference + friendDifference[k];
                };
                // send that overall difference to the differences with a matching index
                differences.push(totalDifference);

        }
        // get the number of minimum differences
            var min = getMinOfArray(differences);
            // get the index of the minimum differences in the Array
            var id = differences.indexOf(min);

            // response with the json data for the closest friend.
            res.json(friendData[id]);


    })
    //when user posts new friend to api/friend the body of the req will contain 
    //the new friend which will be pushed to the friend array

}













