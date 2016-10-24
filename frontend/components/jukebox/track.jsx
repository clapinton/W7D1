import React from 'react';

const Track = ({track, isRecording, isPlaying, onPlay}) => (
  <div>
    {track.name}
    <button
      className="play-button"
      disabled={isRecording || isPlaying}
      onClick={onPlay(track)}>
      Play
    </button>
    <label>
      Loop?
      <input type="checkbox" id={`track_${track.id}`} disabled={isRecording} />
    </label>
  </div>
);


export default Track;
