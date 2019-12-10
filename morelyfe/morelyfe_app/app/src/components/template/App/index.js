import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ui_nav } from '../../../actions';

import Navigation from '../Navigation';
import Header from '../Header';
import Body from '../Body';

import './index.css';

//if ui main -> show only contents
//if ui sidebar -> show sidebars
//if ui header -> show header.
//but how? ans: import both and remove both

function App() {
  const ui = useSelector(state => state.ui);

  return (
    <Router>
        <div className="app">
          <Header />
          {ui.nav === 0 ? 
            <Navigation />:''}
            <Body />
        </div> 
      </Router>
  );
}

export default App;
