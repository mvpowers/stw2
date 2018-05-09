import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Segment, Tab } from 'semantic-ui-react';
import { AccountDetailsForm } from '../components';

class AccountPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountName: props.user.name,
      accountPhone: props.user.phone,
      accountEmail: props.user.email,
      nameAltered: false,
      phoneAltered: false,
      emailAltered: false,
    };
  }

  handleChange = e => {
    const { user } = this.props;
    const inputField = e.target.id.replace('account', '').toLowerCase();
    const alteredState = `${inputField}Altered`;

    this.setState({
      [e.target.id]: e.target.value,
    });

    if (user[inputField] !== e.target.value) {
      this.setState({
        [alteredState]: true,
      });
    } else {
      this.setState({ [alteredState]: false });
    }
  };

  render() {
    const {
      accountName,
      accountPhone,
      accountEmail,
      nameAltered,
      phoneAltered,
      emailAltered,
    } = this.state;
    const panes = [
      {
        menuItem: { key: 'user', icon: 'user', content: 'User' },
        render: () => (
          <Tab.Pane>
            <AccountDetailsForm
              error={[]}
              accountName={accountName}
              accountPhone={accountPhone}
              accountEmail={accountEmail}
              handleChange={this.handleChange}
              nameAltered={nameAltered}
              phoneAltered={phoneAltered}
              emailAltered={emailAltered}
            />
          </Tab.Pane>
        ),
      },
      {
        menuItem: { key: 'group', icon: 'users', content: 'Groups' },
        render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>,
      },
    ];

    return (
      <Segment>
        <Tab panes={panes} />
      </Segment>
    );
  }
}

AccountPage.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(AccountPage);
