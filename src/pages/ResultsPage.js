import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';
import ResultsGraph from '../components/ResultsGraph';
import { Comments, Question, Wait } from '../components';
import { fetchResult, toggleLike } from '../store/result/actions';
import { clearToken } from '../store/user/actions';

class ResultsPage extends Component {
  componentDidMount() {
    const { user, history, fetchResult } = this.props;
    if (!user.token) {
      history.push('/login');
    }
    fetchResult(user.token);
  }

  componentDidUpdate() {
    const { user, result, history, clearToken } = this.props;
    if (user.error.length + result.error.length > 0) {
      clearToken();
      history.push('/login');
    }
  }

  handleLike = (userId, commentId) => {
    const { toggleLike } = this.props;
    toggleLike(userId, commentId);
  };

  render() {
    const { result, user } = this.props;
    return (
      <div>
        {result.pending ? (
          <Wait />
        ) : (
          <Segment basic>
            <Question question={result.question} />
            <Segment>
              <ResultsGraph votes={result.votes} />
            </Segment>
            <Comments
              comments={result.comments}
              userId={user.id}
              toggleLike={this.handleLike}
            />
          </Segment>
        )}
      </div>
    );
  }
}

ResultsPage.propTypes = {
  result: PropTypes.shape({
    question: PropTypes.string,
  }).isRequired,
  fetchResult: PropTypes.func.isRequired,
  toggleLike: PropTypes.func.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string,
    token: PropTypes.string,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  clearToken: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
  result: state.result,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchResult, toggleLike, clearToken }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ResultsPage);
