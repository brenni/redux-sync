import React, { PropTypes } from 'react';

const AddTodo = ({handleSubmit, handleFormUpdate, currentFormText}) => {
  return (
    < div className = "addTodo" >
      < form className = "navbar-form navbar-left"
        onSubmit = { e => {
          e.preventDefault();
          handleSubmit(currentFormText);
        }} >
        < input
          type = "text"
          id = "name"
          className = "form-control"
          placeholder = "What do you need to do?"
          onChange = { e => {
              handleFormUpdate(e.target.value);
            }
          }
          value = {
            currentFormText
          }
        >
        < /input>
        < input type = "submit"
          value = "Add Todo"
          className = "btn btn-info" >
        < /input>
      < /form>
    < /div>
  );
};

AddTodo.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleFormUpdate: PropTypes.func.isRequired,
  currentFormText: PropTypes.string.isRequired,
};

export default AddTodo;
