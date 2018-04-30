import React, { Component } from 'react';
import { Segment, Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SigninForm, SignupForm } from '../components';
import { fetchToken } from '../store/user/actions';

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

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  signinSubmit = () => {
    // e.preventDefault();
    const { signinEmail, signinPassword } = this.state;
    this.props.fetchToken(signinEmail, signinPassword);
  };

  render() {
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
            />
          )}
        </Segment>
      </Segment>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchToken,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
