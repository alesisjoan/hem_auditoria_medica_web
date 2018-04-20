import React from 'react';

function QuestionCount(props) {

  return (
    <div className="questionCount">
      Classification <span>{props.level}</span> of <span>{props.total}</span>
    </div>
  );

}

QuestionCount.propTypes = {
  level: React.PropTypes.number.isRequired,
  total: React.PropTypes.number.isRequired
};

export default QuestionCount;
