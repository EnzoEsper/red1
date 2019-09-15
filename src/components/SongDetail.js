import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ selectedSong }) => {
  if (!selectedSong) {
    return <div>No song selected yet. Select a song!</div>;
  }

  return (
    <div>
      <h3>Details for:</h3>
      <p>Title: {selectedSong.title}</p>
      <br />
      <p>Duation: {selectedSong.duration}</p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    selectedSong: state.selectedSong
  };
};

export default connect(mapStateToProps)(SongDetail);
