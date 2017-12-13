import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';
import ResultsChart from '../components/ResultsGraph';
import Comments from '../components/Comments';
import { toggleLike } from '../store/comments/actions';

class ResultsPage extends Component {
  render() {
    return (
      <Segment>
        <ResultsChart />
        <Comments commentData={this.props.comments} toggleLike={this.props.toggleLike} />
      </Segment>
    );
  }
}

ResultsPage.propTypes = {
  comments: PropTypes.array.isRequired,
  toggleLike: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    comments: state.comments.comments,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleLike }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultsPage);
