import React, { Component } from "react";
import Lista from "./Lista";
import Cbasico from "./Cbasico";

class Curso extends Component{

    constructor(){
        super()
        this.state={
          listacursosVw:true,
          CcursoVw:false,
        }
    }
    
    abrirCusoBasico(){
        this.setState({
            listacursosVw:false,
            CcursoVw:true,
        })
      }

    render(){
        return(
            <div className="App-cont">
                <div className="App-book App-mg">

                    {
                        this.state.listacursosVw?
                        <div className="Cursos">
                            <h3>COURSES</h3>
                            <div className="Lista-cursos">
                                <span onClick={() => this.abrirCusoBasico()}><Lista courses="Curso Basico" imgurl="./img/courses/portadaCursoBasico.png" imgalt="Curso Basico"/></span>
                                <span ><Lista courses="Curso Manicure" imgurl="./img/courseManicure.png" imgalt="Curso Manicure"/></span>
                                <span ><Lista courses="Curso Recepción" imgurl="./img/courseRecepcion.png" imgalt="Curso Recepción"/></span>
                                <span ><Lista courses="Curso Chef" imgurl="./img/courseShef.png" imgalt="Curso Chef"/></span>
                            </div>
                        </div>
                        :null
                    }

                    {
                        this.state.CcursoVw?
                        <Cbasico/>
                        :null
                    }
                    
                </div>
            </div>           
        );
    }
}

export default Curso;