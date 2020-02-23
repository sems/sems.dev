import React, { Component } from 'react';

import './styles/page.sass';
import './styles/header.sass';

import { Header } from './components/header';

class App extends Component {

  render() {
    return (
      <div className="home_container">
        <Header />
      </div>
    );
  }
}

export default App;
