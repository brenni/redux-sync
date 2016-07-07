/**
 * Actions file. This contains all the acitons that will be passed to our
 * containers to be called with the dispatch function.
 */

// Variable to store the current todo ID. This is called by the addTodo function.
let nextTodoId = 0;

/**
 * addTodo Action that is passed the name, and returns an action with a name and ID
 * @param  {[type]} name [description]
 * @return {[type]}      [description]
 */
export const addTodo = (name) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    name,
  }
};

export const updateAddForm = (text) => {
  return {
    type: 'UPDATE_ADDFORM',
    text,
  }
};

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id,
  }
};

export const changeShowing = () => {
  return {
    type: 'CHANGE_SHOWING',
  }
};
