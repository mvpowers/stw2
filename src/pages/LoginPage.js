import React, { Component } from 'react';
import { Segment, Menu } from 'semantic-ui-react';
import { SignInForm } from '../components';

class VotePage extends Component {
  constructor() {
    super();
    this.state = { activeItem: 'signIn' };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <Segment>
        <Menu pointing secondary widths={2}>
          <Menu.Item
            name="sign in"
            active={activeItem === 'signIn'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="sign up"
            active={activeItem === 'signUp'}
            onClick={this.handleItemClick}
          />
        </Menu>
        <Segment>
          <SignInForm active={this.state.activeItem} />
        </Segment>
      </Segment>
    );
  }
}

export default VotePage;
