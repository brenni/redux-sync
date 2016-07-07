import React, { PropTypes } from 'react';

const Button = ({buttonClass, onClick, buttonText}) => (
  < button className = {
                      buttonClass
                    }
                    onClick = {
                      onClick
                    } > {
                      buttonText
                    } < /button>
);

Button.propTypes = {
  buttonClass: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default Button;
