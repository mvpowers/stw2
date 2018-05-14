import React from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';
import { AdminGroupManage, AdminGroups } from '../components';

const AdminPage = ({ match, history }) => (
  <Segment basic>
    {match.params.groupId ? (
      <AdminGroupManage groupId={match.params.groupId} history={history} />
    ) : (
      <AdminGroups history={history} />
    )}
  </Segment>
);

AdminPage.propTypes = {
  match: PropTypes.shape({
    groupId: PropTypes.string,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default AdminPage;
