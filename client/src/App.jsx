import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/App.scss";
import Home from "./pages/Home/Home";
import Signup from "./pages/SignUp/SignUp";
import Dashboard from "./pages/Dashboard/Dashboard";
import About from "./pages/About/About";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import DashboardPrivateRoute from "./components/PrivateRoute/DashboardPrivateRoute";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/" element={<PrivateRoute />}>
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route exact path="/" element={<DashboardPrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
