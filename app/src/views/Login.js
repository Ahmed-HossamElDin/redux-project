import React from 'react'
import LoginCard from '../components/LoginCard.js'
import {LoadingBar} from 'react-redux-loading'
import Navigationbar from '../components/Navigationbar'

class Login extends React.Component{
    render(){
        return(
            <div>
                {this.props.Loading ? (
                <LoadingBar style={{ backgroundColor: "blue" }} />
                ) : (
                    <div>
                        <Navigationbar/>
                        <LoginCard/>
                    </div>
                )}{" "}
            </div>
            
            );
    }
}

export default Login;