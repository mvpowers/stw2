import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class BottomNav extends Component {

  state = {activeItem: 'vote'}; // eslint-disable-line


  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu widths={2}>
          <Menu.Item name='vote' as={Link} to='/vote' active={activeItem === 'vote'} onClick={this.handleItemClick} />
          <Menu.Item name='results' as={Link} to='/results' active={activeItem === 'results'} onClick={this.handleItemClick} />
      </Menu>
    )
  }
}

export default BottomNav;
