var meals = {breakfast: "oatmeal"};
var meals = new Object({breakfast:'oatmeal'});
var playlist = {artistName: 'songTitle'}
function updatePlaylist(playlist, artistName, songTitle) { playlist.artistName = 'songTitle'; return playlist}
function removeFromPlaylist(playlist,artistName){return[delete playlist.artistname]}
