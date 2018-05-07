import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Message } from 'semantic-ui-react';
import { ErrorMessage } from './';

const SigninForm = ({
  handleChange,
  signinEmail,
  signinPassword,
  signinSubmit,
  pending,
  error,
  newRegister,
  forgotPassword,
}) => (
  <div>
    {error.length > 0 && (
      <ErrorMessage header="Login Failed" errorArr={error} />
    )}
    {newRegister && (
      <Message
        success
        header="Registration Successful"
        content="Please login"
      />
    )}
    <Form>
      <Form.Field>
        <label htmlFor="signinEmail">
          Email
          <input
            id="signinEmail"
            placeholder="Email"
            value={signinEmail}
            onChange={handleChange}
          />
        </label>
      </Form.Field>
      <Form.Field>
        <label htmlFor="signinPassword">
          Password
          <input
            id="signinPassword"
            type="password"
            placeholder="Password"
            value={signinPassword}
            onChange={handleChange}
          />
        </label>
      </Form.Field>
      <Button
        loading={pending}
        type="submit"
        fluid
        onClick={() => signinSubmit(signinEmail, signinPassword)}
      >
        Submit
      </Button>
      <Button
        basic
        compact
        color="teal"
        fluid
        id="forget-pw-btn"
        onClick={() => forgotPassword()}
      >
        Forgot Password
      </Button>
    </Form>
  </div>
);

SigninForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  signinSubmit: PropTypes.func.isRequired,
  forgotPassword: PropTypes.func.isRequired,
  signinEmail: PropTypes.string.isRequired,
  signinPassword: PropTypes.string.isRequired,
  pending: PropTypes.bool.isRequired,
  newRegister: PropTypes.bool.isRequired,
  error: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SigninForm;
