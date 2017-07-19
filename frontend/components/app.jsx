import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';

const App = () => (
  <div className="app">
    <header>
      <Link to="/" className="home-link">
        <h1>NodeItAll</h1>
      </Link>
      <NavBarContainer />
    </header>
  </div>
);

export default App;
