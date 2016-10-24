import { START_RECORDING, STOP_RECORDING, ADD_NOTES } from '../actions/track_actions';
import merge from 'lodash/merge';

let currTrackId = 0;

const tracksReducer = (state = {}, action) => {
  Object.freeze(state);
  let dupState = merge({}, state);
  let timeSlice = null;
  let roll = null;

  switch (action.type) {
    case START_RECORDING:
      currTrackId++;
      let track = {
        id: currTrackId,
        name: `Track ${currTrackId}`,
        roll: [],
        timeStart: action.timeNow
      };
      dupState[currTrackId] = track;
      return dupState;
    case STOP_RECORDING:
      timeSlice = action.timeNow - state[currTrackId].timeStart;
      roll = {notes: [], timeSlice};
      dupState[currTrackId].roll.push(roll);
      return dupState;
    case ADD_NOTES:
      timeSlice = action.timeNow - state[currTrackId].timeStart;
      roll = {notes: action.notes, timeSlice};
      dupState[currTrackId].roll.push(roll);
      return dupState;
    default:
      return state;
  }
};

export default tracksReducer;
