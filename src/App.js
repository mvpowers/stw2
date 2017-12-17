import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Switch, Route } from 'react-router';
import './App.css';
import TopNav from './components/TopNav';

import VotePage from './pages/VotePage';
import ResultsPage from './pages/ResultsPage';
import LoginPage from './pages/LoginPage';

const flexStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
};

const scrollStyle = {
  flexGrow: 1,
  overflowX: 'hidden',
  overflowY: 'auto',
};

const stickStyle = {
  flexShrink: 0,
  borderRadius: 0,
  margin: 0,
};

class App extends Component {
  render() {
    return (
      <div style={flexStyle}>
        <TopNav />
        <Container style={scrollStyle}>
          <Switch>
            <Route path="/vote" component={VotePage} />
            <Route path="/results" component={ResultsPage} />
            <Route path="/login" component={LoginPage} />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;
