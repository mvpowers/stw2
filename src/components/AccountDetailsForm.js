import React from 'react';
import { Button, Form, Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { ErrorMessage } from './';

const SigninForm = ({
  handleChange,
  nameAltered,
  phoneAltered,
  emailAltered,
  accountName,
  accountPhone,
  accountEmail,
  updateUser,
  token,
  error,
  pending,
  updateMessage,
}) => (
  <div>
    {updateMessage && (
      <Message success header="User Updated" content={updateMessage} />
    )}
    {error.length > 0 && (
      <ErrorMessage header="Account Update Failed" errorArr={error} />
    )}
    <Form>
      <Form.Field>
        <label htmlFor="accountName">
          Name
          <input
            className={nameAltered ? 'altered-input' : ''}
            id="accountName"
            placeholder="Name"
            value={accountName}
            onChange={handleChange}
          />
        </label>
      </Form.Field>
      <Form.Field>
        <label htmlFor="accountEmail">
          Email
          <input
            className={emailAltered ? 'altered-input' : ''}
            id="accountEmail"
            type="email"
            placeholder="Email"
            value={accountEmail}
            onChange={handleChange}
          />
        </label>
      </Form.Field>
      <Form.Field>
        <label htmlFor="accountPhone">
          Phone
          <input
            className={phoneAltered ? 'altered-input' : ''}
            id="accountPhone"
            type="tel"
            placeholder="123-555-1234"
            value={accountPhone}
            onChange={handleChange}
          />
        </label>
      </Form.Field>
      <Button
        type="submit"
        fluid
        disabled={!nameAltered && !phoneAltered && !emailAltered}
        loading={pending}
        onClick={() => {
          updateUser(token, accountName, accountPhone, accountEmail);
        }}
      >
        Submit
      </Button>
    </Form>
  </div>
);

SigninForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
  accountName: PropTypes.string.isRequired,
  accountEmail: PropTypes.string.isRequired,
  accountPhone: PropTypes.string.isRequired,
  updateMessage: PropTypes.string.isRequired,
  pending: PropTypes.bool.isRequired,
  nameAltered: PropTypes.bool.isRequired,
  phoneAltered: PropTypes.bool.isRequired,
  emailAltered: PropTypes.bool.isRequired,
  error: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SigninForm;
