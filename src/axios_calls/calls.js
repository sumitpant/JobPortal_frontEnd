import axios from 'axios';
import { useLocation } from 'react-router';
const BASE_URL ='http://localhost:3030'
let token=localStorage.getItem('token');
console.log("token",token)

const loginService=async(url,body)=>{
    console.log("login service",body);
    let res=await axios.post(BASE_URL+url,body);
    console.log("login service",res.data)
    return res;

}
const registerService=async(url,body)=>{
    console.log(url);
    console.log(BASE_URL+url)
    let res=await axios.post(BASE_URL+url,body);
    console.log("register service",res.data);
    return res;

}

const getJobs=async(url='')=>{

    console.log(BASE_URL+url)
    let res=await axios.get(BASE_URL+url,{headers:{'Content-Type': 'application/json', 
    Authorization: 'Bearer' + ' '+token
}})
return res;
    

}
const apply=async(url='',body)=>{
    
    let res=await axios.post(BASE_URL+url,body,{headers:{'Content-Type': 'application/json', 
    Authorization: 'Bearer' + ' '+token
}})
return res;
    
}


const createJobs=async(url,body)=>{
    console.log(BASE_URL+url);
    let res=await axios.post(BASE_URL+url,body,{headers:{'Content-Type': 'application/json', 
    Authorization: 'Bearer' + ' '+token
}})
return res;
}
//get created jobs

const getCreatedJobs=async(url)=>{
    let res=await axios.get(BASE_URL+url,{headers:{'Content-Type': 'application/json', 
    Authorization: 'Bearer' + ' '+token
}})
return res;

}

//update job status
const updateJobStatus=async(url,body)=>{
    let res=await axios.post(BASE_URL+url,body,{headers:{'Content-Type': 'application/json', 
    Authorization: 'Bearer' + ' '+token
}})

return res;
}





 export  default{
     loginService:loginService,
     getJobs:getJobs,
     apply:apply,
     create:createJobs,
     getCreatedJobs:getCreatedJobs,
     registerService:registerService,
     updateJobStatus:updateJobStatus
 };
