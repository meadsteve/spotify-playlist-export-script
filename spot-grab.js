var spotifyPlaylist = require('spotify-playlist');

var playlistUri = process.argv[2];

if (!playlistUri) {
  console.log("The first argument must be a playlist uri");
  process.exit(1);
}

var getTrackName = function(track) {
  return track.artists.join(", ") + " - " + track.name;
};

var resultCallback = function(err, result) {
  if (result.playlist) {
    result.playlist.tracks.forEach(function(track) {
      console.log(getTrackName(track));
    });
  }
};

// Actually do the thing
spotifyPlaylist.playlistUri(
  playlistUri,
  resultCallback
);
