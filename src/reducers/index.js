import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "la grasa", duration: "04:20" },
    { title: "macarena", duration: "03:20" },
    { title: "crudo", duration: "04:30" },
    { title: "granuja", duration: "02:50" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  switch (action.type) {
    case "SONG_SELECTED":
      return action.payload;
    default:
      return selectedSong;
  }
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
