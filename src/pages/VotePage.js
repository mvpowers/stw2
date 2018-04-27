import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Dimmer, Segment } from 'semantic-ui-react';
import VoteOptions from '../components/VoteOptions';
import Question from '../components/Question';
import WaitDimmer from '../components/WaitDimmer';
import { fetchQuestion, submitVote } from '../store/result/actions';
import { fetchVoteOptions } from '../store/voteOption/actions';

class VotePage extends Component {
  constructor() {
    super();
    this.state = {
      modalStatus: false,
      currentVoteName: '',
      currentVoteId: '',
    };
  }

  componentDidMount() {
    const { fetchQuestion, fetchVoteOptions } = this.props;
    fetchQuestion();
    fetchVoteOptions();
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

  handleSubmit = () => {
    submitVote(this.state.currentVoteId, this.state.currentVoteName);
    this.setState({
      modalStatus: false,
    });
  };

  render() {
    const { result, voteOptions } = this.props;
    const { modalStatus, currentVoteName, currentVoteId } = this.state;
    return (
      <Dimmer.Dimmable as={Segment} basic>
        <WaitDimmer />
        <Question data={result.data} />
        <VoteOptions
          data={voteOptions.data}
          modalStatus={modalStatus}
          modalOpen={this.modalOpen}
          modalClose={this.modalClose}
          handleSubmit={this.handleSubmit}
          currentVoteId={currentVoteId}
          currentVoteName={currentVoteName}
        />
      </Dimmer.Dimmable>
    );
  }
}

VotePage.propTypes = {
  fetchQuestion: PropTypes.func.isRequired,
  fetchVoteOptions: PropTypes.func.isRequired,
  result: PropTypes.shape({
    data: PropTypes.object.isRequired,
  }).isRequired,
  voteOptions: PropTypes.shape({
    data: PropTypes.arrayOf(String).isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    result: state.result,
    voteOptions: state.voteOptions,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchQuestion,
      fetchVoteOptions,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(VotePage);
