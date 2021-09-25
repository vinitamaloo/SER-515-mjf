
import './App.css';
import './Home/home.js';
import Home from './Home/home.js';
import Login from './Login/Register/login';
function App() {
  return (
    <div className="App">
      <h1>Hi</h1>
      <Home/>
      <Login name="piyush"/>
    </div>
  );
}

export default App;
