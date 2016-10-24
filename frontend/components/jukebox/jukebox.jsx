import React from 'react';
import Track from './track';

const Jukebox = ({ tracks, isRecording, isPlaying, onPlay }) => (
  <div>
    Jukebox
    <ul>
      {
        Object.keys(tracks).map((id) => {
          let track = tracks[id];
          return (
            <li key={id}>
              <Track track={track}
                isRecording={isRecording}
                isPlaying={isPlaying}
                onPlay={onPlay}/>
            </li>
          );
        })
      }
    </ul>
  </div>
);

export default Jukebox;
