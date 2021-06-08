import React, { useState } from 'react'
import { useStateValue } from '../context/provider';
import { useHistory } from 'react-router-dom'
import '../styles/Login.css'
import service from '../axios_calls/calls';

const Login = () => {
    const history = useHistory();
    const [{ jobs, user }, dispatch] = useStateValue();
    const [msg,setMsg]=useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    
    const [apply, setApply] = useState(false);
    

    const getDetails = (event) => {
        if (event.target.name === 'email') setEmail(event.target.value);
        else if (event.target.name === 'password') setPassword(event.target.value);
        else if (event.target.name === 'username') setUsername(event.target.value);
        else if (event.target.name === 'recruiter') {

            console.log(event.target.checked)
            document.getElementById('recruiter').checked=true;
            document.getElementById('apply').checked=false;  
            setApply(false)
        }
        else {
            document.getElementById('recruiter').checked=false;
            document.getElementById('apply').checked=true;
            setApply(true)
        }

    }
    const submit = async (event) => {
        event.preventDefault();
        if (username !== '' && password !== '' && email !== '') {
            
            try {
               // console.log("apply",apply)
                if(apply){
                let res = await service.loginService('', { username: username, password: password, email: email });
                console.log(res.data);
                localStorage.setItem('token', res.data);

                dispatch({
                    type: 'LOGIN',
                    user: username
                })
                localStorage.setItem('user',username);

                history.replace('/main');
            }else{
               let res = await service.loginService('/recruit', { username: username, password: password, email: email });
                console.log(res.data)
               localStorage.setItem('token', res.data);
               dispatch({
                    type: 'LOGIN',
                    user: username
                })
                localStorage.setItem('user',username);
                     history.replace('/recruit')
            }
            }
            catch (err) {
                  console.log(err)
            }
        }
    }

    const register=async(event)=>{
        event.preventDefault();
        console.log("apply",apply)
        if(apply){

        
        let res=await service.registerService('/signup', {username: username, password: password, email: email });
        setMsg(res.data);
        alert(res.data+' Now login')
        }
        else{
            console.log("recruiter")
           let res= await service.registerService('/recruiter', {username: username, password: password, email: email });
           setMsg(res.data);
        alert(res.data+' Now login')
        }

    }


    return (
        <div className="login">
            <div className="login__body">
                <form>
                    <input type="email" placeholder="Email" onChange={getDetails} name="email" />
                    <input type="text" placeholder="username" onChange={getDetails} name="username" />
                    <input type="password" placeholder="password" onChange={getDetails} name="password" />
                    <div className="radiooptions">
                        <label>Sign in as</label>
                        <input type="radio" onChange={getDetails} name="recruiter" id="recruiter" /> Recruiter
                    <input type="radio" onChange={getDetails} name="apply"  id="apply" /> Apply
                    </div>

                    <button onClick={submit}>Login</button>
                    <button onClick={register}>Sign Up</button>
                </form>
            </div>


        </div>
    )
}

export default Login
