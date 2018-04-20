import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Classification from '../components/Classification';
import SubTree from '../components/AnswerOption';

function Quiz(props) {

    function renderAnswerOptions(key) {

        return (<SubTree
            key={key.classification}
            // answerContent={key.content}
            // answerType={key.type}
            // answer={props.answer}
            classification={key.classification}
            subTree={key.subTree}
            // answerId={key.answerId}
            onAnswerSelected={props.onAnswerSelected}
        />);
    }


    return (<ReactCSSTransitionGroup
        className="container"
        component="div"
        transitionName="fade"
        transitionEnterTimeout={800}
        transitionLeaveTimeout={500}
        transitionAppear
        transitionAppearTimeout={500}
    >
        <div key={props.navigation}>
            <Classification classification={props.navigation}/>
            <ul className="answerOptions">
                {props.subTree.map(renderAnswerOptions)}
            </ul>
        </div>
        <div className={"div_button_back"}>
        {props.navigation.includes(" / ") && <button className={"button_back"} onClick={props.onBack}>Anterior</button>}
        </div>
    </ReactCSSTransitionGroup>);
}

Quiz.propTypes = {
    // subTree: React.PropTypes.array.isRequired,
    // classification: React.PropTypes.string.isRequired,
    // onAnswerSelected: React.PropTypes.func.isRequired
};

export default Quiz;
