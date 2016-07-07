import React, { PropTypes } from 'react';
import Button from './Button';

const ChangeShowing = ({changeShowing, buttonText}) => {
  return (
    < div className = "changeShowing navbar-form navbar-left" >
      <Button buttonClass='btn btn-info' onClick={changeShowing} buttonText={buttonText} />
    < /div>
  );
};

ChangeShowing.propTypes = {
  changeShowing: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default ChangeShowing;
