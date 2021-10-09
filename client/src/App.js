import './Home/home.js';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './Login/login';
import Register from './Register/register';
import Tournament from './Tournaments/tournaments.js';

function App() {
  return (
    <Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          {/* <Link className="navbar-brand" to={"/sign-in"}>xyz</Link> */}
         
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/tournament"}>Tournaments</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <div className="auth-wrapper">
        <div className="auth-inner"> */}
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={Register} />
            <Route path="/tournament" component={Tournament} />
          </Switch>
        {/* </div>
      </div> */}
    </div>
    </Router>
  );
}

export default App;
