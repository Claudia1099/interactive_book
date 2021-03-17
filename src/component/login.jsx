import React, { Component } from "react";
 
class Login extends Component{    
    render(){
        return(
            <div className="App-cont">
                <div className="App-mg">
                    <form id="login" method="POST" action="action.php" encType="multipart/form-data">
                        <div className="card">
                            <img src="./img/backLogin.png" className="card-img-top" alt="backLogin"></img>
                            <div className="card-body">
                                <input className="inpt-login form-control" type="text" name="username" placeholder="Username..."/>
                                <input className="inpt-login form-control" type="password" name ="pass" placeholder="Password..."/>
                            </div>
                        </div>
                        <button className="btn-login btn btn-primary" type="submit" value="Log In"><span className="fas fa-sing-in-alt"></span> Log In</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;