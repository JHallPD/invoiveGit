import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './Navigation.js';
import InVoicePage from './Invoice.js';
import SideBar from './sideBar.js';
import * as ROUTES from './routes.js';
import './index.css';

function App() {
  return (
      <Router>

          <div className="mainDiv">

              <Navigation />
              <div className="gridBox">
              <SideBar/>
                  <Route exact path={ROUTES.INVOICE} component={InVoicePage} />
              </div>
          </div>
      </Router>
  );
}

export default App;
