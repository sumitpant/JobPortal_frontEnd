import React ,{useState,useEffect} from 'react'
import '../styles/RecruitJobs.css'
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import { IconButton } from '@material-ui/core';
import service from '../axios_calls/calls'

const RecruitJobs = ({jobs}) => {
    const[jobsCreated,setJobsCreated]=useState([])

    useEffect(async () => {

 
         let res=await service.getCreatedJobs('/createdjobs');
           console.log(res.data);
           setJobsCreated(res.data.jobs);
       
    }, [jobs,jobsCreated])
    const deletejob=(data)=>{
        console.log(data)


    }
    return (
        
        <div className="recruiter__jobs">
           
            <h3>Created Jobs</h3>
            {jobsCreated.length>0?jobsCreated.map(data=>{
                return(
                    <div className="jobs_recruiter">
                        <p>{data.jobtype}</p>
                        <p>{data.location}</p>
                        <p>{data.salary}</p>
                        <IconButton> 
                            <CancelOutlinedIcon className="btn" onClick={()=>{deletejob(data)}}>

                        </CancelOutlinedIcon>
                        </IconButton>
                        </div>
                ) 
            }):'No Jobs Created'}
            
        </div>
    )
}

export default RecruitJobs
