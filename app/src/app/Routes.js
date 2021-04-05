import Home from '../screens/Home';
import StockTickerDisplay from '../screens/StockTickerDisplay';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

function Routes() {
    return (
        <Router>
          <Switch>
            <Route path="/stocks">
              <StockTickerDisplay />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
    );
}

export default Routes;