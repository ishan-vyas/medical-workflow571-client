import React, { Component, useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Axios from 'axios'
import PatientInfo from './components/Patient/PatientInfo';
import Home from './Home';
import DoctorPage from './components/Doctor/DoctorPage';
import ClusterContext from "./components/store/cluster-context";

function App() {
    const [context, setContext] = useState({});
    return (
      <ClusterContext.Provider value={
        [context, setContext]
      }>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/PatientInfo/:pid" element={<PatientInfo />} />
            <Route path="/DoctorPage" element={< DoctorPage />}/>
          </Routes>
      </Router>
      </ClusterContext.Provider>
    );
}

export default App;
