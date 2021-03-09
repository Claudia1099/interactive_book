import React, { Component } from "react";

class EBooks2  extends Component{
    render(){
        return(
            <div className="libro">
                {/* <div className="Portada">
                    <img src='./img/courses/portadaCursoBasico.png'className="App-portada" alt="Portada"/>
                </div> */}
                <div className="Hoja">
                    <iframe id="book2" className="iframeBook" title="ebook 2" sandbox src='./book-one-page/book2/book2.html'></iframe>
                </div>
            </div>
        );
    }
}

export default EBooks2;