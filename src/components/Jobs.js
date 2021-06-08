import React, { useState, useEffect } from 'react'
import service from '../axios_calls/calls'
import '../styles/Jobs.css'
import{useStateValue} from '../context/provider'
const Jobs = ({ path, name, btn ,set }) => {
   const[{job,user},dispatch]=useStateValue();
   const username=localStorage.getItem('user');

    const [jobs, setJobs] = useState([])
    const[applied,setApplied]=useState([]);

    const apply = async(jobid,name, location, salary,jobtype) => {
        let obj = { jobid,name, location, salary,jobtype ,apply:username,status:"pending"};
        console.log("path",path)
        dispatch({

            type:'APPLY',
            obj:obj
        });
       
        if(path==='/jobs'){
            console.log("sumit",obj)
           let res= await service.apply(path='/apply',obj);
          
           if(res.data==='already applied'){
               alert(res.data)
               
           }
           else{
               alert("applied")
           }
               
        }
        else{
            console.log("----------------------------")
        }

    }

    useEffect(() => {
        console.log("use effect");
        const temp = async () => {
            console.log("paths",path)
            if(path=='/applied'){
                
                let res = await service.getJobs(path);
                console.log("applied",res.data)
                setApplied(res.data);
                set(res.data);
            }
            if(path=='/jobs'){
                
                let res = await service.getJobs(path);
                console.log("jobs",res.data);
               
                setJobs(res.data);

            }   

        }
        
        temp();


        return () => {

        }
    }, [job,user,jobs,applied])

    return (
        <div className="jobs__container">
            <p>{name}</p>
            <div className="jobs">
                {
                     
                jobs.length>0?jobs.map(({jobid, name, location, salary,jobtype }) => {
                        return <div className="jobs__row"> 
                        <div>
                            <h5>JobId</h5>
                            <p>{jobid}</p>
                        </div>
                        <div>
                            <h5>Job Creator:</h5>
                        <p>{name}</p>
                        </div>
                           <div>
                               <h5>Location</h5>
                           <p>{location}</p>
                           </div>

                           <div>
                           <h5>Job Desc</h5>
                            <p>{jobtype}</p>

                           </div>
                            <div>
                            <h5>Salary</h5>
                            <p>{salary}</p>
                            </div>
                            {btn ? <button onClick={() => apply(jobid,name, location, salary,jobtype,username)}>Apply</button> : ''}

                        </div>
                   }):''


                   


                }
       
                {

                    
                     applied.length>0?applied.map(({jobid, apply, location, salary,jobtype,name,status})=>{
                        return <div className="jobs__row"> 
                        <div>
                            <h5>JobId</h5>
                            <p>{jobid}</p>
                        </div>
                        <div>
                            <h5>Job Creator:</h5>
                        <p>{name}</p>
                        </div>
                           <div>
                               <h5>Location</h5>
                           <p>{location}</p>
                           </div>

                           <div>
                           <h5>Job Desc</h5>
                            <p>{jobtype}</p>

                           </div>
                            <div>
                            <h5>Salary</h5>
                            <p>{salary}</p>
                            </div>
                            <div>
                                <h5>Status</h5>
                                <p>{status}</p>
                            </div>
                           

                            </div>

                     }):''
                }

            </div>


        </div>
    )
}

export default Jobs
