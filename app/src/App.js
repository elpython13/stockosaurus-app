import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Routes from './app/Routes';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
