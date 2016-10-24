import React from 'react';
import { NOTE_NAMES, TONES, MAPPED_NOTES } from '../../util/tones';
import Note from '../../util/note';
import $ from 'jquery';
import NoteKey from './note_key';

class Synth extends React.Component {

  constructor(props) {
    super(props);

    this.notes = NOTE_NAMES.map( key => [key, new Note(TONES[key])] );
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  onKeyDown(e) {
    this.props.keyPressed(MAPPED_NOTES[e.keyCode]);
    if(this.props.isRecording) {
      this.props.addNotes(this.props.notes);
    }
  }

  onKeyUp(e) {
    this.props.keyReleased(MAPPED_NOTES[e.keyCode]);
    if(this.props.isRecording) {
      this.props.addNotes(this.props.notes);
    }
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
    let { notes } = this.props;
    return (
      <div className='app-parent'>
        <h1 className="app-name" >Synth</h1>
        <div className="keyboard">
        {
          this.notes.map( note => (
            <div key={note[0]}>
              <NoteKey note={note[0]} pressed={notes.includes(note[0])}/>
            </div>))
          }
        </div>
      </div>
    );
  }
}

export default Synth;
