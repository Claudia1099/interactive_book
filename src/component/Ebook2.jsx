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
    edit2Page2 = () =>{
        
        Swal.fire({
            title:"Write the right answer",
            input:"text",
            showCancelButton: true,
            showLoaderOnConfirm: true,
        }).then((result) => {
            if(result.isConfirmed && result.value){
                this.setState( state => ({
                    ans2Page2 : result.value
                }))
                Swal.fire('Saved!', '', 'success')      
            } else if(result.isConfirmed && !result.value){
                Swal.fire('You need to write something!', '', 'info')
            }
        })
    }
    edit3Page2 = () =>{
        
        Swal.fire({
            title:"Write the right answer",
            input:"text",
            showCancelButton: true,
            showLoaderOnConfirm: true,
        }).then((result) => {
            if(result.isConfirmed && result.value){
                this.setState( state => ({
                    ans3Page2 : result.value
                }))
                Swal.fire('Saved!', '', 'success')      
            } else if(result.isConfirmed && !result.value){
                Swal.fire('You need to write something!', '', 'info')
            }
        })
    }
    edit4Page2 = () =>{
        
        Swal.fire({
            title:"Write the right answer",
            input:"text",
            showCancelButton: true,
            showLoaderOnConfirm: true,
        }).then((result) => {
            if(result.isConfirmed && result.value){
                this.setState( state => ({
                    ans4Page2 : result.value
                }))
                Swal.fire('Saved!', '', 'success')      
            } else if(result.isConfirmed && !result.value){
                Swal.fire('You need to write something!', '', 'info')
            }
        })
    }
    edit5Page2 = () =>{
        
        Swal.fire({
            title:"Write the right answer",
            input:"text",
            showCancelButton: true,
            showLoaderOnConfirm: true,
        }).then((result) => {
            if(result.isConfirmed && result.value){
                this.setState( state => ({
                    ans5Page2 : result.value
                }))
                Swal.fire('Saved!', '', 'success')      
            } else if(result.isConfirmed && !result.value){
                Swal.fire('You need to write something!', '', 'info')
            }
        })
    }
    edit6Page2 = () =>{
        
        Swal.fire({
            title:"Write the right answer",
            input:"text",
            showCancelButton: true,
            showLoaderOnConfirm: true,
        }).then((result) => {
            if(result.isConfirmed && result.value){
                this.setState( state => ({
                    ans6Page2 : result.value
                }))
                Swal.fire('Saved!', '', 'success')      
            } else if(result.isConfirmed && !result.value){
                Swal.fire('You need to write something!', '', 'info')
            }
        })
    }
    edit7Page2 = () =>{
        
        Swal.fire({
            title:"Write the right answer",
            input:"text",
            showCancelButton: true,
            showLoaderOnConfirm: true,
        }).then((result) => {
            if(result.isConfirmed && result.value){
                this.setState( state => ({
                    ans7Page2 : result.value
                }))
                Swal.fire('Saved!', '', 'success')      
            } else if(result.isConfirmed && !result.value){
                Swal.fire('You need to write something!', '', 'info')
            }
        })
    }
    edit8Page2 = () =>{
        
        Swal.fire({
            title:"Write the right answer",
            input:"text",
            showCancelButton: true,
            showLoaderOnConfirm: true,
        }).then((result) => {
            if(result.isConfirmed && result.value){
                this.setState( state => ({
                    ans8Page2 : result.value
                }))
                Swal.fire('Saved!', '', 'success')      
            } else if(result.isConfirmed && !result.value){
                Swal.fire('You need to write something!', '', 'info')
            }
        })
    }
    edit9Page2 = () =>{
        
        Swal.fire({
            title:"Write the right answer",
            input:"text",
            showCancelButton: true,
            showLoaderOnConfirm: true,
        }).then((result) => {
            if(result.isConfirmed && result.value){
                this.setState( state => ({
                    ans9Page2 : result.value
                }))
                Swal.fire('Saved!', '', 'success')      
            } else if(result.isConfirmed && !result.value){
                Swal.fire('You need to write something!', '', 'info')
            }
        })
    }
    edit10Page2 = () =>{
        
        Swal.fire({
            title:"Write the right answer",
            input:"text",
            showCancelButton: true,
            showLoaderOnConfirm: true,
        }).then((result) => {
            if(result.isConfirmed && result.value){
                this.setState( state => ({
                    ans10Page2 : result.value
                }))
                Swal.fire('Saved!', '', 'success')      
            } else if(result.isConfirmed && !result.value){
                Swal.fire('You need to write something!', '', 'info')
            }
        })
    }
    edit11Page2 = () =>{
        
        Swal.fire({
            title:"Write the right answer",
            input:"text",
            showCancelButton: true,
            showLoaderOnConfirm: true,
        }).then((result) => {
            if(result.isConfirmed && result.value){
                this.setState( state => ({
                    ans11Page2 : result.value
                }))
                Swal.fire('Saved!', '', 'success')      
            } else if(result.isConfirmed && !result.value){
                Swal.fire('You need to write something!', '', 'info')
            }
        })
    }
    edit12Page2 = () =>{
        
        Swal.fire({
            title:"Write the right answer",
            input:"text",
            showCancelButton: true,
            showLoaderOnConfirm: true,
        }).then((result) => {
            if(result.isConfirmed && result.value){
                this.setState( state => ({
                    ans12Page2 : result.value
                }))
                Swal.fire('Saved!', '', 'success')      
            } else if(result.isConfirmed && !result.value){
                Swal.fire('You need to write something!', '', 'info')
            }
        })
    }
    edit13Page2 = () =>{
        
        Swal.fire({
            title:"Write the right answer",
            input:"text",
            showCancelButton: true,
            showLoaderOnConfirm: true,
        }).then((result) => {
            if(result.isConfirmed && result.value){
                this.setState( state => ({
                    ans13Page2 : result.value
                }))
                Swal.fire('Saved!', '', 'success')      
            } else if(result.isConfirmed && !result.value){
                Swal.fire('You need to write something!', '', 'info')
            }
        })
    }
    edit1Page3 = () =>{
        
        Swal.fire({
            title:"Write the right answer",
            input:"text",
            showCancelButton: true,
            showLoaderOnConfirm: true,
        }).then((result) => {
            if(result.isConfirmed && result.value){
                this.setState( state => ({
                    ans1Page3 : result.value
                }))
                Swal.fire('Saved!', '', 'success')      
            } else if(result.isConfirmed && !result.value){
                Swal.fire('You need to write something!', '', 'info')
            }
        })
    }
    edit2Page3 = () =>{
        
        Swal.fire({
            title:"Write the right answer",
            input:"text",
            showCancelButton: true,
            showLoaderOnConfirm: true,
        }).then((result) => {
            if(result.isConfirmed && result.value){
                this.setState( state => ({
                    ans2Page3 : result.value
                }))
                Swal.fire('Saved!', '', 'success')      
            } else if(result.isConfirmed && !result.value){
                Swal.fire('You need to write something!', '', 'info')
            }
        })
    }
    edit3Page3 = () =>{
        
        Swal.fire({
            title:"Write the right answer",
            input:"text",
            showCancelButton: true,
            showLoaderOnConfirm: true,
        }).then((result) => {
            if(result.isConfirmed && result.value){
                this.setState( state => ({
                    ans3Page3 : result.value
                }))
                Swal.fire('Saved!', '', 'success')      
            } else if(result.isConfirmed && !result.value){
                Swal.fire('You need to write something!', '', 'info')
            }
        })
    }
    edit4Page3 = () =>{
        
        Swal.fire({
            title:"Write the right answer",
            input:"text",
            showCancelButton: true,
            showLoaderOnConfirm: true,
        }).then((result) => {
            if(result.isConfirmed && result.value){
                this.setState( state => ({
                    ans4Page3 : result.value
                }))
                Swal.fire('Saved!', '', 'success')      
            } else if(result.isConfirmed && !result.value){
                Swal.fire('You need to write something!', '', 'info')
            }
        })
    }
    edit5Page3 = () =>{
        
        Swal.fire({
            title:"Write the right answer",
            input:"text",
            showCancelButton: true,
            showLoaderOnConfirm: true,
        }).then((result) => {
            if(result.isConfirmed && result.value){
                this.setState( state => ({
                    ans5Page3 : result.value
                }))
                Swal.fire('Saved!', '', 'success')      
            } else if(result.isConfirmed && !result.value){
                Swal.fire('You need to write something!', '', 'info')
            }
        })
    }
    edit6Page3 = () =>{
        
        Swal.fire({
            title:"Write the right answer",
            input:"text",
            showCancelButton: true,
            showLoaderOnConfirm: true,
        }).then((result) => {
            if(result.isConfirmed && result.value){
                this.setState( state => ({
                    ans6Page3 : result.value
                }))
                Swal.fire('Saved!', '', 'success')      
            } else if(result.isConfirmed && !result.value){
                Swal.fire('You need to write something!', '', 'info')
            }
        })
    }
    edit7Page3 = () =>{
        
        Swal.fire({
            title:"Write the right answer",
            input:"text",
            showCancelButton: true,
            showLoaderOnConfirm: true,
        }).then((result) => {
            if(result.isConfirmed && result.value){
                this.setState( state => ({
                    ans7Page3 : result.value
                }))
                Swal.fire('Saved!', '', 'success')      
            } else if(result.isConfirmed && !result.value){
                Swal.fire('You need to write something!', '', 'info')
            }
        })
    }
    edit8Page3 = () =>{
        
        Swal.fire({
            title:"Write the right answer",
            input:"text",
            showCancelButton: true,
            showLoaderOnConfirm: true,
        }).then((result) => {
            if(result.isConfirmed && result.value){
                this.setState( state => ({
                    ans8Page3 : result.value
                }))
                Swal.fire('Saved!', '', 'success')      
            } else if(result.isConfirmed && !result.value){
                Swal.fire('You need to write something!', '', 'info')
            }
        })
    }
    edit9Page3 = () =>{
        
        Swal.fire({
            title:"Write the right answer",
            input:"text",
            showCancelButton: true,
            showLoaderOnConfirm: true,
        }).then((result) => {
            if(result.isConfirmed && result.value){
                this.setState( state => ({
                    ans9Page3 : result.value
                }))
                Swal.fire('Saved!', '', 'success')      
            } else if(result.isConfirmed && !result.value){
                Swal.fire('You need to write something!', '', 'info')
            }
        })
    }
    edit10Page3 = () =>{
        
        Swal.fire({
            title:"Write the right answer",
            input:"text",
            showCancelButton: true,
            showLoaderOnConfirm: true,
        }).then((result) => {
            if(result.isConfirmed && result.value){
                this.setState( state => ({
                    ans10Page3 : result.value
                }))
                Swal.fire('Saved!', '', 'success')      
            } else if(result.isConfirmed && !result.value){
                Swal.fire('You need to write something!', '', 'info')
            }
        })
    }
    edit11Page3 = () =>{
        
        Swal.fire({
            title:"Write the right answer",
            input:"text",
            showCancelButton: true,
            showLoaderOnConfirm: true,
        }).then((result) => {
            if(result.isConfirmed && result.value){
                this.setState( state => ({
                    ans11Page3 : result.value
                }))
                Swal.fire('Saved!', '', 'success')      
            } else if(result.isConfirmed && !result.value){
                Swal.fire('You need to write something!', '', 'info')
            }
        })
    }
    edit1Page4 = () =>{
        
        Swal.fire({
            title:"Write the right answer",
            input:"text",
            showCancelButton: true,
            showLoaderOnConfirm: true,
        }).then((result) => {
            if(result.isConfirmed && result.value){
                this.setState( state => ({
                    ans1Page4 : result.value
                }))
                Swal.fire('Saved!', '', 'success')      
            } else if(result.isConfirmed && !result.value){
                Swal.fire('You need to write something!', '', 'info')
            }
        })
    }
    edit2Page4 = () =>{
        
        Swal.fire({
            title:"Write the right answer",
            input:"text",
            showCancelButton: true,
            showLoaderOnConfirm: true,
        }).then((result) => {
            if(result.isConfirmed && result.value){
                this.setState( state => ({
                    ans2Page4 : result.value
                }))
                Swal.fire('Saved!', '', 'success')      
            } else if(result.isConfirmed && !result.value){
                Swal.fire('You need to write something!', '', 'info')
            }
        })
    }
    edit3Page4 = () =>{
        
        Swal.fire({
            title:"Write the right answer",
            input:"text",
            showCancelButton: true,
            showLoaderOnConfirm: true,
        }).then((result) => {
            if(result.isConfirmed && result.value){
                this.setState( state => ({
                    ans3Page4 : result.value
                }))
                Swal.fire('Saved!', '', 'success')      
            } else if(result.isConfirmed && !result.value){
                Swal.fire('You need to write something!', '', 'info')
            }
        })
    }
    edit4Page4 = () =>{
        
        Swal.fire({
            title:"Write the right answer",
            input:"text",
            showCancelButton: true,
            showLoaderOnConfirm: true,
        }).then((result) => {
            if(result.isConfirmed && result.value){
                this.setState( state => ({
                    ans4Page4 : result.value
                }))
                Swal.fire('Saved!', '', 'success')      
            } else if(result.isConfirmed && !result.value){
                Swal.fire('You need to write something!', '', 'info')
            }
        })
    }
    edit5Page4 = () =>{
        
        Swal.fire({
            title:"Write the right answer",
            input:"text",
            showCancelButton: true,
            showLoaderOnConfirm: true,
        }).then((result) => {
            if(result.isConfirmed && result.value){
                this.setState( state => ({
                    ans5Page4 : result.value
                }))
                Swal.fire('Saved!', '', 'success')      
            } else if(result.isConfirmed && !result.value){
                Swal.fire('You need to write something!', '', 'info')
            }
        })
    }
    edit6Page4 = () =>{
        
        Swal.fire({
            title:"Write the right answer",
            input:"text",
            showCancelButton: true,
            showLoaderOnConfirm: true,
        }).then((result) => {
            if(result.isConfirmed && result.value){
                this.setState( state => ({
                    ans6Page4 : result.value
                }))
                Swal.fire('Saved!', '', 'success')      
            } else if(result.isConfirmed && !result.value){
                Swal.fire('You need to write something!', '', 'info')
            }
        })
    }
    edit7Page4 = () =>{
        
        Swal.fire({
            title:"Write the right answer",
            input:"text",
            showCancelButton: true,
            showLoaderOnConfirm: true,
        }).then((result) => {
            if(result.isConfirmed && result.value){
                this.setState( state => ({
                    ans7Page4 : result.value
                }))
                Swal.fire('Saved!', '', 'success')      
            } else if(result.isConfirmed && !result.value){
                Swal.fire('You need to write something!', '', 'info')
            }
        })
    }
    edit1Page6 = () =>{
        
        Swal.fire({
            title:"Write the right answer",
            input:"text",
            showCancelButton: true,
            showLoaderOnConfirm: true,
        }).then((result) => {
            if(result.isConfirmed && result.value){
                this.setState( state => ({
                    ans1Page6 : result.value
                }))
                Swal.fire('Saved!', '', 'success')      
            } else if(result.isConfirmed && !result.value){
                Swal.fire('You need to write something!', '', 'info')
            }
        })
    }
    edit2Page6 = () =>{
        
        Swal.fire({
            title:"Write the right answer",
            input:"text",
            showCancelButton: true,
            showLoaderOnConfirm: true,
        }).then((result) => {
            if(result.isConfirmed && result.value){
                this.setState( state => ({
                    ans2Page6 : result.value
                }))
                Swal.fire('Saved!', '', 'success')      
            } else if(result.isConfirmed && !result.value){
                Swal.fire('You need to write something!', '', 'info')
            }
        })
    }
    edit3Page6 = () =>{
        
        Swal.fire({
            title:"Write the right answer",
            input:"text",
            showCancelButton: true,
            showLoaderOnConfirm: true,
        }).then((result) => {
            if(result.isConfirmed && result.value){
                this.setState( state => ({
                    ans3Page6 : result.value
                }))
                Swal.fire('Saved!', '', 'success')      
            } else if(result.isConfirmed && !result.value){
                Swal.fire('You need to write something!', '', 'info')
            }
        })
    }
    edit4Page6 = () =>{
        
        Swal.fire({
            title:"Write the right answer",
            input:"text",
            showCancelButton: true,
            showLoaderOnConfirm: true,
        }).then((result) => {
            if(result.isConfirmed && result.value){
                this.setState( state => ({
                    ans4Page6 : result.value
                }))
                Swal.fire('Saved!', '', 'success')      
            } else if(result.isConfirmed && !result.value){
                Swal.fire('You need to write something!', '', 'info')
            }
        })
    }
    edit5Page6 = () =>{
        
        Swal.fire({
            title:"Write the right answer",
            input:"text",
            showCancelButton: true,
            showLoaderOnConfirm: true,
        }).then((result) => {
            if(result.isConfirmed && result.value){
                this.setState( state => ({
                    ans5Page6 : result.value
                }))
                Swal.fire('Saved!', '', 'success')      
            } else if(result.isConfirmed && !result.value){
                Swal.fire('You need to write something!', '', 'info')
            }
        })
    }
    edit6Page6 = () =>{
        
        Swal.fire({
            title:"Write the right answer",
            input:"text",
            showCancelButton: true,
            showLoaderOnConfirm: true,
        }).then((result) => {
            if(result.isConfirmed && result.value){
                this.setState( state => ({
                    ans6Page6 : result.value
                }))
                Swal.fire('Saved!', '', 'success')      
            } else if(result.isConfirmed && !result.value){
                Swal.fire('You need to write something!', '', 'info')
            }
        })
    }
    edit7Page6 = () =>{
        
        Swal.fire({
            title:"Write the right answer",
            input:"text",
            showCancelButton: true,
            showLoaderOnConfirm: true,
        }).then((result) => {
            if(result.isConfirmed && result.value){
                this.setState( state => ({
                    ans7Page6 : result.value
                }))
                Swal.fire('Saved!', '', 'success')      
            } else if(result.isConfirmed && !result.value){
                Swal.fire('You need to write something!', '', 'info')
            }
        })
    }
    edit8Page6 = () =>{
        
        Swal.fire({
            title:"Write the right answer",
            input:"text",
            showCancelButton: true,
            showLoaderOnConfirm: true,
        }).then((result) => {
            if(result.isConfirmed && result.value){
                this.setState( state => ({
                    ans8Page6 : result.value
                }))
                Swal.fire('Saved!', '', 'success')      
            } else if(result.isConfirmed && !result.value){
                Swal.fire('You need to write something!', '', 'info')
            }
        })
    }
    edit9Page6 = () =>{
        
        Swal.fire({
            title:"Write the right answer",
            input:"text",
            showCancelButton: true,
            showLoaderOnConfirm: true,
        }).then((result) => {
            if(result.isConfirmed && result.value){
                this.setState( state => ({
                    ans9Page6 : result.value
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
                                <img alt="page-1" className="img-fluid" src="./img/Book2/page1.jpg"/>
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-2" className="img-fluid" src="./img/Book2/page2.jpg"/>
                                <span className="result1-page-2">{this.state.ans1Page2}</span>
                                <a href="/#" aria-label="btn-edit" className="btn1-page-2" onClick={() => this.edit1Page2()}><i className="fas fa-pencil-alt"></i></a>
                                <span className="result2-page-2">{this.state.ans2Page2}</span>
                                <a href="/#" aria-label="btn-edit" className="btn2-page-2" onClick={() => this.edit2Page2()}><i className="fas fa-pencil-alt"></i></a>
                                <span className="result3-page-2">{this.state.ans3Page2}</span>
                                <a href="/#" aria-label="btn-edit" className="btn3-page-2" onClick={() => this.edit3Page2()}><i className="fas fa-pencil-alt"></i></a>
                                <span className="result4-page-2">{this.state.ans4Page2}</span>
                                <a href="/#" aria-label="btn-edit" className="btn4-page-2" onClick={() => this.edit4Page2()}><i className="fas fa-pencil-alt"></i></a>
                                <span className="result5-page-2">{this.state.ans5Page2}</span>
                                <a href="/#" aria-label="btn-edit" className="btn5-page-2" onClick={() => this.edit5Page2()}><i className="fas fa-pencil-alt"></i></a>
                                <span className="result6-page-2">{this.state.ans6Page2}</span>
                                <a href="/#" aria-label="btn-edit" className="btn6-page-2" onClick={() => this.edit6Page2()}><i className="fas fa-pencil-alt"></i></a>
                                <span className="result7-page-2">{this.state.ans7Page2}</span>
                                <a href="/#" aria-label="btn-edit" className="btn7-page-2" onClick={() => this.edit7Page2()}><i className="fas fa-pencil-alt"></i></a>
                                <span className="result8-page-2">{this.state.ans8Page2}</span>
                                <a href="/#" aria-label="btn-edit" className="btn8-page-2" onClick={() => this.edit8Page2()}><i className="fas fa-pencil-alt"></i></a>
                                <span className="result9-page-2">{this.state.ans9Page2}</span>
                                <a href="/#" aria-label="btn-edit" className="btn9-page-2" onClick={() => this.edit9Page2()}><i className="fas fa-pencil-alt"></i></a>
                                <span className="result10-page-2">{this.state.ans10Page2}</span>
                                <a href="/#" aria-label="btn-edit" className="btn10-page-2" onClick={() => this.edit10Page2()}><i className="fas fa-pencil-alt"></i></a>
                                <span className="result11-page-2">{this.state.ans11Page2}</span>
                                <a href="/#" aria-label="btn-edit" className="btn11-page-2" onClick={() => this.edit11Page2()}><i className="fas fa-pencil-alt"></i></a>
                                <span className="result12-page-2">{this.state.ans12Page2}</span>
                                <a href="/#" aria-label="btn-edit" className="btn12-page-2" onClick={() => this.edit12Page2()}><i className="fas fa-pencil-alt"></i></a>
                                <span className="result13-page-2">{this.state.ans13Page2}</span>
                                <a href="/#" aria-label="btn-edit" className="btn13-page-2" onClick={() => this.edit13Page2()}><i className="fas fa-pencil-alt"></i></a>
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-3" className="img-fluid" src="./img/Book2/page3.jpg"/>
                                <span className="result1-page-3">{this.state.ans1Page3}</span>
                                <a href="/#" aria-label="btn-edit" className="btn1-page-3" onClick={() => this.edit1Page3()}><i className="fas fa-pencil-alt"></i></a>
                                <span className="result2-page-3">{this.state.ans2Page3}</span>
                                <a href="/#" aria-label="btn-edit" className="btn2-page-3" onClick={() => this.edit2Page3()}><i className="fas fa-pencil-alt"></i></a>
                                <span className="result3-page-3">{this.state.ans3Page3}</span>
                                <a href="/#" aria-label="btn-edit" className="btn3-page-3" onClick={() => this.edit3Page3()}><i className="fas fa-pencil-alt"></i></a>
                                <span className="result4-page-3">{this.state.ans3Page3}</span>
                                <a href="/#" aria-label="btn-edit" className="btn4-page-3" onClick={() => this.edit4Page3()}><i className="fas fa-pencil-alt"></i></a>
                                <span className="result5-page-3">{this.state.ans5Page3}</span>
                                <a href="/#" aria-label="btn-edit" className="btn5-page-3" onClick={() => this.edit5Page3()}><i className="fas fa-pencil-alt"></i></a>
                                <span className="result6-page-3">{this.state.ans6Page3}</span>
                                <a href="/#" aria-label="btn-edit" className="btn6-page-3" onClick={() => this.edit6Page3()}><i className="fas fa-pencil-alt"></i></a>
                                <span className="result7-page-3">{this.state.ans7Page3}</span>
                                <a href="/#" aria-label="btn-edit" className="btn7-page-3" onClick={() => this.edit7Page3()}><i className="fas fa-pencil-alt"></i></a>
                                <span className="result8-page-3">{this.state.ans8Page3}</span>
                                <a href="/#" aria-label="btn-edit" className="btn8-page-3" onClick={() => this.edit8Page3()}><i className="fas fa-pencil-alt"></i></a>
                                <span className="result9-page-3">{this.state.ans9Page3}</span>
                                <a href="/#" aria-label="btn-edit" className="btn9-page-3" onClick={() => this.edit9Page3()}><i className="fas fa-pencil-alt"></i></a>
                                <span className="result10-page-3">{this.state.ans10Page3}</span>
                                <a href="/#" aria-label="btn-edit" className="btn10-page-3" onClick={() => this.edit10Page3()}><i className="fas fa-pencil-alt"></i></a>
                                <span className="result11-page-3">{this.state.ans11Page3}</span>
                                <a href="/#" aria-label="btn-edit" className="btn11-page-3" onClick={() => this.edit11Page3()}><i className="fas fa-pencil-alt"></i></a>
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-4" className="img-fluid" src="./img/Book2/page4.jpg"/>
                                <span className="result1-page-4">{this.state.ans1Page4}</span>
                                <a href="/#" aria-label="btn-edit" className="btn1-page-4" onClick={() => this.edit1Page4()}><i className="fas fa-pencil-alt"></i></a>
                                <span className="result2-page-4">{this.state.ans2Page4}</span>
                                <a href="/#" aria-label="btn-edit" className="btn2-page-4" onClick={() => this.edit2Page4()}><i className="fas fa-pencil-alt"></i></a>
                                <span className="result3-page-4">{this.state.ans3Page4}</span>
                                <a href="/#" aria-label="btn-edit" className="btn3-page-4" onClick={() => this.edit3Page4()}><i className="fas fa-pencil-alt"></i></a>
                                <span className="result4-page-4">{this.state.ans4Page4}</span>
                                <a href="/#" aria-label="btn-edit" className="btn4-page-4" onClick={() => this.edit4Page4()}><i className="fas fa-pencil-alt"></i></a>
                                <span className="result5-page-4">{this.state.ans5Page4}</span>
                                <a href="/#" aria-label="btn-edit" className="btn5-page-4" onClick={() => this.edit5Page4()}><i className="fas fa-pencil-alt"></i></a>
                                <span className="result6-page-4">{this.state.ans6Page4}</span>
                                <a href="/#" aria-label="btn-edit" className="btn6-page-4" onClick={() => this.edit6Page4()}><i className="fas fa-pencil-alt"></i></a>
                                <span className="result7-page-4">{this.state.ans7Page4}</span>
                                <a href="/#" aria-label="btn-edit" className="btn7-page-4" onClick={() => this.edit7Page4()}><i className="fas fa-pencil-alt"></i></a>
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-5" className="img-fluid" src="./img/Book2/page5.jpg"/>
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-6" className="img-fluid" src="./img/Book2/page6.jpg" />
                                <span className="result1-page-6">{this.state.ans1Page6}</span>
                                <a href="/#" aria-label="btn-edit" className="btn1-page-6" onClick={() => this.edit1Page6()}><i className="fas fa-pencil-alt"></i></a>
                                <span className="result2-page-6">{this.state.ans2Page6}</span>
                                <a href="/#" aria-label="btn-edit" className="btn2-page-6" onClick={() => this.edit2Page6()}><i className="fas fa-pencil-alt"></i></a>
                                <span className="result3-page-6">{this.state.ans3Page6}</span>
                                <a href="/#" aria-label="btn-edit" className="btn3-page-6" onClick={() => this.edit3Page6()}><i className="fas fa-pencil-alt"></i></a>
                                <span className="result4-page-6">{this.state.ans4Page6}</span>
                                <a href="/#" aria-label="btn-edit" className="btn4-page-6" onClick={() => this.edit4Page6()}><i className="fas fa-pencil-alt"></i></a>
                                <span className="result5-page-6">{this.state.ans5Page6}</span>
                                <a href="/#" aria-label="btn-edit" className="btn5-page-6" onClick={() => this.edit5Page6()}><i className="fas fa-pencil-alt"></i></a>
                                <span className="result6-page-6">{this.state.ans6Page6}</span>
                                <a href="/#" aria-label="btn-edit" className="btn6-page-6" onClick={() => this.edit6Page6()}><i className="fas fa-pencil-alt"></i></a>
                                <span className="result7-page-6">{this.state.ans7Page6}</span>
                                <a href="/#" aria-label="btn-edit" className="btn7-page-6" onClick={() => this.edit7Page6()}><i className="fas fa-pencil-alt"></i></a>
                                <span className="result8-page-6">{this.state.ans8Page6}</span>
                                <a href="/#" aria-label="btn-edit" className="btn8-page-6" onClick={() => this.edit8Page6()}><i className="fas fa-pencil-alt"></i></a>
                                <span className="result9-page-6">{this.state.ans9Page6}</span>
                                <a href="/#" aria-label="btn-edit" className="btn9-page-6" onClick={() => this.edit9Page6()}><i className="fas fa-pencil-alt"></i></a>
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-7" className="img-fluid" src="./img/Book2/page7.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-8" className="img-fluid" src="./img/Book2/page8.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-9" className="img-fluid" src="./img/Book2/page9.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-10" className="img-fluid" src="./img/Book2/page10.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-11" className="img-fluid" src="./img/Book2/page11.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-12" className="img-fluid" src="./img/Book2/page12.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-13" className="img-fluid" src="./img/Book2/page13.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-14" className="img-fluid" src="./img/Book2/page14.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-15" className="img-fluid" src="./img/Book2/page15.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-16" className="img-fluid" src="./img/Book2/page16.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-17" className="img-fluid" src="./img/Book2/page17.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-18" className="img-fluid" src="./img/Book2/page18.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-19" className="img-fluid" src="./img/Book2/page19.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-20" className="img-fluid" src="./img/Book2/page20.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-21" className="img-fluid" src="./img/Book2/page21.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-22" className="img-fluid" src="./img/Book2/page22.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-23" className="img-fluid" src="./img/Book2/page23.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-24" className="img-fluid" src="./img/Book2/page24.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-25" className="img-fluid" src="./img/Book2/page25.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-26" className="img-fluid" src="./img/Book2/page26.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-27" className="img-fluid" src="./img/Book2/page27.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-28" className="img-fluid" src="./img/Book2/page28.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-29" className="img-fluid" src="./img/Book2/page29.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-30" className="img-fluid" src="./img/Book2/page30.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-31" className="img-fluid" src="./img/Book2/page31.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-32" className="img-fluid" src="./img/Book2/page32.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-32" className="img-fluid" src="./img/Book2/page32.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-33" className="img-fluid" src="./img/Book2/page33.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-34" className="img-fluid" src="./img/Book2/page34.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-35" className="img-fluid" src="./img/Book2/page35.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-36" className="img-fluid" src="./img/Book2/page36.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-37" className="img-fluid" src="./img/Book2/page37.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-38" className="img-fluid" src="./img/Book2/page38.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-39" className="img-fluid" src="./img/Book2/page39.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-40" className="img-fluid" src="./img/Book2/page40.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-41" className="img-fluid" src="./img/Book2/page41.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-42" className="img-fluid" src="./img/Book2/page42.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-43" className="img-fluid" src="./img/Book2/page43.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-44" className="img-fluid" src="./img/Book2/page44.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-45" className="img-fluid" src="./img/Book2/page45.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-46" className="img-fluid" src="./img/Book2/page46.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-47" className="img-fluid" src="./img/Book2/page47.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-48" className="img-fluid" src="./img/Book2/page48.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-49" className="img-fluid" src="./img/Book2/page49.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-50" className="img-fluid" src="./img/Book2/page50.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-51" className="img-fluid" src="./img/Book2/page51.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-52" className="img-fluid" src="./img/Book2/page52.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-53" className="img-fluid" src="./img/Book2/page53.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-54" className="img-fluid" src="./img/Book2/page54.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-55" className="img-fluid" src="./img/Book2/page55.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-56" className="img-fluid" src="./img/Book2/page56.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-57" className="img-fluid" src="./img/Book2/page57.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-58" className="img-fluid" src="./img/Book2/page58.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-60" className="img-fluid" src="./img/Book2/page60.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-61" className="img-fluid" src="./img/Book2/page61.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-62" className="img-fluid" src="./img/Book2/page62.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-3 mb-3">
                            <div className="bordeLibro pagina">
                                <img alt="page-63" className="img-fluid" src="./img/Book2/page63.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default EBook2;