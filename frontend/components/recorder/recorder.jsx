import React from 'react';

const Recorder = ({startRecording, stopRecording, isPlaying, isRecording}) => (
  <div className='recorder'>
    <h3>Recorder</h3>
    <button
      className='start-button'
      onClick={startRecording}
      disabled={isRecording || isPlaying}>
        Start
      </button>
    <button
      className='stop-button'
      onClick={stopRecording}
      disabled={!isRecording || isPlaying}>
      Stop
    </button>
  </div>
);

export default Recorder;
