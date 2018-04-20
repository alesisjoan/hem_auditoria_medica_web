import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


function ServerResponse(props) {

    return (
        <ReactCSSTransitionGroup
            className="container"
            component="div"
            transitionName="fade"
            transitionEnterTimeout={1800}
            transitionLeaveTimeout={1500}
            transitionAppear
            transitionAppearTimeout={1500}
        >
            <h2 className="question">
                {props.msg === 'error' &&
                "Ha ocurrido un error, por favor intentelo nuevamente."}
                {props.msg === 'OK' &&
                "Su mensaje ha sido enviado. Muchas gracias."
                }
            </h2>
        </ReactCSSTransitionGroup>

    )

}

ServerResponse.propTypes = {
    // quizResult: React.PropTypes.string.isRequired,
};

export default ServerResponse;
