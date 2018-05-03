import React from 'react';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';

const ErrorMessage = ({ header, errorArr }) => (
  <Message error>
    <Message.Header>{header}</Message.Header>
    <Message.List>
      {errorArr.map(err => <Message.Item>{err}</Message.Item>)}
    </Message.List>
  </Message>
);

ErrorMessage.propTypes = {
  header: PropTypes.string.isRequired,
  errorArr: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ErrorMessage;
