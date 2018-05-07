import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Dropdown, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { clearToken } from '../store/user/actions';

class TopNav extends Component {
  signout() {
    const { clearToken, history } = this.props;
    clearToken();
    history.push('/login');
  }
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
                <Dropdown.Item onClick={() => this.signout()}>
                  Sign Out
                </Dropdown.Item>
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
  clearToken: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clearToken }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TopNav);
