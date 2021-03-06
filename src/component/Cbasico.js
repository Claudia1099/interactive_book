import React, { Component } from "react";

class Cbasico extends Component{

    funcion (evt,aUrl){
        var audioUrl = new Audio(aUrl);
        audioUrl.play();
    }

    quiz(evt,answer,idAnswer){
        var objAnswer = document.getElementById(idAnswer);
        if(answer === 'Correcto'){
            objAnswer.className = "Correcto fas fa-check";
    }   else{
            objAnswer.className = "Incorrecto fas fa-times";
        }                  
    }

    render() {
        return(
            <div className="libro">

                {/* Portada */}

                <div className="Portada">
                    <img src='./img/courses/portadaCursoBasico.png'className="App-portada" alt="Portada"/>
                </div>

                {/* hoja 1 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/greetings.png'className="Esquina" alt="Greetings"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>GREETINGS</h2>
                            <h3>SALUDOS</h3>
                        </div>
                        <div className="bloque">
                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <td>HELLO</td>
                                        <td>HOLA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Hello.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>GOOD MORNING</td>
                                        <td>BUENOS DIAS.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/good-morning.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>GOOD AFTERNOON</td>
                                        <td>BUENAS TARDES.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/good-afternoon.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>GOOD BYE</td>
                                        <td>ADIOS.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/good-bye.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>SEE YOU TOMORROW</td>
                                        <td>NOS VEMOS MA??ANA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/see-you-tomorrow.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>GOOD EVENING</td>
                                        <td>BUENAS NOCHES (SALUDO).</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/good-evening.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>GOOD NIGHT</td>
                                        <td>BUENAS NOCHES (DESPEDIDA).T</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/good-night.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="titulos">
                            <h2>Possible Greetings</h2>
                            <h3>Posible saludos</h3>
                        </div>
                        <div className="bloque">
                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <td>HELLO, MR, GARCIA. IT???S NICE TO SEE YOU AGAIN.</td>
                                        <td>Hola, Se??or Garc??a. Es un placer verle de Nuevo.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/hello-mr-garcia.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>GOOD MORNING MRS, GARCIA. HOW ARE YOU TODAY?</td>
                                        <td>Buenos d??as Se??ora Garcia. Como esta usted hoy.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/good-morning-mrs-garcia.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>   
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">1</span></div>
                </div>
                
                {/* hoja 2*/}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/possible-gretings.png'className="Esquina" alt="possible-gretings"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>Possible Greetings</h2>
                            <h3>Posible saludos</h3>
                        </div>
                        <div className="bloque">
                            <table className="table table-striped">
                                <tbody>
                                     <tr className="">
                                        <td>FINE AND YOU?</td>
                                        <td>Bien y usted.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/fine-and-you.mp3')}}></span></td>
                                    </tr>
                                    <tr className="">
                                        <td >GOOD AFTERNOON, MRS, REYES. IT???S GOOD TO SEE YOU.</td>
                                        <td>Buenas tardes Se??ora Reyes, es un placer verla.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/good-afternoon-mrs-reyes.mp3')}}></span></td>
                                    </tr>
                                    <tr className="">
                                        <td >HOW ARE YOU DOING?</td>
                                        <td>??C??mo la est??s pasando?</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/how-are-you-doing.mp3')}}></span></td>
                                    </tr>
                                    <tr className="">
                                        <td>VERY WELL THANK YOU!</td>
                                        <td>Muy bien gracias</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/very-well-thank-you.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>HOW???S IT GOING?</td>
                                        <td>??C??mo te va?</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/hows-it-going.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>NOT TOO BAD!</td>
                                        <td>No tan mal</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/not-too-bab.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>HOW WAS YOUR DAY YESTERDAY?</td>
                                        <td>??C??mo estuvo tu d??a ayer?</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/how-was-your-day-yesterday.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>PRETTY GOOD THANK YOU!</td>
                                        <td>Muy bien gracias</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/pretty-good-thank-you.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>WHAT??S UP?</td>
                                        <td>??Qu?? hay de nuevo?</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/whats-up.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>NOTHING MUCH.</td>
                                        <td>No mucho</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/nothing-much.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">2</span></div>
                </div>

                {/* hoja 3*/}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/personalInformation.png'className="Esquina" alt="Farewells"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>PERSONAL INFORMATION</h2>
                            <h3>INFORMACI??N PERSONAL</h3>
                        </div>
                        <div className="bloque">
                            <table className="table table-striped">
                                <tbody>
                                    <tr className="">
                                        <td>WHAT IS YOUR NAME?</td>
                                        <td>??Cual es tu nombre?</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/what-is-your-name.mp3')}}></span></td>
                                    </tr>
                                    <tr className="">
                                        <td>MY NAME IS ???</td>
                                        <td>Mi nombre es ???</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/my-name-is.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr className="">
                                        <td>WHERE ARE YOU FROM?</td>
                                        <td>??De d??nde eres?</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/where-are-you-from.mp3')}}></span></td>
                                    </tr>
                                    <tr className="">
                                        <td>I AM FROM ???</td>
                                        <td>Yo soy de ???</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/i-am-from.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr className="">
                                        <td>HOW OLD ARE YOU?</td>
                                        <td>??Cu??ntos a??os tienes?</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/how-old-are-you.mp3')}}></span></td>
                                    </tr>
                                    <tr className="">
                                        <td>I AM 6 YEARS OD</td>
                                        <td>Yo tengo 6 a??os de edad</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/i-am-6-years.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr className="">
                                        <td>WHAT IS YOUR PHONE NUMBER?</td>
                                        <td>??Cu??l es tu n??mero telef??nico?</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/what-is-you-phone.mp3')}}></span></td>
                                    </tr>
                                    <tr className="">
                                        <td>MY PHONE NUMBER IS</td>
                                        <td>Mi n??mero telef??nico es ???</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/my-phone-number-is.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr className="">
                                        <td>WHERE DO YOU LIVE?</td>
                                        <td>??Donde vives?</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/where-do-you-live.mp3')}}></span></td>
                                    </tr>
                                    <tr className="">
                                        <td>I LIVE IN N??POLES NEIGHBORHOOD</td>
                                        <td>Yo vivo en el barrio N??poles</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/i-live-in.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>    
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">3</span></div>
                </div>

                {/* hoja 4*/}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/personalInformation.png'className="Esquina" alt="Farewells"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>PERSONAL INFORMATION</h2>
                            <h3>INFORMACI??N PERSONAL</h3>
                        </div>
                        <div className="bloque">
                            <table className="table table-striped">
                                <tbody>
                                    <tr className="">
                                        <td>Who do you live with?</td>
                                        <td>??Con quien vives?</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/in.mp3')}}></span></td>
                                    </tr>
                                    <tr className="">
                                        <td>I live with my mother and father</td>
                                        <td>Yo vivo con mi mam?? y pap??.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/in.mp3')}}></span></td>
                                    </tr>
                                    <tr className="">
                                        <td>What is your favorite color?</td>
                                        <td>??Cu??l es tu color favorito?</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/in.mp3')}}></span></td>
                                    </tr>
                                    <tr className="">
                                        <td>My favorite color is blue</td>
                                        <td>Mi color favorito es azul</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/in.mp3')}}></span></td>
                                    </tr>
                                    <tr className="">
                                        <td>Who is your best friend?</td>
                                        <td>??Qui??n es tu mejor amigo?</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/in.mp3')}}></span></td>
                                    </tr>
                                    <tr className="">
                                        <td>My best friend is ???</td>
                                        <td>Mi mejor amigo es ???</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/in.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="titulos">
                            <h2>FAREWELLS</h2>
                            <h3>DESPEDIDAS</h3>
                        </div>
                        <div className="bloque">
                            <table className="table table-striped">
                                <tbody>
                                    <tr className="">
                                        <td>BYE.</td>
                                        <td>ADIOS.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/bye.mp3')}}></span></td>
                                    </tr>
                                    <tr className="">
                                        <td>BYE, BYE.</td>
                                        <td>ADIOS.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/bye-bye.mp3')}}></span></td>
                                    </tr>
                                    <tr className="">
                                        <td>GOOD BYE.</td>
                                        <td>ADIOS.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/good-bye.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>  
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">4</span></div>
                </div>

                {/* hoja 5*/}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/farewells.png'className="Esquina" alt="Expressions"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>FAREWELLS</h2>
                            <h3>DESPEDIDAS</h3>
                        </div>
                        <div className="bloque">
                            <table className="table table-striped">
                                <tbody>
                                    <tr className="">
                                        <td>SEE YOU</td>
                                        <td>NOS VEMOS.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/see-you.mp3')}}></span></td>
                                    </tr>
                                    <tr className="">
                                        <td>SEE YOU TOMORROW</td>
                                        <td>NOS VEMOS MA??ANA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/see-you-tomorrow.mp3')}}></span></td>
                                    </tr>
                                    <tr className="">
                                        <td>SO LONG.</td>
                                        <td>HASTA LUEGO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/so-long.mp3')}}></span></td>
                                    </tr>
                                    <tr className="">
                                        <td>SEE YOU SOON.</td>
                                        <td>NOS VEMOS PRONTO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/see-you-soon.mp3')}}></span></td>
                                    </tr>
                                    <tr className="">
                                        <td>SEE YOU THEN.</td>
                                        <td>NOS VEMOS DESPUES.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/see-you-then.mp3')}}></span></td>
                                    </tr>
                                    <tr className="">
                                        <td>GOOD NIGHT</td>
                                        <td>BUENAS NOCHES (DESPEDIDA).T</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/good-night.mp3')}}></span></td>
                                    </tr>
                                    <tr className="">
                                        <td>TAKE CARE.</td>
                                        <td>CUIDATE.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/take-care.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="titulos">
                            <h2>ACTIONS IN CLASSROOM</h2>
                            <h3>ACCIONES EN EL AULA</h3>
                        </div>
                        <div className="bloque">
                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <td>STAND UP!</td>
                                        <td>LEV??NTESE.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/stand-up.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>SIT DOWN! / TAKE YOUR SEAT</td>
                                        <td>SI??NTESE / TOME SU ASIENTO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/sit-down.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>   
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">5</span></div>
                </div>

                {/* hoja 6*/}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/expressions.png'className="Esquina" alt="Expressions"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>ACTIONS IN CLASSROOM</h2>
                            <h3>ACCIONES EN EL AULA</h3>
                        </div>
                        <div className="bloque">
                            <table className="table table-striped">
                                <tbody>
                                    <tr className="">
                                        <td>SIT STILL!</td>
                                        <td>PERMANEZCA SENTADO Y QUIETO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/sit-still.mp3')}}></span></td>
                                    </tr>
                                    <tr className="">
                                        <td>GO TO THE BOARD!</td>
                                        <td>PASE AL TABLERO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/go-to-the-board!.mp3')}}></span></td>
                                    </tr>
                                    <tr className="">
                                        <td>WRITE YOUR NAME</td>
                                        <td>ESCRIBA SU NOMBRE.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/write-your-name.mp3')}}></span></td>
                                    </tr>
                                    <tr className="">
                                        <td>ERASE YOUR NAME</td>
                                        <td>BORRE SU NOMBRE.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/erase-your-name.mp3')}}></span></td>
                                    </tr>
                                    <tr className="">
                                        <td>OPEN YOUR BOOK!</td>
                                        <td>ABRA SU LIBRO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/open-your-book.mp3')}}></span></td>
                                    </tr>
                                    <tr className="">
                                        <td>READ PAGE EIGHT!</td>
                                        <td>LEA P??GINA 8.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/read-page-eight.mp3')}}></span></td>
                                    </tr>
                                    <tr className="">
                                        <td>CLOSE YOUR BOOK!</td>
                                        <td>CIERRE SU LIBRO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/close-your-book.mp3')}}></span></td>
                                    </tr>
                                    <tr className="">
                                        <td>QUESTION.</td>
                                        <td>PREGUNTA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/question.mp3')}}></span></td>
                                    </tr>
                                    <tr className="">
                                        <td>ANSWER.</td>
                                        <td>RESPUESTA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr className="">
                                        <td>PUT AWAY YOUR BOOK!.</td>
                                        <td>GUARDEN SU LIBRO..</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/put-away-your-book.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>   
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">6</span></div>
                </div>

                {/* hoja 7*/}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/expressions.png'className="Esquina" alt="Expressions"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>ACTIONS IN CLASSROOM</h2>
                            <h3>ACCIONES EN EL AULA</h3>
                        </div>
                        <div className="bloque">
                            <table className="table table-striped">
                                <tbody>
                                    <tr className="">
                                        <td>TAKE OUT A SHEET OF PAPER.</td>
                                        <td>SAQUE UNA HOJA DE PAPEL.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/take-out-a-sheet-of-paper.mp3')}}></span></td>
                                    </tr>
                                    <tr className="">
                                        <td>PASS OUT THE TESTS.</td>
                                        <td>REPARTA LOS EXAMENES.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/pass-out-the-tests.mp3')}}></span></td>
                                    </tr>
                                    <tr className="">
                                        <td>ANSWER THE QUESTIONS.</td>
                                        <td>RESPONDAN LAS PREGUNTAS.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer-the-questions.mp3')}}></span></td>
                                    </tr>
                                    <tr className="">
                                        <td>CHECK YOUR ANSWERS.</td>
                                        <td>REVISEN SUS RESPUESTAS.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/check-your-answer.mp3')}}></span></td>
                                    </tr>
                                    <tr className="">
                                        <td>GO OVER THE ANSWERS.</td>
                                        <td>REVISEN LAS RESPUESTAS.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/go-over-the-answers.mp3')}}></span></td>
                                    </tr>
                                    <tr className="">
                                        <td>LISTEN TO THE QUESTIONS.</td>
                                        <td>ESCUCHEN LAS PREGUNTAS.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/listen-to-the-question.mp3')}}></span></td>
                                    </tr>
                                    <tr className="">
                                        <td>RAISE UP YOUR HAND.</td>
                                        <td>LEVANTE SU MANO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/raise-up-your-hand.mp3')}}></span></td>
                                    </tr>
                                    <tr className="">
                                        <td>GIVE THE ANSWER!.</td>
                                        <td>D?? LA RESPUESTA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/give-the-answer.mp3')}}></span></td>
                                    </tr>
                                    <tr className="">
                                        <td>WORK IN GROUPS.</td>
                                        <td>TRABAJEN EN GRUPOS.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/work-in-groups.mp3')}}></span></td>
                                    </tr>
                                    <tr className="">
                                        <td>WORK IN PAIRS.</td>
                                        <td>TRABAJEN EN PAREJAS.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/work-in-pairs.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>   
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">7</span></div>
                </div>

                {/* hoja 8*/}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/expressions.png'className="Esquina" alt="Expressions"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>ACTIONS IN CLASSROOM</h2>
                            <h3>ACCIONES EN EL AULA</h3>
                        </div>
                        <div className="bloque">
                            <table className="table table-striped">
                                <tbody>
                                    <tr className="">
                                        <td>HELP EACH OTHER.</td>
                                        <td>AYUDENSE UNOS A OTROS.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/help-each-other.mp3')}}></span></td>
                                    </tr>
                                    <tr className="">
                                        <td>DO YOUR HOMEWORK!</td>
                                        <td>HAZ TU AREA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/do-your-home-work.mp3')}}></span></td>
                                    </tr>
                                    <tr className="">
                                        <td>BRING IN YOUR HOMEWORK.</td>
                                        <td>TRAIGAN SU TAREA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/bring-in-your-home-work.mp3')}}></span></td>
                                    </tr>
                                    <tr className="">
                                        <td>CORRECT YOUR MISTAKES.</td>
                                        <td>CORRIJAN SUS ERRORES.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/correct-your-mistakes.mp3')}}></span></td>
                                    </tr>
                                    <tr className="">
                                        <td>HAND IN YOUR HOMEWORK.</td>
                                        <td>ENTREGUEN SU TAREA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/hand-in-your-homework.mp3')}}></span></td>
                                    </tr>
                                    <tr className="">
                                        <td>COLLECT THE TESTS.</td>
                                        <td>RECOJA LOS EXAMENES.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/collect-the-tests.mp3')}}></span></td>
                                    </tr>
                                    <tr className="">
                                        <td>OPEN THE WINDOW.</td>
                                        <td>ABRAN LA VENTANA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/open-the-window.mp3')}}></span></td>
                                    </tr>
                                    <tr className="">
                                        <td>CLOSE THE WINDOW.</td>
                                        <td>CIERREN LA VENTANA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/close-the-window.mp3')}}></span></td>
                                    </tr>
                                    <tr className="">
                                        <td>OPEN/CLOSE THE DOOR.</td>
                                        <td>ABRAN /CIERREN LA PUERTA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/open-the-door.mp3')}}></span></td>
                                    </tr>
                                    <tr className="">
                                        <td>TAKE NOTES.</td>
                                        <td>TOMAR NOTAS.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/take-notes.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">8</span></div>
                </div>

                {/* hoja 9*/}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/expressions.png'className="Esquina" alt="Expressions"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>ACTIONS IN CLASSROOM</h2>
                            <h3>ACCIONES EN EL AULA</h3>
                        </div>
                        <div className="bloque">
                            <table className="table table-striped">
                                <tbody>
                                    <tr className="">
                                        <td>READ THE TEXT.</td>
                                        <td>LEA EL TEXTO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/read-the-text.mp3')}}></span></td>
                                    </tr>
                                    <tr className="">
                                        <td>GO TO PAGE 87.</td>
                                        <td>IR A LA PAGINA 87.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/go-to-page-87.mp3')}}></span></td>
                                    </tr>
                                    <tr className="">
                                        <td>COPY.</td>
                                        <td>COPIAR.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/copy.mp3')}}></span></td>
                                    </tr>
                                    <tr className="">
                                        <td>TURN OFF YOUR CELL PHONE.</td>
                                        <td>APAGUE SU CELULAR</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/turn-off-you-cellphone.mp3')}}></span></td>
                                    </tr>
                                    <tr className="">
                                        <td>DON??T WRITE.</td>
                                        <td>NO ESCRIBAN.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/dont-write.mp3')}}></span></td>
                                    </tr>
                                    <tr className="">
                                        <td>LISTEN AND REPEAT.</td>
                                        <td>ESCUCHEN Y REPITAN.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/listen-and-repeat.mp3')}}></span></td>
                                    </tr>
                                    <tr className="">
                                        <td>DON??T SPEAK SPANISH!.</td>
                                        <td>NO HABLE ESPA??OL.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/dont-speak-spanish.mp3')}}></span></td>
                                    </tr>
                                    <tr className="">
                                        <td>BE QUIET!</td>
                                        <td>SILENCIO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/be-quiet.mp3')}}></span></td>
                                    </tr>
                                    <tr className="">
                                        <td>PAY ATTENTION.</td>
                                        <td>PONGA CUIDADO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/pay-attention.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>    
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">9</span></div>
                </div>

                {/* hoja 10*/}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/expressions.png'className="Esquina" alt="Expressions"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>CLASSROOM VOCABULARY</h2>
                            <h3>VOCABULARIO EN EL AULA</h3>
                        </div>
                        <div className="bloque">
                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <td>CUT.</td>
                                        <td>CORTAR.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/cut.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>PASTE.</td>
                                        <td>PEGAR.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Paste.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>GLUE.</td>
                                        <td>PEGAR.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Glue.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>ERASE.</td>
                                        <td>BORRAR.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Erase.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>WRITE.</td>
                                        <td>ESCRIBIR.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Write.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>READ.</td>
                                        <td>LEER.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Read.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>MAP.</td>
                                        <td>MAPA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Map.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>SCISSORS.</td>
                                        <td>TIJERAS.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Scissors.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>COMPUTER.</td>
                                        <td>COMPUTADOR.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/in.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>CRAYON.</td>
                                        <td>CRAYOLA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Crayon.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>   
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">10</span></div>
                </div>

                {/* hoja 11*/}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/expressions.png'className="Esquina" alt="Expressions"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>CLASSROOM VOCABULARY</h2>
                            <h3>VOCABULARIO EN EL AULA</h3>
                        </div>
                        <div className="bloque">
                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <td>PENCIL.</td>
                                        <td>LAPIZ.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Pencil.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>PEN.</td>
                                        <td>LAPICERO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Pen.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>COLOR PENCILS.</td>
                                        <td>LAPICES DE COLORES.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/color-pencils.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>COMPASS.</td>
                                        <td>COMP??S.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Compass.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>MARKER.</td>
                                        <td>MARCADOR.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Marker.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>ERASER.</td>
                                        <td>BORRADOR.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Eraser.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>CARDBOARD PAPER.</td>
                                        <td>CARTULINA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/in.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>RULER.</td>
                                        <td>REGLA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Ruler.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>BOOK.</td>
                                        <td>LIBRO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Book.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>NOTEBOOK.</td>
                                        <td>CUADERNO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Notebook.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>   
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">11</span></div>
                </div>

                {/* hoja 12*/}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/expressions.png'className="Esquina" alt="Expressions"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>CLASSROOM VOCABULARY</h2>
                            <h3>VOCABULARIO EN EL AULA</h3>
                        </div>
                        <div className="bloque">
                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <td>COTTON.</td>
                                        <td>ALGODON.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Cotton.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>RIP.</td>
                                        <td>RASGAR.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Rip.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>SHRINK.</td>
                                        <td>ENCOGER.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Shrink.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>CRUMPLE.</td>
                                        <td>ARRUGAR.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Crumple.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>ERASE.</td>
                                        <td>BORRAR.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Erase.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>MAKE A CIRCLE.</td>
                                        <td>HAGA UN CIRCULO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Make-a-circle.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>NO MORE.</td>
                                        <td>NO M??S.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/No-more.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>ENOUGH.</td>
                                        <td>SUFICIENTE.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Enough.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>PAINT.</td>
                                        <td>PINTAR.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Paint.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>BOX.</td>
                                        <td>CAJA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Box.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>   
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">12</span></div>
                </div>

                {/* hoja 13*/}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/expressions.png'className="Esquina" alt="Expressions"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>CLASSROOM VOCABULARY</h2>
                            <h3>VOCABULARIO EN EL AULA</h3>
                        </div>
                        <div className="bloque">
                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <td>BAG.</td>
                                        <td>BOLSA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Bag.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>BOOK (BAG)</td>
                                        <td>MALET??N DE CUADERNOS.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Book-II.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>FOLDER.</td>
                                        <td>CARPETA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Folder.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>BULLETIN BOARD.</td>
                                        <td>CARTELERA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Bulletin-Board.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>  
                        <video className ="videoPm" src="./media/video2.mp4" controls></video> 
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">13</span></div>
                </div>

                 {/* hoja 14*/}

                 <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/colors.png'className="Esquina" alt="Colors"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>COLORS</h2>
                            <h3>COLORES</h3>
                        </div>
                        <div className="bloque">
                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <td>RED.</td>
                                        <td>ROJO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/RED.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>BLUE.</td>
                                        <td>AZUL.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/BLUE.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>YELLOW.</td>
                                        <td>AMARILLO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/YELLOW.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>GREEN.</td>
                                        <td>VERDE.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/GREEN.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>WHITE.</td>
                                        <td>BLANCO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/WHITE.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>BLACK.</td>
                                        <td>NEGRO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/BLACK.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>GRAY.</td>
                                        <td>GRIS.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/GRAY.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>PURPLE.</td>
                                        <td>PURPURA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/PURPLE.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>PINK.</td>
                                        <td>ROSADO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/PINK.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>ORANGE.</td>
                                        <td>NARANJA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/ORANGE.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>   
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">14</span></div>
                </div>

                {/* hoja 15*/}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/colors.png'className="Esquina" alt="Colors"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>COLORS</h2>
                            <h3>COLORES</h3>
                        </div>
                        <div className="bloque">
                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <td>BROWN.</td>
                                        <td>CAF??.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/BROWN.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>BEIGE.</td>
                                        <td>CREMA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/BEIGE.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>SILVER.</td>
                                        <td>PLATEADO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/SILVER.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>GOLD.</td>
                                        <td>DORADO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/GOLD.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <img className="rellenoPc" src="img/courses/colorspen.png" alt="colorspen"></img>   
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">15</span></div>
                </div>

                {/* hoja 16*/}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/shapes.png'className="Esquina" alt="Shapes"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>SHAPES</h2>
                            <h3>FORMAS</h3>
                        </div>
                        <div className="bloque">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>SQUARE.</td>
                                        <td>Cuadrado.</td>
                                        <td><img src='./img/courses/square.png'className="SHAPES" alt="SQUARE"/></td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/SQUARE.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>CIRCLE.</td>
                                        <td>circulo.</td>
                                        <td><img src='./img/courses/circle.png'className="SHAPES" alt="CIRCLE"/></td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/CIRCLE.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>HEART.</td>
                                        <td>Corazon.</td>
                                        <td><img src='./img/courses/heart.png'className="SHAPES" alt="HEART"/></td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/HEART.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>TRIANGLE.</td>
                                        <td>tri??ngulo.</td>
                                        <td><img src='./img/courses/triangle.png'className="SHAPES" alt="TRIANGLE"/></td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/TRIANGLE.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>HEXAGON.</td>
                                        <td>hex??gono.</td>
                                        <td><img src='./img/courses/hexagon.png'className="SHAPES" alt="HEXAGON"/></td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/HEXAGON.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>RECTANGLE.</td>
                                        <td>Rect??ngulo.</td>
                                        <td><img src='./img/courses/rectangle.png'className="SHAPES" alt="RECTANGLE"/></td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/RECTANGLE.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>SEMICIRCLE.</td>
                                        <td>Semicirculo.</td>
                                        <td><img src='./img/courses/semicircle.png'className="SHAPES" alt="SEMICIRCLE"/></td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/SEMICIRCLE.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>   
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">16</span></div>
                </div>

                {/* hoja 17*/}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/shapes.png'className="Esquina" alt="Shapes"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>SHAPES</h2>
                            <h3>FORMAS</h3>
                        </div>
                        <div className="bloque">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>STAR.</td>
                                        <td>Estrella.</td>
                                        <td><img src='./img/courses/star.png'className="SHAPES" alt="STAR"/></td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/STAR.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>PENTAGON.</td>
                                        <td>Pent??gono.</td>
                                        <td><img src='./img/courses/pentagon.png'className="SHAPES" alt="PENTAGON"/></td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/PENTAGON.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>RHOMBUS.</td>
                                        <td>Rombo.</td>
                                        <td><img src='./img/courses/rhombus.png'className="SHAPES" alt="RHOMBUS"/></td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/RHOMBUS.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>CUBE.</td>
                                        <td>Cubo.</td>
                                        <td><img src='./img/courses/cube.png'className="SHAPES" alt="CUBE"/></td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/CUBE.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>OVAL.</td>
                                        <td>Ovalo.</td>
                                        <td><img src='./img/courses/oval.png'className="SHAPES" alt="OVAL"/></td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/OVAL.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>DIAMOND.</td>
                                        <td>Diamante.</td>
                                        <td><img src='./img/courses/diamond.png'className="SHAPES" alt="DIAMOND"/></td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/DIAMOND.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>CONE.</td>
                                        <td>Cono.</td>
                                        <td><img src='./img/courses/cone.png'className="SHAPES" alt="CONE"/></td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/CONE.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>   
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">17</span></div>
                </div>

                {/* hoja 18 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/fruits.png'className="Esquina" alt="Fruits"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>FRUITS</h2>
                            <h3>FRUTAS</h3>
                        </div>
                        <div className="bloque">
                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <td>APPLE.</td>
                                        <td>MANZANA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/APPLE.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>COCONUT.</td>
                                        <td>COCO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/COCONUT.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>PEACH.</td>
                                        <td>DURAZNO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/PEACH.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>PEAR.</td>
                                        <td>PERA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/PEAR.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>CHERRY.</td>
                                        <td>CEREZA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/CHERRY.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>BANANA.</td>
                                        <td>BANANO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/BANANA.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>PLUM.</td>
                                        <td>CIRUELA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/PLUM.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>APRICOT.</td>
                                        <td>ALBARICOQUE.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/APRICOT.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>KIWI.</td>
                                        <td>KIWI.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/KIWI.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>MANGO.</td>
                                        <td>MANGO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/MANGO.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>   
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">18</span></div>
                </div>

                {/* hoja 19 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/fruits.png'className="Esquina" alt="Fruits"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>FRUITS</h2>
                            <h3>FRUTAS</h3>
                        </div>
                        <div className="bloque">
                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <td>PAPAYA.</td>
                                        <td>PAPAYA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/PAPAYA.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>FIG.</td>
                                        <td>BREVA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/FIG.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>AVOCADO.</td>
                                        <td>AGUACATE.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/AVOCADO.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>LEMON.</td>
                                        <td>LIMON.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/LEMON.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>GRAPES.</td>
                                        <td>UVAS.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/GRAPES.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>RAISINS.</td>
                                        <td>UVAS PASAS.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/RAISINS.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>STRAWBERRY.</td>
                                        <td>FRESA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/STRAWBERRY.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>BLACKBERRY.</td>
                                        <td>MORA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/BLACKBERRY.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>ORANGE.</td>
                                        <td>NARANJA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/ORANGE.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>MELON.</td>
                                        <td>MELON.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/MELON.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>   
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">19</span></div>
                </div>

                {/* hoja 20 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/fruits.png'className="Esquina" alt="Fruits"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>FRUITS</h2>
                            <h3>FRUTAS</h3>
                        </div>
                        <div className="bloque">
                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <td>TANGERINE.</td>
                                        <td>MANDARINA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/TANGERINE.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>PINEAPPLE.</td>
                                        <td>PI??A.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/PINEAPPLE.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>WATERMELON.</td>
                                        <td>SANDIA/PATILLA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/WATERMELON.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <img className="rellenoPc" src="img/courses/fruts.jpg" alt="fruts"></img>   
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">20</span></div>
                </div>

                {/* hoja 21 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/alphabet.png'className="Esquina" alt="Alphabet"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>ALPHABET</h2>
                            <h3>ALFABETO</h3>
                        </div>
                        <div className="bloque">
                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <td>A (ei)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/a.mp3')}}></span></td>
                                        <td>B (bi)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/b.mp3')}}></span></td>
                                        <td>C (ci)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/c.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>D (di)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/d.mp3')}}></span></td>
                                        <td>E (ii)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/e.mp3')}}></span></td>
                                        <td>F (ef)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/f.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>G (yi)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/g.mp3')}}></span></td>
                                        <td>H (eich)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/h.mp3')}}></span></td>
                                        <td>I (ai)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/i.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>J (yei)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/j.mp3')}}></span></td>
                                        <td>K (kei)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/k.mp3')}}></span></td>
                                        <td>L (el)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/l.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>M (em)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/m.mp3')}}></span></td>
                                        <td>N (n)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/n.mp3')}}></span></td>
                                        <td>O (ou)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/o.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>P (pi)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/p.mp3')}}></span></td>
                                        <td>Q (kiu)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/q.mp3')}}></span></td>
                                        <td>R (ar)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/r.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>S (es)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/s.mp3')}}></span></td>
                                        <td>T (ti)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/t.mp3')}}></span></td>
                                        <td>U (iu)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/u.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>V (vi)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/v.mp3')}}></span></td>
                                        <td>W (dabliu)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/w.mp3')}}></span></td>
                                        <td>X (ex)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/x.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Y (uai)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/y.mp3')}}></span></td>
                                        <td>Z (zii)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/z.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">21</span></div>
                </div>

                {/* hoja 22 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/transportation.png'className="Esquina" alt="Transportation"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>TRANSPORTATION</h2>
                            <h3>TRANSPORTE</h3>
                        </div>
                        <div className="bloque">
                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <td>CAR.</td>
                                        <td>CARRO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/CAR.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>TRAIN.</td>
                                        <td>TREN.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/TRAIN.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>MOTORCYCLE.</td>
                                        <td>MOTOCICLETA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/MOTORCYCLE.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>BIKE.</td>
                                        <td>BICICLETA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/BIKE.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>BOAT.</td>
                                        <td>BOTE.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/BOAT.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>SHIP.</td>
                                        <td>BARCO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/SHIP.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>BUS.</td>
                                        <td>BUS.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/BUS.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="titulos">
                            <h2>FARM ANIMALS</h2>
                            <h3>ANIMALES DE FINCA</h3>
                        </div>
                        <div className="bloque">
                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <td>ROOSTER.</td>
                                        <td>GALLO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/ROOSTER.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>CHICKEN.</td>
                                        <td>POLLO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/CHICKEN.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>    
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">22</span></div>
                </div>

                {/* hoja 23 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/farm-animals.png'className="Esquina" alt="Transportation"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>FARM ANIMALS</h2>
                            <h3>ANIMALES DE FINCA</h3>
                        </div>
                        <div className="bloque">
                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <td>HEN.</td>
                                        <td>GALLINA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/HEN.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>CHICK.</td>
                                        <td>POLLITO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/CHICK.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>TURKEY.</td>
                                        <td>PAVO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/TURKEY.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>GOAT.</td>
                                        <td>CHIVO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/GOAT.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>SHEEP.</td>
                                        <td>OVEJA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/SHEEP.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>LAMB.</td>
                                        <td>CORDERO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/LAMB.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>HORSE.</td>
                                        <td>CABALLO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/HORSE.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>PONY.</td>
                                        <td>CABALLITO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/PONY.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>PIG.</td>
                                        <td>CERDO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/PIG.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>PIGLET.</td>
                                        <td>LECHON.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/PIGLET.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>    
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">23</span></div>
                </div>

                {/* hoja 24 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/farm-animals.png'className="Esquina" alt="Transportation"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>FARM ANIMALS</h2>
                            <h3>ANIMALES DE FINCA</h3>
                        </div>
                        <div className="bloque">
                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <td>COW.</td>
                                        <td>VACA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/COW.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>BULL.</td>
                                        <td>TORO).</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/BULL.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>CALF.</td>
                                        <td>TERNERO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/CALF.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>HORSE.</td>
                                        <td>CABALLO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/HORSE.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>DONKEY.</td>
                                        <td>BURRO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/DONKEY.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>RABBIT.</td>
                                        <td>CONEJO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/RABBIT.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <img className="rellenoPc wild" src="./img/courses/farmAnimals.jpg" alt="farmAnimals"></img>
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">24</span></div>
                </div>

                {/* hoja 25 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/wild-animal.png'className="Esquina" alt="Wild Animals"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>WILD ANIMAL</h2>
                            <h3>ANIMALES SALVAJES</h3>
                        </div>
                        <div className="bloque">
                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <td>TIGER.</td>
                                        <td>TIGRE.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/TIGER.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>LION.</td>
                                        <td>LEON.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/LION.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>LEOPARD.</td>
                                        <td>LEOPARDO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/LEOPARD.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>JAGUAR.</td>
                                        <td>JAGUAR.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/JAGUAR.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>GIRAFFE.</td>
                                        <td>JIRAFA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/GIRAFFE.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>BEAR.</td>
                                        <td>OSO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/BEAR.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>WOLF.</td>
                                        <td>LOBO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/WOLF.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>FOX.</td>
                                        <td>ZORRO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/FOX.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>ELEPHANT.</td>
                                        <td>ELEFANTE.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/ELEPHANT.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>HIPPOPOTAMUS.</td>
                                        <td>HIPOPOTAMO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/HIPPOPOTAMUS.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>    
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">25</span></div>
                </div>

                {/* hoja 26 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/wild-animal.png'className="Esquina" alt="Wild Animals"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>WILD ANIMAL</h2>
                            <h3>ANIMALES SALVAJES</h3>
                        </div>
                        <div className="bloque">
                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <td>COCODRILE.</td>
                                        <td>COCODRILO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/COCODRILE.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>HYENA.</td>
                                        <td>HIENA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/HYENA.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>SNAKE.</td>
                                        <td>SERPIENTE.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/SNAKE.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>ALLIGATOR.</td>
                                        <td>CAIMAN.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/ALLIGATOR.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>MONKEY</td>
                                        <td>MONO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/MONKEY.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>EAGLE.</td>
                                        <td>AGUILA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/EAGLE.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <img className="rellenoPc wild" src="./img/courses/wil-animals.jpg" alt="wild-animals"></img>
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">26</span></div>
                </div>

                {/* hoja 27 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/places-city.png'className="Esquina" alt="Wild Animals"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>PLACES IN THE CITY</h2>
                            <h3>SITIOS EN LA CIUDAD</h3>
                        </div>
                        <div className="bloque">
                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <td>CITY HALL.</td>
                                        <td>ALCALDIA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/CITY HALL.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>POLICE STATION.</td>
                                        <td>ESTACION DE POLICIA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/POLICE.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>FIRE STATION..</td>
                                        <td>ESTACION DE BOMBEROS.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/FIRE STATION.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>CITY HALL.</td>
                                        <td>ALCALDIA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/CITY HALL.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>POLICE STATION.</td>
                                        <td>ESTACION DE POLICIA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/POLICE.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>FIRE STATION..</td>
                                        <td>ESTACION DE BOMBEROS.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/FIRE STATION.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>LIBRARY.</td>
                                        <td>BIBLIOTECA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/LIBRARY.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>COURT HOUSE.</td>
                                        <td>JUZGADOS.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/COURT HOUSE.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>SUPERMARKET.</td>
                                        <td>SUPERMERCADOS.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/SUPERMARKET.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>PARK.</td>
                                        <td>PARQUE.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/PARK.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>    
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">27</span></div>
                </div>

                {/* hoja 28 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/places-city.png'className="Esquina" alt="Expressions"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>PLACES IN THE CITY</h2>
                            <h3>SITIOS EN LA CIUDAD</h3>
                        </div>
                        <div className="bloque">
                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <td>PARKING LOT.</td>
                                        <td>PARQUEADERO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/PARKING LOT.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>MUSEUM.</td>
                                        <td>MUSEO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/MUSEUM.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>STADIUM.</td>
                                        <td>ESTADIO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/STADIUM.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>SHOPPING MALL.</td>
                                        <td>CENTRO COMERCIAL.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/SHOPPING MALL.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>TRAIN STATION.</td>
                                        <td>ESTACION DE FERROCARRIL.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/TRAIN STATION.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>BUS STATION.</td>
                                        <td>TERMINAL DE BUS.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/BUS STATION.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>DOWN TOWN.</td>
                                        <td>CENTRO DE CIUDAD.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/DOWN TOWN.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>POST OFFICE.</td>
                                        <td>OFICINA DE CORREO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/POST OFFICE.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>THEATER.</td>
                                        <td>TEATRO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/THEATER.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>CINEMA.</td>
                                        <td>SALA DE CINE.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/CINEMA.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>   
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">28</span></div>
                </div>

                {/* hoja 29 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/places-school.png'className="Esquina" alt="Expressions"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>PLACES IN THE CITY</h2>
                            <h3>SITIOS EN LA CIUDAD</h3>
                        </div>
                        <div className="bloque">
                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <td>RESTAURANT.</td>
                                        <td>RESTAURANTE.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/RESTAURANT.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>ZOO.</td>
                                        <td>ZOOLOGICO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/ZOO.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="titulos">
                            <h2>PLACES IN THE SCHOOL</h2>
                            <h3>SITIOS EN EL COLEGIO</h3>
                        </div>
                        <div className="bloque">
                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <td>PRINCIPAL??S OFFICE.</td>
                                        <td>OFICINA DEL RECTOR.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/PRINCIPAL S OFFICE.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>CAFETERIA.</td>
                                        <td>CAFETERIA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/CAFETERIA.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>CLASSROOMS.</td>
                                        <td>SALONES DE CLASE.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/CLASSROOMS.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>NURSE??S OFFICE.</td>
                                        <td>ENFERMERIA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/NURSE S OFFICE.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>LOCKERS.</td>
                                        <td>CASILLEROS.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/LOCKERS.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>FRONT DESK.</td>
                                        <td>RECEPCION.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/FRONT DESK.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>   
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">29</span></div>
                </div>

                {/* hoja 30 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/places-school.png'className="Esquina" alt="Expressions"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>PLACES IN THE SCHOOL</h2>
                            <h3>SITIOS EN EL COLEGIO</h3>
                        </div>
                        <div className="bloque">
                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <td>PLAYGROUND.</td>
                                        <td>PATIO DE RECREO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/PLAYGROUND.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>AUDITORIUM.</td>
                                        <td>AUDITORIO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/AUDITORIUM.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>SPORTS FIELD.</td>
                                        <td>CAMPO DE DEPORTES.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/SPORTS FIELD.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>TEACHERS??? LOUNGE.</td>
                                        <td>SALA DE PROFESORES.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/TEACHERS LOUNGE.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>BATHROOMS.</td>
                                        <td>BA??OS.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/BATHROOMS.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>LIBRARY.</td>
                                        <td>BIBLIOTECA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/LIBRARY.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>LAB.</td>
                                        <td>LABORATORIO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/LAB.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>SWIMMING POOL.</td>
                                        <td>PISCINA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/SWIMMING POOL.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>OFFICE.</td>
                                        <td>OFICINA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/OFFICE.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>SOCCER FIELD.</td>
                                        <td>CAMPO DE FUTBOL.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/SOCCER FIELD.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>   
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">30</span></div>
                </div>

                {/* hoja 31 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/numbers.png'className="Esquina" alt="Expressions"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>PLACES IN THE SCHOOL</h2>
                            <h3>SITIOS EN EL COLEGIO</h3>
                        </div>
                        <div className="bloque">
                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <td>BASKETBALL COURT.</td>
                                        <td>CANCHA DE BASQUET.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/BASKETBALL COURT.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="titulos">
                            <h2>NUMBERS</h2>
                            <h3>NUMEROS</h3>
                        </div>
                        <div className="bloque">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th colSpan="3">Cardinal numbers</th>
          	                            <th colSpan="3">Ordinal numbers</th>  	
                                    </tr>      
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>0</td>
                                        <td>oh, zero, nil, love, nought *</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/zero.mp3')}}></span></td>
                                        <td>--</td>
                                        <td>--</td>
                                        <td><span className="" >--</span></td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>One</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/One.mp3')}}></span></td>
                                        <td>1st</td>
                                        <td>First</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/1st.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Two</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Two.mp3')}}></span></td>
                                        <td>2nd</td>
                                        <td>Second</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/2nd.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Three</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Three.mp3')}}></span></td>
                                        <td>3rd</td>
                                        <td>Third</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/3rd.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Four</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Four.mp3')}}></span></td>
                                        <td>4th</td>
                                        <td>Fourth</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/4th.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Five</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Five.mp3')}}></span></td>
                                        <td>5th</td>
                                        <td>Fifth</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/5th.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Six</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Six.mp3')}}></span></td>
                                        <td>6th</td>
                                        <td>Sixth</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/6th.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">31</span></div>
                </div>

                {/* hoja 32 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/numbers.png'className="Esquina" alt="Expressions"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>NUMBERS</h2>
                            <h3>NUMEROS</h3>
                        </div>
                        <div className="bloque">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th colSpan="3">Cardinal numbers</th>
          	                            <th colSpan="3">Ordinal numbers</th>  	
                                    </tr>      
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>7</td>
                                        <td>Seven</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Seven.mp3')}}></span></td>
                                        <td>7th</td>
                                        <td>Seventh</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/7th.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>Eight</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Eight.mp3')}}></span></td>
                                        <td>8th</td>
                                        <td>Eighth</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/8th.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>Nine</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Nine.mp3')}}></span></td>
                                        <td>9th</td>
                                        <td>Ninth</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/9th.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td>Ten</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Ten.mp3')}}></span></td>
                                        <td>10th</td>
                                        <td>Tenth</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/10th.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>11</td>
                                        <td>Eleven</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Eleven.mp3')}}></span></td>
                                        <td>11th</td>
                                        <td>Eleventh</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/11th.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>12</td>
                                        <td>Twelve</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Twelve.mp3')}}></span></td>
                                        <td>12th</td>
                                        <td>Twelfth</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/12th.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>13</td>
                                        <td>Thirteen</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Thirteen.mp3')}}></span></td>
                                        <td>13th</td>
                                        <td>Thirteenth</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/13th.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>14</td>
                                        <td>Fourteen</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Fourteen.mp3')}}></span></td>
                                        <td>14th</td>
                                        <td>Fourteenth</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/14th.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>15</td>
                                        <td>Fifteen</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Fifteen.mp3')}}></span></td>
                                        <td>15th</td>
                                        <td>Fifteenth</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/15th.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>   
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">32</span></div>
                </div>

                {/* hoja 33 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/numbers.png'className="Esquina" alt="Expressions"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>NUMBERS</h2>
                            <h3>NUMEROS</h3>
                        </div>
                        <div className="bloque">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th colSpan="3">Cardinal numbers</th>
          	                            <th colSpan="3">Ordinal numbers</th>  	
                                    </tr>      
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>16</td>
                                        <td>Sixteen</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Sixteen.mp3')}}></span></td>
                                        <td>16th</td>
                                        <td>Sixteenth</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/16th.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>17</td>
                                        <td>Seventeen</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Seventeen.mp3')}}></span></td>
                                        <td>17th</td>
                                        <td>Seventeenth</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/17th.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>18</td>
                                        <td>Eigthteen</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/eighteen.mp3')}}></span></td>
                                        <td>18th</td>
                                        <td>Eighteenth</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/18th.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>19</td>
                                        <td>Nineteen</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Nineteen.mp3')}}></span></td>
                                        <td>19th</td>
                                        <td>Nineteenth</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/19th.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>20</td>
                                        <td>Twenty</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Twenty.mp3')}}></span></td>
                                        <td>20th</td>
                                        <td>Twentieh</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/20th.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>21</td>
                                        <td>Twenty-one</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Twenty-one.mp3')}}></span></td>
                                        <td>21st</td>
                                        <td>Twenty-first</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/21st.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>30</td>
                                        <td>Thirty</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Thirty.mp3')}}></span></td>
                                        <td>30th</td>
                                        <td>Thirtieth</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/30th.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>40</td>
                                        <td>Forty</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Forty.mp3')}}></span></td>
                                        <td>--</td>
                                        <td>--</td>
                                        <td><span className="" >--</span></td>
                                    </tr>
                                    <tr>
                                        <td>50</td>
                                        <td>Fifty</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Fifty.mp3')}}></span></td>
                                        <td>--</td>
                                        <td>--</td>
                                        <td><span className="" >--</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>   
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">33</span></div>
                </div>

                {/* hoja 34 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/numbers.png'className="Esquina" alt="Expressions"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>NUMBERS</h2>
                            <h3>NUMEROS</h3>
                        </div>
                        <div className="bloque">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th colSpan="3">Cardinal numbers</th>
          	                            <th colSpan="3">Ordinal numbers</th>  	
                                    </tr>      
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>60</td>
                                        <td>Sixty</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Sixty.mp3')}}></span></td>
                                        <td>--</td>
                                        <td>--</td>
                                        <td><span className="" >--</span></td>
                                    </tr>
                                    <tr>
                                        <td>70</td>
                                        <td>Seventy</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Seventy.mp3')}}></span></td>
                                        <td>--</td>
                                        <td>--</td>
                                        <td><span className="" >--</span></td>
                                    </tr>
                                    <tr>
                                        <td>80</td>
                                        <td>Eighty</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Eighty.mp3')}}></span></td>
                                        <td>--</td>
                                        <td>--</td>
                                        <td><span className="" >--</span></td>
                                    </tr>
                                    <tr>
                                        <td>90</td>
                                        <td>Ninety</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Ninety.mp3')}}></span></td>
                                        <td>--</td>
                                        <td>--</td>
                                        <td><span className="" >--</span></td>
                                    </tr>
                                    <tr>
                                        <td>100</td>
                                        <td>a/one hundred</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/one hundred.mp3')}}></span></td>
                                        <td>--</td>
                                        <td>--</td>
                                        <td><span className="" >--</span></td>
                                    </tr>
                                    <tr>
                                        <td>1,000</td>
                                        <td>a/one thousand</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/one thousand.mp3')}}></span></td>
                                        <td>--</td>
                                        <td>--</td>
                                        <td><span className="" >--</span></td>
                                    </tr>
                                    <tr>
                                        <td>10,000</td>
                                        <td>ten thousand</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/ten thousand.mp3')}}></span></td>
                                        <td>--</td>
                                        <td>--</td>
                                        <td><span className="" >--</span></td>
                                    </tr>
                                    <tr>
                                        <td>100,000</td>
                                        <td>a/one hundred thousand</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/hundred thousand.mp3')}}></span></td>
                                        <td>--</td>
                                        <td>--</td>
                                        <td><span className="" >--</span></td>
                                    </tr>
                                    <tr>
                                        <td>1,000,000</td>
                                        <td>a/one million</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/one million.mp3')}}></span></td>
                                        <td>--</td>
                                        <td>--</td>
                                        <td><span className="" >--</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>   
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">34</span></div>
                </div>

                {/* hoja 35 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/adjetives.png'className="Esquina" alt="Expressions"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>NUMBERS</h2>
                            <h3>NUMEROS</h3>
                        </div>
                        <div className="bloque">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th colSpan="3">Cardinal numbers</th>
          	                            <th colSpan="3">Ordinal numbers</th>  	
                                    </tr>      
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1,000,000,000</td>
                                        <td>a/one billion</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/one billion.mp3')}}></span></td>
                                        <td>--</td>
                                        <td>--</td>
                                        <td><span className="" >--</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="titulos">
                            <h2>ADJETIVES</h2>
                            <h3>adjetivos</h3>
                        </div>
                        <div className="bloque">
                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <td>Tall</td>
                                        <td>Alto</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Tall.mp3')}}></span></td>
                                        <td>Pretty</td>
                                        <td>-Bonita-</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Pretty.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Short</td>
                                        <td>Bajo</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Short.mp3')}}></span></td>
                                        <td>Smart</td>
                                        <td>Inteligente</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Smart.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Big</td>
                                        <td>Grande</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Big.mp3')}}></span></td>
                                        <td>Intelligent</td>
                                        <td>Inteligente</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Intelligent.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Small</td>
                                        <td>Peque??o</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Small.mp3')}}></span></td>
                                        <td>Expensive</td>
                                        <td>Costoso</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Expensive.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Heavy</td>
                                        <td>Pesado</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Heavy.mp3')}}></span></td>
                                        <td>Cheap</td>
                                        <td>Barato</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Cheap.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Thing</td>
                                        <td>Liviano</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Thing.mp3')}}></span></td>
                                        <td>Large</td>
                                        <td>Grande</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Large.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Handsome</td>
                                        <td>Apuesto</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Handsome.mp3')}}></span></td>
                                        <td>Long</td>
                                        <td>Largo</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Long.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>   
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">35</span></div>
                </div>

                {/* hoja 36 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/adjetives.png'className="Esquina" alt="Expressions"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>ADJETIVES</h2>
                            <h3>adjetivos</h3>
                        </div>
                        <div className="bloque">
                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <td>ugly</td>
                                        <td>feo</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/ugly.mp3')}}></span></td>
                                        <td>Tinny</td>
                                        <td>Peque??o</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Tinny.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>strong</td>
                                        <td>Fuerte</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/strong.mp3')}}></span></td>
                                        <td>Wide</td>
                                        <td>Ancho</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Wide.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>weak</td>
                                        <td>Devil</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/weak.mp3')}}></span></td>
                                        <td>narrow</td>
                                        <td>Angosto</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/narrow.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Fast</td>
                                        <td>R??pido</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Fast.mp3')}}></span></td>
                                        <td>Hard</td>
                                        <td>Duro</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Hard.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>slow</td>
                                        <td>Lento</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/slow.mp3')}}></span></td>
                                        <td>soft</td>
                                        <td>Blando</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/soft.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Clean</td>
                                        <td>Limpio</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Clean.mp3')}}></span></td>
                                        <td>Happy</td>
                                        <td>Feliz</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Happy.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Dirty</td>
                                        <td>Sucio</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Clean.mp3')}}></span></td>
                                        <td>sad</td>
                                        <td>Triste</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Happy.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Worry</td>
                                        <td>Preocupado</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Worry.mp3')}}></span></td>
                                        <td>Nice</td>
                                        <td>Agradable</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Nice.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>calm</td>
                                        <td>Calmado</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/calm.mp3')}}></span></td>
                                        <td>mean</td>
                                        <td>Odioso</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/mean.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>   
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">36</span></div>
                </div>

                {/* hoja 37 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/time.png'className="Esquina" alt="Expressions"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>TIME</h2>
                            <h3>Hora</h3>
                        </div>
                        <div className="bloque">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td><img src='./img/courses/time1.png'className="imgtimes" alt="SQUARE"/></td>
                                        <td><img src='./img/courses/time2.png'className="imgtimes" alt="SQUARE"/></td>
                                        <td><img src='./img/courses/time3.png'className="imgtimes" alt="SQUARE"/></td>
                                    </tr>
                                    <tr>
                                        <td><p>What's the time?</p><p>??Que hora es?</p><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/time1.mp3')}}></span></td>
                                        <td><p>It's ten past ten</p><p>Son las diez y diez</p><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/time2.mp3')}}></span></td>
                                        <td><p>It's quarter past nine</p><p>Son las nueve y cuarto</p><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/time3.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td><img src='./img/courses/time4.png'className="imgtimes" alt="SQUARE"/></td>
                                        <td><img src='./img/courses/time5.png'className="imgtimes" alt="SQUARE"/></td>
                                        <td><img src='./img/courses/time6.png'className="imgtimes" alt="SQUARE"/></td>
                                    </tr>
                                    <tr>
                                        <td><p>It's twenty past twelve</p><p>Son las doce y veinte</p><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/time4.mp3')}}></span></td>
                                        <td><p>It's twenty- five past six</p><p>Son las seis y veinticinco</p><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/time5.mp3')}}></span></td>
                                        <td><p>It's half past eight</p><p>Son las ocho y media</p><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/time6.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td><img src='./img/courses/time7.png'className="imgtimes" alt="SQUARE"/></td>
                                        <td><img src='./img/courses/time8.png'className="imgtimes" alt="SQUARE"/></td>
                                        <td><img src='./img/courses/time9.png'className="imgtimes" alt="SQUARE"/></td>
                                    </tr>
                                    <tr>
                                        <td><p>It's twenty-five to six</p><p>25 para las seis</p><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/time7.mp3')}}></span></td>
                                        <td><p>It's five minutes to six</p><p>Son cinco para las seis</p><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/time8.mp3')}}></span></td>
                                        <td><p>It's three o'clock</p><p>Son las tres en punto</p><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/time9.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>   
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">37</span></div>
                </div>

                {/* hoja 38 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/day-week.png'className="Esquina" alt="Expressions"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>DAYS OF THE WEEK</h2>
                            <h3>dias de la semana</h3>
                        </div>
                        <div className="bloque">
                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <td>Monday-Lunes.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/day1.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Tuesday-Martes.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/day2.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Wednesday-Mi??rcoles.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/day3.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Thursday-Jueves.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/day4.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Friday-Viernes.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/day5.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Saturday-S??bado.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/day6.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Sunday-Domingo.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/day7.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>   
                        <div className="titulos">
                            <h2>MONTHS OF THE YEAR</h2>
                            <h3>meses del a??o</h3>
                        </div>
                        <div className="bloque">
                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <td>January-Enero.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/months1.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>February-Febrero.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/months2.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">38</span></div>
                </div>

                {/* hoja 39 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/month-year.png'className="Esquina" alt="Expressions"/>
                    </div>
                    <div className="Contenido">   
                        <div className="titulos">
                            <h2>MONTHS OF THE YEAR</h2>
                            <h3>meses del a??o</h3>
                        </div>
                        <div className="bloque">
                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <td>March-Marzo.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/months3.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>April-Abril.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/months4.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>May-Mayo.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/months5.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>June-Junio.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/months6.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>July-Julio.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/months7.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>August-Agosto.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/months8.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>September-Septiembre.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/months9.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>October-October.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/months10.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>November-Noviembre.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/months11.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>December-Diciembre.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/months12.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">39</span></div>
                </div>

                {/* hoja 40 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/dates.png'className="Esquina" alt="Expressions"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>DATES</h2>
                            <h3>Fechas</h3>
                        </div>
                        <div className="bloque">
                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <td><p className="txt-ali">Normalmente, las fechas se escriben 
                                        en el siguiente orden: mes / d??a / a??o
                                        June, 20th 1997 / 20 de junio de 1997 
                                        March, 3rd 2001 / 3 de marzo de 2001
                                        Podemos omitir las letras de orden (-st, -nd, -rd, -th)
                                        September 2nd, 1999 / 2 de septiembre de 1999
                                        Podemos abreviar los nombres de los meses:
                                        Jan / enero Feb / febrero....
                                        American English
                                        In American English the month is usually put before the day. If you wish, you can put the
                                        definite article before the day. It is common to write a comma before the year.
                                        Example: October (the) 5(th), 2004
                                        You can also write the date by using numbers only. The most common forms are:
                                        Example: 5/10/04 or 5-10-04</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="titulos">
                            <h2>HOLIDAYS</h2>
                            <h3>United States Legal Federal Holidays 2011</h3>
                            <h3>d??as festivos en Estados Unidos</h3>   
                        </div>
                        <div className="bloque">
                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <td>January 1, 2011 (saturday): New Year's Day [Jan. 1 every year]</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/holidays1.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>January 17, 2011 (monday): Martin Luther King Day [3rd monday in Jan]</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/holidays2.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            February 21, 2011 (monday): Presidents Day (observed) [3rd monday in Feb] <strong>Note:</strong> Presidents Day is also Washington's Birthday (observed)
                                        </td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/holidays3.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            May 30, 2011 (monday): Memorial Day (observed) [last monday in May]
                                        </td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/holidays4.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>                    
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">40</span></div>
                </div>

                {/* hoja 41 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/holidays.png'className="Esquina" alt="Expressions"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>HOLIDAYS</h2>
                            <h3>United States Legal Federal Holidays 2011</h3>
                            <h3>d??as festivos en Estados Unidos</h3>   
                        </div>
                        <div className="bloque">
                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <td>
                                            July 4, 2011 (monday): Independence Day [July 4th every year]
                                        </td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/holidays5.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            September 5, 2011 (monday): Labor Day [1st monday in Sept]
                                        </td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/holidays6.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            October 10, 2011 (monday): Columbus Day (observed) [2nd monday in Oct]
                                        </td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/holidays7.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            November 11, 2011 (friday): Veterans' Day [Nov. 11 every year]
                                        </td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/holidays8.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            November 24, 2011 (thursday): Thanksgiving Day [4th thursday in Nov]
                                        </td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/holidays9.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            December 25, 2011 (sunday): Christmas Day [Dec. 25 every year]
                                        </td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/holidays10.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            December 26, 2011 (monday): federal employees extra day off for Christmas
                                        </td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/holidays11.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <img className="rellenoPc display360" src="img/courses/holydays-calendar.jpg" alt="holydays"></img>                    
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">41</span></div>
                </div>

                {/* hoja 42 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/family.png'className="Esquina" alt="Expressions"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>FAMILY</h2>
                            <h3>FAMILIA</h3>
                        </div>
                        <div className="bloque">
                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <td>aunt</td>
                                        <td>t??a</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/fami1.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>boyfriend</td>
                                        <td>novio</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/fami2.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>brother</td>
                                        <td>hermano</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/fami3.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>brother-in-law</td>
                                        <td>cu??ado</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/fami4.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Cousin</td>
                                        <td>primo/a</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/fami5.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>daughter</td>
                                        <td>hija</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/fami6.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>daughter-in-law</td>
                                        <td>nuera</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/fami7.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>father</td>
                                        <td>padre</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/fami8.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>father-in-law</td>
                                        <td>suegro</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/fami9.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>girlfriend</td>
                                        <td>novia</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/fami10.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>   
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">42</span></div>
                </div>

                {/* hoja 43 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/family.png'className="Esquina" alt="Expressions"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>FAMILY</h2>
                            <h3>FAMILIA</h3>
                        </div>
                        <div className="bloque">
                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <td>godfather</td>
                                        <td>padrino</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/fami11.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>godmother</td>
                                        <td>madrina</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/fami12.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>grandchildren</td>
                                        <td>nietos</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/fami13.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>granddaughter</td>
                                        <td>nieta</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/fami14.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>grandfather</td>
                                        <td>Abuelo</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/fami15.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>grandmother</td>
                                        <td>abuela</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/fami16.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>grandparents</td>
                                        <td>abuelos</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/fami17.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>grandson</td>
                                        <td>nieto</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/fami18.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>great-grandfather</td>
                                        <td>bisabuelo</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/fami19.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>   
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">43</span></div>
                </div>

                {/* hoja 44 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/family.png'className="Esquina" alt="Expressions"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>FAMILY</h2>
                            <h3>FAMILIA</h3>
                        </div>
                        <div className="bloque">
                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <td>great-grandmother</td>
                                        <td>bisabuela</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/fami20.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>husband</td>
                                        <td>esposo, marido</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/fami21.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>mother</td>
                                        <td>madre</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/fami22.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>nephew</td>
                                        <td>sobrino</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/fami23.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>niece</td>
                                        <td>sobrina</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/fami24.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>parents</td>
                                        <td>padres</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/fami25.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>sister</td>
                                        <td>hermana</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/fami26.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>son</td>
                                        <td>hijo</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/fami27.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>stepdaughter</td>
                                        <td>hijastra</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/fami28.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>stepmother</td>
                                        <td>madrastra</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/fami29.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>   
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">44</span></div>
                </div>

                {/* hoja 45 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/family.png'className="Esquina" alt="Expressions"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>FAMILY</h2>
                            <h3>FAMILIA</h3>
                        </div>
                        <div className="bloque">
                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <td>stepfather</td>
                                        <td>padrastro</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/fami30.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>stepson</td>
                                        <td>hijastro</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/fami31.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>uncle</td>
                                        <td>t??o</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/fami32.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Wife</td>
                                        <td>esposa, mujer</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/fami33.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>twins</td>
                                        <td>gemelos</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/fami34.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>relative</td>
                                        <td>pariente</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/fami35.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="titulos">
                            <h2>Sickness</h2>
                            <h3>enfermedades</h3>
                        </div>
                        <div className="bloque">
                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <td>Backache</td>
                                        <td>dolor de espalda</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/sick1.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Headache</td>
                                        <td>dolor de cabeza</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/sick2.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Stomachache</td>
                                        <td>dolor de estomago</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/sick3.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">45</span></div>
                </div>

                {/* hoja 46 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/sickness.png'className="Esquina" alt="Expressions"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>Sickness</h2>
                            <h3>enfermedades</h3>
                        </div>
                        <div className="bloque">
                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <td>Earache</td>
                                        <td>dolor de o??do</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/sick4.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Toothache</td>
                                        <td>dolor de muela</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/sick5.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Sore throat</td>
                                        <td>dolor de garganta</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/sick6.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Flu</td>
                                        <td>gripe</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/sick7.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Cold</td>
                                        <td>resfriado</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/sick8.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Fever</td>
                                        <td>fiebre</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/sick9.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Sneeze</td>
                                        <td>Estornudo</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/sick10.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Cough</td>
                                        <td>tos</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/sick11.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Dizzy</td>
                                        <td>mareado</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/sick12.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Runny nose</td>
                                        <td>secresion nasal</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/sick13.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">46</span></div>
                </div>

                {/* hoja 47 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/sickness.png'className="Esquina" alt="Expressions"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>Sickness</h2>
                            <h3>enfermedades</h3>
                        </div>
                        <div className="bloque">
                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <td>Cavity</td>
                                        <td>carie</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/sick14.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Hiccups</td>
                                        <td>hipo</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/sick15.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Sunburn</td>
                                        <td>quemadura de sol</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/sick16.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Vomit/throw up</td>
                                        <td>vomitar</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/sick17.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Bruise</td>
                                        <td>moret??n</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/sick18.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Burp</td>
                                        <td>eructar</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/sick19.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <img className="rellenoPc" src="./img/courses/Sickness.jpg" alt="Sickness"></img>
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">47</span></div>
                </div>

                {/* hoja 48 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/parts-body.png'className="Esquina" alt="Expressions"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>PARTS OF THE BODY</h2>
                            <h3>PARTES DEL CUERPO</h3>
                        </div>
                        <div className="bloque">
                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <td>Head</td>
                                        <td>Cabeza</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/body10.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Shoulder</td>
                                        <td>Hombro</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/body11.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Chest</td>
                                        <td>T??rax</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/body12.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Arm</td>
                                        <td>Brazo</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/body13.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Wrist</td>
                                        <td>Mu??eca</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/body14.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Hip</td>
                                        <td>Cadera</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/body15.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Leg</td>
                                        <td>Pierna</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/body16.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Foot</td>
                                        <td>Pie</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/body17.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Face</td>
                                        <td>Cara</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/body1.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Elbow</td>
                                        <td>Codo</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Elbow.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">48</span></div>
                </div>

                {/* hoja 49 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/parts-body.png'className="Esquina" alt="Expressions"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>PARTS OF THE BODY</h2>
                            <h3>PARTES DEL CUERPO</h3>
                        </div>
                        <div className="bloque">
                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <td>Hand</td>
                                        <td>Mano</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/body5.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Neck</td>
                                        <td>Cuello</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/body2.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Waist</td>
                                        <td>Cintura</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/body4.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Thigh</td>
                                        <td>Muslo</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Thigh.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Knee</td>
                                        <td>Rodilla</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Knee.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Shin</td>
                                        <td>Espinilla</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Shin.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Ankle</td>
                                        <td>Tobillo</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/body9.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <img className="rellenoPc display360" src="./img/courses/body.png" alt="body"></img>
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">49</span></div>
                </div>

                {/* hoja 50 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/vocabulary.png'className="Esquina" alt="Expressions"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>CLOTHES VOCABULARY</h2>
                            <h3>VOCABULARIO DE ROPA</h3>
                        </div>
                        <div className="bloque">
                            <table className="table">
                                <caption>Men's Clothes</caption>
                                <tbody>
                                    <tr>
                                        <td className="text-center"><img src='./img/courses/suit.png'className="imgtimes" alt="imagen Aes"></img></td>
                                        <td className="text-center"><img src='./img/courses/shirt.png'className="imgtimes" alt="imagen Aes"></img></td>
                                        <td className="text-center"><img src='./img/courses/tie.png'className="imgtimes" alt="imagen Aes"></img></td>
                                    </tr>
                                    <tr>
                                        <td className="text-center"><p>suit(s)</p><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/clot1.mp3')}}></span></td>
                                        <td className="text-center"><p>shirt(s)</p><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/clot2.mp3')}}></span></td>
                                        <td className="text-center"><p>tie(s)</p><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/clot3.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="bloque">
                            <table className="table">
                                <caption>Women's Clothes</caption>
                                <tbody>
                                    <tr>
                                        <td className="text-center"><img src='./img/courses/dress.png'className="imgtimes" alt="imagen Aes"></img></td>
                                        <td className="text-center"><img src='./img/courses/blouse.png'className="imgtimes" alt="imagen Aes"></img></td>
                                        <td className="text-center"><img src='./img/courses/skirt.png'className="imgtimes" alt="imagen Aes"></img></td>
                                    </tr>
                                    <tr>
                                        <td className="text-center"><p>dress(es)</p><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/clot4.mp3')}}></span></td>
                                        <td className="text-center"><p>blouse(s)</p><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/clot5.mp3')}}></span></td>
                                        <td className="text-center"><p>skirt(s)</p><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/clot6.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">50</span></div>
                </div>

                {/* hoja 51 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/vocabulary.png'className="Esquina" alt="Expressions"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>CLOTHES VOCABULARY</h2>
                            <h3>VOCABULARIO DE ROPA</h3>
                        </div>
                        <div className="bloque">
                            <table className="table">
                                <caption>Uni-Sex</caption>
                                <tbody>
                                    <tr>
                                        <td className="text-center"><img src='./img/courses/coat.png'className="imgtimes" alt="imagen Aes"></img></td>
                                        <td className="text-center"><img src='./img/courses/jacket.png'className="imgtimes" alt="imagen Aes"></img></td>
                                        <td className="text-center"><img src='./img/courses/t-shirt.png'className="imgtimes" alt="imagen Aes"></img></td>
                                    </tr>
                                    <tr>
                                        <td className="text-center"><p>coat(s)</p><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/clot7.mp3')}}></span></td>
                                        <td className="text-center"><p>jacket(s)</p><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/clot8.mp3')}}></span></td>
                                        <td className="text-center"><p>t-shirt(s)</p><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/clot9.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td className="text-center"><img src='./img/courses/trouser.png'className="imgtimes" alt="imagen Aes"></img></td>
                                        <td className="text-center"><img src='./img/courses/jean.png'className="imgtimes" alt="imagen Aes"></img></td>
                                        <td className="text-center"><img src='./img/courses/short.png'className="imgtimes" alt="imagen Aes"></img></td>
                                    </tr>
                                    <tr>
                                        <td className="text-center"><p>trouser(s)</p><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/clot10.mp3')}}></span></td>
                                        <td className="text-center"><p>jean(s)</p><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/clot11.mp3')}}></span></td>
                                        <td className="text-center"><p>short(s)</p><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/clot12.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">51</span></div>
                </div>

                {/* hoja 52 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/vocabulary.png'className="Esquina" alt="Expressions"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>CLOTHES VOCABULARY</h2>
                            <h3>VOCABULARIO DE ROPA</h3>
                        </div>
                        <div className="bloque">
                            <table className="table">
                                <caption>Uni-Sex</caption>
                                <tbody>
                                    <tr>
                                        <td className="text-center"><img src='./img/courses/jumper.png'className="imgtimes" alt="imagen Aes"></img></td>
                                        <td className="text-center"><img src='./img/courses/cardigan.png'className="imgtimes" alt="imagen Aes"></img></td>
                                        <td className="text-center"><img src='./img/courses/sweatshirt.png'className="imgtimes" alt="imagen Aes"></img></td>
                                    </tr>
                                    <tr>
                                        <td className="text-center"><p>jumper(s) pullover(s)</p><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/clot13.mp3')}}></span></td>
                                        <td className="text-center"><p>cardigan(s)</p><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/clot15.mp3')}}></span></td>
                                        <td className="text-center"><p>sweatshirt(s)</p><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/clot16.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td className="text-center"><img src='./img/courses/glove.png'className="imgtimes" alt="imagen Aes"></img></td>
                                        <td className="text-center"><img src='./img/courses/mitten.png'className="imgtimes" alt="imagen Aes"></img></td>
                                        <td className="text-center">--</td>
                                    </tr>
                                    <tr>
                                        <td className="text-center"><p>glove(s)</p><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/clot17.mp3')}}></span></td>
                                        <td className="text-center"><p>mitten(s)</p><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/clot18.mp3')}}></span></td>
                                        <td className="text-center">--</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">52</span></div>
                </div>
               
                {/* hoja 53 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/vocabulary.png'className="Esquina" alt="Expressions"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>CLOTHES VOCABULARY</h2>
                            <h3>VOCABULARIO DE ROPA</h3>
                        </div>
                        <div className="bloque">
                            <table className="table">
                                <caption>Baby Clothes</caption>
                                <tbody>
                                    <tr>
                                        <td className="text-center"><img src='./img/courses/romper suit.png'className="imgtimes" alt="imagen Aes"></img></td>
                                        <td className="text-center"><img src='./img/courses/nappy.png'className="imgtimes" alt="imagen Aes"></img></td>
                                    </tr>
                                    <tr>
                                        <td className="text-center"><p>romper suit(s)</p><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/clot19.mp3')}}></span></td>
                                        <td className="text-center"><p>nappy (nappies)</p><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/clot20.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="bloque">
                            <table className="table">
                                <caption>Holiday/Leisure Clothes</caption>
                                <tbody>
                                    <tr>
                                        <td className="text-center"><img src='./img/courses/swimming trunk.png'className="imgtimes" alt="imagen Aes"></img></td>
                                        <td className="text-center"><img src='./img/courses/bikini.png'className="imgtimes" alt="imagen Aes"></img></td>
                                        <td className="text-center"><img src='./img/courses/swimsuit.png'className="imgtimes" alt="imagen Aes"></img></td>
                                    </tr>
                                    <tr>
                                        <td className="text-center"><p>swimming trunk(s)</p><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/clot21.mp3')}}></span></td>
                                        <td className="text-center"><p>bikini(s)</p><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/clot22.mp3')}}></span></td>
                                        <td className="text-center"><p>swimsuit(s)</p><p>swimming costume(s)</p><p>bathing costume(s)</p><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/clot23.mp3')}}></span></td>
                                    </tr>                                                 
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">53</span></div>
                </div>

                {/* hoja 54 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/vocabulary.png'className="Esquina" alt="Expressions"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>CLOTHES VOCABULARY</h2>
                            <h3>VOCABULARIO DE ROPA</h3>
                        </div>
                        <div className="bloque">
                            <table className="table">
                                <caption>Nightwear</caption>
                                <tbody>
                                    <tr>
                                        <td className="text-center"><img src='./img/courses/nightdress.png'className="imgtimes" alt="imagen Aes"></img></td>
                                        <td className="text-center"><img src='./img/courses/pyjama.png'className="imgtimes" alt="imagen Aes"></img></td>
                                        <td className="text-center"><img src='./img/courses/dressingGown.png'className="imgtimes" alt="imagen Aes"></img></td>
                                    </tr>
                                    <tr>
                                        <td className="text-center"><p>nightdress(es) nightie(s)</p><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/clot27.mp3')}}></span></td>
                                        <td className="text-center"><p>pyjama(s)</p><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/clot28.mp3')}}></span></td>
                                        <td className="text-center"><p>dressing gown(s)</p><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/clot29.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="bloque">
                            <table className="table">
                                <caption>Underwear Mens</caption>
                                <tbody>
                                    <tr>                                    
                                        <td className="text-center"><img src='./img/courses/boxers.png'className="imgtimes" alt="imagen Aes"></img></td>
                                        <td className="text-center"><img src='./img/courses/y-fronts.png'className="imgtimes" alt="imagen Aes"></img></td>
                                    </tr>
                                    <tr>
                                        <td className="text-center"><p>boxers</p><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/clot30.mp3')}}></span></td>
                                        <td className="text-center"><p>y-fronts</p><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/clot31.mp3')}}></span></td>
                                    </tr>                                                 
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">54</span></div>
                </div>

                {/* hoja 55 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/vocabulary.png'className="Esquina" alt="Expressions"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>CLOTHES VOCABULARY</h2>
                            <h3>VOCABULARIO DE ROPA</h3>
                        </div>
                        <div className="bloque">
                            <table className="table">
                                <caption>Ladies (Lingerie)</caption>
                                <tbody>
                                    <tr>
                                        <td className="text-center"><img src='./img/courses/bra.png'className="imgtimes" alt="imagen Aes"></img></td>
                                        <td className="text-center"><img src='./img/courses/panties.png'className="imgtimes" alt="imagen Aes"></img></td>
                                    </tr>
                                    <tr>
                                        <td className="text-center"><p>bra(s)</p><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/clot32.mp3')}}></span></td>
                                        <td className="text-center"><p>panties(s)</p><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/clot33.mp3')}}></span></td>
                                    </tr>
                                    <tr>                                    
                                        <td className="text-center"><img src='./img/courses/stocking.png'className="imgtimes" alt="imagen Aes"></img></td>
                                        <td className="text-center"><img src='./img/courses/tight.png'className="imgtimes" alt="imagen Aes"></img></td>
                                    </tr>
                                    <tr>
                                        <td className="text-center"><p>stocking(s)</p><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/clot34.mp3')}}></span></td>
                                        <td className="text-center"><p>tight(s)</p><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/clot35.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">55</span></div>
                </div>

                {/* hoja 56 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/vocabulary.png'className="Esquina" alt="Expressions"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>CLOTHES VOCABULARY</h2>
                            <h3>VOCABULARIO DE ROPA</h3>
                        </div>
                        <div className="bloque">
                            <table className="table">
                                <caption>Footwear</caption>
                                <tbody>
                                    <tr>
                                        <td className="text-center"><img src='./img/courses/shoe.png'className="imgtimes" alt="imagen Aes"></img></td>
                                        <td className="text-center"><img src='./img/courses/sandal.png'className="imgtimes" alt="imagen Aes"></img></td>
                                        <td className="text-center"><img src='./img/courses/boot.png'className="imgtimes" alt="imagen Aes"></img></td>
                                    </tr>
                                    <tr>
                                        <td className="text-center"><p>shoe(s)</p><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/clot36.mp3')}}></span></td>
                                        <td className="text-center"><p>sandal(s)</p><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/clot37.mp3')}}></span></td>
                                        <td className="text-center"><p>boot(s)</p><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/clot38.mp3')}}></span></td>
                                    </tr>
                                    <tr>                                    
                                        <td className="text-center"><img src='./img/courses/wellington.png'className="imgtimes" alt="imagen Aes"></img></td>
                                        <td className="text-center"><img src='./img/courses/slipper.png'className="imgtimes" alt="imagen Aes"></img></td>
                                        <td className="text-center"><img src='./img/courses/sock.png'className="imgtimes" alt="imagen Aes"></img></td>
                                    </tr>
                                    <tr>
                                        <td className="text-center"><p>wellington(s)</p><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/clot39.mp3')}}></span></td>
                                        <td className="text-center"><p>slipper(s)</p><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/clot40.mp3')}}></span></td>
                                        <td className="text-center"><p>sock(s)</p><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/clot41.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">56</span></div>
                </div>

                {/* hoja 57 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/food.png'className="Esquina" alt="Expressions"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>FOOD</h2>
                            <h3>COMIDA</h3>
                        </div>
                        <div className="bloque">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>
                                            <p className="txt-ali">
                                                A lot of food is made up of uncountable nouns, to make them countable you need to put them in another form. 
                                            </p>
                                            <p className="txt-ali">
                                                For example:-
                                            </p>
                                            <p className="txt-ali">
                                                "A ...... of ......".="A piece of fruit."
                                            </p>
                                            <p className="txt-ali">
                                                Here is a list of some of the uncountable nouns in this quarter's vocabulary and some ways to make them countable.
                                            </p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="bloque">
                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <td>asparagus</td>
                                        <td>A bunch of asparagus.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/food2.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>beef</td>   
                                        <td>A slice of beef.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/food3.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>bread</td>
                                        <td>A slice of bread.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/food4.mp3')}}></span></td>
                                    </tr> 
                                    <tr>
                                        <td>broccoli</td>
                                        <td>A piece of broccoli.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/food5.mp3')}}></span></td>
                                    </tr>   
                                    <tr>
                                        <td>butter</td>
                                        <td>A pat of butter.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/food6.mp3')}}></span></td>
                                    </tr>   
                                    <tr>
                                        <td>corn</td>
                                        <td>An ear of corn.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/food7.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>fruit</td>
                                        <td>A piece of fruit.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/food8.mp3')}}></span></td>
                                    </tr>                
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">57</span></div>
                </div>

                {/* hoja 58 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/food.png'className="Esquina" alt="Expressions"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>FOOD</h2>
                            <h3>COMIDA</h3>
                        </div>
                        <div className="bloque">
                            <table className="table table-striped">
                                <tbody>        
                                    <tr>
                                        <td>garlic</td>
                                        <td>A bulb of garlic.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/food9.mp3')}}></span></td>
                                    </tr>    
                                    <tr>
                                        <td>honey</td>
                                        <td>A pot of honey.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/food10.mp3')}}></span></td>
                                    </tr>    
                                    <tr>
                                        <td>jam</td>
                                        <td>A jar of jam.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/food11.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>lamb</td>
                                        <td>A leg of lamb.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/food12.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>pepper</td>
                                        <td>A pot of pepper.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/food13.mp3')}}></span></td>
                                    </tr>    
                                    <tr>
                                        <td>pork</td>
                                        <td>A joint of pork.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/food14.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>rice</td>
                                        <td>A grain of rice.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/food15.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>salt</td>
                                        <td>A pinch of salt.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/food16.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>spaghetti</td>
                                        <td>A strand of spaghetti.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/food17.mp3')}}></span></td>
                                    </tr> 
                                    <tr>
                                        <td>sugar</td>
                                        <td>A cube of sugar.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/food18.mp3')}}></span></td>
                                    </tr>            
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">58</span></div>
                </div>

                {/* hoja 59 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/food.png'className="Esquina" alt="Expressions"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>Things to do with eggs</h2>
                            <h3>Cosas que hacer con huevos</h3>
                        </div>
                        <div className="bloque">
                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <td>img</td>
                                        <td>egg</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/egg1.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>img</td>
                                        <td>boiled egg</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/egg2.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>img</td>
                                        <td>scrambled egg</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/egg3.mp3')}}></span></td>
                                    </tr> 
                                    <tr>
                                        <td>img</td>
                                        <td>fried egg</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/egg4.mp3')}}></span></td>
                                    </tr>             
                                </tbody>
                            </table>
                        </div>
                        <img className="rellenoPc" src="./img/courses/eggs.jpg" alt="eggs"></img>
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">59</span></div>
                </div>

                {/* hoja 60 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/quiz-ss.png'className="Esquina" alt="Expressions"/>
                    </div>
                    <div className="Contenido">
                        <div className="bloque">
                            <img className="rellenoPc" src="./img/courses/quiz.png" alt="quiz"></img>
                        </div>
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">60</span></div>
                </div>

                {/* hoja 61 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/quiz-ss.png'className="Esquina" alt="Quiz"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>Quiz 1</h2>
                            <h3>Examen 1</h3>
                        </div>
                        <div className="bloque">
                            <p className="subquiz">*Select the correct option for each exercise.</p>
                        </div>
                        <div className="bloque">
                            <div className="questions">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td colSpan="7"><span className="Quiz">1)Which of these words is a greeting?</span></td>
                                        </tr>
                                        <tr>
                                            <td><label>A)Good Bye</label></td>
                                            <td><input type="radio" name="answer1" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer1')}}></input></td>
                                            <td><label>B)Good Afternoon</label></td>
                                            <td><input type="radio" name="answer1" onChange={(e) => {this.quiz(e, 'Correcto', 'answer1')}}></input></td>
                                            <td><label>C)Take Care</label></td>
                                            <td><input type="radio" name="answer1" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer1')}}></input></td>
                                            <td><span id="answer1"></span></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="7"><span className="Quiz">2)How are you today?</span></td>
                                        </tr>
                                        <tr>
                                            <td><label>A)See you tomorrow</label></td>
                                            <td><input type="radio" name="answer2" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer2')}}></input></td>
                                            <td><label>B)Thank you</label></td>
                                            <td><input type="radio" name="answer2" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer2')}}></input></td>
                                            <td><label>C)Fine And you?</label></td>
                                            <td><input type="radio" name="answer2" onChange={(e) => {this.quiz(e, 'Correcto', 'answer2')}}></input></td>
                                            <td><span id="answer2"></span></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="7"><span className="Quiz">3)Where are you from?</span></td>
                                        </tr>
                                        <tr>
                                            <td><label>A)Very well</label></td>
                                            <td><input  type="radio" name="answer3" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer3')}}></input></td>
                                            <td><label>B)I from Brazil</label></td>
                                            <td><input  type="radio" name="answer3" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer3')}}></input></td>
                                            <td><label>C)I am from Brazil</label></td>
                                            <td><input  type="radio" name="answer3" onChange={(e) => {this.quiz(e, 'Correcto', 'answer3')}}></input></td>
                                            <td><span id="answer3"></span></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="7"><span className="Quiz">4)What is your name?</span></td>
                                        </tr>
                                        <tr>
                                            <td><label>A)My name is Kevin</label></td>
                                            <td><input  type="radio" name="answer4" onChange={(e) => {this.quiz(e, 'Correcto', 'answer4')}}></input></td>
                                            <td><label>B)My name Kevin</label></td>
                                            <td><input  type="radio" name="answer4" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer4')}}></input></td>
                                            <td><label>C)Her name is Kevin</label></td>
                                            <td><input type="radio" name="answer4" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer4')}}></input></td>
                                            <td><span id="answer4"></span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">61</span></div>
                </div>

                {/* hoja 62 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/quiz-ss.png'className="Esquina" alt="Quiz"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>Quiz 1</h2>
                            <h3>Examen 1</h3>
                        </div>
                        <div className="bloque">
                            <p className="subquiz">*Select the correct option for each exercise.</p>
                        </div>
                        <div className="bloque">
                            <div className="questions">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td colSpan="7"><span className="Quiz">5)Which of these words is a farewell?</span></td>
                                        </tr>
                                        <tr>
                                            <td><label>A)Hello</label></td>
                                            <td><input type="radio" name="answer5" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer5')}}></input></td>
                                            <td><label>B)See you later</label></td>
                                            <td><input  type="radio" name="answer5" onChange={(e) => {this.quiz(e, 'Correcto', 'answer5')}}></input></td>
                                            <td><label>C)I am fine</label></td>
                                            <td><input type="radio" name="answer5" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer5')}}></input></td>
                                            <td><span id="answer5"></span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="bloque">
                            <p className="subquiz">*From exercise 6-10</p>
                            <p className="subquiz">Select the correct expression to use in the classroom.</p>
                        </div>
                        <div className="bloque">
                            <div className="questions">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td><label>6) A)Open your book</label></td>
                                            <td><input type="radio" name="answer6" onChange={(e) => {this.quiz(e, 'Correcto', 'answer6')}}></input></td>
                                            <td><label>B)Not too bad</label></td>
                                            <td><input  type="radio" name="answer6" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer6')}}></input></td>
                                            <td><label>C)Reb</label></td>
                                            <td><input type="radio" name="answer6"  onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer6')}}></input></td>
                                            <td><span id="answer6"></span></td>
                                        </tr>
                                        <tr>
                                            <td><label>7) A)I live with my mother</label></td>
                                            <td><input  type="radio" name="answer7" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer7')}}></input></td>
                                            <td><label>B)Nothing much</label></td>
                                            <td><input type="radio" name="answer7" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer7')}}></input></td>
                                            <td><label>C)Do the homework</label></td>
                                            <td><input  type="radio" name="answer7" onChange={(e) => {this.quiz(e, 'Correcto', 'answer7')}}></input></td>
                                            <td><span id="answer7"></span></td>
                                        </tr>
                                        <tr>
                                            <td><label>8) A) Study page 8</label></td>
                                            <td><input  type="radio" name="answer8" onChange={(e) => {this.quiz(e, 'Correcto', 'answer8')}}></input></td>
                                            <td><label>B) My best friend is</label></td>
                                            <td><input  type="radio" name="answer8" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer8')}}></input></td>
                                            <td><label>C) What is your phone number?</label></td>
                                            <td><input type="radio" name="answer8" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer8')}}></input></td>
                                            <td><span id="answer8"></span></td>
                                        </tr>
                                        <tr>
                                            <td><label>9) A) How old are you?</label></td>
                                            <td><input  type="radio" name="answer9" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer9')}}></input></td>
                                            <td><label>B) Listen and repeat</label></td>
                                            <td><input  type="radio" name="answer9" onChange={(e) => {this.quiz(e, 'Correcto', 'answer9')}}></input></td>
                                            <td><label>C) Pretty good, thank you</label></td>
                                            <td><input  type="radio" name="answer9" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer9')}}></input></td>
                                            <td><span id="answer9"></span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">62</span></div>
                </div>

                {/* hoja 63 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/quiz-ss.png'className="Esquina" alt="Quiz"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>Quiz 1</h2>
                            <h3>Examen 1</h3>
                        </div>
                        <div className="bloque">
                            <p className="subquiz">*From exercise 6-10</p>
                            <p className="subquiz">Select the correct expression to use in the classroom.</p>
                        </div>
                        <div className="bloque">
                            <div className="questions">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td><label>10) A) What???s up?</label></td>
                                            <td><input  type="radio" name="answer10" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer10')}}></input></td>
                                            <td><label>B) Open your book!</label></td>
                                            <td><input   type="radio" name="answer10" onChange={(e) => {this.quiz(e, 'Correcto', 'answer10')}}></input></td>
                                            <td><label>C) farewell</label></td>
                                            <td><input type="radio" name="answer10"  onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer10')}}></input></td>
                                            <td><span id="answer10"></span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="bloque">
                            <p className="subquiz">*From exercise 11-15</p>
                            <p className="subquiz">Select the correct word for each picture</p>
                        </div>
                        <div className="bloque">
                            <div className="questions">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td colSpan="7" className="text-center"><img src='./img/courses/aesComputer.png' className="Answer" alt="Computer"/></td>
                                        </tr>
                                        <tr>
                                            <td><label>11) A) Book</label></td>
                                            <td><input type="radio" name="answer11" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer11')}}></input></td>
                                            <td><label>B) Marker</label></td>
                                            <td><input  type="radio" name="answer11" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer11')}}></input></td>
                                            <td><label>C) Computer</label></td>
                                            <td><input  type="radio" name="answer11" onChange={(e) => {this.quiz(e, 'Correcto', 'answer11')}}></input></td>
                                            <td><span id="answer11"></span></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="7" className="text-center"><img src='./img/courses/aesScissors.png' className="Answer" alt="Scissors"/></td>
                                        </tr>
                                        <tr>
                                            <td><label>12) A) Scissors</label></td>
                                            <td><input  type="radio" name="answer12" onChange={(e) => {this.quiz(e, 'Correcto', 'answer12')}}></input></td>
                                            <td><label>B) Eraser</label></td>
                                            <td><input  type="radio" name="answer12" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer12')}}></input></td>
                                            <td><label>C) Paint</label></td>
                                            <td><input  type="radio" name="answer12" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer12')}}></input></td>
                                            <td><span id="answer12"></span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">63</span></div>
                </div>
                
                {/* hoja 64 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/quiz-ss.png'className="Esquina" alt="Quiz"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>Quiz 1</h2>
                            <h3>Examen 1</h3>
                        </div>
                        <div className="bloque">
                            <p className="subquiz">*From exercise 11-15</p>
                            <p className="subquiz">Select the correct word for each picture</p>
                        </div>
                        <div className="bloque">
                            <div className="questions">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td colSpan="7" className="text-center"><img src='./img/courses/aesNotebook.png' className="Answer" alt="Notebook"/></td>
                                        </tr>
                                        <tr>
                                            <td><label>13) A) Compass</label></td>
                                            <td><input  type="radio" name="answer13" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer13')}}></input></td>
                                            <td><label>B) Notebook</label></td>
                                            <td><input type="radio" name="answer13" onChange={(e) => {this.quiz(e, 'Correcto', 'answer13')}}></input></td>
                                            <td><label>C) Bag</label></td>
                                            <td><input  type="radio" name="answer13" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer13')}}></input></td>
                                            <td><span id="answer13"></span></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="7" className="text-center"><img src='./img/courses/aesRed.png' className="Answer" alt="Red"/></td>
                                        </tr>
                                        <tr>
                                            <td><label>14) A) Blue</label></td>
                                            <td><input  type="radio" name="answer14" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer14')}}></input></td>
                                            <td><label>B) Red</label></td>
                                            <td><input  type="radio" name="answer14" onChange={(e) => {this.quiz(e, 'Correcto', 'answer14')}}></input></td>
                                            <td><label>C) White</label></td>
                                            <td><input  type="radio" name="answer14" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer14')}}></input></td>
                                            <td><span id="answer14"></span></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="7" className="text-center"><img src='./img/courses/aesBlack.png' className="Answer" alt="Black"/></td>
                                        </tr>
                                        <tr>
                                            <td><label>15) A) Yellow</label></td>
                                            <td><input  type="radio" name="answer15" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer15')}}></input></td>
                                            <td><label>B) Green</label></td>
                                            <td><input  type="radio" name="answer15" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer15')}}></input></td>
                                            <td><label>C) Black</label></td>
                                            <td><input type="radio" name="answer15" onChange={(e) => {this.quiz(e, 'Correcto', 'answer15')}}></input></td>
                                            <td><span id="answer15"></span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">64</span></div>
                </div>

                {/* hoja 65 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/quiz-ss.png'className="Esquina" alt="Quiz"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>Quiz 2</h2>
                            <h3>Examen 2</h3>
                        </div>
                        <div className="bloque">
                            <p className="subquiz">*From exercise 1 to 5</p>
                            <p className="subquiz">Select the correct spelling</p>
                        </div>
                        <div className="bloque">
                            <div className="questions">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td><label>1) A) Orange</label></td>
                                            <td><input type="radio" name="answer16" onChange={(e) => {this.quiz(e, 'Correcto', 'answer16')}}></input></td>
                                            <td><label>B) Orrange</label></td>
                                            <td><input  type="radio" name="answer16" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer16')}}></input></td>
                                            <td><label>C) Orangge</label></td>
                                            <td><input  type="radio" name="answer16" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer16')}}></input></td>
                                            <td><span id="answer16"></span></td>
                                        </tr>
                                        <tr>
                                            <td><label>2) A) Wuatermelon</label></td>
                                            <td><input  type="radio" name="answer17" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer17')}}></input></td>
                                            <td><label>B) Watermellon</label></td>
                                            <td><input  type="radio" name="answer17" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer17')}}></input></td>
                                            <td><label>C) Watermelon</label></td>
                                            <td><input  type="radio" name="answer17" onChange={(e) => {this.quiz(e, 'Correcto', 'answer17')}}></input></td>
                                            <td><span id="answer17"></span></td>
                                        </tr>
                                        <tr>
                                            <td><label>3) A) Train</label></td>
                                            <td><input  type="radio" name="answer18" onChange={(e) => {this.quiz(e, 'Correcto', 'answer18')}}></input></td>
                                            <td><label>B) Trein</label></td>
                                            <td><input type="radio" name="answer18" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer18')}}></input></td>
                                            <td><label>C) Trainn</label></td>
                                            <td><input  type="radio" name="answer18" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer18')}}></input></td>
                                            <td><span id="answer18"></span></td>
                                        </tr>
                                        <tr>
                                            <td><label>4) A) Horrse</label></td>
                                            <td><input  type="radio" name="answer19" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer19')}}></input></td>
                                            <td><label>B) Horse</label></td>
                                            <td><input  type="radio" name="answer19" onChange={(e) => {this.quiz(e, 'Correcto', 'answer19')}}></input></td>
                                            <td><label>C) Jorse</label></td>
                                            <td><input  type="radio" name="answer19" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer19')}}></input></td>
                                            <td><span id="answer19"></span></td>
                                        </tr>
                                        <tr>
                                            <td><label>5) A) Bout</label></td>
                                            <td><input  type="radio" name="answer20" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer20')}}></input></td>
                                            <td><label>B) Boat</label></td>
                                            <td><input  type="radio" name="answer20" onChange={(e) => {this.quiz(e, 'Correcto', 'answer20')}}></input></td>
                                            <td><label>C) Baot</label></td>
                                            <td><input type="radio" name="answer20" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer20')}}></input></td>
                                            <td><span id="answer20"></span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="bloque">
                            <p className="subquiz">*From exercise 6 to 10</p>
                            <p className="subquiz">Select the correct number</p>
                        </div>
                        <div className="bloque">
                            <div className="questions">
                                <table className="table">
                                    <tbody>                
                                        <tr>
                                            <td><label>6) 64: A) Seventy four</label></td>
                                            <td><input  type="radio" name="answer21" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer21')}}></input></td>
                                            <td><label>B) Fifty four</label></td>
                                            <td><input  type="radio" name="answer21" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer21')}}></input></td>
                                            <td><label>C) Sixty four</label></td>
                                            <td><input type="radio" name="answer21" onChange={(e) => {this.quiz(e, 'Correcto', 'answer21')}}></input></td>
                                            <td><span id="answer21"></span></td>
                                        </tr>
                                        <tr>
                                            <td><label>7) 13: A) Thirty</label></td>
                                            <td><input  type="radio" name="answer22" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer22')}}></input></td>
                                            <td><label>B) Thirteen</label></td>
                                            <td><input  type="radio" name="answer22" onChange={(e) => {this.quiz(e, 'Correcto', 'answer22')}}></input></td>
                                            <td><label>C) Thirteen three</label></td>
                                            <td> <input type="radio" name="answer22" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer22')}}></input></td>
                                            <td><span id="answer22"></span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">65</span></div>
                </div>

                {/* hoja 66 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/quiz-ss.png'className="Esquina" alt="Quiz"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>Quiz 2</h2>
                            <h3>Examen 2</h3>
                        </div>
                        <div className="bloque">
                            <p className="subquiz">*From exercise 6 to 10</p>
                            <p className="subquiz">Select the correct number</p>
                        </div>
                        <div className="bloque">
                            <div className="questions">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td><label>8) 100: A) One thousand</label></td>
                                            <td><input  type="radio" name="answer23" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer23')}}></input></td>
                                            <td><label>B) One hundred</label></td>
                                            <td><input  type="radio" name="answer23" onChange={(e) => {this.quiz(e, 'Correcto', 'answer23')}}></input></td>
                                            <td><label>C) One million </label></td>
                                            <td><input type="radio" name="answer23" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer23')}}></input></td>
                                            <td><span id="answer23"></span></td>
                                        </tr>
                                        <tr>
                                            <td><label>9) 19: A) ninety</label></td>
                                            <td><input  type="radio" name="answer24" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer24')}}></input></td>
                                            <td><label>B) Ninety nine</label></td>
                                            <td><input  type="radio" name="answer24" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer24')}}></input></td>
                                            <td><label>C) Nineteen</label></td>
                                            <td><input type="radio" name="answer24" onChange={(e) => {this.quiz(e, 'Correcto', 'answer24')}}></input></td>
                                            <td><span id="answer24"></span></td>
                                        </tr>               
                                        <tr>
                                            <td><label>10) 83: A) Eighty Three</label></td>
                                            <td><input  type="radio" name="answer25" onChange={(e) => {this.quiz(e, 'Correcto', 'answer25')}}></input></td>
                                            <td><label>B) Eighty</label></td>
                                            <td><input  type="radio" name="answer25" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer25')}}></input></td>
                                            <td><label>C) Seventy three</label></td>
                                            <td><input type="radio" name="answer25" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer25')}}></input></td>
                                            <td><span id="answer25"></span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="bloque">
                            <p className="subquiz">*From exercise 11-15</p>
                            <p className="subquiz">Select the correct word for each picture</p>
                        </div>
                        <div className="bloque">
                            <div className="questions">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td colSpan="7" className="text-center"><img src='./img/courses/square.png'className="Answer" alt="Square"/></td>
                                        </tr>
                                        <tr>
                                            <td><label>11) A) Triangle</label></td>
                                            <td><input  type="radio" name="answer26" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer26')}}></input></td>
                                            <td><label>B) Square</label></td>
                                            <td><input  type="radio" name="answer26" onChange={(e) => {this.quiz(e, 'Correcto', 'answer26')}}></input></td>
                                            <td><label>C) Exagon</label></td>
                                            <td><input type="radio" name="answer26" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer26')}}></input></td>
                                            <td><span id="answer26"></span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">66</span></div>
                </div>

                {/* hoja 67 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/quiz-ss.png'className="Esquina" alt="Quiz"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>Quiz 2</h2>
                            <h3>Examen 2</h3>
                        </div>
                        <div className="bloque">
                            <p className="subquiz">*From exercise 11-15</p>
                            <p className="subquiz">Select the correct word for each picture</p>
                        </div>
                        <div className="bloque">
                            <div className="questions">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td colSpan="7" className="text-center"><img src='./img/courses/aesAvocado.png'className="Answer" alt="Avocado"/></td>
                                        </tr>
                                        <tr>
                                            <td><label>12) A) Avocado</label></td>
                                            <td><input  type="radio" name="answer27" onChange={(e) => {this.quiz(e, 'Correcto', 'answer27')}}></input></td>
                                            <td><label>B) Lemon</label></td>
                                            <td><input  type="radio" name="answer27" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer27')}}></input></td>
                                            <td><label>C) Watermelon</label></td>
                                            <td><input type="radio" name="answer27" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer27')}}></input></td>
                                            <td><span id="answer27"></span></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="7" className="text-center"><img src='./img/courses/aesDonkey.png'className="Answer" alt="Donkey"/></td>
                                        </tr>
                                        <tr>
                                            <td><label>13) A) Donkey</label></td>
                                            <td><input  type="radio" name="answer28" onChange={(e) => {this.quiz(e, 'Correcto', 'answer28')}}></input></td>
                                            <td><label>B) Monkey</label></td>
                                            <td><input  type="radio" name="answer28" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer28')}}></input></td>
                                            <td><label>C) Tiger</label></td>
                                            <td><input type="radio" name="answer28" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer28')}}></input></td>
                                            <td><span id="answer28"></span></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="7" className="text-center"><img src='./img/courses/aesStadium.png'className="Answer" alt="Stadium"/></td>
                                        </tr>
                                        <tr>
                                            <td><label>14) A) Stadium</label></td>
                                            <td><input  type="radio" name="answer29" onChange={(e) => {this.quiz(e, 'Correcto', 'answer29')}}></input></td>
                                            <td><label>B) Monkey</label></td>
                                            <td><input  type="radio" name="answer29" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer29')}}></input></td>
                                            <td><label>C) Cinema</label></td>
                                            <td><input type="radio" name="answer29" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer29')}}></input></td>
                                            <td><span id="answer29"></span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">67</span></div>
                </div>

                {/* hoja 68 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/quiz-ss.png'className="Esquina" alt="Quiz"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>Quiz 2</h2>
                            <h3>Examen 2</h3>
                        </div>
                        <div className="bloque">
                            <p className="subquiz">*From exercise 11-15</p>
                            <p className="subquiz">Select the correct word for each picture</p>
                        </div>
                        <div className="bloque">
                            <div className="questions">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td colSpan="7" className="text-center"><img src='./img/courses/aesClassroom.png'className="Answer" alt="Classroom"/></td>
                                        </tr>
                                        <tr>
                                            <td><label>15) A) Classmate</label></td>
                                            <td><input  type="radio" name="answer30" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer30')}}></input></td>
                                            <td><label>B) Class</label></td>
                                            <td><input  type="radio" name="answer30" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer30')}}></input></td>
                                            <td><label>C) Classroom</label></td>
                                            <td><input type="radio" name="answer30" onChange={(e) => {this.quiz(e, 'Correcto', 'answer30')}}></input></td>
                                            <td><span id="answer30"></span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="titulos">
                            <h2>Quiz 3</h2>
                            <h3>Examen 3</h3>
                        </div>
                        <div className="bloque">
                            <p className="subquiz">*From exercise 1-5</p>
                            <p className="subquiz">Select TRUE or FALSE</p>
                        </div>
                        <div className="bloque">
                            <div className="questions">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td colSpan="7" className=""><span className="Quiz">1) (5:30) It???s half past five</span></td>
                                        </tr>
                                        <tr>
                                            <td><label>True</label></td>
                                            <td><input  type="radio" name="answer31" onChange={(e) => {this.quiz(e, 'Correcto', 'answer31')}}></input></td>
                                            <td><label>False</label></td>
                                            <td><input  type="radio" name="answer31" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer31')}}></input></td>
                                            <td><span id="answer31"></span></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="7" className=""><span className="Quiz">2) (3:15) It???s three past a quarter</span></td>
                                        </tr>
                                        <tr>
                                            <td><label>True</label></td>
                                            <td><input  type="radio" name="answer32" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer32')}}></input></td>
                                            <td><label>False</label></td>
                                            <td><input  type="radio" name="answer32" onChange={(e) => {this.quiz(e, 'Correcto', 'answer32')}}></input></td>
                                            <td><span id="answer32"></span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">68</span></div>
                </div>

                {/* hoja 69 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/quiz-ss.png'className="Esquina" alt="Quiz"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>Quiz 3</h2>
                            <h3>Examen 3</h3>
                        </div>
                        <div className="bloque">
                            <p className="subquiz">*From exercise 1-5</p>
                            <p className="subquiz">Select TRUE or FALSE</p>
                        </div>
                        <div className="bloque">
                            <div className="questions">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td colSpan="7" className=""><span className="Quiz">3) (10:10) It???s ten to ten</span></td>
                                        </tr>
                                        <tr>
                                            <td><label>True</label></td>
                                            <td><input  type="radio" name="answer33" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer33')}}></input></td>
                                            <td><label>False</label></td>
                                            <td><input  type="radio" name="answer33" onChange={(e) => {this.quiz(e, 'Correcto', 'answer33')}}></input></td>
                                            <td><span id="answer33"></span></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="7" className=""><span className="Quiz">4) (5:35) It???s twenty five to six</span></td>
                                        </tr>
                                        <tr>
                                            <td><label>True</label></td>
                                            <td><input  type="radio" name="answer34" onChange={(e) => {this.quiz(e, 'Correcto', 'answer34')}}></input></td>
                                            <td><label>False</label></td>
                                            <td><input  type="radio" name="answer34" onChange={(e) => {this.quiz(e, 'Incorrecto' ,'answer34')}}></input></td>
                                            <td><span id="answer34"></span></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="7" className=""><span className="Quiz">5) (8:00) It???s Eight o???clock </span></td>
                                        </tr>
                                        <tr>
                                            <td><label>True</label></td>
                                            <td><input  type="radio" name="answer35" onChange={(e) => {this.quiz(e, 'Correcto', 'answer35')}}></input></td>
                                            <td><label>False</label></td>
                                            <td><input  type="radio" name="answer35" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer35')}}></input></td>
                                            <td><span id="answer35"></span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="bloque">
                            <p className="subquiz">*From exercise 6-10</p>
                            <p className="subquiz">Select the correct option</p>
                        </div>
                        <div className="bloque">
                            <div className="questions">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td colSpan="7" className=""><span className="Quiz">6) January 1</span></td>
                                        </tr>
                                        <tr>
                                            <td><label>A) New year's day</label></td>
                                            <td><input  type="radio" name="answer36" onChange={(e) => {this.quiz(e, 'Correcto', 'answer36')}}></input></td>
                                            <td><label>B) Christmas</label></td>
                                            <td><input  type="radio" name="answer36" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer36')}}></input></td>
                                            <td><label>C) Thanksgiving day</label></td>
                                            <td><input type="radio" name="answer36" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer36')}}></input></td>
                                            <td><span id="answer36"></span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">69</span></div>
                </div>
                
                {/* hoja 70 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/quiz-ss.png'className="Esquina" alt="Quiz"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>Quiz 3</h2>
                            <h3>Examen 3</h3>
                        </div>
                        <div className="bloque">
                            <p className="subquiz">*From exercise 6-10</p>
                            <p className="subquiz">Select the correct option</p>
                        </div>
                        <div className="bloque">
                            <div className="questions">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td colSpan="7" className=""><span className="Quiz">7) December 25</span></td>
                                        </tr>
                                        <tr>
                                            <td><label>A) Labor day</label></td>
                                            <td><input  type="radio" name="answer37" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer37')}}></input></td>
                                            <td><label>B) Christmas day</label></td>
                                            <td><input  type="radio" name="answer37" onChange={(e) => {this.quiz(e, 'Correcto', 'answer37')}}></input></td>
                                            <td><label>C) Memorial day</label></td>
                                            <td><input type="radio" name="answer37" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer37')}}></input></td>
                                            <td><span id="answer37"></span></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="7" className=""><span className="Quiz">8) A) Agost</span></td>
                                        </tr>
                                        <tr>
                                            <td><label>A) Labor day</label></td>
                                            <td><input  type="radio" name="answer38" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer38')}}></input></td>
                                            <td><label>B) Agust</label></td>
                                            <td><input  type="radio" name="answer38" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer38')}}></input></td>
                                            <td><label>C) August</label></td>
                                            <td><input type="radio" name="answer38" onChange={(e) => {this.quiz(e, 'Correcto', 'answer38')}}></input></td>
                                            <td><span id="answer38"></span></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="7" className=""><span className="Quiz">9) A) Hosban</span></td>
                                        </tr>
                                        <tr>
                                            <td><label>A) Labor day</label></td>
                                            <td><input  type="radio" name="answer39" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer39')}}></input></td>
                                            <td><label>B) Husban</label></td>
                                            <td><input  type="radio" name="answer39" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer39')}}></input></td>
                                            <td><label>C) Husband</label></td>
                                            <td><input type="radio" name="answer39" onChange={(e) => {this.quiz(e, 'Correcto', 'answer39')}}></input></td>
                                            <td><span id="answer39"></span></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="7" className=""><span className="Quiz">10) What is the time?</span></td>
                                        </tr>
                                        <tr>
                                            <td><label>A) I am fine</label></td>
                                            <td><input type="radio" name="answer40" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer40')}}></input></td>
                                            <td><label>B) It's 10:00 o'clock</label></td>
                                            <td><input type="radio" name="answer40" onChange={(e) => {this.quiz(e, 'Correcto', 'answer40')}}></input></td>
                                            <td><label>C) it's November</label></td>
                                            <td><input type="radio" name="answer40" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer40')}}></input></td>
                                            <td><span id="answer40"></span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">70</span></div>
                </div>

                {/* hoja 71 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/quiz-ss.png'className="Esquina" alt="Quiz"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>Quiz 3</h2>
                            <h3>Examen 3</h3>
                        </div>
                        <div className="bloque">
                            <p className="subquiz">*From exercise 11-15</p>
                            <p className="subquiz">Select the correct word for each picture</p>
                        </div>
                        <div className="bloque">
                            <div className="questions">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td colSpan="7" className="text-center"><img src='./img/courses/grandmother.png'className="Answer" alt="Square"/></td>
                                        </tr>
                                        <tr>
                                            <td><label>11) A) Daughter</label></td>
                                            <td><input type="radio" name="answer41" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer41')}}></input></td>
                                            <td><label>B) Grandmother</label></td>
                                            <td><input type="radio" name="answer41" onChange={(e) => {this.quiz(e, 'Correcto', 'answer41')}}></input></td>
                                            <td><label>C) Granddaughther</label></td>
                                            <td><input type="radio" name="answer41" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer41')}}></input></td>
                                            <td><span id="answer41"></span></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="7" className="text-center"><img src='./img/courses/toothache.png'className="Answer" alt="Avocado"/></td>
                                        </tr>
                                        <tr>
                                            <td><label>12) A) Fever</label></td>
                                            <td><input type="radio" name="answer42" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer42')}}></input></td>
                                            <td><label>B) Toothache</label></td>
                                            <td><input type="radio" name="answer42" onChange={(e) => {this.quiz(e, 'Correcto', 'answer42')}}></input></td>
                                            <td><label>C) Backache</label></td>
                                            <td><input type="radio" name="answer42" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer42')}}></input></td>
                                            <td><span id="answer42"></span></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="7" className="text-center"><img src='./img/courses/foot.png'className="Answer" alt="Donkey"/></td>
                                        </tr>
                                        <tr>
                                            <td><label>13) A) Foot</label></td>
                                            <td><input type="radio" name="answer43" onChange={(e) => {this.quiz(e, 'Correcto', 'answer43')}}></input></td>
                                            <td><label>B) Tooth</label></td>
                                            <td><input type="radio" name="answer43" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer43')}}></input></td>
                                            <td><label>C) Hand</label></td>
                                            <td><input type="radio" name="answer43" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer43')}}></input></td>
                                            <td><span id="answer43"></span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">71</span></div>
                </div>

                {/* hoja 72 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/quiz-ss.png'className="Esquina" alt="Quiz"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>Quiz 3</h2>
                            <h3>Examen 3</h3>
                        </div>
                        <div className="bloque">
                            <p className="subquiz">*From exercise 11-15</p>
                            <p className="subquiz">Select the correct word for each picture</p>
                        </div>
                        <div className="bloque">
                            <div className="questions">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td colSpan="7" className="text-center"><img src='./img/courses/tie.png'className="Answer" alt="Stadium"/></td>
                                        </tr>
                                        <tr>
                                            <td><label>14) A) Tie</label></td>
                                            <td><input type="radio" name="answer44" onChange={(e) => {this.quiz(e, 'Correcto','answer44')}}></input></td>
                                            <td><label>B) Shirt</label></td>
                                            <td><input type="radio" name="answer44" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer44')}}></input></td>
                                            <td><label>C) Jeans</label></td>
                                            <td><input type="radio" name="answer44" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer44')}}></input></td>
                                            <td><span id="answer44"></span></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="7" className="text-center"><img src='./img/courses/dress.png'className="Answer" alt="Classroom"/></td>
                                        </tr>
                                        <tr>
                                            <td><label>15) A) Dress</label></td>
                                            <td><input type="radio" name="answer45" onChange={(e) => {this.quiz(e, 'Correcto','answer45')}}></input></td>
                                            <td><label>B) Sweater</label></td>
                                            <td><input type="radio" name="answer45" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer45')}}></input></td>
                                            <td><label>C) Shirt</label></td>
                                            <td><input type="radio" name="answer45" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer45')}}></input></td>
                                            <td><span id="answer45"></span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="Pie"><span className="badge badge-pill badge-dark">72</span></div>
                </div>
                {/* end book */}
            </div>
        );
    }
}

export default Cbasico;