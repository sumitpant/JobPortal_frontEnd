import React,{useState} from 'react'
import '../styles/CreateJobs.css'
import {useStateValue} from '../context/provider';
import service from '../axios_calls/calls';
const CreateJobs = () => {
    const[{user,jobs},dispatch]=useStateValue()
    const[jobid,setJobId]=useState('');
    const[jobtype,setJobType]=useState('');
    const[location,setLocation]=useState('');
    const[salary,setSalary]=useState('');
    //const[name,setName]=useState(user);
    const username=localStorage.getItem('user')
    const change=(event)=>{
        if(event.target.name==='jobid') setJobId(event.target.value);
        else if(event.target.name==='jobtype') setJobType(event.target.value);
        else if(event.target.name==='location') setLocation(event.target.value);
        else if(event.target.name==='salary') setSalary(event.target.value);

    }
    
    const create=async(event)=>{
        event.preventDefault();
        const payload={
            name:user,
            jobs:[{
                jobid:jobid,
                jobtype:jobtype,
                location:location,
                salary:salary
            }],
        
        };
        
        console.log(payload)

       let res= await service.create('/create', payload);
       if(res.status=200){
           dispatch(
               {
                   type:'CREATE',
                   
                   obj:{name:username,jobid,jobtype,location,salary}

           })
       }
       //window.location.reload();


    }
    return (
        <div className="create">
            
            <p>Create Jobs</p>
            <form>
            <input type="text" placeholder='Job Id'onChange={change} name="jobid"/>
                <input type="text" placeholder='Job Type' onChange={change} name="jobtype"/>
                <input type="text" placeholder="location" onChange={change} name="location"/>
                <input type="text" placeholder="expected salary" onChange={change} name="salary"/>
                <button onClick={create}>Create</button>

            </form>
            
        </div>
    )
}

export default CreateJobs
