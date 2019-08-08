# liri-node-app

Liri is a node app that allows you to find information on bands/artists, songs, and movies. I started the app by stating the required variables which are axios, spotify, moment.js, fs, dotenv, and keys.js. Depending on the command that is used Liri will access a specific API to retrieve information. The 3 APIs that are used are Bands in Town, Spotify, and OMDB. 

The command "concert-this" will find and return an artist or bands next concert date, city, & venue.
[To run this command: node liri.js concert-this Khalid] If no artist is entered, "Erykah Badu" is the default artist.

The command "spotify-this-song" will find and return a song's artist, the song's title, a link to a preview of the song, and also the album that the song is on.
[To run this command: node liri.js spotify-this-song Tyrone] If no song name is entered, "I Saw the Sign" by Ace of Base is the default song.


The command "movie-this" will find and return the title of the movie, the year it was released, the IMDB rating, the Rotten Tomatoes rating, the country in which the movie was produced, the language, the plot, and the actors of the movie.
[To run this command: node liri.js movie-this Toy Story 4] If no movie is entered, "Mr. Nobody" is the default movie.


The command "do-what-it-says" will perform the action indicated in the random.txt file. Which is to run the "spotify-this-song" command and return information on the song, "I Want it That Way". 

Liri is a useful way to find information regarding multilple subjects using node. Liri eliminates the need to search for information on multiple websites and multiple databases. By simply changing the command, liri is able to access a different database and provide a whole different set of data.

To get started with liri simply open the correct file path conataining liri in your terminal. From there, type in "node liri.js" followed by one of the commands: "concert-this", "spotify-this-song", "movie-this", and "do-what-it-says".

Enter band/artist name (ex. node liri.js concert-this Khalid) 

Enter song title (ex. node liri.js spotify-this-song Tyrone) 
Enter movie title (ex. node liri.js movie-this Inception) Movie This Command Movie This Results
Enter one of the previous commands in the "random.txt" file 

In addtion to the the 3 APIs stated, Liri also uses moment.js, axios, dotenv, and FS.

If you need any assistance, please email me at jessicavmobley@gmail.com