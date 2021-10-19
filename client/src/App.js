import React, { Fragment } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Switch, Route, Link } from 'react-router-dom'
import EventList from './components/EventList'
import RegisteredEvent from './components/RegisteredEvent'

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/events" className="navbar-brand">
          WebPortal 1
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Fragment>
              <Link to={"/events"} className="nav-link">
                Events
              </Link>
            </Fragment>
          </li>
          <li className="nav-item">
            <Fragment>
              <Link to={"/register"} className="nav-link">
                Register Event A
              </Link>
            </Fragment>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/events"]} component={EventList} />
          <Route exact path="/register" component={RegisteredEvent} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
