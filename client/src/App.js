import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import { HomePage } from './components/home/Home'
import { OfficerPage } from './components/officer/Officer'
import { ReportPage } from './components/report/Report'


function App() {
  return (
    <div className="container">
      <Router>

        <Switch>

          <Route path="/" exact>
            <HomePage/>
          </Route>

          <Route path="/officer" exact>
            <OfficerPage/>
          </Route>

          <Route path="/report" exact>
            <ReportPage/>
          </Route>

          <Route path="*">
            <HomePage/>
          </Route>

        </Switch>

      </Router>

    </div>
  );
}

export default App;
