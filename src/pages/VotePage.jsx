import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Dimmer, Segment } from 'semantic-ui-react';
import VoteOptions from '../components/VoteOptions';
import Question from '../components/Question';
import WaitDimmer from '../components/WaitDimmer';
import { fetchQuestion } from '../store/result/actions';
import { fetchVoteOptions } from '../store/voteOption/actions';

class VotePage extends Component {
  componentDidMount() {
    this.props.fetchQuestion();
    this.props.fetchVoteOptions();
  }
  render() {
    const { result, voteOptions } = this.props;
    return (
      <Dimmer.Dimmable as={Segment} basic>
        <WaitDimmer />
        <Question data={result.data} />
        <VoteOptions data={voteOptions.data} />
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
