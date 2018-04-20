import React from 'react';

function Classification(props) {
  return (
    <h2 className="question">{props.classification}</h2>
  );

}

Classification.propTypes = {
  // classification: React.PropTypes.string.isRequired
};

export default Classification;
