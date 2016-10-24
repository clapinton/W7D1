import { connect } from 'react-redux';
import { startPlaying, stopPlaying } from '../../actions/playing_actions';
import { groupUpdate } from '../../actions/notes_actions';
import Jukebox from './jukebox';

const mapStateToProps = state => ({
  tracks: state.tracks,
  isRecording: state.isRecording,
  isPlaying: state.isPlaying
});

const mapDispatchToProps = dispatch => {
  const onPlay = track => e => {
      dispatch(startPlaying());
      const playBackStartTime = Date.now();
      let currNote = 0;
      let timeElapsed = 0;

      let interval = setInterval(() => {
        timeElapsed = Date.now() - playBackStartTime;

        if( currNote < track.roll.length ) {
          let currentTrackRoll = track.roll[currNote];
          if( timeElapsed > currentTrackRoll.timeSlice ) {
            dispatch(groupUpdate(currentTrackRoll.notes));
            currNote++;
          }
        } else {
          clearInterval(interval);
          dispatch(stopPlaying());
        }
      }, 1);
    };

  let dispatches = {
    onPlay
  };

  return dispatches;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Jukebox);
