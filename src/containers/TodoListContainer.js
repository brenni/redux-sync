import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';

const filterTodos = (todos, showingState) => {
  let newTodos = todos.filter(todo => {
    return todo.isCompleted === showingState;
  });
  return newTodos;
};

const createButtonText = (showingState) => {
  switch (showingState) {
    case false:
      return 'Completed';
      break;
    case true:
      return 'Uncompleted';
      break;
    default:
      return 'Error Generating Button Text';
      break;
  }
};

const mapStateToProps = (state) => {
  return {
    todos: filterTodos(state.todos, state.showing),
    buttonText: createButtonText(state.showing),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (id) => {
      dispatch(toggleTodo(id))
    },
  };
};

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListContainer;
