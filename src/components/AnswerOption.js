import React from 'react';

function SubTree(props) {
    // console.log("props")
    // console.log(props)

    return (<li className="answerOption">
            <input
                type="radio"
                className="radioCustomButton"
                name="radioGroup"
                // checked={false}
                id={props.classification}
                value={props.classification}
                disabled={!props.classification.includes("*")}
                onChange={props.onAnswerSelected}
            />
            <label className="radioCustomLabel" htmlFor={props.classification}>
                {props.classification}
            </label>
        </li>);

}

SubTree.propTypes = {
    // answerType: React.PropTypes.string.isRequired,
    // answerContent: React.PropTypes.string.isRequired,
    // answer: React.PropTypes.string.isRequired,
    // onAnswerSelected: React.PropTypes.func.isRequired
};

export default SubTree;
