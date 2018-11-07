import React from 'react';
import { Input } from 'antd';
import { compose } from 'recompose';
import logProps from '../../hoc/logProps';

const InputAnt = () => (
  <div>
    <h1>Ant StateLess Componennt</h1>
    <Input placeholder="please type something..." />
  </div>
);

export default compose(logProps)(InputAnt);
