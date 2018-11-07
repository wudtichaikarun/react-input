import React from 'react';
import { compose, withState } from 'recompose';

const AppStateles = ({
  notes,
  value,
  setNote,
  setValue
}) => {
  const addNote = e => {
    if (e.key === 'Enter') {
      const newNotes = [...notes, e.target.value];
      /**
       * setNote is asynchonus
       * setNote(arg1, arg2)
       *    arg1 = value
       *    arg2 = call back function work after set value finish
       */
      setNote(
        // arg1
        newNotes,
        // arg2
        () => {
          const lastNote = newNotes[newNotes.length - 1];
          console.log('lastNote', notes);
        }
      );
      setValue('');
    }
  };

  const changeValue = e => {
    setValue(e.target.value);
  };

  const clearInput = _ => {
    setValue('');
  };

  return (
    <div>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
      <input
        value={value}
        onChange={changeValue}
        type="text"
        onKeyUp={addNote}
      />
      <button onClick={clearInput}>clear input</button>
    </div>
  );
};

export default compose(
  withState('notes', 'setNote', [
    'note1',
    'note2',
    'note3'
  ]),
  withState('value', 'setValue', '')
)(AppStateles);
