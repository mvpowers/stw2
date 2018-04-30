import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const SigninForm = ({
  handleChange,
  signinEmail,
  signinPassword,
  signinSubmit,
}) => (
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
    <Button type="submit" fluid onClick={() => signinSubmit(signinEmail, signinPassword)}>
      Submit
    </Button>
  </Form>
);

SigninForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  signinSubmit: PropTypes.func.isRequired,
  signinEmail: PropTypes.string.isRequired,
  signinPassword: PropTypes.string.isRequired,
};

export default SigninForm;
