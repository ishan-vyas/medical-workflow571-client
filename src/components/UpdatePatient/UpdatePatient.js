import React from 'react';
import UpdatePatientForm from './UpdatePatientForm';
import { alpha, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      margin: "2.5%",
      padding: "2.5%",
      backgroundColor: "rgba(63, 81, 181, 0.15)",
      borderRadius: "10px",
    },
    containerStyle: {
        color: "red",
    },
  }));

function UpdatePatient(props){

    const classes = useStyles();

    const savePatientDataHandler = (enteredPatientData) => {
        const patientData = {
            ...enteredPatientData
        }
        props.onAddPatient(patientData);
    }

    return <div className={classes.root}>
            <Container maxWidth="sm" className={classes.containerStyle}>
                <UpdatePatientForm onSavePatientData={savePatientDataHandler}/>
            </Container>
        </div>
}

export default UpdatePatient;