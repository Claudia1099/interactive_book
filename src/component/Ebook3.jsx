import React, { Component } from "react";
<<<<<<< HEAD
import "./iframe/iframe.css";
=======
import Swal  from "sweetalert2";
import "./Ebook3/contents.css";
>>>>>>> 606d041dad9ed10054ce1e836616aea659f170e5

class EBook3 extends Component{
    
    render(){
    return(
<<<<<<< HEAD
        <div className="">
            <iframe className="ifm" title="book3" 
                src="./book-one-page/book3/book3.html"
                allow="fullscreen" scrolling="no" 
                sandbox="allow-forms allow-modals allow-popups allow-same-origin" >
            </iframe>
        </div>            
        );
=======
        <div>
                <iframe width="1000" height="550" allowfullscreen="" src="../../book-one-page/book3/book3.html" frameborder="0"></iframe>
        </div>
    );
>>>>>>> 606d041dad9ed10054ce1e836616aea659f170e5
    }
}

export default EBook3;