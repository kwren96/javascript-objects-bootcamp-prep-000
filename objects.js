var meals = {breakfast: "oatmeal"};
var meals = new Object({breakfast:'oatmeal'});
var playlist = {Phil Ochs:'My Bloody Valentine'}
function updatePlaylist(playlist, artistName, songTitle) { playlist['artistName'] = 'songTitle'}
function removeFromPlaylist(playlist,artistName) {delete playlist[artistname]; return playlist}
