import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Segment, Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SigninForm, SignupForm } from '../components';
import { fetchToken } from '../store/user/actions';
import { clearVoteOptionErrors } from '../store/voteOption/actions';
import { clearResultErrors } from '../store/result/actions';

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      activeItem: 'signin',
      signinEmail: '',
      signinPassword: '',
      signupName: '',
      signupEmail: '',
      signupPhone: '',
      signupPassword: '',
      signupVerifyPassword: '',
    };
  }

  componentDidUpdate() {
    const { user, history } = this.props;
    if (user.token) {
      history.push('/vote');
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  signinSubmit = (email, password) => {
    const {
      result,
      voteOptions,
      fetchToken,
      clearVoteOptionErrors,
      clearResultErrors,
    } = this.props;
    if (result.error || voteOptions.error) {
      clearResultErrors();
      clearVoteOptionErrors();
    }
    fetchToken(email, password);
  };

  render() {
    const { user } = this.props;
    const {
      activeItem,
      signinEmail,
      signinPassword,
      signupName,
      signupEmail,
      signupPhone,
      signupPassword,
      signupVerifyPassword,
    } = this.state;

    return (
      <Segment>
        <Menu pointing secondary widths={2}>
          <Menu.Item
            name="signin"
            active={activeItem === 'signin'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="signup"
            active={activeItem === 'signup'}
            onClick={this.handleItemClick}
          />
        </Menu>
        <Segment>
          {activeItem === 'signin' && (
            <SigninForm
              handleChange={this.handleChange}
              signinSubmit={this.signinSubmit}
              signinEmail={signinEmail}
              signinPassword={signinPassword}
              pending={user.pending}
              error={user.error}
            />
          )}
          {activeItem === 'signup' && (
            <SignupForm
              handleChange={this.handleChange}
              signupName={signupName}
              signupEmail={signupEmail}
              signupPhone={signupPhone}
              signupPassword={signupPassword}
              signupVerifyPassword={signupVerifyPassword}
              pending={user.pending}
              error={user.error}
            />
          )}
        </Segment>
      </Segment>
    );
  }
}

LoginPage.propTypes = {
  user: PropTypes.shape({
    pending: PropTypes.bool,
    error: PropTypes.string,
  }).isRequired,
  fetchToken: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
  result: state.result,
  voteOptions: state.voteOptions,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchToken,
      clearVoteOptionErrors,
      clearResultErrors,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
