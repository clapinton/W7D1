import React from 'react';

const NoteKey = ({note, pressed}) => (
  <div style={{color: pressed ? 'green' : 'red'}}>{note}</div>
);

export default NoteKey;
