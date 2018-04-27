import React from 'react';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';

const Question = ({ data }) => (
  <Message icon="question circle outline" header={data.question} />
);

Question.propTypes = {
  data: PropTypes.shape({
    question: PropTypes.string.isRequired,
  }).isRequired,
};

export default Question;
