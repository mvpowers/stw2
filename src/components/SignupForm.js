import React from 'react';
import { Button, Form, Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { ErrorMessage } from './';

const SigninForm = ({
  handleChange,
  signupName,
  signupEmail,
  signupPhone,
  signupPassword,
  signupVerifyPassword,
  signupSubmit,
  error,
  pending,
}) => (
  <div>
    {error.length > 0 && (
      <ErrorMessage header="Registration Failed" errorArr={error} />
    )}
    <Form>
      <Form.Field>
        <label htmlFor="signupName">
          Name
          <input
            id="signupName"
            placeholder="Name"
            value={signupName}
            onChange={handleChange}
          />
        </label>
      </Form.Field>
      <Form.Field>
        <label htmlFor="signupEmail">
          Email
          <input
            id="signupEmail"
            type="email"
            placeholder="Email"
            value={signupEmail}
            onChange={handleChange}
          />
        </label>
      </Form.Field>
      <Form.Field>
        <label htmlFor="signupPhone">
          Phone
          <input
            id="signupPhone"
            type="tel"
            placeholder="123-555-1234"
            value={signupPhone}
            onChange={handleChange}
          />
        </label>
      </Form.Field>
      <Form.Field>
        <label htmlFor="signupPassword">
          Password
          <input
            id="signupPassword"
            type="password"
            placeholder="Password"
            value={signupPassword}
            onChange={handleChange}
          />
        </label>
      </Form.Field>
      <Form.Field>
        <label htmlFor="signupVerifyPassword">
          Verify Password
          <Input
            id="signupVerifyPassword"
            type="password"
            placeholder="Verify Password"
            value={signupVerifyPassword}
            onChange={handleChange}
            icon={
              signupPassword === signupVerifyPassword && signupPassword !== ''
                ? 'checkmark'
                : 'remove'
            }
          />
        </label>
      </Form.Field>
      <Button
        type="submit"
        fluid
        disabled={
          signupName === '' ||
          signupEmail === '' ||
          signupPhone === '' ||
          signupPassword === '' ||
          signupPassword !== signupVerifyPassword
        }
        loading={pending}
        onClick={() => {
          signupSubmit(signupName, signupEmail, signupPhone, signupPassword);
        }}
      >
        Submit
      </Button>
    </Form>
  </div>
);

SigninForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  signupSubmit: PropTypes.func.isRequired,
  signupName: PropTypes.string.isRequired,
  signupEmail: PropTypes.string.isRequired,
  signupPhone: PropTypes.string.isRequired,
  signupPassword: PropTypes.string.isRequired,
  signupVerifyPassword: PropTypes.string.isRequired,
  pending: PropTypes.bool.isRequired,
  error: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SigninForm;
