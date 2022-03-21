import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import { alpha, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem';

const diseases = [
    {id: 1, name: "Diabetes"},
    {id: 2, name: "Cancer"},
    {id: 3, name: "Flu"},
    {id: 4, name: "AIDS"},
    {id: 5, name: "HIV"},
    {id: 6, name: "None"}
];
  
  const health_issues = [
    {id: 1, issue: "Breathing Difficulties"},
    {id: 2, issue: "Blood Pressure"},
    {id: 3, issue: "Cholesterol"},
    {id: 4, issue: "None"},
  ];
  
  const medication_prescribed = [
    {id: 1, value:"Yes"},
    {id: 2, value:"No"},
  ];
  
  const labtest_results = [
    {id: 1, value: "Severe"},
    {id: 2, value: "Moderate"},
    {id: 3, value: "Mild"},
    {id: 4, value: "None"},
  ];
  
  const mr_ct_indication = [
    {id: 1, value: "Major Issue"},
    {id: 2, value: "Minor Issue"},
    {id: 3, value: "None"},
  ];

const useStyles = makeStyles((theme) => ({
    inputField: {
        margin: "1%",
    },
  }));

function PatientForm(props){

    const classes = useStyles();

    const [enteredSIN, setEnteredSIN] = useState('');
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [enteredAddress, setEnteredAddress] = useState(null);
    const [enteredPhone, setEnteredPhone] = useState('');
    const [selectedDisease, setSelectedDisease] = useState('');
    const [selectedHealthIssue, setSelectedHealthIssuse] = useState('');
    const [selectedMedicationPrescribed, setSelectedMedicationPrescribed] = useState('');
    const [selectedLabTestResults, setSelectedLabTestResults] = useState('');
    const [selectedMRCTIndication, setSelectedMRCTIndication] = useState('');

    const sinChangeHandler = (e) => {
        setEnteredSIN(e.target.value);
    };

    const nameChangeHandler = (e) => {
        setEnteredName(e.target.value);
    };

    const ageChangeHandler = (e) => {
        setEnteredAge(e.target.value);
    };

    const addressChangeHandler = (e) => {
        setEnteredAddress(e.target.value);
    };

    const phoneChangeHandler = (e) => {
        setEnteredPhone(e.target.value);
    };

    const diseaseHandler = (e) => {
        setSelectedDisease(e.target.value);
    };

    const healthIssueHandler = (e) => {
        setSelectedHealthIssuse(e.target.value);
    };

    const medicationPrescribedHandler = (e) => {
        setSelectedMedicationPrescribed(e.target.value);
    };

    const labTestHandler = (e) => {
        setSelectedLabTestResults(e.target.value);
    };

    const mrctHandler = (e) => {
        setSelectedMRCTIndication(e.target.value);
    };

    function getDateInInt(){
        let currentDate = new Date();
        let year = currentDate.getFullYear().toString();
        let month = (currentDate.getMonth()+1).toString();
        let date = currentDate.getDate().toString();
        if(date.length == 1){
            date = '0'+date;
        }
        let fullDate = year+month+date;
        return parseInt(fullDate);   
    }

    function getDateInInt(now){
        if(now == true){
            let currentDate = new Date();
            let year = currentDate.getFullYear().toString();
            let month = (currentDate.getMonth()+1).toString();
            let date = currentDate.getDate().toString();
            if(date.length == 1){
                date = '0'+date;
            }
            let fullDate = year+month+date;
            return parseInt(fullDate); 
        }else{
            let currentDate = new Date();
            currentDate.setDate(currentDate.getDate()+10);
            let year = currentDate.getFullYear().toString();
            let month = (currentDate.getMonth()+1).toString();
            let date = currentDate.getDate().toString();
            if(date.length == 1){
                date = '0'+date;
            }
            let fullDate = year+month+date;
            return parseInt(fullDate);   
        } 
    }

    function submitHandler(event){
        event.preventDefault();
        if(enteredAddress == ''){
            setEnteredAddress(null);
        }
        const patientData = {
            sin: enteredSIN,
            name: enteredName,
            age: enteredAge,
            address: enteredAddress,
            phone: enteredPhone,
            last_visit: getDateInInt(true),
            disease: selectedDisease,
            health_issue: selectedHealthIssue,
            medication_prescribed: selectedMedicationPrescribed,
            labtest_result: selectedLabTestResults,
            mr_ct_indication: selectedMRCTIndication,
            follow_up_visit: getDateInInt(false),
        };
        props.onSavePatientData(patientData);
        setEnteredSIN('');
        setEnteredName('');
        setEnteredAge('');
        setEnteredAddress('');
        setEnteredPhone('');
        setSelectedDisease('');
        setSelectedHealthIssuse('');
        setSelectedMedicationPrescribed('');
        setSelectedLabTestResults('');
        setSelectedMRCTIndication('');
    }

    return (<form onSubmit={submitHandler}>
        <div>
            <div className={classes.inputField}>
                <TextField
                    required
                    id="filled-required"
                    label="SIN"
                    type="number" 
                    value={enteredSIN} 
                    onChange={sinChangeHandler}
                    size="small"
                    fullWidth
                />
            </div>
            <div className={classes.inputField}>
                <TextField
                    required
                    id="filled-required"
                    label="Name"
                    type="text" 
                    value={enteredName} 
                    onChange={nameChangeHandler}
                    size="small"
                    fullWidth
                />
            </div>
            <div className={classes.inputField}>
                <TextField
                    required
                    id="filled-required"
                    label="Age"
                    type="number" 
                    value={enteredAge} 
                    onChange={ageChangeHandler}
                    size="small"
                    fullWidth
                />
            </div>
            <div className={classes.inputField}>
                <TextField
                    id="filled"
                    label="Address"
                    type="text" 
                    multiline
                    rows={4}
                    value={enteredAddress} 
                    onChange={addressChangeHandler}
                    size="small"
                    fullWidth
                />
            </div>
            <div className={classes.inputField}>
                <TextField
                    required
                    id="filled-required"
                    label="Phone Number"
                    type="number" 
                    value={enteredPhone} 
                    onChange={phoneChangeHandler}
                    size="small"
                    fullWidth
                />
            </div>
            <div className={classes.inputField}>
                <TextField
                    required
                    id="standard-select-disease"
                    select
                    label="Disease"
                    value={selectedDisease}
                    onChange={diseaseHandler}
                    fullWidth
                    >
                    {diseases.map((option) => (
                        <MenuItem key={option.id} value={option.id}>
                        {option.name}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
            <div className={classes.inputField}>
                <TextField
                    id="standard-select-health-issue"
                    select
                    required
                    label="Health Issue"
                    value={selectedHealthIssue}
                    onChange={healthIssueHandler}
                    fullWidth
                    >
                    {health_issues.map((option) => (
                        <MenuItem key={option.id} value={option.id}>
                        {option.issue}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
            <div className={classes.inputField}>
                <TextField
                    id="standard-select-medication-prescribed"
                    select
                    required
                    label="Medication Prescribed"
                    value={selectedMedicationPrescribed}
                    onChange={medicationPrescribedHandler}
                    fullWidth
                    >
                    {medication_prescribed.map((option) => (
                        <MenuItem key={option.id} value={option.id}>
                        {option.value}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
            <div className={classes.inputField}>
                <TextField
                    id="standard-select-lab-test-results"
                    select
                    required
                    label="Lab Test Results"
                    value={selectedLabTestResults}
                    onChange={labTestHandler}
                    fullWidth
                    >
                    {labtest_results.map((option) => (
                        <MenuItem key={option.id} value={option.id}>
                        {option.value}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
            <div className={classes.inputField}>
                <TextField
                    id="standard-select-mr-ct-indication"
                    select
                    required
                    label="MR/CT Indication"
                    value={selectedMRCTIndication}
                    onChange={mrctHandler}
                    fullWidth
                    >
                    {mr_ct_indication.map((option) => (
                        <MenuItem key={option.id} value={option.id}>
                        {option.value}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
        </div>
        <div>
            <div className={classes.inputField}>
                <Button type="submit" variant="contained" color="primary">Add Patient</Button>
            </div>
        </div>
    </form>)
}

export default PatientForm;