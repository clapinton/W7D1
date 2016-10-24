import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';

const preloadedState = {
  notes: [],
  isRecording: false,
  isPlaying: false,
  tracks: {}
};

const configureStore = () => {
  return createStore(rootReducer, preloadedState);
};

export default configureStore;
