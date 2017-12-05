//array of episodes 

const episodes = [
  { id: 's06e01', title: 'Pilot' },
  { id: 's06e02', title: 'Top Banana' },
  { id: 's06e03', title: 'Charity Drive' },
  { id: 's06e04', title: 'Visiting Ours' },
  { id: 's06e05', title: 'My Mother, the Car' },
  { id: 's06e06', title: 'In God We Trust' },
  { id: 's06e07', title: 'Storming the castle' },
  { id: 's06e08', title: 'Pier Pressure' },
  { id: 's06e09', title: 'Public Relations' },
];
//final episode

const finaleEpisode = { id: 's06e10', title: 'Bringing Up Buster' };

//this function adds the final episode onto the main array
const addToPlaylist = episodes.concat(finaleEpisode)

//this function removes episodes from the object
const removeFromPlaylist = function(playlist, episode){
  return playlist.filter(function(ep){
    return ep !== episode;
  });
};

//after the previous episode has been filtered from the object, the code below will get the next episode
const getNextEpisodeInPlaylist = function(playlist) {
  console.log('The next Episode is' + playlist[0].title);
};


//the code below 
const binge = function(playlist){
// logs the current episode
  console.log("You're watching" + playlist[0].title);
//this gets the new episode 
  var newList = removeFromPlaylist(playlist, playlist[0]);
// this if statement checks for the remaining episodes and if that equals zero then it will log 'tune in next season'
  if (newList.length === 0) {
    console.log('tune in next season');
  }else {
    getNextEpisodeInPlaylist(newList);
    binge(newList);
  }

};
//this calls the function
binge(addToPlaylist);