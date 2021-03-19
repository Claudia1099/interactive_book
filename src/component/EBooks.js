import React, { Component } from "react";
import Lista from "./Lista";
import Ebook1 from "./Ebook1";
import Ebook2 from "./Ebook2";
import Ebook3 from "./Ebook3";
import Ebook4 from "./Ebook4";

class EBooks  extends Component{
    
    constructor(){
        super()
        this.state={
          listaEBooksVw:true,
          eBooks1Vw:false,
          eBooks2Vw:false,
          eBooks3Vw:false,
          eBooks4Vw:false
        }
    }    
    abrirEBooks(listaBook, book1, book2, book3, book4){
        this.setState({
            listaEBooksVw: listaBook,
            eBooks1Vw: book1,
            eBooks2Vw: book2,
            eBooks3Vw: book3,
            eBooks4Vw: book4
        })
        if(window.screen.width <= 280){
            document.getElementById("adaptable").setAttribute("content","width=device-width, initial-scale=0.4");
        }else if(window.screen.width <= 320){
            document.getElementById("adaptable").setAttribute("content","width=device-width, initial-scale=0.46");
        }else if(window.screen.width <= 375){
            document.getElementById("adaptable").setAttribute("content","width=device-width, initial-scale=0.55");
        }else if(window.screen.width <= 414){
            document.getElementById("adaptable").setAttribute("content","width=device-width, initial-scale=0.6");
        }else if (window.screen.width <= 768){
            document.getElementById("adaptable").setAttribute("content","width=device-width, initial-scale=0.4");
        }else if(window.screen.width <= 1024){
            document.getElementById("adaptable").setAttribute("content","width=device-width, initial-scale=0.55");
        }else{
            document.getElementById("adaptable").setAttribute("content","width=device-width, initial-scale=1.0");
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
                                <span onClick={() => this.abrirEBooks(false, true, false, false, false)}><Lista courses="Book 1" imgurl="./img/book1.png" imgalt="Book 1"/></span>
                                <span onClick={() => this.abrirEBooks(false, false, true, false, false)}><Lista courses="Book 2" imgurl="./img/book2.png" imgalt="Book 2"/></span>
                                <span onClick={() => this.abrirEBooks(false, false, false, true, false)}><Lista courses="Book 3" imgurl="./img/book3.png" imgalt="Book 3"/></span>
                                <span onClick={() => this.abrirEBooks(false, false, false, false, true)}><Lista courses="Book 4" imgurl="./img/book3.png" imgalt="Book 4"/></span>
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
                        <Ebook3/>
                        :null
                    }
                    {
                        this.state.eBooks4Vw?
                        <Ebook4/>
                        :null
                    }
                    
                </div>
            </div>           
        );
        }
    }

export default EBooks;