import React, { Component } from "react";

class login extends Component{
    render(){
        return(
            <div className="App-lista">
                <div className="cont-lista">
                    <img src={this.props.imgurl} alt={this.props.imgalt}></img>  
                </div>
                <span><p>{this.props.courses}</p></span>
            </div>
        );
    }
}

export default login;