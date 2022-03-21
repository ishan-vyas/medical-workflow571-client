import Pagination from "@material-ui/lab/Pagination";
import { alpha, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      margin: "2.5%",
      marginLeft: "auto",
      marginRight: "auto",
      justifyContent: 'center',
      display:'flex',
    },
  }));

function PaginationComponent(props){

    const classes = useStyles();

    const pageNumbers = Math.ceil(props.totalPatients / props.patientsPerPage);

    const paginate = (page) => {
        let pageNum = page.target.innerText;
        pageNum = parseInt(pageNum);
        props.handleChange(pageNum);
    };

    return (
        <div className={classes.root}>
            <Pagination onChange={paginate} count={pageNumbers} variant="outlined" shape="rounded" />
        </div>
    );
}

export default PaginationComponent;