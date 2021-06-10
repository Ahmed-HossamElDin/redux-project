import React from 'react';
import LoginCard from '../components/LoginCard.js';
import { handleSetAuthedUser } from "../actions/authedUser";
import { handleReceiveUsers } from "../actions/users";
import NavigationBar from '../components/Navigationbar'

class Login extends React.Component{
    render(){
        return(
            <div>
                <NavigationBar/>
                <LoginCard/>
            </div>
            
            );
    }
}

export default Login;