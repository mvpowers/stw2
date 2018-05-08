import React from 'react';
import { Container } from 'semantic-ui-react';
import { Switch, Route, Redirect } from 'react-router';
import { TopNav } from './components';
import VotePage from './pages/VotePage';
import ResultsPage from './pages/ResultsPage';
import LoginPage from './pages/LoginPage';
import ResetPage from './pages/ResetPage';

const flexStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
};

const scrollStyle = {
  flexGrow: 1,
  overflowX: 'hidden',
  overflowY: 'auto',
  zIndex: 0,
};

const App = () => (
  <div style={flexStyle}>
    <Route path="/" component={TopNav} />
    <Container style={scrollStyle}>
      <Switch>
        <Route path="/vote" component={VotePage} />
        <Route path="/results" component={ResultsPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/reset" component={ResetPage} />
        <Redirect from="/" to="/login" />
      </Switch>
    </Container>
  </div>
);

export default App;
