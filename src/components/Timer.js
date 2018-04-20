import React from 'react';
import ReactCountdownClock from 'react-countdown-clock';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


function Timer(props) {

    function reloadWindow (){
        window.location.reload();
    }

    return (<div>
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
                    Hubo un reporte reciente, por favor espere.
                </h2>


            </ReactCSSTransitionGroup>
            <br/>
            <ReactCountdownClock seconds={props.timeToWait}
                                 color="#000"
                                 alpha={0.9}
                                 size={300}
                                 onComplete={reloadWindow}/>
        </div>

    )

}

Timer.propTypes = {
    // quizResult: React.PropTypes.string.isRequired,
};

export default Timer;
