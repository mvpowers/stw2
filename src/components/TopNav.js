import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dropdown, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class TopNav extends Component {
  render() {
    const { location } = this.props;
    return (
      <Menu>
        <Menu.Item>
          <img src="/img/logo.png" alt="logo" />
        </Menu.Item>
        {location.pathname !== '/login' && (
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

TopNav.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default TopNav;
