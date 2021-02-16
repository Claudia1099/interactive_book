import React, { Component } from "react";

class Cbasico extends Component{

    constructor(props){
        super(props);
      
    }

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
                            <table>
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
                                        <td>NOS VEMOS MAÑANA.</td>
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
                        <div className="linea"></div>
                        <div className="bloque">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>HELLO, MR, GARCIA. IT’S NICE TO SEE YOU AGAIN.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/hello-mr-garcia.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>GOOD MORNING MRS, GARCIA. HOW ARE YOU TODAY?</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/good-morning-mrs-garcia.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>FINE AND YOU?</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/fine-and-you.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>GOOD AFTERNOON, MRS, REYES. IT’S GOOD TO SEE YOU.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/good-afternoon-mrs-reyes.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>HOW ARE YOU DOING?</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/how-are-you-doing.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>VERY WELL THANK YOU!</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/very-well-thank-you.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>HOW’S IT GOING?</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/hows-it-going.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>NOT TOO BAD!</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/not-too-bab.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>HOW WAS YOUR DAY YESTERDAY?</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/how-was-your-day-yesterday.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>PRETTY GOOD THANK YOU!</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/pretty-good-thank-you.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>WHAT´S UP?</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/whats-up.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>NOTHING MUCH.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/nothing-much.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>   
                    </div>
                </div>
                
                {/* hoja 2*/}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/personalInformation.png'className="Esquina" alt="Personal Information"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>PERSONAL INFORMATION</h2>
                            <h3>INFORMACIÓN PERSONAL</h3>
                        </div>
                        <div className="bloque">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>WHAT IS YOUR NAME?</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/what-is-your-name.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>MY NAME IS …</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/my-name-is.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>WHERE ARE YOU FROM?</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/where-are-you-from.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>I AM FROM …</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/i-am-from.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>HOW OLD ARE YOU?</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/how-old-are-you.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>I AM 6 YEARS OD</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/i-am-6-years.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>WHAT IS YOUR PHONE NUMBER?</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/what-is-you-phone.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>MY PHONE NUMBER IS</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/my-phone-number-is.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>WHERE DO YOU LIVE?</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/where-do-you-live.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>I LIVE IN NÁPOLES NEIGHBORHOOD</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/i-live-in.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>WHO DO YOU LIVE WITH?</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/who-do-you-live-with.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>I LIVE WITH MY MOTHER AND FATHER</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/i-live-with-my.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>WHAT IS YOUR FAVORITE COLOR?</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/what-is-your-favorite-color.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>MY FAVORITE COLOR IS BLUE</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/my-favorite-color-is.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>WHO IS YOUR BEST FRIEND?</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/who-is-your-best-friend.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>MY BEST FRIEND IS …</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/my-best-friend-is.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <img className="rellenoPc" src="./img/courses/infoPersonal.png"></img>
                    </div>
                    <div className="Pie"></div>
                </div>

                {/* hoja 3*/}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/farewells.png'className="Esquina" alt="Farewells"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>FAREWELLS</h2>
                            <h3>DESPEDIDAS</h3>
                        </div>
                        <div className="bloque">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>BYE.</td>
                                        <td>ADIOS.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/bye.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>BYE, BYE.</td>
                                        <td>ADIOS.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/bye-bye.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>GOOD BYE.</td>
                                        <td>ADIOS.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/good-bye.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>SEE YOU</td>
                                        <td>NOS VEMOS.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/see-you.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>SEE YOU TOMORROW</td>
                                        <td>NOS VEMOS MAÑANA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/see-you-tomorrow.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>SO LONG.</td>
                                        <td>HASTA LUEGO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/so-long.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>SEE YOU SOON.</td>
                                        <td>NOS VEMOS PRONTO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/see-you-soon.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>SEE YOU THEN.</td>
                                        <td>NOS VEMOS DESPUES.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/see-you-then.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>GOOD NIGHT</td>
                                        <td>BUENAS NOCHES (DESPEDIDA).T</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/good-night.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>TAKE CARE.</td>
                                        <td>CUIDATE.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/take-care.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <img className="rellenoPm" src="./img/courses/farewellsImg.png"></img>   
                    </div>
                    <div className="Pie"></div>
                </div>

                {/* hoja 4*/}

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
                            <table>
                                <tbody>
                                    <tr>
                                        <td>STAND UP!</td>
                                        <td>LEVÁNTESE.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/stand-up.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>SIT DOWN! / TAKE YOUR SEAT</td>
                                        <td>SIÉNTESE / TOME SU ASIENTO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/sit-down.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>SIT STILL!</td>
                                        <td>PERMANEZCA SENTADO Y QUIETO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/sit-still.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>GO TO THE BOARD!</td>
                                        <td>PASE AL TABLERO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/go-to-the-board!.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>WRITE YOUR NAME</td>
                                        <td>ESCRIBA SU NOMBRE.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/write-your-name.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>ERASE YOUR NAME</td>
                                        <td>BORRE SU NOMBRE.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/erase-your-name.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>OPEN YOUR BOOK!</td>
                                        <td>ABRA SU LIBRO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/open-your-book.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>READ PAGE EIGHT!</td>
                                        <td>LEA PÁGINA 8.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/read-page-eight.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>CLOSE YOUR BOOK!</td>
                                        <td>CIERRE SU LIBRO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/close-your-book.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>QUESTION.</td>
                                        <td>PREGUNTA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/question.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>ANSWER.</td>
                                        <td>RESPUESTA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>PUT AWAY YOUR BOOK!.</td>
                                        <td>GUARDEN SU LIBRO..</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/put-away-your-book.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>TAKE OUT A SHEET OF PAPER.</td>
                                        <td>SAQUE UNA HOJA DE PAPEL.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/take-out-a-sheet-of-paper.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>PASS OUT THE TESTS.</td>
                                        <td>REPARTA LOS EXAMENES.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/pass-out-the-tests.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>ANSWER THE QUESTIONS.</td>
                                        <td>RESPONDAN LAS PREGUNTAS.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer-the-questions.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>CHECK YOUR ANSWERS.</td>
                                        <td>REVISEN SUS RESPUESTAS.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/check-your-answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>GO OVER THE ANSWERS.</td>
                                        <td>REVISEN LAS RESPUESTAS.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/go-over-the-answers.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>LISTEN TO THE QUESTIONS.</td>
                                        <td>ESCUCHEN LAS PREGUNTAS.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/listen-to-the-question.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>RAISE UP YOUR HAND.</td>
                                        <td>LEVANTE SU MANO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/raise-up-your-hand.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>GIVE THE ANSWER!.</td>
                                        <td>DÉ LA RESPUESTA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/give-the-answer.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>   
                    </div>
                    <div className="Pie"></div>
                </div>

                {/* hoja 5*/}

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
                            <table>
                                <tbody>
                                    <tr>
                                        <td>WORK IN GROUPS.</td>
                                        <td>TRABAJEN EN GRUPOS.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/work-in-groups.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>WORK IN PAIRS.</td>
                                        <td>TRABAJEN EN PAREJAS.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/work-in-pairs.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>HELP EACH OTHER.</td>
                                        <td>AYUDENSE UNOS A OTROS.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/help-each-other.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>DO YOUR HOMEWORK!</td>
                                        <td>HAZ TU AREA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/do-your-home-work.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>BRING IN YOUR HOMEWORK.</td>
                                        <td>TRAIGAN SU TAREA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/bring-in-your-home-work.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>CORRECT YOUR MISTAKES.</td>
                                        <td>CORRIJAN SUS ERRORES.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/correct-your-mistakes.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>HAND IN YOUR HOMEWORK.</td>
                                        <td>ENTREGUEN SU TAREA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/hand-in-your-homework.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>COLLECT THE TESTS.</td>
                                        <td>RECOJA LOS EXAMENES.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/collect-the-tests.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>OPEN THE WINDOW.</td>
                                        <td>ABRAN LA VENTANA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/open-the-window.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>CLOSE THE WINDOW.</td>
                                        <td>CIERREN LA VENTANA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/close-the-window.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>OPEN/CLOSE THE DOOR.</td>
                                        <td>ABRAN /CIERREN LA PUERTA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/open-the-door.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>TAKE NOTES.</td>
                                        <td>TOMAR NOTAS.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/take-notes.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>READ THE TEXT.</td>
                                        <td>LEA EL TEXTO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/read-the-text.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>GO TO PAGE 87.</td>
                                        <td>IR A LA PAGINA 87.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/go-to-page-87.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>COPY.</td>
                                        <td>COPIAR.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/copy.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>TURN OFF YOUR CELL PHONE.</td>
                                        <td>APAGUE SU CELULAR</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/turn-off-you-cellphone.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>DON´T WRITE.</td>
                                        <td>NO ESCRIBAN.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/dont-write.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>LISTEN AND REPEAT.</td>
                                        <td>ESCUCHEN Y REPITAN.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/listen-and-repeat.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>DON´T SPEAK SPANISH!.</td>
                                        <td>NO HABLE ESPAÑOL.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/dont-speak-spanish.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>BE QUIET!</td>
                                        <td>SILENCIO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/be-quiet.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>PAY ATTENTION.</td>
                                        <td>PONGA CUIDADO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/pay-attention.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>   
                    </div>
                    <div className="Pie"></div>
                </div>

