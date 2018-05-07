import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'semantic-ui-react';
import { ErrorMessage } from './';

const ForgotPassword = ({ handleChange, error, recoveryAccount }) => (
  <div>
    {error.length > 0 && (
      <ErrorMessage header="Login Failed" errorArr={error} />
    )}
    <Form>
      <Form.Field>
        <label htmlFor="signinEmail">
          Email or Phone
          <input
            id="recoveryAccount"
            placeholder="Email or Phone"
            value={recoveryAccount}
            onChange={handleChange}
          />
        </label>
      </Form.Field>
      <Button
        // loading={pending}
        type="submit"
        fluid
        onClick={() => console.log('submitted')}
      >
        Submit
      </Button>
    </Form>
  </div>
);

ForgotPassword.propTypes = {
  handleChange: PropTypes.func.isRequired,
  error: PropTypes.arrayOf(PropTypes.string).isRequired,
  recoveryAccount: PropTypes.string.isRequired,
};

export default ForgotPassword;
