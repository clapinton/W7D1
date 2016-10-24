import { connect } from 'react-redux';
import { startPlaying, stopPlaying } from '../../actions/playing_actions';
import { groupUpdate } from '../../actions/notes_actions';
import Jukebox from './jukebox';
import $ from 'jquery';

const mapStateToProps = state => ({
  tracks: state.tracks,
  isRecording: state.isRecording,
  isPlaying: state.isPlaying
});

const mapDispatchToProps = dispatch => {
  const onPlay = track => e => {
      dispatch(startPlaying());
      let playBackStartTime = Date.now();
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
          let checkbox = $('#track_' + track.id);

          if( checkbox.is(':checked')) {
            currNote = 0;
            timeElapsed = 0;
            playBackStartTime = Date.now();
          } else {
            clearInterval(interval);
            dispatch(stopPlaying());
          }
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
