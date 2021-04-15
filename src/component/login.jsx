import React, { useState } from "react";
import { auth } from '../firebaseconfig';
import Swal from 'sweetalert2';
import { render } from "@testing-library/react";


 
const Login = () =>{    

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    
    const loginForEmail = (e) => {
        e.preventDefault();
        Swal.fire('Revisando Credenciales', '', 'info');
        Swal.showLoading();
        auth.signInWithEmailAndPassword(email, pass).then((resp) => {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title:'Inicio correctamente',
                showConfirmButton: false,
                timer: 1500
            })
            
            localStorage.setItem('email', email.toLowerCase());
            window.location.reload();
        },error => Swal.fire('Usuario o contraseña incorrectos','','error'));
    }

    const logout = (e) => {
        auth.signOut();
        localStorage.removeItem('email');
        Swal.fire('Has cerrado sesión','','success');
        window.location.reload();
    }
    return(       
        <div>
            {
                !localStorage.getItem('email')?
            <div className="App-cont">
                <div className="App-mg">
                    <form onSubmit={loginForEmail} id="login">
                        <div className="card">
                            <img src="./img/backLogin.png" className="card-img-top" alt="backLogin"></img>
                            <div className="card-body">
                                <input className="inpt-login form-control" onChange={(e) => (setEmail(e.target.value))} type="email" name="email" placeholder="Email"/>
                                <input className="inpt-login form-control" type="password" onChange={(e) => (setPass(e.target.value))} name ="pass" placeholder="Contraseña"/>
                            </div>
                        </div>
                        <button className="btn-login btn btn-primary" type="submit" value="Iniciar Sesión"><span className="fas fa-sing-in-alt"></span> Log In</button>
                    </form>
                </div>
            </div>
            :
            <div>
                <h1>Tiene la Sesión Iniciada</h1>
                <button className="btn btn-primary" onClick={logout}>Cerrar Sesión</button>
            </div>
            }       
        </div>
        );
    }
export default Login;