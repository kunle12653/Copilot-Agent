
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import './App.css';



function App() {
  return (
    <Router>
      <div className="octofit-logo-left container-fluid mt-3 mb-2">
        <img src={process.env.PUBLIC_URL + '/octofitapp-small.png'} alt="Octofit Logo" />
        <span className="fs-3 fw-bold text-primary">Octofit Tracker</span>
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src={logo} alt="Octofit Logo" width="40" height="40" className="d-inline-block align-top me-2" />
            <span>Octofit Tracker</span>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/activities">Activities</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/teams">Teams</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/users">Users</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/workouts">Workouts</Link>
              </li>
            </ul>
            <a className="btn btn-outline-light" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
          </div>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
              <div className="card shadow" style={{ width: '22rem' }}>
                <img src={logo} className="card-img-top p-4" alt="Octofit Logo" />
                <div className="card-body">
                  <h2 className="card-title mb-3">Welcome to Octofit Tracker!</h2>
                  <p className="card-text">Track your fitness, join teams, and compete on the leaderboard.</p>
                  <Link to="/activities" className="btn btn-primary me-2">View Activities</Link>
                  <Link to="/leaderboard" className="btn btn-outline-primary">Leaderboard</Link>
                </div>
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
