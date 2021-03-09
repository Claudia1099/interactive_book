import React, { Component } from "react";
import Swal  from "sweetalert2";
import "./Ebook2/contents.css";
import "./Ebook2/contents-responsive-mobile.css";

class EBook2  extends Component{
    constructor(props){
        super()
        this.state = {};
    }
    edit1Page2 = () =>{
        
        Swal.fire({
            title:"Write the right answer",
            input:"text",
            showCancelButton: true,
            showLoaderOnConfirm: true,
        }).then((result) => {
            if(result.isConfirmed && result.value){
                this.setState( state => ({
                    ans1Page2 : result.value
                }))
                Swal.fire('Saved!', '', 'success')      
            } else if(result.isConfirmed && !result.value){
                Swal.fire('You need to write something!', '', 'info')
            }
        })
    }
    render(){
        return(
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 mt-3 mb-3">
                        <div className="bordeLibro">
                            <img alt="portada" src="./img/courses/portadaCursoBasico.png" width="100%" className="img-fluid"/>
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro">
                                <img alt="page-1" className="img-fluid" src="./img/Book2/page1.jpg" width="100%"/>
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <span className="result1-page-2">{this.state.ans1Page2}</span>
                                <img alt="page-2" className="img-fluid" src="./img/Book2/page2.jpg" width="100%"/>
                                <a href="#" className="btn1-page-2" onClick={() => this.edit1Page2()}><i className="fas fa-pencil-alt"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default EBook2;