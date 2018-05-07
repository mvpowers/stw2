import React, { Component } from 'react';
import { Dropdown, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class TopNav extends Component {
  render() {
    return (
      <Menu>
        <Menu.Item>
          <img src="/img/logo.png" alt="logo" />
        </Menu.Item>
        {this.props.location.pathname !== '/login' && (
          <Menu.Menu position="right">
            <Dropdown item icon="bars">
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/vote">
                  Vote
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/results">
                  Results
                </Dropdown.Item>
                <Dropdown.Item>Past Results</Dropdown.Item>
                <Dropdown.Item>Sign Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        )}
      </Menu>
    );
  }
}

export default TopNav;
