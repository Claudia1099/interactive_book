import React, {Component} from 'react';

class Footer extends Component{
    render(){
        return(
            <footer className="App-footer">
                <div className="Footer-power">
                    <span>Power by </span> 
                    <span className="fas fa-globe-americas">AES</span>
                </div>
            </footer>
        );
    }
}
export default Footer;