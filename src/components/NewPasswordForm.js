import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'semantic-ui-react';
import { ErrorMessage } from './';

const NewPasswordForm = ({
  handleChange,
  error,
  newPassword,
  newPasswordConfirmation,
  history,
}) => (
  <div>
    {error.length > 0 && (
      <ErrorMessage header="Login Failed" errorArr={error} />
    )}
    <Form>
      <Form.Field>
        <label htmlFor="newPassword">
          New Password
          <input
            id="newPassword"
            placeholder="New Password"
            value={newPassword}
            onChange={handleChange}
          />
        </label>
      </Form.Field>
      <Form.Field>
        <label htmlFor="newPasswordConfirmation">
          New Password Confirmation
          <input
            id="newPasswordConfirmation"
            placeholder="New Password Confirmation"
            value={newPasswordConfirmation}
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

NewPasswordForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  error: PropTypes.arrayOf(PropTypes.string).isRequired,
  newPassword: PropTypes.string.isRequired,
  newPasswordConfirmation: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default NewPasswordForm;
