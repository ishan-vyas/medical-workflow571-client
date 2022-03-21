import { process_params } from "express/lib/router";
import PatientItem from "./PatientItem";
import { alpha, makeStyles } from '@material-ui/core/styles';
import PaginationComponent from '../UI/PaginationComponent';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      margin: "2.5%",
      padding: "2.5%",
      backgroundColor: "rgba(63, 81, 181, 0.15)",
      borderRadius: "10px",
      alignContent: "center",
    },
  }));

function Patients(props){

    const classes = useStyles();

    const paginate = (pageNum) => {
        props.paginate(pageNum);
    }

    console.log(props.items);

    return <div className={classes.root}>
        {props.items.map((item) => (
            <PatientItem 
                key={item.pid}
                pid={item.pid}
                name={item.name}
                age={item.age}
            />
        ))}
        <PaginationComponent handleChange={paginate} patientsPerPage={props.ppp} totalPatients={props.tP}/>
    </div>
}

export default Patients;