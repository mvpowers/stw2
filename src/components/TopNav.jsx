import React from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const TopNav = () => (
  <Menu>
    <Menu.Item>
      <img src="/img/logo.png" alt="logo" />
    </Menu.Item>
    <Menu.Menu position="right">
      <Dropdown item icon="bars">
        <Dropdown.Menu>
          <Dropdown.Item as={Link} to="/vote">Vote</Dropdown.Item>
          <Dropdown.Item as={Link} to="/results">Results</Dropdown.Item>
          <Dropdown.Item>Past Results</Dropdown.Item>
          <Dropdown.Item>Sign Out</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Menu>
  </Menu>
);

export default TopNav;
