import React, { Component } from "react";
 
class Login extends Component{
    
    xhttp(){
        const form = document.getElementById('login');
        
        let xhttpr = new XMLHttpRequest();
        let url = 'https://aesapp.aesinstituto.com/action.php';
        let data = new FormData(form);

        xhttpr.open('POST',url,true);
        xhttpr.onreadystatechange = function(){
            if(xhttpr.readyState === 4 && xhttpr.status === 200){
                let resp = JSON.parse(xhttpr.responseText);
                if(resp.response === 'true'){
                    alert('connect full');
                }else{
                    alert('incorrecto'); 
                }
            }
        }
        xhttpr.send(data);
    }

    render(){
        return(
            <div className="App-cont">
                <div className="App-mg">
                    <form id="login" method="POST" onSubmit="return false" action="return false" encType="multipart/form-data">
                        <div className="card">
                            <img src="./img/backLogin.png" className="card-img-top" alt="backLogin"></img>
                            <div className="card-body">
                                <input className="inpt-login form-control" type="text" name="username" placeholder="email..." tabIndex="1" required/>
                                <input className="inpt-login form-control" type="password" name ="pass" placeholder="Password..." tabIndex="2" required/>
                            </div>
                        </div>
                        <button className="btn-login btn btn-primary" type="submit" tabIndex="3" onClick={() => this.xhttp()}>Log In</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;