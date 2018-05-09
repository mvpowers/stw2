import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { ErrorMessage } from './';

const SigninForm = ({
  handleChange,
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
  error: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SigninForm;
