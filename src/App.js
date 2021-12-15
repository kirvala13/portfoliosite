import './App.css';
import Home from './component/home/home';
import Skiils from './component/skiils list/skill';
import NavBar from './component/navBar/Navbar';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Skiils/>
    </div>
  );
}

export default App;
