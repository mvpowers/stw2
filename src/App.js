import React, { Component } from 'react';
import { Container, Dimmer } from 'semantic-ui-react';
import './App.css';
import BottomNav from './components/BottomNav';
import TopNav from './components/TopNav';
import VotePage from './pages/VotePage';

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
          <VotePage />
        </Container>
        <BottomNav style={stickStyle} />
      </div>
    );
  }
}

export default App;
