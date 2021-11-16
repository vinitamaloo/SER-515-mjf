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
import { useState } from 'react'
import assignFields from './Fields/assignfields';


function App() {
    const [role, setRole] = useState("")
    if (localStorage.getItem('userRole') != null && role === "")
        setRole(localStorage.getItem('userRole'))

    function logout() {
        localStorage.removeItem('userRole')
        setRole("")
    }
  return (
    <Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg sticky">
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
              {role === "" &&
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-in"}>Login</Link>
                  </li>
              }
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Referee</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>View Schedule </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to={"/tournament"}>Tournaments</Link>
              </li>
              {role === 'Admin' &&
                <li className="nav-item">
                  <Link className="nav-link" to={"/add-users"}>Add users</Link>
                </li>
              }
              {role === 'Referee Director' &&
                  <li className="nav-item">
                    <Link className="nav-link" to={"/referee-applications"}>View Referee Applications</Link>
                  </li>
              }
              {role === 'Field Director' &&
                  <li className="nav-item">
                    <Link className="nav-link" to={"/assign-fields"}>Assign Fields</Link>
                  </li>
              }
              {role === 'Field Director' &&
                <li className="nav-item">
                    <Link className="nav-link" to={"/publish-scores"}>Publish scores</Link>
                </li>
              }
              {role != "" &&
                <li className="nav-item">
                    <Link onClick={logout} className="nav-link" to={"/"}>Logout</Link>
                </li>
              }
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
            <Route path="/publish-scores" component={PostTeamRegistration} />
            <Route path="/assign-fields" component={PostTeamRegistration} />
            <Route path="/referee-applications" component={PostTeamRegistration} />

            <Route path="/fields" component={assignFields} />


          </Switch>
    </div>
    </Router>
  );
}

export default App;
