var meals = {breakfast: "oatmeal"};
var meals = new Object({breakfast:'oatmeal'});
var playlist = {artistName: 'songTitle'}
function updatePlaylist(playlist, artistName, songTitle) {Object.assign({}, playlist, {artistName:'songTitle'})}
function removeFromPlaylist(playlist,artistName){return[delete playlist.artistname]}
