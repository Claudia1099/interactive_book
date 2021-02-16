import React, { Component } from "react";

class Contact extends Component{
    render(){
        return(
            <div className="App-contact App-cont">
                <div className="App-mg">
                    <div className="Contact">
                        <h3>CONTACT US</h3>
                        <div className="App-redes">
                            <div>
                                <a className="App-lnk" href="https://www.facebook.com/EnglishSchoolAES/" target="_blank">
                                    <div className="Contact-btn">
                                        <span className="fab fa-facebook"></span>
                                        <span><p>Facebook</p></span>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a className="App-lnk" href="https://www.instagram.com/aes.englishschool/" target="_blank">
                                    <div className="Contact-btn">
                                        <span className="fab fa-instagram"></span>
                                        <span><p>Instagram</p></span>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a className="App-lnk" href="https://www.youtube.com/channel/UCcwaKVf3xMqYBrjZgvetBng" target="_blank">
                                    <div className="Contact-btn">
                                        <span className="fab fa-youtube"></span>
                                        <span><p>YouTube</p></span>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a className="App-lnk" href="https://wa.link/c17kg9">
                                    <div className="Contact-btn">
                                        <span className="fab fa-whatsapp"></span>
                                        <span><p>Whatsapp</p></span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;