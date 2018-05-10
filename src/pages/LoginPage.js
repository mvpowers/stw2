import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Segment, Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SigninForm, SignupForm } from '../components';
import { fetchToken, register } from '../store/user/actions';
import { clearGroupErrors } from '../store/group/actions';
import { clearResultErrors } from '../store/result/actions';
import { uniqueArr } from '../utils';

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

  componentWillReceiveProps(newProps) {
    if (newProps.user.newRegister) {
      this.setState({ activeItem: 'signin' });
    }
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

  forgotPassword = () => {
    this.setState({
      activeItem: 'forgotPassword',
    });
  };

  signinSubmit = (email, password) => {
    const {
      result,
      groups,
      fetchToken,
      clearGroupErrors,
      clearResultErrors,
    } = this.props;
    if (result.error || groups.error) {
      clearResultErrors();
      clearGroupErrors();
    }
    fetchToken(email, password);
  };

  signupSubmit = (name, email, phone, password) => {
    const { register } = this.props;
    const sanitizedPhone = phone.replace(/\D+/g, '');
    register(name, email, sanitizedPhone, password);
  };

  render() {
    const { user, result, groups, history } = this.props;
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
              forgotPassword={this.forgotPassword}
              signinEmail={signinEmail}
              signinPassword={signinPassword}
              newRegister={user.newRegister}
              pending={user.pending}
              history={history}
              error={[
                ...user.error,
                ...result.error,
                ...groups.error,
              ].filter(uniqueArr)}
            />
          )}
          {activeItem === 'signup' && (
            <SignupForm
              handleChange={this.handleChange}
              signupSubmit={this.signupSubmit}
              signupName={signupName}
              signupEmail={signupEmail}
              signupPhone={signupPhone}
              signupPassword={signupPassword}
              signupVerifyPassword={signupVerifyPassword}
              pending={user.pending}
              error={user.signupError}
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
    newRegister: PropTypes.bool,
    error: PropTypes.arrayOf(PropTypes.string),
    signupError: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  result: PropTypes.shape({
    error: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  groups: PropTypes.shape({
    error: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  fetchToken: PropTypes.func.isRequired,
  clearGroupErrors: PropTypes.func.isRequired,
  clearResultErrors: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
  result: state.result,
  groups: state.groups,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchToken,
      clearGroupErrors,
      clearResultErrors,
      register,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
