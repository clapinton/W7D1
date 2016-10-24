import React from 'react';

const NoteKey = ({note, pressed}) => (
  <div className={ pressed ? 'key-note pressed' : 'key-note'}>{note}</div>
);

export default NoteKey;
