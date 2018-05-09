import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ForgotPasswordForm, NewPasswordForm } from '../components';
import {
  createPasswordResetToken,
  updatePassword,
} from '../store/user/actions';

class ResetPage extends Component {
  constructor() {
    super();
    this.state = {
      recoveryAccount: '',
      newPassword: '',
      newPasswordConfirmation: '',
    };
  }

  componentDidUpdate() {
    const { user, history } = this.props;
    if (user.newRegister) {
      history.push('/login');
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  submitRecoveryAccount = recoveryAccount => {
    const { createPasswordResetToken } = this.props;
    createPasswordResetToken(recoveryAccount);
    this.setState({ recoveryAccount: '' });
  };

  submitNewPassword = (resetToken, newPassword) => {
    const { updatePassword } = this.props;
    updatePassword(resetToken, newPassword);
    this.setState({ newPassword: '', newPasswordConfirmation: '' });
  };

  render() {
    const {
      recoveryAccount,
      newPassword,
      newPasswordConfirmation,
    } = this.state;
    const { history, user, match } = this.props;
    return (
      <Segment>
        {!match.params.token && (
          <ForgotPasswordForm
            handleChange={this.handleChange}
            error={user.resetError}
            recoveryAccount={recoveryAccount}
            history={history}
            submitRecoveryAccount={this.submitRecoveryAccount}
            tokenResetMessage={user.tokenResetMessage}
          />
        )}
        {match.params.token && (
          <NewPasswordForm
            handleChange={this.handleChange}
            error={user.resetError}
            newPassword={newPassword}
            newPasswordConfirmation={newPasswordConfirmation}
            history={history}
            token={match.params.token}
            submitNewPassword={this.submitNewPassword}
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
  createPasswordResetToken: PropTypes.func.isRequired,
  updatePassword: PropTypes.func.isRequired,
  user: PropTypes.shape({
    resetError: PropTypes.arrayOf(PropTypes.string),
    tokenResetMessage: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      createPasswordResetToken,
      updatePassword,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(ResetPage);
