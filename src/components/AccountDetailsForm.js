import React from 'react';
import { Button, Form, Input } from 'semantic-ui-react';
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
  error,
  pending,
}) => (
  <div>
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
        disabled={
          accountName === '' || accountEmail === '' || accountPhone === ''
        }
        loading={pending}
        onClick={() => {}}
      >
        Submit
      </Button>
    </Form>
  </div>
);

SigninForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  accountName: PropTypes.string.isRequired,
  accountEmail: PropTypes.string.isRequired,
  accountPhone: PropTypes.string.isRequired,
  pending: PropTypes.bool.isRequired,
  nameAltered: PropTypes.bool.isRequired,
  phoneAltered: PropTypes.bool.isRequired,
  emailAltered: PropTypes.bool.isRequired,
  error: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SigninForm;
