import React, { Component } from "react";
import Lista from "./Lista";
import Ebook1 from "./Ebook1";

class EBooks  extends Component{

    constructor(){
        super()
        this.state={
          listaEBooksVw:true,
          eBooks1Vw:false,
        }
    }
    
    abrirEBooks(){
        this.setState({
            listaEBooksVw:false,
            eBooks1Vw:true,
        })
        document.getElementById("fondo").setAttribute("class","background")
      }

    render(){
        return(
            <div id="fondo" className="App-cont">
                <div className="App-book mb-5 App-mg">

                    {
                        this.state.listaEBooksVw?
                        <div className="Cursos">
                            <h3>E-BOOKS</h3>
                            <div className="Lista-cursos">
                                <span onClick={() => this.abrirEBooks()}><Lista courses="Book 1" imgurl="./img/book1.png" imgalt="Book 1"/></span>
                                <span ><Lista courses="Book 2" imgurl="./img/book2.png" imgalt="Book 2"/></span>
                                <span ><Lista courses="Book 3" imgurl="./img/book3.png" imgalt="Book 3"/></span>
                                <span ><Lista courses="Book 4" imgurl="./img/book4.png" imgalt="Book 4"/></span>
                            </div>
                        </div>
                        :null
                    }

                    {
                        this.state.eBooks1Vw?
                        <Ebook1/>
                        :null
                    }
                    
                </div>
            </div>           
        );
    }
}

export default EBooks;