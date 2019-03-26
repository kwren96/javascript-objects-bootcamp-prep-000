var playlist = {artistname:'song'}
function updatePlaylist(playlist, artistName, songTitle) { playlist['artistName'] = 'songTitle'; return playlist}
function removeFromPlaylist(playlist,artistName) {delete playlist.artistname; return playlist}


//accepts three parameters - playlist an object;artist name a string; and a song title.
//body of function adds song and artist as key value pair to playlist object.
//function returns whole playlist