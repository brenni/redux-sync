import React, { PropTypes } from 'react';
import Button from './Button';

const Todo = ({name, id, onClick, buttonText}) => (
  < tr >
    < td >
      {
        name
      }
    < /td>
    < td >
      < Button buttonClass="btn btn-success" onClick={() => {onClick(id);}} buttonText={buttonText}/ >
    < /td>
  < /tr >
);

Todo.PropTypes = {
  name: PropTypes.string.isRequired,
  buttonClicked: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default Todo;
