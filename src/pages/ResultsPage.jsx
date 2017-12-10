import React from 'react';
import { Segment } from 'semantic-ui-react';
import ResultsChart from '../components/ResultsChart';
import Comments from '../components/Comments';

const ResultsPage = (props) => (
  <Segment>
    <ResultsChart />
    <Comments />
  </Segment>
);

export default ResultsPage;
