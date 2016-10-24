import React from 'react';
import { NOTE_NAMES, TONES, MAPPED_NOTES } from '../../util/tones';
import Note from '../../util/note';
import $ from 'jquery';

class Synth extends React.Component {

  constructor(props) {
    super(props);

    this.notes = NOTE_NAMES.map( key => [key, new Note(TONES[key])] );
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onKeyDown(e) {
    this.props.keyPressed(MAPPED_NOTES[e.keyCode]);
  }

  onKeyUp(e) {
    this.props.keyReleased(MAPPED_NOTES[e.keyCode]);
  }

  playNotes() {
    let { notes } = this.props;
    this.notes.forEach( (note) => {
      if (notes.includes(note[0])) {
        note[1].start();
      } else {
        note[1].stop();
      }

    });
  }

  componentDidMount() {
    $(document).on('keydown', e => this.onKeyDown(e));
    $(document).on('keyup', e => this.onKeyUp(e));
  }

  render() {
    this.playNotes();
    return (
      <div>
        Synth
        <ul>
          {
            this.notes.map( note => <li>{note[0]}</li>)
          }
        </ul>
      </div>
    );
  }
}

export default Synth;
