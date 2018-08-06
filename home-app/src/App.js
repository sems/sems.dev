import React, { Component } from 'react';

import './styles/page.css';

import { Header } from './components/header';
import { Portfolio } from './components/portfolio';
import { Footer } from './components/footer';

class App extends Component {

  render() {
    return (
      <div className="home_container">
        <Header />
        <Portfolio />
        <Footer />
      </div>
    );
  }
}

export default App;
