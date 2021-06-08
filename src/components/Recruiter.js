import React ,{useEffect,useState}from 'react'
import '../styles/Recruiter.css'
import CreateJobs from './CreateJobs'
import RecruitJobs from './RecruitJobs'
import { useStateValue } from '../context/provider';
import service from '../axios_calls/calls'
import ViewApplications from './ViewApplications';
const Recruiter = () => {
    const [{ user, job }] = useStateValue()
    const [jobs, setJobs] = useState([]);
    const [username, setUsername] = useState()
    useEffect(async () => {
        let result = await service.getCreatedJobs('/createdjobs');
        console.log(user)
        localStorage.setItem('user',user);
        setJobs(result.data);

    }, [job])
    return (
        <div className="recruit">
            <p className="welcome">Welcome {username} !!</p>
            <div className="recruit__body">
                <div className="recruit__applied">
                    {/*  */}
                </div>
                <div className="recruit__jobs">
                    {/* posted jobs */}
                    <RecruitJobs jobs={jobs} />

                </div>
                <div className="create__jobs">
                    <CreateJobs />
                    <ViewApplications/>
                </div>
            </div>

        </div>
    )
}

export default Recruiter