                {/* hoja 6*/}

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
                            <table>
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
                                        <td>CRAYON.</td>
                                        <td>CRAYOLA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Crayon.mp3')}}></span></td>
                                    </tr>
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
                                        <td>COMPÁS.</td>
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
                                </tbody>
                            </table>
                        </div>   
                    </div>
                    <div className="Pie"></div>
                </div>

                {/* hoja 7*/}

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
                            <table>
                                <tbody>
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
                                        <td>NO MÁS.</td>
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
                                    <tr>
                                        <td>BAG.</td>
                                        <td>BOLSA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/Bag.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>BOOK (BAG)</td>
                                        <td>MALETÍN DE CUADERNOS.</td>
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
                    <div className="Pie"></div>
                </div>

                 {/* hoja 8*/}

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
                            <table>
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
                                    <tr>
                                        <td>BROWN.</td>
                                        <td>CAFÉ.</td>
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
                        <img className="rellenoPc" src="img/courses/colorspen.png"></img>   
                    </div>
                    <div className="Pie"></div>
                </div>

                {/* hoja 9*/}

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
                            <table>
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
                                        <td>triángulo.</td>
                                        <td><img src='./img/courses/triangle.png'className="SHAPES" alt="TRIANGLE"/></td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/TRIANGLE.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>HEXAGON.</td>
                                        <td>hexágono.</td>
                                        <td><img src='./img/courses/hexagon.png'className="SHAPES" alt="HEXAGON"/></td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/HEXAGON.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>RECTANGLE.</td>
                                        <td>Rectángulo.</td>
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
                    <div className="Pie"></div>
                </div>

                {/* hoja 10*/}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/shapes.png'className="Esquina" alt="Shapes"/>
                    </div>
                    <div className="Contenido">
                        <div className="bloque">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>STAR.</td>
                                        <td>Estrella.</td>
                                        <td><img src='./img/courses/star.png'className="SHAPES" alt="STAR"/></td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/STAR.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>PENTAGON.</td>
                                        <td>Pentágono.</td>
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
                </div>

                {/* hoja 11 */}

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
                            <table>
                                <tbody>
                                    <tr>
                                        <td>APPLE.</td>
                                        <td>MANZANA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>COCONUT.</td>
                                        <td>COCO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>PEACH.</td>
                                        <td>DURAZNO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>PEAR.</td>
                                        <td>PERA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>CHERRY.</td>
                                        <td>CEREZA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>BANANA.</td>
                                        <td>BANANO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>PLUM.</td>
                                        <td>CIRUELA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>APRICOT.</td>
                                        <td>ALBARICOQUE.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>KIWI.</td>
                                        <td>KIWI.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>MANGO.</td>
                                        <td>MANGO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>PAPAYA.</td>
                                        <td>PAPAYA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>FIG.</td>
                                        <td>BREVA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>AVOCADO.</td>
                                        <td>AGUACATE.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>LEMON.</td>
                                        <td>LIMON.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>GRAPES.</td>
                                        <td>UVAS.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>RAISINS.</td>
                                        <td>UVAS PASAS.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>STRAWBERRY.</td>
                                        <td>FRESA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>BLACKBERRY.</td>
                                        <td>MORA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>ORANGE.</td>
                                        <td>NARANJA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>MELON.</td>
                                        <td>MELON.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>TANGERINE.</td>
                                        <td>MANDARINA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>PINEAPPLE.</td>
                                        <td>PIÑA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>WATERMELON.</td>
                                        <td>SANDIA/PATILLA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>   
                    </div>
                </div>

                {/* hoja 12 */}

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
                            <table>
                                <tbody>
                                    <tr>
                                        <td>A (ei)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>B (bi)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>C (ci)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>D (di)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>E (ii)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>F (ef)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>G (yi)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>H (eich)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>I (ai)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>J (yei)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>K (kei)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>L (el)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>M (em)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>N (n)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>O (ou)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>P (pi)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Q (kiu)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>R (ar)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>S (es)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>T (ti)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>U (iu)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>V (vi)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>W (dabliu)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>X (ex)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Y (uai)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>Z (zii)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>   
                        <img className="rellenoPm" src="./img/courses/alphabet-animal.png"></img>
                    </div>
                </div>

