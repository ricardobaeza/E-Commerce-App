import React, { Component } from 'react';
import Navbar from './components/Navbar';
import ContentPage from './components/index';
import "./App.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

library.add( faSearch );

class App extends Component {
  render() {
    return (
      <div className="body">
        <Navbar />
        <ContentPage />
      </div>
    );
  }
}

export default App;
