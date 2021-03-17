import React, { Component } from "react";
import "./iframe/iframe.css";

class EBook3 extends Component{
    
    render(){
    return(
        <div className="">
            <iframe className="ifm" title="book3" 
                src="./book-one-page/book3/book3.html"
                allow="fullscreen" scrolling="no" 
                sandbox="allow-forms allow-modals allow-popups allow-same-origin" >
            </iframe>
        </div>            
        );
    }
}

export default EBook3;