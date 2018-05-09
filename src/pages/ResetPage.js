import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ForgotPasswordForm, NewPasswordForm } from '../components';
import { createPasswordResetToken } from '../store/user/actions';

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

  render() {
    const {
      recoveryAccount,
      newPassword,
      newPasswordConfirmation,
    } = this.state;
    const { history, user } = this.props;
    return (
      <Segment>
        {!this.props.match.params.token && (
          <ForgotPasswordForm
            handleChange={this.handleChange}
            error={user.resetError}
            recoveryAccount={recoveryAccount}
            history={history}
            submitRecoveryAccount={this.submitRecoveryAccount}
            tokenResetMessage={user.tokenResetMessage}
          />
        )}
        {this.props.match.params.token && (
          <NewPasswordForm
            handleChange={this.handleChange}
            error={[]}
            newPassword={newPassword}
            newPasswordConfirmation={newPasswordConfirmation}
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
  createPasswordResetToken: PropTypes.func.isRequired,
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
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(ResetPage);
