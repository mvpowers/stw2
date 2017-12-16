import React, { Component } from 'react';
import { Segment, Menu } from 'semantic-ui-react';
import SignInForm from '../components/SignInForm'


class VotePage extends Component {
  state = { activeItem: 'sign in' };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <Segment>
        <Menu pointing secondary widths={2}>
          <Menu.Item name='sign in' active={activeItem === 'sign in'} onClick={this.handleItemClick} />
          <Menu.Item name='sign up' active={activeItem === 'sign up'} onClick={this.handleItemClick} />
        </Menu>
        <Segment>
          <SignInForm active={this.state.activeItem}/>
        </Segment>
      </Segment>
    );
  }
}

export default VotePage;
