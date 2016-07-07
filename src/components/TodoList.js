import React, { PropTypes } from 'react';
import Todo from './Todo';

const TodoList = ({onClick, buttonText, todos}) => {
  var buttonClicked = onClick;
  var _buttonText = buttonText;
  var todoTable = todos.map(function(todo) {
    return (
      < Todo name = {
          todo.name
        }
        key = {
          todo.id
        }
        id = {
          todo.id
        }
        onClick = {
          onClick
        }
        buttonText = {
          _buttonText
        }
      />
    );
  });
  return (
    < div className = "container" >
    < table className = "table table-striped" > < thead > < tr > < th > To do . < /th>< th > Mark Done. < /th > < /tr>< /thead > < tbody > {
      todoTable
    } < /tbody> < /table> < /div >
  );
};

TodoList.propTypes = {
  onClick: PropTypes.func.isRequired,
  showingState: PropTypes.bool.isRequired,
  buttonText: PropTypes.string.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    isCompleted: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired).isRequired,
}

export default TodoList;
