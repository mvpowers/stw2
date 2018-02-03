import React from 'react';
import { Message } from 'semantic-ui-react';

const Question = ({ data }) => (
  <Message
    icon="question circle outline"
    header={data.question}
    test={console.log('props', data)}
  />
);

export default Question;
