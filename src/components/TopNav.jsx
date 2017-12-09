import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

const TopNav = () => (
  <Menu>
    <Menu.Item>
      <img src="/img/logo.png" alt="logo" />
    </Menu.Item>
    <Menu.Item name="signout" position="right">
      Signout
    </Menu.Item>
  </Menu>

);

export default TopNav;
