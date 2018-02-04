import React from 'react';
import { Message } from 'semantic-ui-react';

const Question = ({ data }) => (
  <Message
    icon="question circle outline"
    header={data.result}
  />
);

export default Question;
