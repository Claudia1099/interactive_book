import React, { Component } from 'react';
import './App.css';
import Login from './component/Login';
import Curso from './component/Curso';
import EBooks from './component/EBooks';
import Contact from './component/Contact';
import Footer from './component/Footer';

class App extends Component {
  
  constructor(){
    super()
    this.state={
      homeVw:true,
      loginVw:false,
      cursosVw:false,
      librosVw:false,
      ebooksVw:false,
      contactoVw:false
    }
  }

  abrirContacto(){
    this.setState({
      contactoVw:true,
      homeVw:false
    })
  }

  abrirCursos(){
    this.setState({
      cursosVw:true,
      homeVw:false
    })
  }

  abrirEBooks(){
    this.setState({
      ebooksVw:true,
      homeVw:false
    })
  }

  abrirLogin(){
    this.setState({
      loginVw:true,
      homeVw:false,
      cursosVw:false,
      librosVw:false,
      ebooksVw:false,
      contactoVw:false
    })
  }

  abrirHome(){
    this.setState({
      homeVw:true,
      loginVw:false,
      cursosVw:false,
      librosVw:false,
      ebooksVw:false,
      contactoVw:false
    })
    document.getElementById("adaptable").setAttribute("content","width=device-width, initial-scale=1.0")
  }

  render() {
    return (
      <div className="App">

        <div className="App-header">
          <img src='./aesLogoHeader.png'className="App-logo" alt="logo"/>
          <div className="nv-header">
            <a className="App-header-btn" href="/#" aria-label="login app" onClick={() => this.abrirLogin()}>
              <span className="fas fa-user"></span>
            </a>
            <a className="App-header-btn" href="/#" aria-label="home app" onClick={() => this.abrirHome()}>
              <span className="fas fa-bars"></span>
            </a>
          </div>
        </div>   
        
        {
          this.state.homeVw?
          <div className="App-cont">
            <div className="App-mg">
              <div className="App-btn">
                <a className="App-lnk" href="https://www.aesinstituto.com" aria-label="home page" rel="noreferrer noopener" target="_blank">
                  <span className="fas fa-home"></span>
                  <p>HOME</p>
                </a>
              </div>
              <div className="App-btn">
                <a className="App-lnk" href="/#" aria-label="free courses" onClick={() => this.abrirCursos()}>
                  <span className="fas fa-pencil-ruler"></span>
                  <p>FREE COURSES</p>
                </a>
              </div>
              <div className="App-btn">
                <a className="App-lnk" href="/#" aria-label="e-books" onClick={() => this.abrirEBooks()}>
                  <span className="fas fa-book"></span>
                  <p>E-BOOKS</p>
                </a>
              </div>
              <div className="App-btn">
                <a className="App-lnk" href="/#"  aria-label="contact" onClick={() => this.abrirContacto()}>
                  <span className="fas fa-id-card"></span>
                  <p>CONTACT US</p>
                </a>
              </div>
            </div>
          </div>
          :null
        }

        {
          this.state.loginVw?
          <Login/>
          :null
        }
                
        {
          this.state.cursosVw?
          <Curso/>
          :null
        }

        {
          this.state.ebooksVw?
          <EBooks/>
          :null
        }

        {
          this.state.contactoVw?
          <Contact/>
          :null
        }

        <Footer/>
      </div>   
    );
  }
}

export default App;