                {/* hoja 12 */}

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
                            <table>
                                <tbody>
                                    <tr>
                                        <td>CAR.</td>
                                        <td>CARRO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>TRAIN.</td>
                                        <td>TREN.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>MOTORCYCLE.</td>
                                        <td>MOTOCICLETA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>BIKE.</td>
                                        <td>BICICLETA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>BOAT.</td>
                                        <td>BOTE.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>SHIP.</td>
                                        <td>BARCO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>BUS.</td>
                                        <td>BUS.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="linea"></div>
                        <div className="titulos">
                            <h2>FARM ANIMALS</h2>
                            <h3>ANIMALES DE FINCA</h3>
                        </div>
                        <div className="bloque">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>ROOSTER.</td>
                                        <td>GALLO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>CHICKEN.</td>
                                        <td>POLLO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>HEN.</td>
                                        <td>GALLINA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>CHICK.</td>
                                        <td>POLLITO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>TURKEY.</td>
                                        <td>PAVO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>GOAT.</td>
                                        <td>CHIVO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>SHEEP.</td>
                                        <td>OVEJA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>LAMB.</td>
                                        <td>CORDERO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>HORSE.</td>
                                        <td>CABALLO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>PONY.</td>
                                        <td>CABALLITO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>PIG.</td>
                                        <td>CERDO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>PIGLET.</td>
                                        <td>LECHON.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>COW.</td>
                                        <td>VACA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>BULL.</td>
                                        <td>TORO).</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>CALF.</td>
                                        <td>TERNERO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>    
                    </div>
                    <div className="Pie"></div>
                </div>

                {/* hoja 13 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/wildAnimals.png'className="Esquina" alt="Wild Animals"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>WILD ANIMAL</h2>
                            <h3>ANIMALES SALVAJES</h3>
                        </div>
                        <div className="bloque">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>TIGER.</td>
                                        <td>TIGRE.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>LION.</td>
                                        <td>LEON.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>LEOPARD.</td>
                                        <td>LEOPARDO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>JAGUAR.</td>
                                        <td>JAGUAR.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>GIRAFFE.</td>
                                        <td>JIRAFA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>BEAR.</td>
                                        <td>OSO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>WOLF.</td>
                                        <td>LOBO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>FOX.</td>
                                        <td>ZORRO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>ELEPHANT.</td>
                                        <td>ELEFANTE.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>HIPPOPOTAMUS.</td>
                                        <td>HIPOPOTAMO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>COCODRILE.</td>
                                        <td>COCODRILO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>HYENA.</td>
                                        <td>HIENA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>SNAKE.</td>
                                        <td>SERPIENTE.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>ALLIGATOR.</td>
                                        <td>CAIMAN.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>MONKEY</td>
                                        <td>MONO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>EAGLE.</td>
                                        <td>AGUILA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="linea"></div>
                        <div className="titulos">
                            <h2>PLACES IN THE CITY</h2>
                            <h3>SITIOS EN LA CIUDAD</h3>
                        </div>
                        <div className="bloque">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>CITY HALL.</td>
                                        <td>ALCALDIA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>POLICE STATION.</td>
                                        <td>ESTACION DE POLICIA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>FIRE STATION..</td>
                                        <td>ESTACION DE BOMBEROS.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>LIBRARY.</td>
                                        <td>BIBLIOTECA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>COURT HOUSE.</td>
                                        <td>JUZGADOS.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>SUPERMARKET.</td>
                                        <td>SUPERMERCADOS.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>    
                    </div>
                    <div className="Pie"></div>
                </div>

                {/* hoja 14 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/expressions.png'className="Esquina" alt="Expressions"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>PLACES IN THE CITY</h2>
                            <h3>SITIOS EN LA CIUDAD</h3>
                        </div>
                        <div className="bloque">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>PARK.</td>
                                        <td>PARQUE.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>PARKING LOT.</td>
                                        <td>PARQUEADERO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>MUSEUM.</td>
                                        <td>MUSEO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>STADIUM.</td>
                                        <td>ESTADIO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>SHOPPING MALL.</td>
                                        <td>CENTRO COMERCIAL.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>TRAIN STATION.</td>
                                        <td>ESTACION DE FERROCARRIL.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>BUS STATION.</td>
                                        <td>TERMINAL DE BUS.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>DOWN TOWN.</td>
                                        <td>CENTRO DE CIUDAD.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>POST OFFICE.</td>
                                        <td>OFICINA DE CORREO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>THEATER.</td>
                                        <td>TEATRO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>CINEMA.</td>
                                        <td>SALA DE CINE.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>RESTAURANT.</td>
                                        <td>RESTAURANTE.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>ZOO.</td>
                                        <td>ZOOLOGICO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="linea"></div>
                        <div className="titulos">
                            <h2>PLACES IN THE SCHOOL</h2>
                            <h3>SITIOS EN EL COLEGIO</h3>
                        </div>
                        <div className="bloque">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>PRINCIPAL´S OFFICE.</td>
                                        <td>OFICINA DEL RECTOR.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>CAFETERIA.</td>
                                        <td>CAFETERIA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>CLASSROOMS.</td>
                                        <td>SALONES DE CLASE.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>NURSE´S OFFICE.</td>
                                        <td>ENFERMERIA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>LOCKERS.</td>
                                        <td>CASILLEROS.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>FRONT DESK.</td>
                                        <td>RECEPCION.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>PLAYGROUND.</td>
                                        <td>PATIO DE RECREO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>AUDITORIUM.</td>
                                        <td>AUDITORIO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>SPORTS FIELD.</td>
                                        <td>CAMPO DE DEPORTES.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>   
                    </div>
                    <div className="Pie"></div>
                </div>

                {/* hoja 15 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/expressions.png'className="Esquina" alt="Expressions"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>PLACES IN THE SCHOOL</h2>
                            <h3>SITIOS EN EL COLEGIO</h3>
                        </div>
                        <div className="bloque">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>TEACHERS’ LOUNGE.</td>
                                        <td>SALA DE PROFESORES.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>BATHROOMS.</td>
                                        <td>BAÑOS.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>LIBRARY.</td>
                                        <td>BIBLIOTECA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>LAB.</td>
                                        <td>LABORATORIO.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>SWIMMING POOL.</td>
                                        <td>PISCINA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>OFFICE.</td>
                                        <td>OFICINA.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>SOCCER FIELD.</td>
                                        <td>CAMPO DE FUTBOL.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>BASKETBALL COURT.</td>
                                        <td>CANCHA DE BASQUET.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>   
                    </div>
                    <div className="Pie"></div>
                </div>

                {/* hoja 16 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/expressions.png'className="Esquina" alt="Expressions"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>NUMBERS</h2>
                            <h3>NUMEROS</h3>
                        </div>
                        <div className="bloque">
                            <table>
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
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>--</td>
                                        <td>--</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>One</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>1st</td>
                                        <td>First</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Two</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>2nd</td>
                                        <td>Second</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Three</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>3nd</td>
                                        <td>Third</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Four</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>4th</td>
                                        <td>Fourth</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Five</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>5th</td>
                                        <td>Fifth</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Six</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>6th</td>
                                        <td>Sixth</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>Seven</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>7th</td>
                                        <td>Seventh</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>Eight</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>8th</td>
                                        <td>Eighth</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>Nine</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>9th</td>
                                        <td>Ninth</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td>Ten</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>10th</td>
                                        <td>Tenth</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>11</td>
                                        <td>Eleven</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>11th</td>
                                        <td>Eleventh</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>12</td>
                                        <td>Twelve</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>12th</td>
                                        <td>Twelfth</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>13</td>
                                        <td>Thirteen</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>13th</td>
                                        <td>Thirteenth</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>14</td>
                                        <td>Fourteen</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>14th</td>
                                        <td>Fourteenth</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>15</td>
                                        <td>Fifteen</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>15th</td>
                                        <td>Fifteenth</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>16</td>
                                        <td>Sixteen</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>16th</td>
                                        <td>Sixteenth</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>17</td>
                                        <td>Seventeen</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>17th</td>
                                        <td>Seventeenth</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>18</td>
                                        <td>Eigthteen</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>18th</td>
                                        <td>Eighteenth</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>19</td>
                                        <td>Nineteen</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>19th</td>
                                        <td>Nineteenth</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>20</td>
                                        <td>Twenty</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>20th</td>
                                        <td>Twentieh</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>21</td>
                                        <td>Twenty-one</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>21st</td>
                                        <td>Twenty-first</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>30</td>
                                        <td>Thirty</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>30th</td>
                                        <td>Thirtieth</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>40</td>
                                        <td>Forty</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>   
                    </div>
                    <div className="linea"></div>
                    <div className="Pie"></div>
                </div>

                {/* hoja 17 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/expressions.png'className="Esquina" alt="Expressions"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>NUMBERS</h2>
                            <h3>NUMEROS</h3>
                        </div>
                        <div className="bloque">
                            <table>
                                <thead>
                                    <tr>
                                        <th colSpan="3">Cardinal numbers</th>
          	                            <th colSpan="3">Ordinal numbers</th>  	
                                    </tr>      
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>50</td>
                                        <td>Fifty</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>60</td>
                                        <td>Sixty</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>70</td>
                                        <td>Seventy</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>80</td>
                                        <td>Eighty</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>90</td>
                                        <td>Ninety</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>100</td>
                                        <td>a/one hundred</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>1,000</td>
                                        <td>a/one thousand</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>10,000</td>
                                        <td>ten thousand</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>100,000</td>
                                        <td>a/one hundred thousand</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>1,000,000</td>
                                        <td>a/one million</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>1,000,000,000</td>
                                        <td>a/one billion</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>   
                    </div>
                    <div className="linea"></div>
                    <div className="Pie"></div>
                </div>

                {/* hoja 18 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/expressions.png'className="Esquina" alt="Expressions"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>ADJETIVES</h2>
                            <h3>adjetivos</h3>
                        </div>
                        <div className="bloque">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Tall</td>
                                        <td>Alto</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>Pretty</td>
                                        <td>-Bonita-</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Short</td>
                                        <td>Bajo</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>Smart</td>
                                        <td>Inteligente</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Big</td>
                                        <td>Grande</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>Intelligent</td>
                                        <td>Inteligente</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Small</td>
                                        <td>Pequeño</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>Expensive</td>
                                        <td>Costoso</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Heavy</td>
                                        <td>Pesado</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>Cheap</td>
                                        <td>Barato</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Thing</td>
                                        <td>Liviano</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>Large</td>
                                        <td>Grande</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Handsome</td>
                                        <td>Apuesto</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>Long</td>
                                        <td>Largo</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>ugly</td>
                                        <td>feo</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>Tinny</td>
                                        <td>Pequeño</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>strong</td>
                                        <td>Fuerte</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>Wide</td>
                                        <td>Ancho</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>weak</td>
                                        <td>Devil</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>narrow</td>
                                        <td>Angosto</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Fast</td>
                                        <td>Rápido</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>Hard</td>
                                        <td>Duro</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>slow</td>
                                        <td>Lento</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>soft</td>
                                        <td>Blando</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Clean</td>
                                        <td>Limpio</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>Happy</td>
                                        <td>Feliz</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Worry</td>
                                        <td>Preocupado</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>Nice</td>
                                        <td>Agradable</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>calm</td>
                                        <td>Calmado</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>mean</td>
                                        <td>Odioso</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>   
                    </div>
                    <div className="linea"></div>
                    <div className="Pie"></div>
                </div>

                {/* hoja 19 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/expressions.png'className="Esquina" alt="Expressions"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>TIME</h2>
                            <h3>Hora</h3>
                        </div>
                        <div className="bloque">
                            <table>
                                <tbody>
                                    <tr>
                                        <td><img src='./img/courses/time1.png'className="imgtimes" alt="SQUARE"/></td>
                                        <td><img src='./img/courses/time2.png'className="imgtimes" alt="SQUARE"/></td>
                                        <td><img src='./img/courses/time3.png'className="imgtimes" alt="SQUARE"/></td>
                                    </tr>
                                    <tr>
                                        <td>What's the time? <span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>It's ten past ten <span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>It's quarter past nine <span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>¿Que hora es?</td>
                                        <td>Son las diez y diez</td>
                                        <td>Son las nueve y cuarto</td>
                                    </tr>
                                    <tr>
                                        <td><img src='./img/courses/time4.png'className="imgtimes" alt="SQUARE"/></td>
                                        <td><img src='./img/courses/time5.png'className="imgtimes" alt="SQUARE"/></td>
                                        <td><img src='./img/courses/time6.png'className="imgtimes" alt="SQUARE"/></td>
                                    </tr>
                                    <tr>
                                        <td>It's twenty past twelve <span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>It's twenty- five past six <span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>It's half past eight <span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Son las doce y veinte</td>
                                        <td>Son las seis y veinticinco</td>
                                        <td>Son las ocho y media</td>
                                    </tr>
                                    <tr>
                                        <td><img src='./img/courses/time7.png'className="imgtimes" alt="SQUARE"/></td>
                                        <td><img src='./img/courses/time8.png'className="imgtimes" alt="SQUARE"/></td>
                                        <td><img src='./img/courses/time9.png'className="imgtimes" alt="SQUARE"/></td>
                                    </tr>
                                    <tr>
                                        <td>It's twenty-five to six <span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>It's five minutes to six <span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>It's three o'clock <span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>25 para las seis</td>
                                        <td>Son cinco para las seis</td>
                                        <td>Son las tres en punto</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>   
                    </div>
                    <div className="Pie"></div>
                </div>

                {/* hoja 20 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/expressions.png'className="Esquina" alt="Expressions"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>DAYS OF THE WEEK</h2>
                            <h3>dias de la semana</h3>
                        </div>
                        <div className="bloque">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Monday-Lunes.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Tuesday-Martes.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Wednesday-Miércoles.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Thursday-Jueves.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Friday-Viernes.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Saturday-Sábado.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Sunday-Domingo.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>   
                    </div>
                    <div className="linea"></div>
                    <div className="titulos">
                            <h2>MONTHS OF THE YEAR</h2>
                            <h3>meses del año</h3>
                        </div>
                        <div className="bloque">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>January-Enero.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>February-Febrero.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>March-Marzo.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>April-Abril.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>May-Mayo.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>June-Junio.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>July-Julio.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>August-Agosto.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>September-Septiembre.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>October-October.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>November-Noviembre.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>December-Diciembre.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    <div className="Pie"></div>
                </div>

                {/* hoja 21 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/expressions.png'className="Esquina" alt="Expressions"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>DATES</h2>
                            <h3>Fechas</h3>
                        </div>
                        <div className="bloque">
                            <table>
                                <tbody>
                                    <tr>
                                        <td><p className="txt-ali">Normalmente, las fechas se escriben 
                                        en el siguiente orden: mes / día / año
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
                        <div className="linea"></div>
                        <div className="titulos">
                            <h2>HOLIDAYS</h2>
                            <h3>días festivos en Estados Unidos</h3>
                            <h4>United States Legal Federal Holidays 2011</h4>
                        </div>
                        <div className="bloque">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>January 1, 2011 (saturday): New Year's Day [Jan. 1 every year]</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>January 17, 2011 (monday): Martin Luther King Day [3rd monday in Jan]</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            February 21, 2011 (monday): Presidents Day (observed) [3rd monday in Feb] <strong>Note:</strong> Presidents Day is also Washington's Birthday (observed)
                                        </td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            May 30, 2011 (monday): Memorial Day (observed) [last monday in May]
                                        </td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            July 4, 2011 (monday): Independence Day [July 4th every year]
                                        </td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            September 5, 2011 (monday): Labor Day [1st monday in Sept]
                                        </td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            October 10, 2011 (monday): Columbus Day (observed) [2nd monday in Oct]
                                        </td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            November 11, 2011 (friday): Veterans' Day [Nov. 11 every year]
                                        </td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            November 24, 2011 (thursday): Thanksgiving Day [4th thursday in Nov]
                                        </td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            December 25, 2011 (sunday): Christmas Day [Dec. 25 every year]
                                        </td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            December 26, 2011 (monday): federal employees extra day off for Christmas
                                        </td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>                    
                        <div className="Pie"></div>
                    </div>
                </div>

                {/* hoja 22 */}

                 <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/expressions.png'className="Esquina" alt="Expressions"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>FAMILY</h2>
                            <h3>FAMILIA</h3>
                        </div>
                        <div className="bloque">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>aunt</td>
                                        <td>tía</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>boyfriend</td>
                                        <td>novio</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>brother</td>
                                        <td>hermano</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>brother-in-law</td>
                                        <td>cuñado</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Cousin</td>
                                        <td>primo/a</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>daughter</td>
                                        <td>hija</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>daughter-in-law</td>
                                        <td>nuera</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>father</td>
                                        <td>padre</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>father-in-law</td>
                                        <td>suegro</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>girlfriend</td>
                                        <td>novia</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>godfather</td>
                                        <td>padrino</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>godmother</td>
                                        <td>madrina</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>grandchildren</td>
                                        <td>nietos</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>granddaughter</td>
                                        <td>nieta</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>grandfather</td>
                                        <td>Abuelo</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>grandmother</td>
                                        <td>abuela</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>grandparents</td>
                                        <td>abuelos</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>grandson</td>
                                        <td>nieto</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>great-grandfather</td>
                                        <td>bisabuelo</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>great-grandmother</td>
                                        <td>bisabuela</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>husband</td>
                                        <td>esposo, marido</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>mother</td>
                                        <td>madre</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>nephew</td>
                                        <td>sobrino</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>niece</td>
                                        <td>sobrina</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>parents</td>
                                        <td>padres</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>sister</td>
                                        <td>hermana</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>   
                    </div>
                    <div className="Pie"></div>
                </div>

                {/* hoja 23 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/expressions.png'className="Esquina" alt="Expressions"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>FAMILY</h2>
                            <h3>FAMILIA</h3>
                        </div>
                        <div className="bloque">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>son</td>
                                        <td>hijo</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>stepdaughter</td>
                                        <td>hijastra</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>stepmother</td>
                                        <td>madrastra</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>stepfather</td>
                                        <td>padrastro</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>stepson</td>
                                        <td>hijastro</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>uncle</td>
                                        <td>tío</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Wife</td>
                                        <td>esposa, mujer</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>twins</td>
                                        <td>gemelos</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>relative</td>
                                        <td>pariente</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="linea"></div>
                        <div className="titulos">
                            <h2>Sickness</h2>
                            <h3>enfermedades</h3>
                        </div>
                        <div className="bloque">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Backache</td>
                                        <td>dolor de espalda</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Headache</td>
                                        <td>dolor de cabeza</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Stomachache</td>
                                        <td>dolor de estomago</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Earache</td>
                                        <td>dolor de oído</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Toothache</td>
                                        <td>dolor de muela</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Sore throat</td>
                                        <td>dolor de garganta</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Flu</td>
                                        <td>gripe</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Cold</td>
                                        <td>resfriado</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Fever</td>
                                        <td>fiebre</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Sneeze</td>
                                        <td>Estornudo</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Cough</td>
                                        <td>tos</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Dizzy</td>
                                        <td>mareado</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Runny nose</td>
                                        <td>secresion nasal</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="Pie"></div>
                </div>

                {/* hoja 24 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/expressions.png'className="Esquina" alt="Expressions"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>FAMILY</h2>
                            <h3>FAMILIA</h3>
                        </div>
                        <div className="bloque">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>son</td>
                                        <td>hijo</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>stepdaughter</td>
                                        <td>hijastra</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>stepmother</td>
                                        <td>madrastra</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>stepfather</td>
                                        <td>padrastro</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>stepson</td>
                                        <td>hijastro</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>uncle</td>
                                        <td>tío</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Wife</td>
                                        <td>esposa, mujer</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>twins</td>
                                        <td>gemelos</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>relative</td>
                                        <td>pariente</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="linea"></div>
                        <div className="titulos">
                            <h2>Sickness</h2>
                            <h3>enfermedades</h3>
                        </div>
                        <div className="bloque">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Backache</td>
                                        <td>dolor de espalda</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Headache</td>
                                        <td>dolor de cabeza)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Stomachache</td>
                                        <td>dolor de estomago</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Earache</td>
                                        <td>dolor de oído</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Toothache</td>
                                        <td>dolor de muela</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Sore throat</td>
                                        <td>dolor de garganta</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Flu</td>
                                        <td>gripe</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Cold</td>
                                        <td>resfriado</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Fever</td>
                                        <td>fiebre</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Sneeze</td>
                                        <td>Estornudo</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Cough</td>
                                        <td>tos</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Dizzy</td>
                                        <td>mareado</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Runny nose</td>
                                        <td>secresion nasal</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="Pie"></div>
                </div>

                {/* hoja 25 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/expressions.png'className="Esquina" alt="Expressions"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>FAMILY</h2>
                            <h3>FAMILIA</h3>
                        </div>
                        <div className="bloque">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Cavity</td>
                                        <td>carie</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Hiccups</td>
                                        <td>hipo</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Sunburn</td>
                                        <td>quemadura de sol</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Vomit/throw up</td>
                                        <td>vomitar</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Bruise</td>
                                        <td>moretón</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Burp</td>
                                        <td>eructar</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="linea"></div>
                        <div className="titulos">
                            <h2>PARTS OF THE BODY</h2>
                            <h3>PARTES DEL CUERPO</h3>
                        </div>
                        <div className="bloque">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Head</td>
                                        <td>Cabeza</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Shoulder</td>
                                        <td>Hombro</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Chest</td>
                                        <td>Tórax</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Arm</td>
                                        <td>Brazo</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Wrist</td>
                                        <td>Muñeca</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Hip</td>
                                        <td>Cadera</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Leg</td>
                                        <td>Pierna</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Foot</td>
                                        <td>Pie</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Face</td>
                                        <td>Cara</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Elbow</td>
                                        <td>Codo</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Hand</td>
                                        <td>Mano</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Neck</td>
                                        <td>Cuello</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Waist</td>
                                        <td>Cintura</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Thigh</td>
                                        <td>Muslo</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Knee</td>
                                        <td>Rodilla</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Shin</td>
                                        <td>Espinilla</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Ankle</td>
                                        <td>Tobillo</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="Pie"></div>
                </div>

                {/* hoja 26 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/expressions.png'className="Esquina" alt="Expressions"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>CLOTHES VOCABULARY</h2>
                            <h3>VOCABULARIO DE ROPA</h3>
                        </div>
                        <div className="bloque">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Men's Clothes</td>
                                        <td>carie</td>
                                        <td>carie</td>
                                        <td>carie</td>
                                    </tr>
                                    <tr>
                                        <td>.</td>
                                        <td>dress(es)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>shirt(s)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>tie(s)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Women's Clothes</td>
                                        <td>carie</td>
                                        <td>carie</td>
                                        <td>carie</td>
                                    </tr>
                                    <tr>
                                        <td>.</td>
                                        <td>dress(es)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>blouse(s)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>skirt(s)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Uni-Sex</td>
                                        <td>carie</td>
                                        <td>carie</td>
                                        <td>carie</td>
                                    </tr>
                                    <tr>
                                        <td>.</td>
                                        <td>coat(s)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>jacket(s)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>t-shirt(s)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>.</td>
                                        <td>carie</td>
                                        <td>carie</td>
                                        <td>carie</td>
                                    </tr>
                                    <tr>
                                        <td>.</td>
                                        <td>trouser(s)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>jean(s)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>short(s)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>.</td>
                                        <td>carie</td>
                                        <td>carie</td>
                                        <td>carie</td>
                                    </tr>
                                    <tr>
                                        <td>.</td>
                                        <td>jumper(s) pullover(s)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>cardigan(s)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>sweatshirt(s)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>.</td>
                                        <td>carie</td>
                                        <td>carie</td>
                                        <td>.</td>
                                    </tr>
                                    <tr>
                                        <td>.</td>
                                        <td>glove(s)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>mitten(s)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>.</td>
                                        {/* <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td> */}
                                    </tr>                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="Pie"></div>
                </div>

                {/* hoja 27 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/expressions.png'className="Esquina" alt="Expressions"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>CLOTHES VOCABULARY</h2>
                            <h3>VOCABULARIO DE ROPA</h3>
                        </div>
                        <div className="bloque">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Baby Clothes</td>
                                        <td>carie</td>
                                        <td>carie</td>
                                        <td>carie</td>
                                    </tr>
                                    <tr>
                                        <td>.</td>
                                        <td>romper suit(s)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>nappy (nappies)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>.</td>
                                        {/* <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td> */}
                                    </tr>
                                    <tr>
                                        <td>Holiday/Leisure Clothes</td>
                                        <td>carie</td>
                                        <td>carie</td>
                                        <td>carie</td>
                                    </tr>
                                    <tr>
                                        <td>.</td>
                                        <td>swimming trunk(s)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>bikini(s)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>swimsuit(s) swimming costume(s) bathing costume(s)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Nightwear</td>
                                        <td>carie</td>
                                        <td>carie</td>
                                        <td>carie</td>
                                    </tr>
                                    <tr>
                                        <td>.</td>
                                        <td>nightdress(es) nightie(s)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>pyjama(s)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>dressing gown(s)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Underwear Mens</td>
                                        <td>carie</td>
                                        <td>carie</td>
                                        <td>carie</td>
                                    </tr>
                                    <tr>
                                        <td>.</td>
                                        <td>boxers</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>y-fronts</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>Ladies (Lingerie)</td>
                                        <td>carie</td>
                                        <td>carie</td>
                                        <td>carie</td>
                                    </tr>
                                    <tr>
                                        <td>.</td>
                                        <td>bra(s)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>panties(s)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>.</td>
                                        <td>carie</td>
                                        <td>carie</td>
                                        <td>.</td>
                                    </tr>
                                    <tr>
                                        <td>.</td>
                                        <td>stocking(s)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>tight(s)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>.</td>
                                        {/* <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td> */}
                                    </tr>
                                    <tr>
                                        <td>Footwear</td>
                                        <td>carie</td>
                                        <td>carie</td>
                                        <td>carie</td>
                                    </tr>
                                    <tr>
                                        <td>.</td>
                                        <td>shoe(s)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>sandal(s)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>boot(s)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>.</td>
                                        <td>carie</td>
                                        <td>carie</td>
                                        <td>.</td>
                                    </tr>
                                    <tr>
                                        <td>.</td>
                                        <td>wellington(s)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>slipper(s)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>sock(s)</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>                                                 
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="Pie"></div>
                </div>

                {/* hoja 28 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/expressions.png'className="Esquina" alt="Expressions"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>FOOD</h2>
                            <h3>COMIDA</h3>
                        </div>
                        <div className="bloque">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            A lot of food is made up of uncountable nouns, to make them countable you need to put them in another form. 
                                        </td>
                                        <td>
                                            For example:-
                                            "A ...... of ......".="A piece of fruit."
                                            Here is a list of some of the uncountable nouns in this quarter's vocabulary and some ways to make them countable.
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>asparagus</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>A bunch of asparagus.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>beef</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>A slice of beef.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>bread</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>A slice of bread.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr> 
                                    <tr>
                                        <td>broccoli</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>A piece of broccoli.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>   
                                    <tr>
                                        <td>butter</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>A pat of butter.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>   
                                    <tr>
                                        <td>corn</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>An ear of corn.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>    
                                    <tr>
                                        <td>fruit</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>A piece of fruit.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>    
                                    <tr>
                                        <td>garlic</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>A bulb of garlic.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>    
                                    <tr>
                                        <td>honey</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>A pot of honey.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>    
                                    <tr>
                                        <td>jam</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>A jar of jam.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>lamb</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>A leg of lamb.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>    
                                    <tr>
                                        <td>pepper</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>A pot of pepper.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>    
                                    <tr>
                                        <td>pork</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>A joint of pork.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>            
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="Pie"></div>
                </div>

                {/* hoja 29 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/expressions.png'className="Esquina" alt="Expressions"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>FOOD</h2>
                            <h3>COMIDA</h3>
                        </div>
                        <div className="bloque">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>rice</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>A grain of rice.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>salt</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>A pinch of salt.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>spaghetti</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>A strand of spaghetti.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr> 
                                    <tr>
                                        <td>sugar</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                        <td>A cube of sugar.</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>             
                                </tbody>
                            </table>
                        </div>
                        <div className="linea"></div>
                        <div className="titulos">
                            <h2>Things to do with eggs</h2>
                        </div>
                        <div className="bloque">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>img</td>
                                        <td>egg</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>img</td>
                                        <td>boiled egg</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>
                                    <tr>
                                        <td>img</td>
                                        <td>scrambled egg</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr> 
                                    <tr>
                                        <td>img</td>
                                        <td>fried egg</td>
                                        <td><span className="btnA fas fa-play-circle" onClick={(e) => {this.funcion(e, './audio/answer.mp3')}}></span></td>
                                    </tr>             
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="Pie"></div>
                </div>

                {/* hoja 30 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/quiz.png'className="Esquina" alt="Quiz"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>Quiz 1</h2>
                            <h3>Examen 1</h3>
                        </div>
                        
                        <div className="bloque">
                            <div className="questions">
                                <h3>*Select the correct option for each exercise.</h3>

                                <span className="Quiz">1)Which of these words is a greeting?</span>
                                <form className="Answer">
                                    <label>A) Good Bye <input type="radio" name="answer1" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer1')}}></input></label>
                                    <label>B) Good Afternoon <input type="radio" name="answer1" onChange={(e) => {this.quiz(e, 'Correcto', 'answer1')}}></input></label>
                                    <label>C) Take Care <input type="radio" name="answer1" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer1')}}></input></label>
                                    <span id="answer1"></span>
                                </form>
                                <span className="Quiz">2)How are you today?</span>
                                <form className="Answer">
                                    <label>A) See you tomorrow <input type="radio" name="answer2" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer2')}}></input></label>
                                    <label>B) Thank you <input type="radio" name="answer2" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer2')}}></input></label>
                                    <label>C) Fine And you? <input type="radio" name="answer2" onChange={(e) => {this.quiz(e, 'Correcto', 'answer2')}}></input></label>
                                    <span id="answer2"></span>
                                </form>
                                <span className="Quiz">3)Where are you from?</span>
                                <form className="Answer">
                                    <label>A) Very well <input  type="radio" name="answer3" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer3')}}></input></label>
                                    <label>B) I from Brazil <input  type="radio" name="answer3" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer3')}}></input></label>
                                    <label>C) I am from Brazil <input  type="radio" name="answer3" onChange={(e) => {this.quiz(e, 'Correcto', 'answer3')}}></input></label>
                                    <span id="answer3"></span>
                                </form>
                                <span className="Quiz">4)What is your name?</span>
                                <form className="Answer">
                                    <label>A) My name is Kevin <input  type="radio" name="answer4" onChange={(e) => {this.quiz(e, 'Correcto', 'answer4')}}></input></label>
                                    <label>B) My name Kevin <input  type="radio" name="answer4" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer4')}}></input></label>
                                    <label>C) Her name is Kevin <input type="radio" name="answer4" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer4')}}></input></label>
                                    <span id="answer4"></span>
                                </form>
                                <span className="Quiz">5)Which of these words is a farewell?</span>
                                <form className="Answer">
                                    <label>A) Hello <input type="radio" name="answer5" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer5')}}></input></label>
                                    <label>B) See you later <input  type="radio" name="answer5" onChange={(e) => {this.quiz(e, 'Correcto', 'answer5')}}></input></label>
                                    <label>C) I am fine <input type="radio" name="answer5" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer5')}}></input></label>
                                    <span id="answer5"></span>
                                </form>

                                <h3>*From exercise 6-10 select the correct expression to use in the classroom.</h3>

                                <form className="Answer">
                                    <label>6) A) Open your book <input type="radio" name="answer6" onChange={(e) => {this.quiz(e, 'Correcto', 'answer6')}}></input></label>
                                    <label>B) Not too bad <input  type="radio" name="answer6" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer6')}}></input></label>
                                    <label>C) Reb <input type="radio" name="answer6"  onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer6')}}></input></label>
                                    <span id="answer6"></span>
                                </form>
                                <form className="Answer">
                                    <label>7) A) I live with my mother <input  type="radio" name="answer7" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer7')}}></input></label>
                                    <label>B) Nothing much <input type="radio" name="answer7" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer7')}}></input></label>
                                    <label>C) Do the homework <input  type="radio" name="answer7" onChange={(e) => {this.quiz(e, 'Correcto', 'answer7')}}></input></label>
                                    <span id="answer7"></span>
                               </form>
                                <form className="Answer">
                                    <label>8) A) Study page 8 <input  type="radio" name="answer8" onChange={(e) => {this.quiz(e, 'Correcto', 'answer8')}}></input></label>
                                    <label>B) My best friend is <input  type="radio" name="answer8" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer8')}}></input></label>
                                    <label>C) What is your phone number?<input type="radio" name="answer8" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer8')}}></input></label>
                                    <span id="answer8"></span>
                                </form>
                                <form className="Answer">
                                    <label>9) A) How old are you? <input  type="radio" name="answer9" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer9')}}></input></label>
                                    <label>B) Listen and repeat <input  type="radio" name="answer9" onChange={(e) => {this.quiz(e, 'Correcto', 'answer9')}}></input></label>
                                    <label>C) Pretty good, thank you <input  type="radio" name="answer9" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer9')}}></input></label>
                                    <span id="answer9"></span>
                                </form>
                                <form className="Answer">
                                    <label>10) A) What’s up? <input  type="radio" name="answer10" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer10')}}></input></label>
                                    <label>B) Open your book! <input   type="radio" name="answer10" onChange={(e) => {this.quiz(e, 'Correcto', 'answer10')}}></input></label>
                                    <label>C) farewell <input type="radio" name="answer10"  onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer10')}}></input></label>
                                    <span id="answer10"></span>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="Pie"></div>
                </div>
                
                {/* hoja 31 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png' className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/quiz.png' className="Esquina" alt="Quiz"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>Quiz 1</h2>
                            <h3>Examen 1</h3>
                        </div>
                        
                        <div className="bloque">
                            <div className="questions">
                                <h3>*From exercise 11-15, select the correct word for each picture</h3>

                                <form className="Answer">
                                    <img src='./img/courses/aesComputer.png' className="" alt="Computer"/>
                                    <label>11) A) Book <input type="radio" name="answer11" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer11')}}></input></label>
                                    <label>B) Marker <input  type="radio" name="answer11" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer11')}}></input></label>
                                    <label>C) Computer <input  type="radio" name="answer11" onChange={(e) => {this.quiz(e, 'Correcto', 'answer11')}}></input></label>
                                    <span id="answer11"></span>
                                </form>
                                <form className="Answer">
                                    <img src='./img/courses/aesScissors.png' className="" alt="Scissors"/>
                                    <label>12) A) Scissors <input  type="radio" name="answer12" onChange={(e) => {this.quiz(e, 'Correcto', 'answer12')}}></input></label>
                                    <label>B) Eraser <input  type="radio" name="answer12" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer12')}}></input></label>
                                    <label>C) Paint <input  type="radio" name="answer12" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer12')}}></input></label>
                                    <span id="answer12"></span>
                                </form>
                                <form className="Answer">
                                    <img src='./img/courses/aesNotebook.png' className="" alt="Notebook"/>
                                    <label>13) A) Compass <input  type="radio" name="answer13" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer13')}}></input></label>
                                    <label>B) Notebook <input type="radio" name="answer13" onChange={(e) => {this.quiz(e, 'Correcto', 'answer13')}}></input></label>
                                    <label>C) Bag <input  type="radio" name="answer13" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer13')}}></input></label>
                                    <span id="answer13"></span>
                                </form>
                                <form className="Answer">
                                    <img src='./img/courses/aesRed.png' className="" alt="Red"/>
                                    <label>14) A) Blue <input  type="radio" name="answer14" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer14')}}></input></label>
                                    <label>B) Red <input  type="radio" name="answer14" onChange={(e) => {this.quiz(e, 'Correcto', 'answer14')}}></input></label>
                                    <label>C) White <input  type="radio" name="answer14" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer14')}}></input></label>
                                    <span id="answer14"></span>
                                </form>
                                <form className="Answer">
                                    <img src='./img/courses/aesBlack.png' className="" alt="Black"/>
                                    <label>15) A) Yellow <input  type="radio" name="answer15" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer15')}}></input></label>
                                    <label>B) Green <input  type="radio" name="answer15" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer15')}}></input></label>
                                    <label>C) Black <input type="radio" name="answer15" onChange={(e) => {this.quiz(e, 'Correcto', 'answer15')}}></input></label>
                                    <span id="answer15"></span>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="Pie"></div>
                </div>

                {/* hoja 32 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/quiz.png'className="Esquina" alt="Quiz"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>Quiz 2</h2>
                            <h3>Examen 2</h3>
                        </div>
                        
                        <div className="bloque">
                            <div className="questions">
                                <h3>*From exercise 1 to 5, select the correct spelling.</h3>

                                <form className="Answer">
                                    <label>1) A) Orange <input type="radio" name="answer16" onChange={(e) => {this.quiz(e, 'Correcto', 'answer16')}}></input></label>
                                    <label>B) Orrange <input  type="radio" name="answer16" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer16')}}></input></label>
                                    <label>C) Orangge <input  type="radio" name="answer16" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer16')}}></input></label>
                                    <span id="answer16"></span>
                                </form>
                                <form className="Answer">
                                    <label>2) A) Wuatermelon <input  type="radio" name="answer17" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer17')}}></input></label>
                                    <label>B) Watermellon <input  type="radio" name="answer17" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer17')}}></input></label>
                                    <label>C) Watermelon <input  type="radio" name="answer17" onChange={(e) => {this.quiz(e, 'Correcto', 'answer17')}}></input></label>
                                    <span id="answer17"></span>
                                </form>
                                <form className="Answer">
                                    <label>3) A) Train <input  type="radio" name="answer18" onChange={(e) => {this.quiz(e, 'Correcto', 'answer18')}}></input></label>
                                    <label>B) Trein <input type="radio" name="answer18" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer18')}}></input></label>
                                    <label>C) Trainn <input  type="radio" name="answer18" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer18')}}></input></label>
                                    <span id="answer18"></span>
                                </form>
                                <form className="Answer">
                                    <label>4) A) Horrse <input  type="radio" name="answer19" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer19')}}></input></label>
                                    <label>B) Horse <input  type="radio" name="answer19" onChange={(e) => {this.quiz(e, 'Correcto', 'answer19')}}></input></label>
                                    <label>C) Jorse <input  type="radio" name="answer19" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer19')}}></input></label>
                                    <span id="answer19"></span>
                                </form>
                                <form className="Answer">
                                    <label>5) A) Bout <input  type="radio" name="answer20" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer20')}}></input></label>
                                    <label>B) Boat <input  type="radio" name="answer20" onChange={(e) => {this.quiz(e, 'Correcto', 'answer20')}}></input></label>
                                    <label>C) Baot <input type="radio" name="answer20" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer20')}}></input></label>
                                    <span id="answer20"></span>
                                </form>

                                <h3>*From exercise 1 to 5, select the correct spelling.</h3>

                                <form className="Answer">
                                    <label>6) 64: A) Seventy four <input  type="radio" name="answer21" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer21')}}></input></label>
                                    <label>B) Fifty four <input  type="radio" name="answer21" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer21')}}></input></label>
                                    <label>C) Sixty four <input type="radio" name="answer21" onChange={(e) => {this.quiz(e, 'Correcto', 'answer21')}}></input></label>
                                    <span id="answer21"></span>
                                </form>
                                <form className="Answer">
                                    <label>7) 13: A) Thirty <input  type="radio" name="answer22" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer22')}}></input></label>
                                    <label>B) Thirteen <input  type="radio" name="answer22" onChange={(e) => {this.quiz(e, 'Correcto', 'answer22')}}></input></label>
                                    <label>C) Thirteen three <input type="radio" name="answer22" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer22')}}></input></label>
                                    <span id="answer22"></span>
                                </form>
                                <form className="Answer">
                                    <label>8) 100: A) One thousand <input  type="radio" name="answer23" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer23')}}></input></label>
                                    <label>B) One hundred <input  type="radio" name="answer23" onChange={(e) => {this.quiz(e, 'Correcto', 'answer23')}}></input></label>
                                    <label>C) One million <input type="radio" name="answer23" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer23')}}></input></label>
                                    <span id="answer23"></span>
                                </form>
                                <form className="Answer">
                                    <label>9) 19: A) ninety <input  type="radio" name="answer24" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer24')}}></input></label>
                                    <label>B) Ninety nine <input  type="radio" name="answer24" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer24')}}></input></label>
                                    <label>C) Nineteen <input type="radio" name="answer24" onChange={(e) => {this.quiz(e, 'Correcto', 'answer24')}}></input></label>
                                    <span id="answer24"></span>
                                </form>
                                <form className="Answer">
                                    <label>10) 83: A) Eighty Three <input  type="radio" name="answer25" onChange={(e) => {this.quiz(e, 'Correcto', 'answer25')}}></input></label>
                                    <label>B) Eighty <input  type="radio" name="answer25" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer25')}}></input></label>
                                    <label>C) Seventy three <input type="radio" name="answer25" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer25')}}></input></label>
                                    <span id="answer25"></span>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="Pie"></div>
                </div>

                {/* hoja 33 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/quiz.png'className="Esquina" alt="Quiz"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>Quiz 2</h2>
                            <h3>Examen 2</h3>
                        </div>
                        
                        <div className="bloque">
                            <div className="questions">
                                <h3>*From exercise 11-15, select the correct word for each picture.</h3>

                                <form className="Answer">
                                    <img src='./img/courses/square.png'className="" alt="Square"/>
                                    <label>11) A) Triangle <input  type="radio" name="answer26" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer26')}}></input></label>
                                    <label>B) Square <input  type="radio" name="answer26" onChange={(e) => {this.quiz(e, 'Correcto', 'answer26')}}></input></label>
                                    <label>C) Exagon <input type="radio" name="answer26" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer26')}}></input></label>
                                    <span id="answer26"></span>
                                </form>
                                <form className="Answer">
                                    <img src='./img/courses/aesAvocado.png'className="" alt="Avocado"/>
                                    <label>12) A) Avocado <input  type="radio" name="answer27" onChange={(e) => {this.quiz(e, 'Correcto', 'answer27')}}></input></label>
                                    <label>B) Lemon <input  type="radio" name="answer27" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer27')}}></input></label>
                                    <label>C) Watermelon <input type="radio" name="answer27" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer27')}}></input></label>
                                    <span id="answer27"></span>
                                </form>
                                <form className="Answer">
                                    <img src='./img/courses/aesDonkey.png'className="" alt="Donkey"/>
                                    <label>13) A) Donkey <input  type="radio" name="answer28" onChange={(e) => {this.quiz(e, 'Correcto', 'answer28')}}></input></label>
                                    <label>B) Monkey <input  type="radio" name="answer28" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer28')}}></input></label>
                                    <label>C) Tiger <input type="radio" name="answer28" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer28')}}></input></label>
                                    <span id="answer28"></span>
                                </form>
                                <form className="Answer">
                                    <img src='./img/courses/aesStadium.png'className="" alt="Stadium"/>
                                    <label>14) A) Stadium <input  type="radio" name="answer29" onChange={(e) => {this.quiz(e, 'Correcto', 'answer29')}}></input></label>
                                    <label>B) Park <input  type="radio" name="answer29" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer29')}}></input></label>
                                    <label>C) Cinema <input type="radio" name="answer29" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer29')}}></input></label>
                                    <span id="answer29"></span>
                                </form>
                                <form className="Answer">
                                    <img src='./img/courses/aesClassroom.png'className="" alt="Classroom"/>
                                    <label>15) A) Classmate <input  type="radio" name="answer30" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer30')}}></input></label>
                                    <label>B) Class <input  type="radio" name="answer30" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer30')}}></input></label>
                                    <label>C) Classroom <input type="radio" name="answer30" onChange={(e) => {this.quiz(e, 'Correcto', 'answer30')}}></input></label>
                                    <span id="answer30"></span>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="Pie"></div>
                </div>
                
                {/* hoja 34 */}

                <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/quiz.png'className="Esquina" alt="Quiz"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>Quiz 3</h2>
                            <h3>Examen 3</h3>
                        </div>
                        
                        <div className="bloque">
                            <div className="questions">
                                <h3>*From exercise 1-5, select TRUE or FALSE</h3>

                                <span className="Quiz">1) (5:30) It’s half past five</span>
                                <form className="Answer">
                                    <label> True <input  type="radio" name="answer31" onChange={(e) => {this.quiz(e, 'Correcto', 'answer31')}}></input></label>
                                    <label> False <input  type="radio" name="answer31" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer31')}}></input></label>
                                    <span id="answer31"></span>
                                </form>
                                <span className="Quiz">2) (3:15) It’s three past a quarter</span>
                                <form className="Answer">
                                    <label> True <input  type="radio" name="answer32" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer32')}}></input></label>
                                    <label> False <input  type="radio" name="answer32" onChange={(e) => {this.quiz(e, 'Correcto', 'answer32')}}></input></label>
                                    <span id="answer32"></span>
                                </form>
                                <span className="Quiz">3) (10:10) It’s ten to ten</span>
                                <form className="Answer">
                                    <label> True <input  type="radio" name="answer33" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer33')}}></input></label>
                                    <label> False <input  type="radio" name="answer33" onChange={(e) => {this.quiz(e, 'Correcto', 'answer33')}}></input></label>
                                    <span id="answer33"></span>
                                </form>
                                <span className="Quiz">4) (5:35) It’s twenty five to six</span>
                                <form className="Answer">
                                    <label> True <input  type="radio" name="answer34" onChange={(e) => {this.quiz(e, 'Correcto', 'answer34')}}></input></label>
                                    <label> False <input  type="radio" name="answer34" onChange={(e) => {this.quiz(e, 'Incorrecto' ,'answer34')}}></input></label>
                                    <span id="answer34"></span>
                                </form>
                                <span className="Quiz">5) (8:00) It’s Eight o’clock </span>
                                <form className="Answer">
                                    <label> True <input  type="radio" name="answer35" onChange={(e) => {this.quiz(e, 'Correcto', 'answer35')}}></input></label>
                                    <label> False <input  type="radio" name="answer35" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer35')}}></input></label>
                                    <span id="answer35"></span>
                                </form>

                                <h3>*From exercise 6-10, select the correct option.</h3>

                                <form className="Answer">
                                    <label>6) January 1 A) New year's day <input  type="radio" name="answer36" onChange={(e) => {this.quiz(e, 'Correcto', 'answer36')}}></input></label>
                                    <label>B) Christmas <input  type="radio" name="answer36" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer36')}}></input></label>
                                    <label>C) Thanksgiving day <input type="radio" name="answer36" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer36')}}></input></label>
                                    <span id="answer36"></span>
                                </form>
                                <form className="Answer">
                                    <label>7) December 25 A) Labor day <input  type="radio" name="answer37" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer37')}}></input></label>
                                    <label>B) Christmas day <input  type="radio" name="answer37" onChange={(e) => {this.quiz(e, 'Correcto', 'answer37')}}></input></label>
                                    <label>C) Memorial day <input type="radio" name="answer37" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer37')}}></input></label>
                                    <span id="answer37"></span>
                                </form>
                                <form className="Answer">
                                    <label>8) A) Agost <input  type="radio" name="answer38" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer38')}}></input></label>
                                    <label>B) Agust <input  type="radio" name="answer38" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer38')}}></input></label>
                                    <label>C) August <input type="radio" name="answer38" onChange={(e) => {this.quiz(e, 'Correcto', 'answer38')}}></input></label>
                                    <span id="answer38"></span>
                                </form>
                                <form className="Answer">
                                    <label>9) A) Hosban <input  type="radio" name="answer39" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer39')}}></input></label>
                                    <label>B) Husban <input  type="radio" name="answer39" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer39')}}></input></label>
                                    <label>C) Husband <input type="radio" name="answer39" onChange={(e) => {this.quiz(e, 'Correcto', 'answer39')}}></input></label>
                                    <span id="answer39"></span>
                                </form>
                                <span className="Quiz">10) What is the time? </span>
                                <form className="Answer">
                                    <label> A) I am fine <input type="radio" name="answer40" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer40')}}></input></label>
                                    <label> B) It's 10:00 o'clock <input type="radio" name="answer40" onChange={(e) => {this.quiz(e, 'Correcto', 'answer40')}}></input></label>
                                    <label> C) it's November <input type="radio" name="answer40" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer40')}}></input></label>
                                    <span id="answer40"></span>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="Pie"></div>
                </div>

                 {/* hoja 35 */}

                 <div className="Hoja">
                    <div className="Encavezado">
                        <img src='./aesLogoHeader.png'className="Hoja-logo" alt="Logo"/>
                        <img src='./img/courses/quiz.png'className="Esquina" alt="Quiz"/>
                    </div>
                    <div className="Contenido">
                        <div className="titulos">
                            <h2>Quiz 3</h2>
                            <h3>Examen 3</h3>
                        </div>
                        
                        <div className="bloque">
                            <div className="questions">
                                <h3>*From exercise 11-15, select the correct word for each picture.</h3>

                                <form className="Answer">
                                    <img src='./img/courses/grandmother.png'className="" alt="Square"/>
                                    <label>11) A) Daughter <input type="radio" name="answer41" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer41')}}></input></label>
                                    <label>B) Grandmother <input type="radio" name="answer41" onChange={(e) => {this.quiz(e, 'Correcto', 'answer41')}}></input></label>
                                    <label>C) Granddaughther <input type="radio" name="answer41" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer41')}}></input></label>
                                    <span id="answer41"></span>
                                </form>
                                <form className="Answer">
                                    <img src='./img/courses/toothache.png'className="" alt="Avocado"/>
                                    <label>12) A) Fever <input type="radio" name="answer42" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer42')}}></input></label>
                                    <label>B) Toothache <input type="radio" name="answer42" onChange={(e) => {this.quiz(e, 'Correcto', 'answer42')}}></input></label>
                                    <label>C) Backache <input type="radio" name="answer42" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer42')}}></input></label>
                                    <span id="answer42"></span>
                                </form>
                                <form className="Answer">
                                    <img src='./img/courses/foot.png'className="" alt="Donkey"/>
                                    <label>13) A) Foot <input type="radio" name="answer43" onChange={(e) => {this.quiz(e, 'Correcto', 'answer43')}}></input></label>
                                    <label>B) Tooth <input type="radio" name="answer43" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer43')}}></input></label>
                                    <label>C) Hand <input type="radio" name="answer43" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer43')}}></input></label>
                                    <span id="answer43"></span>
                                </form>
                                <form className="Answer">
                                    <img src='./img/courses/tie.png'className="" alt="Stadium"/>
                                    <label>14) A) Tie <input type="radio" name="answer44" onChange={(e) => {this.quiz(e, 'Correcto','answer44')}}></input></label>
                                    <label>B) Shirt <input type="radio" name="answer44" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer44')}}></input></label>
                                    <label>C) Jeans <input type="radio" name="answer44" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer44')}}></input></label>
                                    <span id="answer44"></span>
                                </form>
                                <form className="Answer">
                                    <img src='./img/courses/dress.png'className="" alt="Classroom"/>
                                    <label>15) A) Dress <input type="radio" name="answer45" onChange={(e) => {this.quiz(e, 'Correcto','answer45')}}></input></label>
                                    <label>B) Sweater <input type="radio" name="answer45" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer45')}}></input></label>
                                    <label>C) Shirt <input type="radio" name="answer45" onChange={(e) => {this.quiz(e, 'Incorrecto', 'answer45')}}></input></label>
                                    <span id="answer45"></span>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="Pie"></div>
                </div>

            </div>
        );
    }
}

export default Cbasico;