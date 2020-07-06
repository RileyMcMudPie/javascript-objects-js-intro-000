var playlist = {artist : 'song'}

function updatePlaylist (playlist, artistName, songTitle){
return Object.assign({artist : 'song'}, playlist, {artistName : songTitle})
}
