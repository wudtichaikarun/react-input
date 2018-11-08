import React from 'react';
import { Input } from 'antd';
import { compose, withState } from 'recompose';
import logProps from '../../hoc/logProps';

const InputAnt = ({ notes, value, setNote, setValue }) => {
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
          console.log('lastNote', lastNote);
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
      <h1>Ant StateLess Component</h1>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
      <Input
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
  withState('value', 'setValue', ''),
  logProps
)(InputAnt);
