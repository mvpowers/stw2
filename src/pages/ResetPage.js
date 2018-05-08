import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';
import { ForgotPasswordForm } from '../components';

class ResetPage extends Component {
  constructor() {
    super();
    this.state = {
      recoveryAccount: '',
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    const { recoveryAccount } = this.state;
    const { history } = this.props;
    return (
      <Segment>
        <ForgotPasswordForm
          handleChange={this.handleChange}
          error={[]}
          recoveryAccount={recoveryAccount}
          history={history}
        />
      </Segment>
    );
  }
}

ResetPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default ResetPage;
