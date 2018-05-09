import React, { Component } from 'react';
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
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    const { accountName, accountPhone, accountEmail } = this.state;
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

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(AccountPage);
