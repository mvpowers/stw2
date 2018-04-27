import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const SignInForm = ({ active }) => {
  if (active === 'sign in') {
    return (
      <Form>
        <Form.Field>
          <label>Email</label>
          <input placeholder="Email" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input type="password" placeholder="Password" />
        </Form.Field>
        <Button type="submit" fluid>
          Submit
        </Button>
      </Form>
    );
  }
  return (
    <Form>
      <Form.Field>
        <label>Name</label>
        <input placeholder="Name" />
      </Form.Field>
      <Form.Field>
        <label>Email</label>
        <input type="email" placeholder="Email" />
      </Form.Field>
      <Form.Field>
        <label>Phone</label>
        <input type="tel" placeholder="XXX-XXX-XXXX" />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input type="password" placeholder="Password" />
      </Form.Field>
      <Form.Field>
        <label>Verify Password</label>
        <input type="password" placeholder="Verify Password" />
      </Form.Field>
      <Button type="submit" fluid>
        Submit
      </Button>
    </Form>
  );
};

SignInForm.propTypes = {
  active: PropTypes.string.isRequired,
};

export default SignInForm;
