import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';
import { ForgotPasswordForm, NewPasswordForm } from '../components';

class ResetPage extends Component {
  constructor() {
    super();
    this.state = {
      recoveryAccount: '',
      newPassword: '',
      newPasswordConfirmation: '',
    };
  }

  componentDidMount() {
    const { token } = this.props.match.params;
    console.log('token', token);
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    const {
      recoveryAccount,
      newPassword,
      newPasswordConfirmation,
    } = this.state;
    const { history } = this.props;
    return (
      <Segment>
        {this.props.match.params.token && (
          <NewPasswordForm
            handleChange={this.handleChange}
            error={[]}
            newPassword={newPassword}
            newPasswordConfirmation={newPasswordConfirmation}
            history={history}
          />
        )}
        {!this.props.match.params.token && (
          <ForgotPasswordForm
            handleChange={this.handleChange}
            error={[]}
            recoveryAccount={recoveryAccount}
            history={history}
          />
        )}
      </Segment>
    );
  }
}

ResetPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      token: PropTypes.string,
    }),
  }).isRequired,
};

export default ResetPage;
