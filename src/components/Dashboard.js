import { Typography } from "@material-ui/core";
import React ,{useEffect,useState}from "react";
import "../styles/Dashboard.css";
import Jobs from "./Jobs";


const Dashboard = () => {
  const[jobs,setJobs]=useState([]);

  const set=(val)=>{
    
    setJobs(val)
  }
  

  return (
    <div className="dashboard">
      {/* Hello{user} */}
        <div className="options__container">


        <div className="options__title">
            <div><h4> Your Details</h4></div>
        </div>
        <div className="options">
          <h3>Engineer</h3>


          <div className="dashboard__summary">
   
            <div className="summary__left">
              <p> Experience: <span>1Year</span></p> 
              <p>Working in : <span>Amazon</span></p>
              <p>Can Join in :<span>6 weeks</span></p>
              
              

            </div>
            <div className="summary__right">
              <div className="right__title">
              <p>Employer actions on your {jobs.length} job applications</p>
               <h6>Pending: {(jobs.filter(data=>data.status==='pending')).length}</h6>
               <h6>Selected: {(jobs.filter(data=>data.status==='accept')).length}</h6>
               <h6>Rejected :{(jobs.filter(data=>data.status==='rejected')).length}</h6>
              </div>
            
            </div>
            
          </div>
        
        </div>
       

        </div>
        <div className="jobs__dashboard">
            <Jobs path={'/jobs'} name={'All Jobs'} btn={true}/>
            <Jobs path={'/applied'} name={'Applied Jobs'}  btn={false} set={set}/>
        </div>
       
        
     
    </div>
  );
};

export default Dashboard;
