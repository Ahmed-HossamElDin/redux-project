import React from 'react';
import LoginCard from '../components/LoginCard.js';
import {LoadingBar} from 'react-redux-loading'

class Login extends React.Component{
    render(){
        return(
            <div>
                {this.props.Loading ? (
                <LoadingBar style={{ backgroundColor: "blue" }} />
                ) : (
                    <LoginCard/>
                )}{" "}
            </div>
            
            );
    }
}

export default Login;