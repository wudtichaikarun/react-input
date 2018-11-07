import React from 'react';
import InputStateFull from './components/Input/input.statefull';
import InputStateless from './components/Input/input.stateless';
import InputAnt from './components/Input/input.ant.stateless';

const styled = {
  padding: '1rem'
};

const App = () => (
  <div style={styled}>
    <InputStateFull />
    <br />
    <InputStateless />
    <br />
    <InputAnt />
  </div>
);

export default App;
