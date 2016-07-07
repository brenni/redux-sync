import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import { updateAddForm } from '../actions';
import AddTodo from '../components/AddTodo';

const mapStateToProps = (state) => {
  return {
    currentFormText: state.currentFormText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (name) => {
      dispatch(addTodo(name))
    },
    handleFormUpdate: (text) => {
      dispatch(updateAddForm(text))
    },
  }
};

const AddTodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);

export default AddTodoContainer;
