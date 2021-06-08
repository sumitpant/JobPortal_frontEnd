import React from 'react'
import {Route,Redirect} from 'react-router-dom';
const Protect = ({children,...rest}) => {
    let token=localStorage.getItem('token')
    if(token)
    return (
        
        <Route{...rest}>
            {children}
        </Route>
    )
    else return <Redirect to='/'/>
}

export default Protect
