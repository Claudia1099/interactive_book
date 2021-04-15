import React, { Component } from "react";
import Lista from "./Lista";
import Ebook1 from "./Ebook1";
import Ebook2 from "./Ebook2";
import EBook3 from "./Ebook3";
import EBookA1 from "./EbookA1";
import { store } from '../firebaseconfig';

class EBooks  extends Component{
    
    constructor(){
        super()
        this.state = {
          listaEBooksVw:true,
          eBooks1Vw:false,
          eBooks2Vw:false,
          eBooks3Vw:false,
          eBooksA1Vw:false
        }
        this.validarLibros();
    }    
    abrirEBooks(listaBook, book1, book2, book3, bookA1){
        this.setState({
            listaEBooksVw: listaBook,
            eBooks1Vw: book1,
            eBooks2Vw: book2,
            eBooks3Vw: book3,
            eBooksA1Vw: bookA1
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
    async validarLibros(){
        const docs = await store.doc(`${localStorage.getItem('email')}/books`).get();
        this.setState( state => ({...docs.data()}))
    }

    render(){
        return(
            <div className="App-cont">
                <div className="App-book mb-5 App-mg">
                    {
                        this.state.listaEBooksVw?
                        <div className="Cursos">
                            <h3>E-BOOKS</h3>
                            <div>
                                {
                                    localStorage.getItem('email')?
                                <div className="Lista-cursos">
                                    {
                                        this.state.book1?
                                    <span onClick={() => this.abrirEBooks(false, true, false, false, false)}><Lista courses="Book 1" imgurl="./img/book1.png" imgalt="Book 1"/></span>
                                    :null
                                    }
                                    {
                                        this.state.book2?
                                    <span onClick={() => this.abrirEBooks(false, false, true, false, false)}><Lista courses="Book 2" imgurl="./img/book2.png" imgalt="Book 2"/></span>
                                    :null
                                    }
                                    {
                                        this.state.book3?
                                    <span onClick={() => this.abrirEBooks(false, false, false, true, false)}><Lista courses="Book 3" imgurl="./img/book3.png" imgalt="Book 3"/></span>
                                    :null
                                    }
                                    {
                                        this.state.bookA1?
                                    <span onClick={() => this.abrirEBooks(false, false, false, false, true)}><Lista courses="Book A1" imgurl="./img/book3.png" imgalt="Book A1"/></span>
                                    :null
                                    }
                                </div>
                                :
                                <div>
                                    <div className="no-libros text-muted text-center"><i class="far fa-frown"></i><h1>No tienes libros asociados a tu cuenta</h1></div>
                                </div>
                                }
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
                    {
                        this.state.eBooksA1Vw?
                        <EBookA1/>
                        :null
                    }
                    
                </div>
            </div>           
        );
        }
    }

export default EBooks;