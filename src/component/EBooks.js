import React, { Component } from "react";
import Lista from "./Lista";
import Ebook1 from "./Ebook1";
import Ebook2 from "./Ebook2";
import EBook3 from "./Ebook3";

class EBooks  extends Component{
    
    constructor(){
        super()
        this.state={
          listaEBooksVw:true,
          eBooks1Vw:false,
          eBooks2Vw:false,
        }
    }
    
    /*eBooks1Vw(){
        this.setState({
            listaEBooksVw:false,
            eBooks1Vw:true
        })
      }*/
      /*eBooks2Vw(){
        this.setState({
            listaEBooksVw:false,
            eBooks1Vw:false,
            eBooks2Vw:true,
          eBooks2Vw:false
        }
    }*/
    abrirEBooks(listaBook, book1, book2, book3){
        this.setState({
            listaEBooksVw: listaBook,
            eBooks1Vw: book1,
            eBooks2Vw: book2,
            eBooks3Vw: book3,
            eBooks2Vw: book2
        })
        if(window.screen.width <= 1024){
            document.getElementById("adaptable").setAttribute("content","width=device-width, initial-scale=0.5")
      }
    }

    render(){
        return(
            <div className="App-cont">
                <div className="App-book mb-5 App-mg">
                    {
                        this.state.listaEBooksVw?
                        <div className="Cursos">
                            <h3>E-BOOKS</h3>
                            <div className="Lista-cursos">
                                <span onClick={() => this.abrirEBooks(false, true, false, false)}><Lista courses="Book 1" imgurl="./img/book1.png" imgalt="Book 1"/></span>
                                <span onClick={() => this.abrirEBooks(false, false, true, false)}><Lista courses="Book 2" imgurl="./img/book2.png" imgalt="Book 2"/></span>
                                <span onClick={() => this.abrirEBooks(false, false, false, true)}><Lista courses="Book 3" imgurl="./img/book3.png" imgalt="Book 3"/></span>
                                {/*<span onClick={(e) => this.eBooks1Vw()}><Lista courses="Book 1" imgurl="./img/book1.png" imgalt="Book 1"/></span>
                                <span onClick={(e) => this.eBooks2Vw()}><Lista courses="Book 2" imgurl="./img/book2.png" imgalt="Book 2"/></span>
                                <span onClick={() => this.abrirEBooks(false, true, false)}><Lista courses="Book 1" imgurl="./img/book1.png" imgalt="Book 1"/></span>
                                <span onClick={() => this.abrirEBooks(false, false, true)}><Lista courses="Book 2" imgurl="./img/book2.png" imgalt="Book 2"/></span>
                                <span ><Lista courses="Book 3" imgurl="./img/book3.png" imgalt="Book 3"/></span>
                                <span ><Lista courses="Book 4" imgurl="./img/book4.png" imgalt="Book 4"/></span>*/}
                            </div>
                        </div>
                        :null
                        }

                    {
                        this.state.eBooks1Vw?
                        <Ebook1/>
                        :null
                    }
                    {
                        this.state.eBooks2Vw?
                        <Ebook2/>
                        :null
                    }
                    {
                        this.state.eBooks3Vw?
                        <EBook3/>
                        :null
                    }
                    
                </div>
            </div>           
        );
        }
    }

export default EBooks;