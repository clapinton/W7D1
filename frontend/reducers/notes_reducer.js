import { KEY_PRESSED, KEY_RELEASED } from '../actions/notes_actions';
import { NOTE_NAMES } from '../util/tones';
import merge from 'lodash/merge';

const _defaultState = [];

const notes = (state = _defaultState, action) => {
  Object.freeze(state);
  let dupState = merge([], state);
  switch (action.type) {
    case KEY_PRESSED:
      if (!dupState.include(action.key) && NOTE_NAMES.include(action.key)) {
        dupState.push(action.key);
      }
      return dupState;
    case KEY_RELEASED:
      if (dupState.include(action.key) && NOTE_NAMES.include(action.key)) {
        dupState = dupState.filter( key => key !== action.key);
      }
      return dupState;
    default:
      return state;
  }
};

export default notes;