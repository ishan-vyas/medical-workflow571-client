import React, { Component, useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Button from '@material-ui/core/Button'
import Axios from 'axios'
import { CssBaseline } from '@material-ui/core';
import NavBar from './components/UI/NavBar';
import Patient from './components/Patient/Patients';
import NewPatient from './components/NewPatient/NewPatient';
import PatientInfo from './components/Patient/PatientInfo';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Home () {
    const [patientsList, setPatientsList] = useState([]);
    const [currentPage, setCurentPage] = useState(1);
    const [maxPid, setMaxPid] = useState(0);
    const paitentsPerPage = 5;

    const indexOfLastPatient = currentPage * paitentsPerPage;
    const indexOfFirstPatient = indexOfLastPatient - paitentsPerPage;

  const addPatientHandler = patient => {
    patient = {
      ...patient,
      pid: maxPid+1,
    }
    Axios.post("https://medical-workflow571.herokuapp.com/api/insert", patient);
    console.log("adding a patient",patient);
    setPatientsList([...patientsList,patient]);
    setMaxPid(maxPid+1);
  };

  useEffect(() => {
    Axios.get("https://medical-workflow571.herokuapp.com/api/get").then((response) => {
      //console.log(patients1);
      console.log("running again", response.data);
      setPatientsList(response.data);
    })
    Axios.get("https://medical-workflow571.herokuapp.com/api/getPid").then((response) => {
      //console.log(patients1);
      console.log("getting pid", response.data[0].maxPid);
      setMaxPid(response.data[0].maxPid);
    })
  }, []);

  // Get Current posts
  const currentPatients = patientsList.slice(indexOfFirstPatient, indexOfLastPatient);

  const paginate = (pageNumber) => {
    setCurentPage(pageNumber);
  };

    return (
        <div className="App">
            <CssBaseline />
            <NavBar />
            <NewPatient onAddPatient={addPatientHandler}/>
            <Patient items={currentPatients} ppp={paitentsPerPage} tP={patientsList.length} paginate={paginate} />
        </div>
    );
}

export default Home;