import { combineReducers } from 'redux';
import tracksReducer from './tracks_reducer';
import recordingReducer from './is_recording_reducer';
import playingReducer from './is_playing_reducer';
import notes from './notes_reducer';

const rootReducer =  combineReducers({
  notes,
  tracks: tracksReducer,
  isRecording: recordingReducer,
  isPlaying: playingReducer
});

export default rootReducer;
