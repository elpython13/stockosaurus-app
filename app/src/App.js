import logo from './logo.svg';
import './App.css';
import NewsFeed from './components/NewsFeed';
import StockTickerDisplay from './components/StockTickerDisplay';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <NavBar />

      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/stocks">Stocks</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/stocks">
              <StockTickerDisplay />
            </Route>
            <Route path="/">
              <NewsFeed />
            </Route>
          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;
