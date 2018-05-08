import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'semantic-ui-react';
import { ErrorMessage } from './';

const ForgotPasswordForm = ({
  handleChange,
  error,
  recoveryAccount,
  history,
}) => (
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
        fluid
        // loading={pending}
        // onClick={() => console.log('submitted')}
        type="submit"
      >
        Submit
      </Button>
      <Button
        basic
        className="additional-btn"
        color="red"
        fluid
        onClick={() => history.push('/login')}
      >
        Cancel
      </Button>
    </Form>
  </div>
);

ForgotPasswordForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  error: PropTypes.arrayOf(PropTypes.string).isRequired,
  recoveryAccount: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default ForgotPasswordForm;
