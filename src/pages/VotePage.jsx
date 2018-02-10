import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Dimmer, Segment } from 'semantic-ui-react';
import VoteOptions from '../components/VoteOptions';
import Question from '../components/Question';
import WaitDimmer from '../components/WaitDimmer';
import { fetchQuestion } from '../store/result/actions';

class VotePage extends Component {
  componentDidMount() {
    this.props.fetchQuestion();
  }
  render() {
    const { result } = this.props;
    return (
      <Dimmer.Dimmable as={Segment} basic>
        <WaitDimmer />
        <Question data={result.data} />
        <VoteOptions />
      </Dimmer.Dimmable>
    );
  }
}

VotePage.propTypes = {
  fetchQuestion: PropTypes.func.isRequired,
  result: PropTypes.shape({
    data: PropTypes.object.isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    result: state.result,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchQuestion,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(VotePage);
