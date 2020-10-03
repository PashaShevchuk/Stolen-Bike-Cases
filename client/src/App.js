import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { HomePage } from './components/home/Home'
import { OfficerPage } from './components/officer/Officer'
import { ReportPage } from './components/report/Report'


function App() {
  return (
    <div className="container">
      <Router>

        <HomePage/>

        <Switch>

          <Route path="/report" exact>
            <ReportPage/>
          </Route>

          <Route path="/officer" exact>
            <OfficerPage/>
          </Route>

        </Switch>

      </Router>
    </div>
  );
}


export default App;
