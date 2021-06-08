import React,{useState,useEffect} from 'react'
import service from '../axios_calls/calls';
import '../styles/ViewApplications.css';
import CheckIcon from '@material-ui/icons/Check';
import { IconButton } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';

const ViewApplications = () => {
    const[view,setView]=useState([]);
    useEffect(async() => {
         let result= await service.getCreatedJobs('/common')
         console.log(result.data)
         setView(result.data);
        return () => {
            
        }
    }, [view])

    const accept=async(data)=>{
        data.changeto='accept'
        console.log("data",data);
       await service.updateJobStatus('/update',data)

    }
    const reject=async(data)=>{
        //add a field change to
        
       data.changeto='rejected'
        console.log("data",data);

        await service.updateJobStatus('/update',data);
        
    }
    return (
        <div className="view__apps">
            <div className="view__apps_all">
                {
                    view.length>0?view.map((data)=>{
                        return <div className="applications">
                               <div>
                                   <p>JobId</p>
                                   <span>{data.jobid}</span>
                               </div>
                               <div>
                                   <p>Applied By</p>
                                   <span>{data.apply}</span>
                               </div>
                               <div>
                                   <p>Status</p>
                                   <span>{data.status}</span>
                               </div>
                               <div>
                                   <p>location</p>
                                   <span>{data.location}</span>
                               </div>
                               <div>
                                   <IconButton>
                                       <CheckIcon className="check" onClick={()=>accept(data)}/>
                                   </IconButton>
                               </div>
                               <div>
                                   <IconButton>
                                   <ClearIcon className="clear" onClick={()=>reject(data)}/>
                                   </IconButton>
                                   </div>
                            </div>
                    }):''
                }
            </div>
            
            
        </div>
    )
}

export default ViewApplications
