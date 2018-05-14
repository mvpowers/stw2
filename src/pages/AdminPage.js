import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';
import { AdminGroupManage, AdminGroups } from '../components';

class AdminPage extends Component {
  render() {
    const { match, history } = this.props;
    return (
      <Segment basic>
        {match.params.groupId ? (
          <AdminGroupManage />
        ) : (
          <AdminGroups history={history} />
        )}
      </Segment>
    );
  }
}

AdminPage.propTypes = {
  match: PropTypes.shape({
    groupId: PropTypes.string,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default AdminPage;
