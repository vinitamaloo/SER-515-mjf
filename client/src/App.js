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
import RefereeList from './RefereeList/refereelist.js';
import RefereeInfo from './RefereeList/refereeinfo.js';
import SetScores from './Scores/set_scores'
import { useState, useEffect } from 'react'
import assignFields from './Fields/assignfields';
import Standings from './standings/standings'
import Scheduler from './TournamentDirector/Scheduler.js';
import AddUsers from './Users/AddUsers';
import Adduserform from './Users/AddUserForm.js';
import Schedule from './schedule/schedule.js';
import Results from './Results/results';
import logo from './Home/logo-t-bg.png'
import Map from './Fields/MapContainer.js'

function App() {
    const [role, setRole] = useState("")

    useEffect(() => {
      let menuIcon = document.querySelector('.menuIcon');
      let nav = document.querySelector('.overlay-menu');

      menuIcon.addEventListener('click', () => {
        if (nav.style.transform != 'translateX(0%)') {
          nav.style.transform = 'translateX(0%)';
          nav.style.transition = 'transform 0.2s ease-out';
        } else {
          nav.style.transform = 'translateX(-100%)';
          nav.style.transition = 'transform 0.2s ease-out';
        }
      });
      let toggleIcon = document.querySelector('.menuIcon');

      toggleIcon.addEventListener('click', () => {
        if (toggleIcon.className != 'menuIcon toggle') {
          toggleIcon.className += ' toggle';
        } else {
          toggleIcon.className = 'menuIcon';
        }
      });
    }, []);


    if (localStorage.getItem('userRole') != null && role === "")
        setRole(localStorage.getItem('userRole'))

    function logout() {
        localStorage.removeItem('userRole')
        setRole("")
    }
  return (
    <Router>

      <nav id="navbar" className="">
        <div className="nav-wrapper">
          <div className="logo">
          <Link className="nav-link logo" to={"/"}><img src={logo} /></Link>
          </div>
          <ul id="menu">
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
                <Link className="nav-link" to={"/refereelist"}>View Referee Applications</Link>
              </li>
            }
            {role === 'Field Director' &&
              <li className="nav-item">
                <Link className="nav-link" to={"/fields"}>Assign Fields</Link>
              </li>
            }
            {role === 'Field Director' &&
              <li className="nav-item">
                <Link className="nav-link" to={"/set-scores"}>Publish scores</Link>
              </li>
            }
            {role === "Tournament Director" &&
              <li className="nav-item">
                <Link className="nav-link" to={"/start-scheduler"}>Start Scheduler</Link>
              </li>
            }
            {role != "" &&
              <li className="nav-item">
                <Link onClick={logout} className="nav-link" to={"/"}>Logout</Link>
              </li>
            }
            <li className="nav-item">
                <Link onClick={Map} className="nav-link" to={"/Map"}>Field Locations</Link>
              </li>
          </ul>
        </div>
      </nav>
      <div className="menuIcon">
        <span className="icon icon-bars"></span>
        <span className="icon icon-bars overlay"></span>
      </div>
      <div className="overlay-menu">
      <ul id="menu">
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
                <Link className="nav-link" to={"/refereelist"}>View Referee Applications</Link>
              </li>
            }
            {role === 'Field Director' &&
              <li className="nav-item">
                <Link className="nav-link" to={"/fields"}>Assign Fields</Link>
              </li>
            }
            {role === 'Field Director' &&
              <li className="nav-item">
                <Link className="nav-link" to={"/set-scores"}>Publish scores</Link>
              </li>
            }

            {role === "Tournament Director" &&
              <li className="nav-item">
                <Link className="nav-link" to={"/start-scheduler"}>Start Scheduler</Link>
              </li>
            }

            {role != "" &&
              <li className="nav-item">
                <Link onClick={logout} className="nav-link" to={"/"}>Logout</Link>
              </li>
            }
          </ul>
      </div>
      <div className="App">
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
          <Route path="/refereelist" component={RefereeList} />
          <Route path="/refereeinfo" component={RefereeInfo} />
          <Route path="/publish-scores" component={PostTeamRegistration} />
          <Route path="/assign-fields" component={PostTeamRegistration} />
          <Route path="/set-scores" component={SetScores} />
          <Route path="/publish-scores" component={PostTeamRegistration} />
          <Route path="/fields" component={assignFields} />
          <Route path="/add-users" component={AddUsers} />
          <Route path="/adduserform" component={Adduserform} />
          <Route path="/schedule" component={Schedule} />
          <Route path="/standings" component={Standings}/>

          <Route path="/Map" component={Map}/>




          <Route path="/results" component={Results} />

          <Route path="/start-scheduler" component={Scheduler} />



        </Switch>
      </div>
    </Router>
  );
}

export default App;
