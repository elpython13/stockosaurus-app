import Home from '../screens/Home';
import StockDisplay from '../screens/StockDisplay';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";


function Routes() {
    return (
        <Router>
          <Switch>
            <Route path="/stocks"><StockDisplay /></Route>
            <Route path="./"><Home /></Route>
          </Switch>
      </Router>
    );
}

export default Routes;