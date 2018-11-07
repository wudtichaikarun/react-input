import React, { Component } from 'react';
import { compose } from 'recompose';
import logProps from '../../hoc/logProps';

class App extends Component {
  state = {
    notes: ['note1', 'note2', 'note3'],
    value: ''
  };

  componentDidMount() {
    this.noteInput.focus();
  }

  addNote = e => {
    if (e.key === 'Enter') {
      /**
       * setState is asynchonus
       * setState(arg1, arg2)
       *    arg1 = set state value
       *    arg2 = call back function work after set state value finish
       */
      this.setState(
        // arg1
        {
          notes: [...this.state.notes, e.target.value],
          value: ''
        }
        // arg2
        // () => {
        //   const notes = this.state.notes;
        //   console.log(notes[notes.length - 1]);
        // }
      );
    }
  };

  changeValue = e => {
    this.setState({ value: e.target.value });
  };

  clearInput = _ => {
    this.setState({ value: '' });
  };

  render() {
    return (
      <div>
        <h1>Class Component</h1>
        <ul>
          {this.state.notes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
        <input
          value={this.state.value}
          onChange={this.changeValue}
          type="text"
          onKeyUp={this.addNote}
          ref={input => (this.noteInput = input)}
        />
        <button onClick={this.clearInput}>
          clear input
        </button>
      </div>
    );
  }
}

export default compose(logProps)(App);
