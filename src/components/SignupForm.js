import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const SigninForm = ({
  handleChange,
  signupName,
  signupEmail,
  signupPhone,
  signupPassword,
  signupVerifyPassword,
}) => (
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
        <input
          id="signupVerifyPassword"
          type="password"
          placeholder="Verify Password"
          value={signupVerifyPassword}
          onChange={handleChange}
        />
      </label>
    </Form.Field>
    <Button type="submit" fluid>
      Submit
    </Button>
  </Form>
);

SigninForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  signupName: PropTypes.string.isRequired,
  signupEmail: PropTypes.string.isRequired,
  signupPhone: PropTypes.string.isRequired,
  signupPassword: PropTypes.string.isRequired,
  signupVerifyPassword: PropTypes.string.isRequired,
};

export default SigninForm;
