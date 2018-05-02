import React from 'react';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';

const Question = ({ question }) => (
  <Message icon="question circle outline" header={question} />
);

Question.propTypes = {
  question: PropTypes.string.isRequired,
};

export default Question;
