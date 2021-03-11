import React, { Component } from 'react';
import './App.css';
import Curso from './component/Curso';
import EBooks from './component/EBooks';
import Contact from './component/Contact';
import Footer from './component/Footer';

class App extends Component {
  
  constructor(){
    super()
    this.state={
      homeVw:true,
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

  abrirHome(){
    this.setState({
      homeVw:true,
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
            <a className="App-header-btn" href="/#" onClick={() => this.abrirHome()}>
              <span className="fas fa-bars"></span>
            </a>
        </div>   
        
        {
          this.state.homeVw?
          <div className="App-cont">
            <div className="App-mg">
              <div className="App-btn">
                <a className="App-lnk" href="https://www.aesinstituto.com" target="_blank" rel="noreferrer">
                  <span className="fas fa-home"></span>
                  <p>HOME</p>
                </a>
              </div>
              <div className="App-btn">
                <a className="App-lnk" href="/#"  onClick={() => this.abrirCursos()}>
                  <span className="fas fa-pencil-ruler"></span>
                  <p>FREE COURSES</p>
                </a>
              </div>
              <div className="App-btn">
                <a className="App-lnk" href="/#"  onClick={() => this.abrirEBooks()}>
                  <span className="fas fa-book"></span>
                  <p>E-BOOKS</p>
                </a>
              </div>
              <div className="App-btn">
                <a className="App-lnk" href="/#"  onClick={() => this.abrirContacto()}>
                  <span className="fas fa-id-card"></span>
                  <p>CONTACT US</p>
                </a>
              </div>
            </div>
          </div>
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