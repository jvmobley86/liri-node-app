require("dotenv").config();
var Spotify = require('node-spotify-api');
var axios = require('axios');
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var command = process.argv[2];
var userInput = process.argv.slice(3).join(' ')
var bandsInTown = "https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=1";
    

if(command === 'spotify-this-song'){
    if(userInput === ''){
        userInput = "the sign by ace of base"
        spotifySong(userInput)  
    }
    spotifySong(userInput)  
                  
    }
if(command === 'movie-this'){
    if(userInput===''){
        userInput = "Mr. Nobody"
        movieThis(userInput)
    }
movieThis(userInput)
}



function spotifySong(songName){
    spotify.search({ type: 'track', query: songName}, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        console.log('Song Name: ' + data.tracks.items[0].name);
        console.log('Albumn Name: ' + data.tracks.items[0].album.name);
        console.log('Artist Name: ' + data.tracks.items[0].artists[0].name);
        console.log('Preview Link: ' + data.tracks.items[0].external_urls.spotify);
    }); 
}


function movieThis(movieName){
       var queryURL = "https://www.omdbapi.com/?t=" + movieName+ "&apikey=trilogy";

    // Make a request for a user with a given ID
    axios.get(queryURL)
        .then(function (response) {
            // handle success
            console.log("Title: " + response.data.Title);
            console.log("Year: " + response.data.Year);
            console.log("Rating: " + response.data.Rated);
            console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
            console.log("Rating: " + response.data.Rated);
            console.log("Produced In: " + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Cast: " + response.data.Actors);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })

}
function bandsInTown(bands){
var bandsInTown = "https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp";
axios
    .get(bandsInTown)
    .then(function (response) {
        console.log("Venue: " + response.data[0].venue.name);
        console.log("Location: " + response.data[0].venue.city);
        console.log("Date: " + moment(response.data[0].datetime).format('MM/DD/YYYY'));
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })}