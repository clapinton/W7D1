import { START_RECORDING, STOP_RECORDING, ADD_NOTES } from '../actions/track_actions';

const _defaultState = false;

const recordingReducer = (state = _defaultState, action) => {
  switch(action.type) {
    case START_RECORDING:
      return true;
    case STOP_RECORDING:
      return false;
    default:
      return state;
  }
};

export default recordingReducer;
