import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';
import { AdminGroupManage, AdminGroups } from '../components';

class AdminPage extends Component {
  constructor() {
    super();
    this.state = {
      test: [
        { name: 'testGroup 1', groupId: 45 },
        { name: 'testGroup 2', groupId: 78 },
      ],
    };
  }

  navigateToGroup = e => {
    const { history } = this.props;
    history.push(`/admin/${e.target.id}`);
  };

  render() {
    const { match } = this.props;
    return (
      <Segment basic>
        {match.params.groupId ? (
          <AdminGroupManage />
        ) : (
          <AdminGroups
            groups={this.state.test}
            navigateToGroup={this.navigateToGroup}
          />
        )}
      </Segment>
    );
  }
}

AdminPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  match: PropTypes.shape({
    groupId: PropTypes.string,
  }).isRequired,
};

export default AdminPage;
