import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'semantic-ui-react';
import { ErrorMessage } from './';

const SigninForm = ({
  handleChange,
  signinEmail,
  signinPassword,
  signinSubmit,
  pending,
  error,
}) => (
  <div>
    {error.length > 0 && (
      <ErrorMessage header="Login Failed" errorArr={error} />
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
    </Form>
  </div>
);

SigninForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  signinSubmit: PropTypes.func.isRequired,
  signinEmail: PropTypes.string.isRequired,
  signinPassword: PropTypes.string.isRequired,
  pending: PropTypes.bool.isRequired,
  error: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SigninForm;
