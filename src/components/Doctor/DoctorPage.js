import React, { useEffect, useState, useRef, useContext } from 'react';
import Axios from 'axios';
import { CssBaseline } from '@material-ui/core';
import NavBar from '../UI/NavBar';
import Button from '@material-ui/core/Button';
import PatientItem from '../Patient/PatientItem';
import ClusterContext from '../store/cluster-context';

// To be changes for getting data from cluster
function DoctorPage () {
  const [patientData, setPatientData] = useState({});
  const [showCluster, setShowCluster] = useState(false);
  const [disabledB, setDisabledB] = useState(true);
  const [passedClusters, setPassedClusters] = useState({});
  const [centroids, setCentroids] = useState([]);
    const [context, setContext] = useContext(ClusterContext);

  const clt = useContext(ClusterContext);
  console.log(clt);

  const pDataRef = useRef({
      theData : [],
  }); 

  /*
  function getPatientMap(arr){
      for (let i = 0; i < arr.length(); i ++){

      }
  }*/

  console.log(patientData);
  useEffect(() => {
    Axios.get("https://medical-workflow571.herokuapp.com/api/get/conditions").then((response) => {
      console.log("HELLO", response.data);
      setPatientData(response.data.pInfo);
      setPassedClusters(response.data.clusters);
      setDisabledB(false);
      setCentroids(response.data.centroids);
      // pDataRef.current.push(response.data.clusters);
      setContext(generateMap(response.data.pInfo, response.data.clusters));
    });
  }, []);

  function getClusters(){
    setShowCluster(true);
    // console.log("Centroid data:", pDataRef.current);
  }

  function printCluster(i){
    return (patientData[i].map((item) => {
      console.log(pDataRef);
      return <PatientItem 
        key={item.pid}
        pid={item.pid}
        name={item.name}
        age={item.age}
        ref={pDataRef}
    />
    }));
  }

  function generateMap(pD, pC){
    let centroidMap = {};
    console.log("PASSSSSED",pC);
    console.log("PASSSSSED DATA",pD);
    for(var i = 0; i < pD.length; i++){
        for(var j=0; j<pD[i].length; j++){
            centroidMap[pD[i][j].pid] = pC[i].centroid;
        }
    }
    console.log("CENTROIDDDD", centroidMap);
    // console.log("TRYYY", pDataRef);
    // console.log("TRY333", pDataRef);
    return centroidMap;
  }
  console.log("CONTEXT FROM DOCTORS PAGE: ", context);

  return (
    <div>
        <CssBaseline />
        <NavBar />
        <div>
            <Button variant="contained" color="primary" onClick={getClusters} disabled={disabledB}>Generate Clusters</Button>
            <div>
            <h1>Cluster 1</h1>
            {showCluster && printCluster(0)}
            </div>
            <div>
            <h1>Cluster 2</h1>
            {showCluster && printCluster(1)}
            </div>
            <div>
            <h1>Cluster 3</h1>
            {showCluster && printCluster(2)}
            </div>
            <div>
            <h1>Cluster 4</h1> 
            {showCluster && printCluster(3)}
            </div>
            <div>
            <h1>Cluster 5</h1> 
            {showCluster && printCluster(4)}
            </div>
        </div>
        <div>
            
        </div>
    </div>
  );
}

export default DoctorPage;