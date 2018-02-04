import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';
import ResultsChart from '../components/ResultsGraph';
import Comments from '../components/Comments';
import Question from '../components/Question';

class ResultsPage extends Component {
  render() {
    return (
      <Segment basic>
        <Question />
        <Segment>
          <ResultsChart />
        </Segment>
        <Comments commentData={this.props.comments} />
      </Segment>
    );
  }
}

ResultsPage.propTypes = {
  comments: PropTypes.arrayOf(Object).isRequired,
};

function mapStateToProps(state) {
  return {
    comments: state.comments.comments,
  };
}

export default connect(mapStateToProps)(ResultsPage);
