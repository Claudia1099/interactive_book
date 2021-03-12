import React, { Component } from "react";

class Login extends Component{
    
    render(){
        return(
            <div className="App-cont">
                <div className="App-mg">
                    <form method="post" onsubmit="return false" action="return false">
                        <div className="card">
                            <img src="./img/backLogin.png" className="card-img-top" alt="backLogin"></img>
                            <div className="card-body">
                                <input className="inpt-login form-control" type="text" id="username" label="user name" placeholder="Username"/>
                                <input className="inpt-login form-control" type="password" id="password" label="password" placeholder="Password"/>
                            </div>
                        </div>
                        <button className="btn-login btn btn-primary" type="submit">Sign In</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;