import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tab, Header, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AdminVoteOptions } from './';
import { fetchSingleAdminGroup } from '../store/group/actions';

class AdminGroupManage extends Component {
  componentDidMount() {
    const { groupId, user, history, fetchSingleAdminGroup } = this.props;
    if (!user.token) {
      history.push('/login');
    }
    fetchSingleAdminGroup(user.token, groupId);
  }
  render() {
    const { editAdminGroup } = this.props.groups;
    const panes = [
      {
        menuItem: {
          key: 'voteOptions',
          icon: 'street view',
          content: 'Vote Options',
        },
        render: () => <AdminVoteOptions options={editAdminGroup.options} />,
      },
      {
        menuItem: { key: 'users', icon: 'users', content: 'Users' },
        render: () => <div>pane two</div>,
      },
    ];
    return (
      <div>
        <Header as="h2" icon textAlign="center">
          <Icon name="cubes" size="mini" circular />
          <Header.Content>{editAdminGroup.name}</Header.Content>
          <Header.Subheader>
            Group ID: {editAdminGroup.groupId}
          </Header.Subheader>
        </Header>
        <Tab panes={panes} />
      </div>
    );
  }
}

AdminGroupManage.propTypes = {
  fetchSingleAdminGroup: PropTypes.func.isRequired,
  groupId: PropTypes.string.isRequired,
  user: PropTypes.shape({
    token: PropTypes.string,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  groups: PropTypes.shape({
    editAdminGroup: PropTypes.object,
  }).isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
  groups: state.groups,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchSingleAdminGroup,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(AdminGroupManage);
