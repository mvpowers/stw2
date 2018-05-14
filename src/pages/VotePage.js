import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Divider } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { VoteOptions, Question, Wait } from '../components';
import { fetchGroups } from '../store/group/actions';
import { clearToken } from '../store/user/actions';
import {
  fetchQuestion,
  submitVote,
  submitComment,
} from '../store/result/actions';

class VotePage extends Component {
  constructor() {
    super();
    this.state = {
      modalStatus: false,
      currentVoteName: '',
      currentVoteId: '',
      currentComment: '',
    };
  }

  componentDidMount() {
    const { user, history, fetchQuestion, fetchGroups } = this.props;
    if (!user.token) {
      history.push('/login');
    }
    fetchQuestion(user.token);
    fetchGroups(user.token);
  }

  componentDidUpdate() {
    const { user, groups, history, clearToken } = this.props;
    if (user.error.length + groups.error.length > 0) {
      clearToken();
      history.push('/login');
    }
  }

  modalOpen = e => {
    this.setState({
      modalStatus: true,
      currentVoteId: e.target.id,
      currentVoteName: e.target.name,
    });
  };

  modalClose = () => {
    this.setState({
      modalStatus: false,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { currentVoteId, currentVoteName, currentComment } = this.state;
    submitVote(currentVoteId, currentVoteName);
    if (currentComment) {
      submitComment(currentVoteId, currentVoteName, currentComment);
    }
    this.setState({
      modalStatus: false,
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { result, groups } = this.props;
    const {
      modalStatus,
      currentVoteName,
      currentVoteId,
      currentComment,
    } = this.state;
    return (
      <div>
        {result.pending ? (
          <Wait />
        ) : (
          <div>
            <Question question={result.question} />
            {groups.data.map(group => (
              <div key={group._id}>
                <Divider horizontal section>
                  {group.name}
                </Divider>
                <VoteOptions
                  data={group.options}
                  modalStatus={modalStatus}
                  modalOpen={this.modalOpen}
                  modalClose={this.modalClose}
                  handleSubmit={this.handleSubmit}
                  handleChange={this.handleChange}
                  currentVoteId={currentVoteId}
                  currentVoteName={currentVoteName}
                  currentComment={currentComment}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

VotePage.propTypes = {
  fetchQuestion: PropTypes.func.isRequired,
  fetchGroups: PropTypes.func.isRequired,
  result: PropTypes.shape({
    pending: PropTypes.bool.isRequired,
    question: PropTypes.string.isRequired,
  }).isRequired,
  groups: PropTypes.shape({
    data: PropTypes.arrayOf(String).isRequired,
  }).isRequired,
  user: PropTypes.shape({
    token: PropTypes.string,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  clearToken: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    user: state.user,
    result: state.result,
    groups: state.groups,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchQuestion,
      fetchGroups,
      clearToken,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(VotePage);
