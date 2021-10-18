import './Home/home.js';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './Login/login';
import Register from './Register/register';
import Tournament from './Tournaments/tournaments.js';
import Home from './Home/home.js';
import TeamRegister from './Team_registration/team_register';
import TermsConditions from './Team_registration/terms_conditions';
import PostTeamRegistration from './Team_registration/post_team_registration';

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
                <Link className="nav-link" to={"/"}>Home</Link>
              </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/team-registration"}>Team registration</Link>
              </li>
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
            <Route exact path='/' component={Home} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={Register} />
            <Route path="/tournament" component={Tournament} />
            <Route path="/team-registration" component={TeamRegister} />
            <Route path="/terms_conditions" component={TermsConditions} />
            <Route path="/team" component={PostTeamRegistration} />
          </Switch>
    </div>
    </Router>
  );
}

export default App;
