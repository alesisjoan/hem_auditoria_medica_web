import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


function Result(props) {


    return (<ReactCSSTransitionGroup
        className="container result"
        component="div"
        transitionName="fade"
        transitionEnterTimeout={1500}
        transitionLeaveTimeout={500}
        transitionAppear
        transitionAppearTimeout={1500}
    >
        <div>
            <div>
                Ha seleccionado <strong>{props.navigation}</strong>.
            </div>
            <div>
                <br/>
                <label
                    className="" htmlFor={"inputComments"}>Comentarios:</label>
                <textarea type="text"
                       className=""
                       name="inputComments"
                       onChange={props.handleComments}
                />
            </div>
            <div>
                <br/>
                ¿Desea informar la opción seleccionada?
                <br/>
                <div>
                    <ul className="answerOptions">

                        <li className="answerOption">


                            <input type="radio"
                                   className="radioCustomButton"
                                   name="radioGroup" id="radio_yes" checked={false}
                                   onChange={props.handleSubmit}

                            /><label
                            className="radioCustomLabel" htmlFor={"radio_yes"}>Si, enviar.</label>

                        </li>
                        <li className="answerOption">
                            <input type="radio"
                                   className="radioCustomButton"
                                   name="radioGroup" id="radio_no" checked={false}
                                   onChange={props.handleCancel}

                            /> <label className="radioCustomLabel"
                                      htmlFor={"radio_no"}>No, cancelar.</label>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={"div_button_back"}>
                {props.navigation.includes(" / ") &&
                <button className={"button_back"} onClick={props.onBack}>Anterior</button>}
            </div>
        </div>
    </ReactCSSTransitionGroup>);

}


Result.propTypes = {
    // quizResult: React.PropTypes.string.isRequired,
};

export default Result;
